// importamos todos los repositorios que hemos contruidos

import { ContactsRepository } from "./contacts.repository.js";
import { contactsDao } from "../dao/factory.js";


// creamos servicio

export const contactsService = new ContactsRepository(contactsDao);// ponemos el dao que utilizamos