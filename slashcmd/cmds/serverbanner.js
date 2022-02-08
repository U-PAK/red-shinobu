const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {

    data: new SlashCommandBuilder()
    .setName("serverbanner")
    .setDescription("Cambia el banner del server (Solo para servidores Lvl 2 o 3 con banner)")
    .addStringOption(data => data.setName('link').setDescription('Coloca el link de la imagen que deseas poner. Ej: (https://cool-link.png)').setRequired(true)),

    async run(client, interaction){
try{

    const link = await interaction.options.getString('link')
    interaction.guild.setBanner(link).catch(()=>{
        return;
    })



}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
