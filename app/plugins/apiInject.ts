import { setAxiosInstance } from '~/libs/fetch';
import { api } from '~/api';

export default <Nuxt.Plugin>function(ctx, inject) {
  setAxiosInstance(ctx.$axios);
  // @ts-ignore
  ctx.$api = api;
  inject('api', api);
};
