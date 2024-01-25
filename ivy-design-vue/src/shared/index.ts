export const prefix = 'ivy-'

export const isSupportCssAttribute = (attributeName: string) => {
  const el = document.createElement('div')
  const styles = getComputedStyle(el)
  return attributeName in styles ? true : false
}

export const requestAnimation = (() => {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

export const cancelAnimation = (() => {
  return (
    window.cancelAnimationFrame ||
    function (timer) {
      window.clearTimeout(timer)
    }
  )
})()

export type {
  Record,
  IvySize,
  IvyInputValue,
  IvyTheme,
  IvyType,
  StyleObjectFitValues
} from './types'

export class Type {
  public static is<T>(val: T): string {
    return Object.prototype.toString
      .call(val)
      .slice(8, -1)
      .replace(/^[A-Z]/, (str) => str.toLowerCase())
  }

  public static isObject<T>(val: T): boolean {
    return Type.is(val) === 'object'
  }

  public static isArray<T>(val: T): boolean {
    if ('isArray' in Array) {
      return Array.isArray(val)
    }
    return Type.is(val) === 'array'
  }
}
