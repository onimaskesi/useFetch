import {DataType, ErrorType} from './StateType/StateObjectTypes';
import {StateType} from './StateType/StateType';

export type ReducerType = (
  state: StateType,
  action: {type: string; payload?: {data?: DataType; error?: ErrorType}},
) => StateType;
