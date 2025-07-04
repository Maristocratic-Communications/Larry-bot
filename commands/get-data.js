const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('get-data')
		.setDescription('outputs server dats'),
	async execute(interaction) {
        const data = JSON.parse(fs.readFileSync(`./data/${interaction.guild.id}.json`, 'utf8'));
		await interaction.reply(`done.`);
	},
};
