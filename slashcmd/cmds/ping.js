const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Latency and ping of the client'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await wait(2000);
		await interaction.editReply({ content: `Websocket heartbeat: ${interaction.client.ws.ping}ms`, ephemeral:true });
	},
};
