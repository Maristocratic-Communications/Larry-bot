const fs = require('fs');
require('dotenv').config()
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN
console.log("preparing...")
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

if (typeof token == 'undefined') {
  console.log("Your Token is missing inside of .env\nplease copy .env_example and imput your token from the developer portal.");
  process.exit(1);
}

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);
#evillarryschildwashere
