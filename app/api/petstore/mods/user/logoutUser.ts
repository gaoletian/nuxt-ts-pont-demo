import { fetch } from '~/libs/fetch';

/**
 * @desc Logs out current logged in user session
 */
export function request(options) {
  const fetchOption = Object.assign(
    {
      url: '/petstore/user/logout',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    options,
  );
  return fetch(fetchOption);
}
