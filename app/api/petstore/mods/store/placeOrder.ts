import { fetch } from '~/libs/fetch';

/**
 * @desc Place an order for a pet
 */
export function request(bodyParams, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/store/order',
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
