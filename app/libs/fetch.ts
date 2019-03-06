import * as assert from 'assert';
import { AxiosRequestConfig } from 'axios';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// 删除 'url' | 'data' | 'method' | 'params'，返回其它
export type RequestConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method' | 'params'>;

let axiosInstance: Nuxt.AxiosInstance;

export function setAxiosInstance(instance: Nuxt.AxiosInstance) {
  axiosInstance = instance;
}

function urlResolve(url: string, paramsObj: { [key: string]: string }) {
  if (!paramsObj || !url.includes('{')) return url;

  let urlArray = url.split(`/`).map(item => {
    if (item.includes('{')) {
      let paramName = item.replace(/[{}\s]/g, '');
      return paramsObj[paramName];
    }
    return item;
  });
  return urlArray.join('/');
}

export function fetch(options: AxiosRequestConfig) {
  assert.ok(axiosInstance, 'you must call setAxiosInstance to set axiosInstance');
  // replace url params like /{foo}/{bar}
  options.url = urlResolve(options.url as string, options.params);

  // console.log('[fetch] ==> $s', options.url);
  return axiosInstance.$request(options);
}
