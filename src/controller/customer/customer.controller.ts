import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Customer, EmptyRequest, GetCustomerRequest } from "src/interfaces/customer.interface";
import { CustomerServiceNormal } from "src/service/customer/customer.service";

@Controller('customer')
export class CustomerController {
    
    constructor(private service: CustomerServiceNormal){}

    @Get()
    getAllCustomers(empty: EmptyRequest){
        return this.service.getAllCustomers(empty);
    }

    @Get(':id')
    getCustomer(@Param('id') id:string){
        return this.service.getCustomer({id});
    }

    @Post()
    saveCustomer(@Body() customer:Customer){
        return this.service.saveCustomer({id:customer.id, idType:customer.idType, name:customer.name,
             age:customer.age, country:customer.country, address:customer.address, email:customer.email})
    }

    @Put()
    updateCustomer( @Body() customer:Customer){
        return this.service.updateCustomer({idCustomer: customer.id, customer: {id:customer.id, idType:customer.idType, name:customer.name,
            age:customer.age, country:customer.country, address:customer.address, email:customer.email}})
    }

    @Delete(':id')
    deleteCustomer(@Param('id') id:string){
        return this.service.deleteCustomer({id});
    }
}