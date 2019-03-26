import { combineReducers } from 'redux';
import basicDetails from './basicDetailsReducer';
import companyDetails from './companyDetailsReducer';

const rootReducer = combineReducers({
  basicDetails,
  companyDetails,
});

export default rootReducer;
