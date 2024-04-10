import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ab49e64b-ebff-4dbe-a2c9-08b09f9beb5c',
};

export const sampleWithPartialData: IAuthority = {
  name: '36125fb4-dfb6-4e57-ad09-41d74ff857d7',
};

export const sampleWithFullData: IAuthority = {
  name: '0afda6c8-f80c-47c8-ba6a-0e240f80332a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
