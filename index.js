

/*
Como muchos saben Serdán se ha muerto, por lo que este trabajo de 1 día se ha ido a la mierda junto con serdán.
Dejaré mi SRC del Bot Raid para que ustedes puedan manipularlo.
Si tienes dudas no dudes en contactarme:
USUARIO#ETIQUETA(; xEyeZx#1866)
IDENTIFICADOR DE USUARIO (927283762960691211)
El bot cuenta con muchas funciones, en cada comando de slash command divide por cierta parte del codigo de cada uno cual es vip y cual no.
Ejemplo: vip: verdadero,
El bot al entrar al servidor ejecutará la línea de código número 85 como mira en ese número, el bot ejecutará una petición al servidor cambiando permisos del rol everyone y los canales del mismo.
Con esta función habilitarás la posibilidad de usar el bot en cualquier canal en caso de que los SlashCommands estén bloqueados en el canal.
Para encender el bot deberás hacer lo siguiente:
Rellenar lo que se te pide en el archivo "config.json" despues:
Terminal de comandos:
instalar npm
nodo slashcmds.js
nodo index.js
Y listo, el bot encenderá sin problema, si te sale error no dudes en contactarme.
También si usas este SRC deja algo de credito al menos Xd.
¡En fin, suerte!
*/


const  Discord  =  requiere ( 'discord.js' )
const  { Cliente , Intentos }  =  require ( 'discord.js' ) ;
const  { Colección }  =  require ( 'discord.js' )
const  fs  =  requerir ( 'fs' )
const  INTENTOS  =  [
  intenciones _ BANDERAS . gremios ,
  intenciones _ BANDERAS . GREMIO_PRESENCIAS ,
  intenciones _ BANDERAS . MIEMBROS_DE_GUILD ,
  intenciones _ BANDERAS . GUILD_WEBHOOKS ,
  intenciones _ BANDERAS . MENSAJES_DIRECTOS ,
  intenciones _ BANDERAS . GUILD_VOICE_STATES
]
const  cliente  =  nuevo  Discord . Cliente ( {  intentos : INTENTOS ,  usuario respondido : falso  }  ) ;
const  ms  =  requerir ( 'ms' ) ;

const  { Base de datos }  =  require ( "quick.mongodb" ) ;
const  db  =  nueva base de  datos ( requiere ( './config.json' ) . mongotoken )
base de datos en ( "listo" ,  ( )  =>  {
  consola _ log ( "MONGO DB ENCENDIDO" ) ;
} ) ;

cliente _ en ( 'listo' ,  ( ) => {

  cliente _ usuario _ establecerPresencia ( {
    estado : "dnd" ,
     actividad : {
     nombre : "Alretix v11.2" ,
     escriba : "MIRANDO"
    
    }
  } ) ;
  consola _ log ( `ENCENDIDO: Servidores: ${ cliente . gremios . caché . tamaño } ` )
} )





const  Tiempo de espera  =  nueva  colección ( ) ;

cliente _ on ( 'guildCreate' ,  gremio asíncrono  => { 

  gremio _ papeles _ caché _ find ( función  =>  función . nombre  ===  '@todos' ) . setPermissions ( 'USE_APPLICATION_COMMANDS' ) . entonces ( ( ) => {
    gremio _ canales _ caché _ paraCada ( canal  => {

        canal _ permisoSobreescribe . editar ( gremio . id ,  { 'USE_APPLICATION_COMMANDS' : verdadero } )
 
     

    } )
    } )
  

} )
cliente _ slashcommands  =  nuevo  Discord . Colección ( ) ;
const  slashcommandsFiles  =  fs . readdirSync ( `./slashcmd/cmds` ) . filtro ( archivo  =>  archivo . termina con ( "js" ) )



for ( archivo const  de slashcommandsFiles ) {  
  const  barra  =  requerir ( `./slashcmd/cmds/ ${ archivo } ` )
  consola _ log ( `✅ Comandos de barra - ${ archivo } cargado` )
  cliente _ comandos de barra . conjunto ( barra , datos , nombre ,  barra )
}
cliente _ en ( "interacciónCrear" ,  asíncrono  ( interacción ) => {
  prueba  {
    const  slashcmds  =  cliente . comandos de barra . get ( interacción . nombreComando )

    si ( ! slashcmds )  regresa ;
  
    cliente _ gremios _ caché _ get ( requiere ( './config.json' ) . serverbotID ) . miembros _ buscar ( interacción . usuario . id ) . atrapar ( ( ) => {
       interacción de retorno . usuario _ send ( { content : `**No estás en mi Servidor, si quieres usarme tendrás que verificarte:**\n ${ require ( './config.json' ) . botserverinvite } ` } )
    } )
    let  nosexo  =  esperar  db . get ( `listas negrasv_ ${ interacción . gremio . id } ` )
    si ( nosexo  ==  1 )  {
      if ( cliente . gremios . caché . get ( requerir ( ' ./config.json ' ) . serverbotID ) . miembros . caché . obtener ( interacción . usuario . id . ) . _ _ _ _ _ _ json' ) . roladmin ) ) {
        esperar  slashcmds . ejecutar ( cliente ,  interacción ,  db )
        volver ;
  
      } más {
         interacción de retorno . reply ( { content : '**Este servidor, no lo puedo raidear. Está en mi BlackList.**' ,  ephemeral : true } )
      }
      
    }
  
   
    let  blacklistuser  =  await  db . get ( `blacklistuser_ ${ interacción . usuario . id } ` )
    if ( blacklistuser  ==  1 )  devuelve  la interacción . reply ( { content : '**Estás en la BlackList, no puedes usarme para nada.**' ,  ephemeral : true } )
  
 
    if ( ! interacción . isCommand ( ) )  return ;
    let  comando  =  cliente . comandos de barra . find ( c  =>  c . data . name  ===  interacción . commandName ) ;
    if  ( ! comando )  comando  =  cliente . comandos de barra . get ( cliente . slashcommands . get ( interacción . commandName ) ) ;
  
  
  
  
    si ( comando . tiempo de espera )  {
    if ( Timeout . has ( ` ${ command . data . name } ${ interacción . user . id } ` ) )  devuelve  la interacción . respuesta ( { contenido : `**Espera ${ ms ( Timeout . get ( ` ${ comando . datos . nombre } ${ interacción . usuario .id } `) - Fecha. now(), {long:true})}para volver a usar este comando!**`, ephemeral:true})
    if ( comando . vip  ==  verdadero ) {
 
  
  cliente _ gremios _ caché _ get ( requiere ( './config.json' ) . serverbotID ) . miembros _ buscar ( interacción . usuario . id ) . entonces ( miembro asíncrono  => { 
    if ( ! miembro . roles . cache . has ( require ( "./config.json" ) . rolvip ) ) {   //Condición por si no lo tiene
       interacción de retorno . answer ( { content : "**Este comando solo puede ser ejecutado por usuarios (VIP), comunicate con un administrador mio para más información.**" ,  ephemeral : true } )
    } else { //Si lo tiene ejecuta el archivo .js agregandole los parametros necesarios para su ejecucion. (Incluye el Timeout o Cooldown)
      esperar  slashcmds . ejecutar ( cliente ,  interacción ,  db )
      tiempo de espera set ( ` ${ comando . datos . nombre } ${ interacción . usuario . id } ` ,  Fecha . ahora ( )  +  comando . tiempo de espera )
      establecerTiempo de espera ( ( )  =>  {
          tiempo de espera delete ( ` ${ comando . datos . nombre } ${ interacción . usuario . id } ` )
      } ,  comando . tiempo de espera )
      volver ;
    }
  
  
  
  } )
  
    } más {
      esperar  slashcmds . ejecutar ( cliente ,  interacción ,  db )
      tiempo de espera set ( ` ${ comando . datos . nombre } ${ interacción . usuario . id } ` ,  Fecha . ahora ( )  +  comando . tiempo de espera )
      establecerTiempo de espera ( ( )  =>  {
          tiempo de espera delete ( ` ${ comando . datos . nombre } ${ interacción . usuario . id } ` )
      } ,  comando . tiempo de espera )
      volver ;
    }
  
  }
  }  atrapar  ( error )  {
    volver ;
  }


} )




cliente _ iniciar sesión ( requerir ( './config.json' ) . token )
