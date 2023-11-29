import { contactsModel } from "./models/contacts.model.js";


export class ContactsMongo{
    constructor(){
        this.model = contactsModel;
    };

   async create(contactInfo){
        const contactCreate = await this.model.create(contactInfo)
        // this.contacts.push(contactInfo);
        return "contact created"
    };

   async getAll(){
    const contacts = await this.model.find();
        return contacts;
    };


   async getOne(id){
        const contact = await this.model.findById(id);
        // const contact = this.contacts.find(c => c.id === id );
        return contact
    };


    update(){}
    delete(){}
}