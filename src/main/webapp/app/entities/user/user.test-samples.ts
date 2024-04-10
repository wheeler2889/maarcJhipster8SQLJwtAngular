import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3579,
  login: 'JEC',
};

export const sampleWithPartialData: IUser = {
  id: 29465,
  login: 'l7Zm',
};

export const sampleWithFullData: IUser = {
  id: 6079,
  login: 'voA0b',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
