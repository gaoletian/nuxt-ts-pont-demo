import { fetch } from '~/libs/fetch';

/**
 * @desc Add a new pet to the store
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/pet',
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
