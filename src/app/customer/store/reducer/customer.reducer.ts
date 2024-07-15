import{Action,createReducer, on} from '@ngrx/store'
import { Customer } from 'src/app/models/customer';
import * as CustomerActions from 'src/app/customer/store/action/customer.actions'

export const customerFeatureKey = 'customertest';

export interface CustomerState{
    customers:Customer[];
}

export const intialState: CustomerState ={
    customers:[]
};

export const customerReducer = createReducer(
    intialState,
    on(CustomerActions.addcustomers,(state:CustomerState,{customer})=>({
        ...state,
        customers:[...state.customers,customer]
    }))
)



