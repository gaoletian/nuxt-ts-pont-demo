import { fetch } from '~/libs/fetch';

/**
 * @desc Delete purchase order by ID
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore2/store/order/{orderId}',
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
