import throttle from 'lodash.throttle';
import Vue from 'vue';
/**
 * 函数节流
 * @param time  default 500ms
 */
export function Throttle(time: number = 500) {
  return function(target, propertyKey, descriptor: PropertyDescriptor) {
    descriptor.value = throttle(descriptor.value, time, { leading: false });
  };
}

/**
 * TryCatch装饰器
 * @param errFunc 异常处理回调
 */
export function TryCatch<VM extends Vue>(errFunc?: (vm: VM, err: Error) => void): MethodDecorator {
  return function(target, propertyKey, descriptor: PropertyDescriptor) {
    let method = descriptor.value;
    descriptor.value = async function() {
      try {
        await method.apply(this, arguments);
      } catch (error) {
        if (errFunc) {
          //@ts-ignore
          errFunc(this, error);
        } else {
          throw error;
        }
      }
    };
  };
}
// alias for TryCatch
export const Catch = TryCatch;
