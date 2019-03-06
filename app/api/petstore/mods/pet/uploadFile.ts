import { fetch } from '~/libs/fetch';

/**
 * @desc uploads an image
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/pet/{petId}/uploadImage',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
