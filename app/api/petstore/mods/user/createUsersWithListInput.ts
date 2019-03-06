import { fetch } from '~/libs/fetch';

/**
 * @desc Creates list of users with given input array
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user/createWithList',
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
