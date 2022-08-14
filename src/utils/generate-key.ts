import { v4 as uuid } from 'uuid';

export const generateKey = (): string => {
  return Date.now() + '-' + uuid();
};
