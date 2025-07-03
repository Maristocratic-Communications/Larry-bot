const fs = require('fs');
require('dotenv').config()
console.log("preparing...")
const token = process.env.TOKEN
if (typeof token == 'undefined') {
  console.log("Your Token is missing inside of .env\nplease copy .env_example and imput your token from the developer portal.");
  process.exit(1);
}
console.log(token)
