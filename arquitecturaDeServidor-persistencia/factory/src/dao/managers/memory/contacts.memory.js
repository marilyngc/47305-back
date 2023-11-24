


export class ContactsMemory{
    constructor(){
        this.contacts = [];
    }
    create(contactIngo){
        this.contacts.push(contactIngo);
        return "contact created"
    };

    getAll(){
        return this.contacts;
    };


    getOne(id){
        const contact = this.contacts.find(c => c.id === id );
        return contact
    };


    update(){}
    delete(){}
}