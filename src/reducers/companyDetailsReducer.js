export default function companyDetails(data = {}, action) {
  switch (action.type) {
    case 'ADD_COMPANY_DETAILS':
      return { name: action.name };
    default:
      return data;
  }
}
