import { Client, ClientGrpc} from '@nestjs/microservices';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { GrpcClienteOpciones } from 'src/grpc-client.options';
import { Customer, CustomerDetail, CustomerGrpc, EmptyRequest, GetCustomerRequest, ResponseMessage, UpdateCustomerRequest } from 'src/interfaces/customer.interface';
import { map, Observable } from 'rxjs';

@Injectable()
export class CustomerServiceNormal implements OnModuleInit{
    @Client(
        GrpcClienteOpciones.crearOpciones(
            'localhost:5001',
            'customer',
            './Protos/customer.proto'
        ),
    )
    grpcCustomerClient: ClientGrpc;

    grpcCustomerService: CustomerGrpc;

    onModuleInit() {
        this.grpcCustomerService = this.grpcCustomerClient.getService('CustomerGrpc')
    }

    getAllCustomers(empty: EmptyRequest):Observable<Customer[]> {
        return this.grpcCustomerService.GetCustomers(empty);  
    }

    getCustomer(id:GetCustomerRequest):Observable<Customer> {
        return this.grpcCustomerService.GetCustomer(id);
    }

    saveCustomer(customer:CustomerDetail):Observable<Customer> {
        return this.grpcCustomerService.SaveCustomer(customer);
    }
    
    updateCustomer(updateRequest:UpdateCustomerRequest):Observable<Customer> {
        return this.grpcCustomerService.UpdateCustomer(updateRequest);
    }
    
    deleteCustomer(id:GetCustomerRequest):Observable<ResponseMessage>{
        return this.grpcCustomerService.DeleteCustomer(id);
    }
}
