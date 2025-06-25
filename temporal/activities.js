const axios = require("axios");

async function updateCrudCrud(user) {
  const API_URL = "https://crudcrud.com/api/<your-api-id>/profiles";
  try {
    await axios.post(API_URL, user);
    console.log("✅ Sent to CrudCrud successfully");
  } catch (err) {
    console.error("❌ Failed to update CrudCrud:", err.message);
  }
}

module.exports = { updateCrudCrud };