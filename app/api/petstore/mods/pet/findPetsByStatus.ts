import { fetch } from '~/libs/fetch';

/**
 * @desc Finds Pets by status
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/pet/findByStatus',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
