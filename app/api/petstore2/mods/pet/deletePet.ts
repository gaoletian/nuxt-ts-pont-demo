import { fetch } from '~/libs/fetch';

/**
 * @desc Deletes a pet
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore2/pet/{petId}',
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
