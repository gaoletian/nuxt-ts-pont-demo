import { fetch } from '~/libs/fetch';

/**
 * @desc Get user by user name
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user/{username}',
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
