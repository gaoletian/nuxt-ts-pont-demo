import { fetch } from '~/libs/fetch';

/**
 * @desc Logs user into the system
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user/login',
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
