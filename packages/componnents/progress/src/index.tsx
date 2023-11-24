import { computed, defineComponent, type PropType } from "vue";
import { prefix } from "@/utils/index";
import IvyIcon from "../../icon/index";

export type IvyProgressType = "line" | "circle";
export type IvyProgressStatus = "success" | "danger";

export default defineComponent({
  name: `${prefix}progress`,
  props: {
    type: {
      type: String as PropType<IvyProgressType>,
      default: "line",
      validator(value: IvyProgressType) {
        return ["line", "circle"].includes(value);
      },
    },
    percentage: {
      type: [String, Number],
      required: true,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String as PropType<IvyProgressStatus>,
      validator(value: IvyProgressStatus) {
        return ["success", "danger"].includes(value);
      },
    },
    color: String,
    strokeWidth: {
      type: Number,
      default: 6,
    },
    width: {
      type: Number,
      default: 126,
    },
  },

  setup(props) {
    const getCircleWidth = computed(() => {
      const multiple = props.width / 100;
      const r = props.strokeWidth / multiple;
      return r.toFixed(2);
    });

    const gets = computed(() => {
      const cr = 50 - parseFloat(getCircleWidth.value);
      const circle = 2 * 3.14 * cr;
      let s = ((props.percentage as number) * circle) / 100;
      s = parseFloat((circle - s).toFixed(2));
      return {
        strokeDasharray: `${circle}px, ${circle}px`,
        strokeDashoffset: `${s}px`,
        transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s",
      };
    });

    const getPath = computed(() => {
      const r = 50 - parseFloat(getCircleWidth.value);
      const s = [
        "M",
        50,
        50,
        "m",
        0,
        -r,
        "a",
        r,
        r,
        0,
        1,
        1,
        0,
        2 * r,
        "a",
        r,
        r,
        0,
        1,
        1,
        0,
        -2 * r,
      ];
      return s.join(" ");
    });

    const getColor = computed(() => {
      if (props.color) {
        return props.color;
      } else {
        if (props.status === "success") {
          return "#67C23A";
        } else if (props.status === "danger") {
          return "#F56C6C";
        } else {
          return "#409eff";
        }
      }
    });

    const text = computed(() => {
      if (props.status === "success") {
        return <IvyIcon name="circle-check" />;
      } else if (props.status === "danger") {
        return <IvyIcon name="circle-close" />;
      } else {
        return `${props.percentage}%`;
      }
    });

    return () => {
      return (
        <div
          class={[
            "ivy-progress",
            props.status ? `is-${props.status}` : "",
            {
              "ivy-progress--circle": props.type === "circle",
            },
          ]}
        >
          {props.type === "line" ? (
            <div
              class={[
                "ivy-progress-bar",
                { "is-text-nside": props.textInside },
              ]}
            >
              <div
                class="ivy-progress-bar__outer"
                style={{ height: `${props.strokeWidth}px` }}
              >
                <div
                  class="ivy-progress-bar__inner"
                  style={{
                    width: `${props.percentage}%`,
                    backgroundColor: props.color,
                  }}
                >
                  {props.textInside && props.showText ? (
                    <span class="ivy-progress-bar__inner-text">
                      {props.percentage}%
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <div
              class="ivy-progress-circle"
              style={{
                width: `${props.width}px`,
                height: `${props.width}px`,
              }}
            >
              <svg viewBox="0 0 100 100">
                <path
                  d={getPath.value}
                  stroke="#e5e9f2"
                  stroke-width={getCircleWidth.value}
                  fill="none"
                  class="ivy-progress-circle__track"
                ></path>
                <path
                  d={getPath.value}
                  stroke-linecap="round"
                  stroke={getColor.value}
                  stroke-width={getCircleWidth.value}
                  fill="none"
                  class="ivy-progress-circle__path"
                  style={gets.value}
                ></path>
              </svg>
            </div>
          )}

          {!props.textInside && props.showText ? (
            <div class="ivy-progress__text">{text.value}</div>
          ) : null}
        </div>
      );
    };
  },
});
