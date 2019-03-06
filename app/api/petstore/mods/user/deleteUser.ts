import { fetch } from '~/libs/fetch';

/**
 * @desc Delete user
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user/{username}',
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
