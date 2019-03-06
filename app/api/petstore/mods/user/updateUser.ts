import { fetch } from '~/libs/fetch';

/**
 * @desc Updated user
 */
export function request(params, bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user/{username}',
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
