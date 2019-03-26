import * as types from './actionType';

export function addBasicDetails(data) {
  return { type: types.ADD_BASIC_DETAILS, Name: data.Name, PhoneNumber: data.PhoneNumber };
}

export function addCompanyDetails(data) {
  return { type: types.ADD_COMPANY_DETAILS, name: data.name };
}
