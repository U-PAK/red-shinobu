const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spam')
        .setDescription('Mass spams')
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("Message to spam")
                .setRequired(false),
        ),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral:true });
        const message = interaction.options.getString('message') ?? '';
        await interaction.editReply({ content: "Spamming", ephemeral: true });
        for (let index = 0; index < parseInt(Math.random() * 10000); index++) {
            for (let c = 0; c < parseInt(Math.random() * 10000); c++) {
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
            }
        }
        await interaction.deleteReply();
    },
};
