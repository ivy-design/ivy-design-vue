import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  type PropType,
} from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}image`,
  props: {
    src: {
      type: String,
      default: "",
    },
    lazy: Boolean,
    fit: {
      type: String as PropType<
        "fill" | "contain" | "cover" | "none" | "scale-down"
      >,
      default: "fill",
    },
  },
  setup(props, { slots }) {
    const imgSrc = ref<string>("");
    if (!props.lazy) {
      imgSrc.value = props.src;
    }
    const startRender = ref(props.lazy ? false : true);
    const el = ref<HTMLDivElement | null>(null);
    const scrollHandler = () => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            startRender.value = true;
            imgSrc.value = props.src;
          }
          // 每个成员都是一个IntersectionObserverEntry对象。
          // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
          // entry.boundingClientRect //目标元素的位置信息
          // entry.intersectionRatio //目标元素的可见比例
          // entry.intersectionRect //交叉部分的位置信息
          // entry.isIntersecting
          // entry.rootBounds //根元素的位置
          // entry.target
          // entry.time //时间戳
        });
      });
      observer.observe(el?.value as HTMLElement);
    };
    const listenScrollHandler = () => {
      if (props.lazy) {
        requestAnimationFrame(scrollHandler);
      }
    };

    const success = ref(true);
    const loadState = ref({});
    const errState = ref({});

    const loadHandler = () => {
      errState.value = {
        opacity: 0,
        zIndex: -1,
      };
      loadState.value = {
        opacity: 0,
        zIndex: -1,
      };
    };
    const imgErrorHandler = () => {
      console.log(12323);
      success.value = false;
      loadState.value = {
        opacity: 0,
        zIndex: -1,
      };
      errState.value = {
        opacity: 1,
        zIndex: 1,
      };
    };

    onMounted(() => {
      if (props.lazy) {
        window.addEventListener("scroll", listenScrollHandler);
      }
    });
    onUnmounted(() => {
      if (props.lazy) {
        window.removeEventListener("scroll", listenScrollHandler);
      }
    });

    return () => {
      return (
        <div class="ivy-image" ref={el}>
          {startRender.value ? (
            <img
              class="ivy-image-inner"
              src={imgSrc.value}
              style={{
                display: success.value ? "auto" : "none",
                objectFit: props.fit,
              }}
              onLoad={loadHandler}
              onError={imgErrorHandler}
            />
          ) : null}

          <div
            class="ivy-image-error"
            style={{
              ...errState.value,
              display: success.value ? "none" : "flex",
            }}
          >
            {slots.error?.() ?? "加载失败"}
          </div>
          <div class="ivy-image-placeholder" style={loadState.value}>
            {slots.placeholder?.() ?? (
              <svg
                viewBox="0 0 1024 1024"
                class="ivy-image-icon"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                aria-hidden="true"
              >
                <path d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"></path>
              </svg>
            )}
          </div>
        </div>
      );
    };
  },
});
