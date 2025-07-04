const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs').promises;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('get-data')
		.setDescription('outputs server dats'),
	async execute(interaction) {
        createFileIfNotExists(`./data/${interaction.guild.id}.json`, '{}');
        const data = JSON.parse(await fs.readFile(`./data/${interaction.guild.id}.json`, 'utf8'));
		await interaction.reply(`done.`);
	},
};

async function createFileIfNotExists(path, content) {
  try {
    await fs.access(path);
  } catch {
    await fs.writeFile(path, content);
    console.log('Data File created:', path);
  }
}


