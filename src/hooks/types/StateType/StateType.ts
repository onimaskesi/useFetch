import {DataType, LoadingType, ErrorType} from './StateObjectTypes';

export type StateType = {
  data?: DataType;
  loading: LoadingType;
  error?: ErrorType;
};
