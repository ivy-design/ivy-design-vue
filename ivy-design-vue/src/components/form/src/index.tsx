import { defineComponent, onMounted, provide, ref, toRaw, toRef, type PropType } from 'vue'
import { prefix, type Record } from '@/shared'
import Schema, { type Rule, type Rules } from 'async-validator'

export default defineComponent({
  name: `${prefix}form`,
  props: {
    model: {
      type: Object as PropType<Record<string, any>>,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator(value: string) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      validator(val: string) {
        return ['top', 'left', 'right'].includes(val)
      }
    },
    inline: Boolean,
    rules: {
      type: Object as PropType<Rules>,
      default: () => ({})
    }
  },
  setup(props, { slots, expose, emit }) {
    provide('labelSuffix', toRef(props, 'labelSuffix'))
    provide('labelWidth', toRef(props, 'labelWidth'))

    const model = ref(props.model)
    // 存放formItem中有prop属性的
    const propList = ref<string[]>([])
    const insertPropList = (val: string) => {
      if (!propList.value.includes(val)) propList.value.push(val)
    }
    provide('insertPropList', insertPropList)

    const rules = ref<Rules>(props.rules)
    const updateRules = (key: keyof Rules, val: Rule) => {
      rules.value[key] = val
    }
    provide('updateRules', updateRules)

    let validatorInstance: Schema | null = null
    const genSchema = () => {
      validatorInstance = new Schema(rules.value)
    }

    const validate = (callback: Function) => {
      validatorInstance?.validate(model.value, (errors, fields) => {
        callback(errors, fields)
      })
    }
    expose({ validate })
    // 存放只读的model，方便resetFields方法使用
    let modelRaw: any = null
    onMounted(() => {
      modelRaw = toRaw(model)
      genSchema()
    })
    expose({
      resetFields: () => {
        emit('update:model', modelRaw.value)
      }
    })
    return () => {
      return <form class={['ivy-form']}>{slots.default?.()}</form>
    }
  }
})
