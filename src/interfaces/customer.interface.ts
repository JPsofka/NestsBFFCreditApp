import { Observable } from "rxjs";

export interface CustomerGrpc{
    GetCustomers(empty:EmptyRequest):Observable<Customer[]>;
    GetCustomer(id:GetCustomerRequest):Observable<Customer>;
    SaveCustomer(customer:CustomerDetail):Observable<Customer>;
	UpdateCustomer(updateRequest:UpdateCustomerRequest):Observable<Customer>;
    DeleteCustomer(id:GetCustomerRequest):Observable<ResponseMessage>;
}

export interface Customer{
    id:string;
	idType:string;
	name:string;
	age:number;
	country:string;
	address:string;
	email:string;
}

export interface EmptyRequest{}

export interface GetCustomerRequest{
	id:string
}

export interface CustomerDetail{
    id:String;
	idType:string;
	name:string;
	age:number;
	country:string;
	address:string;
	email:string;
}
export interface UpdateCustomerRequest {
	idCustomer:string;
	customer:CustomerDetail;
}

export interface ResponseMessage{
	message:string
}