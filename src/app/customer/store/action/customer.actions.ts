import { createAction,props } from "@ngrx/store";
import { Customer } from "src/app/models/customer";

export const addcustomers = createAction(
    '[Customer] Add Customers', (customer:Customer)=>({customer})
);