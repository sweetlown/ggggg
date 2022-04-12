const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
        
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("bot opérationel");
});



Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")   //color embed 
            .setTitle("Liste des commandes") // title embed 
            .setAuthor (" <= Auteur du bot", "https://cdn.discordapp.com/attachments/963024869392523297/963050026760810596/98c5eac51ee42f15f5689a87e5952636.png")
            .setDescription("Vous y trouverez la liste des commandes du bot")
            .setThumbnail("https://cdn.discordapp.com/attachments/962657005422653450/963052109614436372/360_F_90936019_mHOUHoHfkmhVsjqpaX6IXgj2B4xnbzbD.jpg")
            .addField("__!help__", "Affiche la liste des comandes")
            .addField("__!ytb__", "Cette commande envoie notre chaine Youtube.  Abonne-toi !")
            .addField("__!ip__", "Cette commande vous envoie l'Ip de notre serveur.")
            .addField("__!site__", "Cette commande Vous envoie notre site web.")
            .addField("__!voter__", "Cette commande Vous envoie comment voter pour notre serveur.")
            .addField("__!twitch__", "Cette commande vous envoie notre twitch. On attend votre Follow ^^ ")
            .addField("__!workshop__", "Cette commande vous envoie notre collection workshop.")
            .addField("__!tiktok__", "Cette commande vous envoie Notre Fabuleux tiktok!")
            .addField("__!boutique__", "Cette commande Vous envoie Notre boutique . Je t'invite à y claquer 20 balle ^^")
            .setImage("https://cdn.discordapp.com/attachments/962657005422653450/963052109614436372/360_F_90936019_mHOUHoHfkmhVsjqpaX6IXgj2B4xnbzbD.jpg")
            .setTimestamp()
            .setFooter("Created by ⚡sweetlown⚡#2981")
         message.channel.send({ embeds: [embed]})    
        
    }
    else if (message.content === prefix + "ytb"){
        message.channel.send("Voici notre Youtube Abonne toi ^^ : https://www.youtube.com/channel/UCUf-2DoiJa8_4UcnfFt1vFw")        
    }

    else if (message.content === prefix + "ip"){
        message.channel.send("Voici l'ip du serveur rejoins nous ^^ : 135.125.39.179:27016 ")        
    }

    else if (message.content === prefix + "site"){
        message.channel.send("Voici notre site : https://pabiskieurp.mistforums.com/")        
    }

    else if (message.content === prefix + "vote"){
        message.channel.send("Voici la pâge de vote : https://top-serveurs.net/garrys-mod/pabiskieu-roleplay ")        
    }

    else if (message.content === prefix + "twitch"){
        message.channel.send("Voici notre twitch on attend ton follow https://www.twitch.tv/pabiskieu_roleplay ")        
    }

    else if (message.content === prefix + "workshop"){
        message.channel.send("Voicie Notre collection workshop : https://steamcommunity.com/workshop/filedetails/?id=2190980409*")        
    }

    else if (message.content === prefix + "tiktok"){
        message.channel.send("Voici notre tiktok on attend ton abonnement ^^ : https://vm.tiktok.com/ZMLXVttPa/  ")        
    }

    else if (message.content === prefix + "boutique"){
        message.channel.send("Voici Notre Boutique :  https://pabiskieu.garryserv.com/ ")        
    }
    
        
});



Client.login("OTU4NzQzMTI5NjczMDU2MzI2.YkRxHg.N257A6AnzC_nrJ8wc6q9Fwf5D_U")
