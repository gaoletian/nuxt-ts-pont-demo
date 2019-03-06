import { fetch } from '~/libs/fetch';

/**
 * @desc Finds Pets by tags
 */
export function request(params, options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore2/pet/findByTags',
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
