import { defineComponent, type PropType } from 'vue'
import IvyIcon from '../../icon'
import { prefix, type IvySize, type StyleObjectFitValues } from '@/utils'

export type IvyAvatarType = 'img' | 'text' | 'icon'
export type IvyAvatarShape = 'circle' | 'square'

export default defineComponent({
  name: `${prefix}avatar`,
  props: {
    type: {
      type: String as PropType<IvyAvatarType>,
      default: 'img',
      validator: (value: IvyAvatarType) => {
        return ['img', 'text', 'icon'].includes(value)
      }
    },
    value: String,
    srcSet: String,
    fit: {
      type: String as PropType<StyleObjectFitValues>,
      default: 'cover',
      validator: (value: StyleObjectFitValues) => {
        return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
      }
    },
    alt: String,
    size: {
      type: String as PropType<IvySize>,
      default: 'medium',
      validator: (value: IvySize) => {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    shape: {
      type: String as PropType<IvyAvatarShape>,
      default: 'circle',
      validator: (value: IvyAvatarShape) => {
        return ['circle', 'square'].includes(value)
      }
    }
  },
  setup(props) {
    const renderContent = () => {
      if (props.type === 'img') {
        return (
          <img
            class="ivy-avatar--inner is-img"
            src={props.value}
            alt={props.alt}
            style={{ objectFit: props.fit }}
          />
        )
      } else if (props.type === 'text') {
        return <span class="ivy-avatar--inner is-text">{props.value ? props.value[0] : ''}</span>
      } else {
        return <IvyIcon class="ivy-avatar--inner is-icon" name={props.value} />
      }
    }
    return () => {
      return (
        <div class={['ivy-avatar', `ivy-avatar--${props.size}`, `is-${props.shape}`]}>
          {renderContent()}
        </div>
      )
    }
  }
})
