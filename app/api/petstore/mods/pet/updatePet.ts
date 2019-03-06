import { fetch } from '~/libs/fetch';

/**
 * @desc Update an existing pet
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/pet',
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },

      data: bodyParams,
    },
    options,
  );
  return fetch(fetchOption);
}
