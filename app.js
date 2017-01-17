var TelegramBot = require('node-telegram-bot-api'); 
var token = '308660723:AAEnoREKI1Mz06ZMZndn06kFhhksbd8j2yA'; 
var bot = new TelegramBot(token, {polling: true}); 

bot.on('message', function (msg) { 
console.log(msg);
var chatId = msg.chat.id;
var response; 
console.log(msg.text);

var lowMsg = msg.text.toLowerCase();
var match = lowMsg.match( /напомни/ig);
console.log(match != null );
    if(lowMsg.match( /прив/ig) != null){ 
        response = 'Приветики';
        sendMsg(chatId ,response);
        sendSticers(chatId, 'BQADAgAD8AEAAjSbDhCu0knCHN21TAI');
    }
    else if(lowMsg == 'сколько время'){
        response = new Date();
        sendMsg(chatId ,response)
    }
    else if(lowMsg.match( /как/ig) != null){
        response = 'все неплохо, я недавно появился на свет и вот развиваюсь, расскажи как ты, но я могу не совсем тебя понять, но ты смотри какой забавный кот)';
        sendMsg(chatId ,response)
        sendSticers(chatId, 'BQADAgADkwEAAjSbDhCqTTtYV0vLfAI');
    }
    else if(lowMsg.match( /напомни/ig) != null){
        sendMsg(chatId ,'ладненько :)')
        notify(chatId);
    }
    else if(lowMsg.match( /люби/ig) != null){
        sendMsg(chatId ,'Все что мне Богдан говорил, так это, что очень любит тебя, няняня')
        sendSticers(chatId, 'BQADAgADkwcAAm4y2AABGu6Wn28KfQcC');
    }
     else if(lowMsg.match( /что делаешь/ig) != null){
        sendMsg(chatId ,'Лежу, а ты?)')
        sendSticers(chatId, 'BQADAgADkwcAAm4y2AABGu6Wn28KfQcC');
    }
    else{
        response = 'Непонятненько';
        sendMsg(chatId ,response)
        sendSticers(chatId, 'BQADAgADdgMAAvoLtggvQw81KeCtsAI');
    }  
});

var sendMsg = function(chatId, response){
    bot.sendMessage(chatId, response , {caption: "I'm a bot!"});
} 

var sendSticers = function(chatId, sticerId){
    bot.sendSticker(chatId, sticerId , {caption: "I'm a bot!"});    
}

var notify = function(chatId){
    setTimeout(function() {
        bot.sendMessage(chatId, 'Я пока немного плохо помню, но ты просил напомнить, не помню когда, решил сделать это сейчас напоминаю тебе что-то ))' , {caption: "I'm a bot!"});
    }, 5000);
};

var d = new Date(); 
var n = d.getDay(); 
if(n === 1){ 
    // bot.sendMessage(302447970, "Теперь я умею немного напоминать и искать слова 'напомни' ");
}




setTimeout(function() {
    bot.sendMessage(278308481, 'Богдан пошел в душ, но просил чтоб я тебе написал, что он очень скучаааееет и очень сильно обнимаааеттт, мррр' , {caption: "I'm a bot!"});
    console.log('yes')
}, 200000);