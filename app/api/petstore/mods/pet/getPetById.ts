import { fetch } from '~/libs/fetch';

/**
 * @desc Find pet by ID
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/pet/{petId}',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
