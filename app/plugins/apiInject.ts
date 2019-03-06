import { setAxiosInstance } from '~/libs/fetch';
import { API } from '~/api';

export default <Nuxt.Plugin>function(ctx, inject) {
  setAxiosInstance(ctx.$axios);
  // @ts-ignore
  ctx.$api = API;
  inject('api', API);
};
