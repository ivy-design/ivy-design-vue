import { defineComponent, onMounted, ref, renderSlot, toRaw, type SetupContext } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}table`,
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    summary: Boolean
  },

  setup(props, { slots }: SetupContext) {
    const tableRef = ref<HTMLElement | null>(null)
    const tableColRaw = toRaw(ref(slots.default?.() || []))
    const tableData = ref<Array<any>>([])

    const tableWidth: any = ref(null)

    const initData = () => {
      tableData.value = tableColRaw.value.map((c) => {
        return {
          prop: c.props?.prop,
          label: c.props?.label || '',
          width: c.props?.width
        }
      })
    }

    onMounted(() => {
      initData()
      tableWidth.value = tableRef.value?.getBoundingClientRect().width as number
      console.log(tableRef.value?.getBoundingClientRect())
    })

    const renderColgroup = () => {
      return tableWidth.value ? (
        <colgroup class="ivy-table-row is-title">
          {tableData.value.map((c) =>
            c.width ? <col width={parseFloat(c.width)}></col> : <col />
          )}
        </colgroup>
      ) : (
        []
      )
    }
    const renderHeader = () => {
      return (
        <tr class="ivy-table-row is-title">
          {tableData.value.map((c) => (
            <th class="ivy-table-col is-title">{c.label}</th>
          ))}
        </tr>
      )
    }

    const renderBody = () => {
      return props.data.map((c: any) => (
        <tr class="ivy-table-row">
          {tableData.value.map((v) => (
            <td class="ivy-table-col">{c[v.prop]}</td>
          ))}
        </tr>
      ))
    }

    return () => (
      <div
        class={['ivy-table', { 'is-border': props.border }]}
        ref={tableRef}
        style={{ width: `${tableWidth.value}px` }}
      >
        <div class="ivy-table__hide"></div>
        <table>
          {renderColgroup()}
          <thead>{renderHeader()}</thead>
          <tbody>{renderBody()}</tbody>
          {props.summary ? <tfoot></tfoot> : []}
        </table>
        <span>{renderSlot(slots, 'default')}</span>
      </div>
    )
  }
})
