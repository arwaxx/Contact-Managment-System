const  {connect}  = require("../utils/database.js");

class ContactModel {
  
  
  async getContacts() {
    const connection = await connect();
    try {
      const results = await connection.query('SELECT * FROM contacts');
      console.log(results); // log the results object
      return results.results;
    } catch (error) {
      console.error(error);
    } finally {
      connection.end();
    }
  }
  
  
  
  async getContactById(id) {
    const client = await connect();
    try {
      const result = await client.query("SELECT * FROM contacts WHERE id = ?", [
        id,
      ]);

      if (result && result.rows && result.rows.length > 0) {
        return result.json(rows[0]);
      } else {
        return null; // or throw an error, depending on your requirements
      }
    } finally {
      client.end();
    }
  }
  




  async createContact(data) {
    const client = await connect();
    try {
      const result = await client.query(
       "INSERT INTO contacts SET ?", {
          name: data.name,
          email: data.email,
          phone: data.phone
        }
      );
      if (result.rows && result.rows.length > 0) {
        return result.rows[0];
      } else {
        return { message: " can not create the contact!!" };
      }
    } finally {
      client.end();
    }
  }

  async updateContact(id, data) {
    const client = await connect();
    try {
      const result = await client.query(
        "UPDATE contacts SET name=?, email=?, phone=? WHERE id=? ",
        [data.name, data.email, data.phone, id]
      );
      if (result.rows && result.rows.length > 0) {
        return result.rows[0];
      } else {
        return { message: "can not update the contact!" };
      }
    } finally {
      client.end();
    }
  }

  async deleteContact(id) {
    const client = await connect();
    try {
      const result = await client.query(
        "DELETE FROM contacts WHERE id=? ",
        [id]
      );
      if (result.rows && result.rows.length > 0) {
        return result.rows[0];
      } else {
        return { message: "can not delete the contact!" };
      }
    } finally {
      client.end();
    }
  }
}

 module.exports = ContactModel;
