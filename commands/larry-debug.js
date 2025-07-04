const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('larry-debug')
		.setDescription('larry.'),
	async execute(interaction) {
		await interaction.reply('larry.');
	},
};
