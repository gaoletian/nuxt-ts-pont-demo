import { petstore } from './petstore';
import { petstore2 } from './petstore2';
import ApiType from './api';

export type apitype = typeof ApiType;
export const API = { petstore, petstore2 };
