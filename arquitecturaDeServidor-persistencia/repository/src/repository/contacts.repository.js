
import {CreateContact} from "../dao/dto/createContact.dto.js"



export class ContactsRepository{
    // indicamos que dao utilizamos para este repositorio
    constructor(dao){
        this.dao = dao;
    };

    async getContacts(){
        return await this.dao.getAll();
    };


    async createContact(contact){
        // convertimos a nuestro contactto
        const conctactDto = new CreateContact(contact) ;
        return await this.dao.create(contact);
    };
    async getContact(id){
        return await this.dao.getOne(id);
    };
}