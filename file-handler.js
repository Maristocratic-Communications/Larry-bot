async function getGuildData(guildId) {
  const path = `./data/${guildId}.json`;
  const content = await fs.readFile(path, 'utf8');
  return JSON.parse(content);
}