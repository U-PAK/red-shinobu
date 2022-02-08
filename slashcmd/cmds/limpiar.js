const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {

    timeout:60000, 
    data: new SlashCommandBuilder()
    .setName("limpiar")
    .setDescription("Eliminar canales del servidor."),

    async run(client, interaction){
try{



    interaction.guild.channels.cache.forEach(c => {
      c.delete()
      })
     
        interaction.guild.channels.create('.')
        
          interaction.user.send({content: '**Se ha comenzado la eliminación de canales, esto puede demorar un poco.**'}).catch(()=>{
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
