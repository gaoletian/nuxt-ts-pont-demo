import { fetch } from '~/libs/fetch';

/**
 * @desc Returns pet inventories by status
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore2/store/inventory',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
