import { fetch } from '~/libs/fetch';

/**
 * @desc Updated user
 */
export function request(params, bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore2/user/{username}',
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
