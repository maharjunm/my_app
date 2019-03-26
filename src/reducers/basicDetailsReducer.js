export default function basicDetails(data = {}, action) {
  switch (action.type) {
    case 'ADD_BASIC_DETAILS':
      return { Name: action.Name, PhoneNumber: action.PhoneNumber };
    default:
      return data;
  }
}
