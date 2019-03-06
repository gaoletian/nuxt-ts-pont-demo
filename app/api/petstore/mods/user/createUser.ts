import { fetch } from '~/libs/fetch';

/**
 * @desc Create user
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
