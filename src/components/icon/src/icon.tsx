import {prefix} from "@/utils";
import {defineComponent} from "vue";
import './symbol'

export default defineComponent({
    name: `${prefix}icon`,
    props:{
        name: String,
        size: {
            type: [Number,String],
            default: 20
        }
    },
    setup(props){
        return ()=>(
            <svg class="ivy-icon" style={{fontSize: props.size }}>
                <use href={`#${props.name}`}></use>
            </svg>
        )
    }
})