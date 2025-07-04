const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./larry.json', 'utf8'));
const entries = Object.entries(data);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('larry-debug')
		.setDescription('larry.'),
	async execute(interaction) {
        const key = randomLarry()
		await interaction.reply(`${data[key].emoji} ${key} has... NOT spawned[.](${data[key].icon_url})`);
	},
};

function randomLarry() {
const totalWeight = entries.reduce((sum, [_, value]) => sum + value.weight, 0);
const rand = Math.random() * totalWeight;
let cumulative = 0;
for (const [key, value] of entries) {
  cumulative += value.weight;
  if (rand < cumulative) {
    return key
  }
}}

