const ContactModel = require('../models/contactModel.js');

class ContactService {
  constructor() {
    this.contactModel = new ContactModel();
  }

  async getContacts() {
    const contacts = await this.contactModel.getContacts();
    return contacts;
  }

  async getContacts() {
    try {
      const contacts = await this.contactModel.getContacts();
      return contacts;
    } catch (error) {
      console.error(error);
      throw error; // re-throw the error to be caught by the caller
    }
  }
  

  async getContactById(id) {
    const contact = await this.contactModel.getContactById(id);
    return contact;
  }

  async createContact(contactData) {
    const contact = await this.contactModel.createContact(contactData);
    return contact;
  }

  async updateContact(id, contactData) {
    const contact = await this.contactModel.updateContact(id, contactData);
    return contact;
  }

  async deleteContact(id) {
    const deletedContact = await this.contactModel.deleteContact(id);
    return deletedContact;
  }
}

module.exports = {ContactService};
