import { petstore } from './petstore';
import defs from './api';

export type apitype = typeof defs;
export const api = { petstore } as apitype;
