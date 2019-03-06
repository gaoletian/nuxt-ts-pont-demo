import { fetch } from '~/libs/fetch';

/**
 * @desc Updates a pet in the store with form data
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/pet/{petId}',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: params,
    },
    options,
  );
  return fetch(fetchOption);
}
