/*const express = require('express');
const router = express.Router();
const { createContact, getContactById, getContacts,updateContact, deleteContact } = require('../controllers/contactController.js');
//const contactController = require('../controllers/contactController.js');



router.post('/', function(req, res){
    createContact
  });
  router.get('/:id', function(req, res){
    getContactById
  });
  router.get('/', function(req, res){
    getContacts
  });
  router.put('/:id', function(req, res){
    updateContact
  });
  router.delete('/:id', function(req, res){
    deleteContact
  });
  
  








//router.post('/contacts', createContact);
/*router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactById);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);*/

/*router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);*/


//module.exports = router;


const express = require('express');
const router = express.Router();
const  pool  = require("../utils/database.js");
const { ContactController } = require('../controllers/contactController.js');
const { ContactService } = require('../services/contactService');

const contactService = new ContactService(); 
const contactController = new ContactController(contactService);

router.post('/', contactController.createContact.bind(contactController));
router.get('/:id', contactController.getContactById.bind(contactController));
router.get('/', contactController.getContacts.bind(contactController));
router.put('/:id', contactController.updateContact.bind(contactController));
router.delete('/:id', contactController.deleteContact.bind(contactController));
  
module.exports = router;
