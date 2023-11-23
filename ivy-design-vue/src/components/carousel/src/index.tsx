import { defineComponent, type PropType, cloneVNode, ref, computed, nextTick, watch } from 'vue'
import { prefix } from '@/shared'
// import CarouselItem from "./item";
import IvyIcon from '../../icon'

export type IvyCarouselTrigger = 'click' | 'hover'
export type IvyCarouselIndicatorPosition = 'inside' | 'outside' | 'none'
export type IvyCarouselArrow = 'always' | 'hover' | 'never'
export type IvyCarouselDirection = 'horizontal' | 'vertical'

export default defineComponent({
  name: `${prefix}carousel`,
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    trigger: {
      type: String as PropType<IvyCarouselTrigger>,
      default: 'hover',
      validator: (val: IvyCarouselTrigger) => ['click', 'hover'].includes(val)
    },
    autoplay: Boolean,
    loop: Boolean,
    pauseOnHover: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: {
      type: String as PropType<IvyCarouselIndicatorPosition>,
      default: 'inside',
      validator: (val: IvyCarouselIndicatorPosition) => ['inside', 'outside', 'none'].includes(val)
    },
    arrow: {
      type: String as PropType<IvyCarouselArrow>,
      default: 'hover',
      validator: (val: IvyCarouselArrow) => ['always', 'hover', 'never'].includes(val)
    },
    direction: {
      type: String as PropType<IvyCarouselDirection>,
      default: 'horizontal',
      validator: (val: IvyCarouselDirection) => ['horizontal', 'vertical'].includes(val)
    },
    height: String
  },
  setup(props, { slots }) {
    const defaultSlot = slots.default?.() || []
    const len = defaultSlot.length

    const curIndex = ref(props.initialIndex)

    const direction = ref('right')

    const getPosition = computed(() => {
      nextTick(() => {})
      return defaultSlot.map((c, i) => {
        if (direction.value === 'right') {
          if (curIndex.value === 0) {
            if (i === 0) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(0)` }
              }
            } else if (i === 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(100%)` }
              }
            } else if (i === len - 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(-100%)` }
              }
            } else {
              return {
                class: '',
                style: { transform: `translateX(${i - curIndex.value}00%)` }
              }
            }
          } else if (curIndex.value === len - 1) {
            if (i === 0) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(100%)` }
              }
            } else if (i === curIndex.value) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(0)` }
              }
            } else if (i === curIndex.value - 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(-100%)` }
              }
            } else {
              return {
                class: '',
                style: { transform: `translateX(${curIndex.value - 1}00%)` }
              }
            }
          } else {
            if (i === curIndex.value) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(${i - curIndex.value}00%)` }
              }
            } else if (i === curIndex.value - 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(-100%)` }
              }
            }

            if (i < curIndex.value) {
              return {
                class: '',
                style: {
                  transform: `translateX(${len - curIndex.value + i}00%)`
                }
              }
            }

            return {
              class: '',
              style: { transform: `translateX(${i - curIndex.value}00%)` }
            }
          }
        } else {
          if (curIndex.value === 0) {
            if (i === 0) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(0)` }
              }
            } else if (i === 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(100%)` }
              }
            } else if (i === len - 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(-100%)` }
              }
            } else {
              return {
                class: '',
                style: { transform: `translateX(${i - curIndex.value}00%)` }
              }
            }
          } else if (curIndex.value === len - 1) {
            if (i === 0) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(100%)` }
              }
            } else if (i === curIndex.value) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(0)` }
              }
            } else if (i === curIndex.value - 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(-100%)` }
              }
            } else {
              return {
                class: '',
                style: { transform: `translateX(${curIndex.value - 1}00%)` }
              }
            }
          } else {
            if (i === curIndex.value) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(${i - curIndex.value}00%)` }
              }
            } else if (i === curIndex.value - 1) {
              return {
                class: 'is-animating',
                style: { transform: `translateX(-100%)` }
              }
            }

            if (i < curIndex.value) {
              return {
                class: '',
                style: {
                  transform: `translateX(${len - curIndex.value + i}00%)`
                }
              }
            }

            return {
              class: '',
              style: { transform: `translateX(${i - curIndex.value}00%)` }
            }
          }
        }
      })
    })

    const handlePrev = () => {
      if (curIndex.value === 0) {
        curIndex.value = len - 1
      } else {
        curIndex.value--
      }
    }

    const handleNext = () => {
      if (curIndex.value === len - 1) {
        curIndex.value = 0
      } else {
        curIndex.value++
      }
    }

    watch(curIndex, (val, oldVal) => {
      if (val === 0 && oldVal === len - 1) {
        direction.value = 'right'
      } else if (val === len - 1 && oldVal === 0) {
        direction.value = 'left'
      } else if (val < oldVal) {
        direction.value = 'left'
      } else {
        direction.value = 'right'
      }
    })

    return () => {
      return (
        <div class={['ivy-carousel', `is-${props.direction}`]}>
          <div
            class="ivy-carousel__container"
            style={{
              height: props.height
            }}
          >
            <div
              role="button"
              aria-label="prev"
              class="ivy-carousel__container--button is-left"
              onClick={handlePrev}
            >
              <IvyIcon name="arrow-left"></IvyIcon>
            </div>
            <div
              role="button"
              aria-label="next"
              class="ivy-carousel__container--button"
              onClick={handleNext}
            >
              <IvyIcon name="arrow-right"></IvyIcon>
            </div>
            {defaultSlot.map((c, index) => {
              console.log(c)
              return cloneVNode(c, getPosition.value[index])
            })}
          </div>
          {props.indicatorPosition !== 'none' ? (
            <div class="ivy-carousel__indicator">
              <ul class="ivy-carousel__indicator--wrap">
                {defaultSlot.map((_, index) => (
                  <li
                    class={[
                      'ivy-carousel__indicator--item',
                      { 'is-active': curIndex.value === index }
                    ]}
                  ></li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )
    }
  }
})
