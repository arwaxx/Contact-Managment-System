const { validationResult } = require('express-validator');
const { ContactService } = require('../services/contactService.js');

class ContactController {
  constructor(contactService) {
    this.contactService = contactService;
  }

  async getContacts(req, res, next) {
    try {
      const contacts = await this.contactService.getContacts();
      res.json({ data: contacts });
    } catch (err) {
      next(err);
    }
  }

  async getContactById(req, res, next) {
    try {
      const contact = await this.contactService.getContactById(req.params.id);
      res.json({ data: contact });
    } catch (err) {
      next(err);
    }
  }

  async createContact(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phone } = req.body;
      const contact = await this.contactService.createContact({ name, email, phone });
      res.status(201).json({ data: contact });
    } catch (err) {
      next(err);
    }
  }

  async updateContact(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phone } = req.body;
      const contact = await this.contactService.updateContact(req.params.id, { name, email, phone });
      res.json({ data: contact });
    } catch (err) {
      next(err);
    }
  }

  async deleteContact(req, res, next) {
    try {
      await this.contactService.deleteContact(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  
}


module.exports = {ContactController};
