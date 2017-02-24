var TelegramBot = require('node-telegram-bot-api');
var _ = require('underscore-node');
var token = '308660723:AAEnoREKI1Mz06ZMZndn06kFhhksbd8j2yA'; 
var bot = new TelegramBot(token, {polling: true}); 

var responseOptions = {
    hello:{
        option:0,
        items:{                
            '0': {
                text: 'Хеллоу',
                stiker: 'BQADAgADqQcAAm4y2AAB_DXqQNkDDWYC' 
            },
            '1': {
                text: 'ОООО, приветики',
                stiker: false 
            },
            '2': {
                text: 'Доброго времени суток, рад что не забываешь))',
                stiker: 'BQADAgADkAMAAvoLtgiZ7FUTV8GmkgI', 
            },
            '3':{
                text: 'Привеееет)))',
                stiker: 'BQADAgAD8gEAAjSbDhBvoJ7KsVm-8QI' 
            }
        }
    },
    miss:{
        option:0,
        items:{
             '0': {
                text: ':)',
                stiker: false 
            },
            '1': {
                text: '',
                stiker: 'BQADAgADYAEAAjSbDhDFsnbcM0Q9BQI'
            },
            '2': {
                text: 'ммм',
                stiker: false, 
            },
            '3':{
                text: '',
                stiker: 'BQADAgAD_AAD9HsZAAGAROatrwevYwI'
            }
        }
    },
    missElse:{
        option:0,
        items:{
             '0': {
                text: 'Это приятно очень )))',
                stiker: false 
            },
            '1': {
                text: 'Вот тебе милый стикер',
                stiker: 'BQADAgADYAEAAjSbDhDFsnbcM0Q9BQI'
            },
            '2':{
                text: '',
                stiker: 'BQADAgAD_AAD9HsZAAGAROatrwevYwI'
            }
        }
    },
    howAre:{
        option:0,
        items:{
             '0': {
                text: 'все неплохо, я недавно появился на свет и вот развиваюсь, расскажи как ты, но я могу не совсем тебя понять, но ты смотри какой забавный кот)',
                stiker: false
            },
            '1': {
                text: 'Отличненько, как у тебя?)',
                stiker: false
            },
            '2': {
                text: 'Спасибо, что интресуешься. Все нормальненько. Надеюсь у тебя тоже!',
                stiker: 'BQADAgADjwcAAm4y2AABCGmVOtATtAABAg', 
            },
            '3':{
                text: 'Im fine, what about you?',
                stiker: false
            }
        }
    },
    where:{
        option:0,
        items:{
             '0': {
                text: 'Наверное занят немножко',
                stiker: 'BQADAgADZgMAAvoLtggb_O7T-NnQTAI' 
            },
            '1': {
                text: 'скоро.. скоро..',
                stiker: false 
            },
            '2': {
                text: 'Точно не знаю, но уверен, что скоро будет:)',
                stiker: false, 
            },
            '3':{
                text: 'Тут со мной сидит, скоро придет, помогает мне чуть-чуть',
                stiker: false
            }
        }
    },
      whereElse:{
        option:0,
        items:{
             '0': {
                text: 'Наверное занят немножко, но спешит',
                stiker: 'BQADAgADZgMAAvoLtggb_O7T-NnQTAI' 
            },
            '1': {
                text: 'Где-то рядом',
                stiker: false 
            },
            '2': {
                text: 'Точно не знаю, но уверен, что скоро будет:)',
                stiker: false, 
            },
            '3':{
                text: 'Тут со мной сидит, скоро придет, помогает мне чуть-чуть',
                stiker: false
            }
        }
    },
    doing:{
        option:0,
        items:{
             '0': {
                text: 'Лежу, а ты?)',
                stiker:'BQADAgAD8gADGELuCFSe2d_8195-Ag'
            },
            '1': {
                text: 'Постигаю дзен',
                stiker: 'BQADAgAD9AEAAjSbDhB0AkfTZrPOlwI' 
            },
            '2': {
                text: 'По моему, я уже рассказывал ))',
                stiker: false, 
            },
            '3':{
                text: 'Пытаюсь понять как я устроен...',
                stiker: false
            }
        }
    },
    love:{
        option:0,
        items:{
            '0': {
                text: '',
                stiker: 'BQADAgADKQIAAkf7CQx4yOhHtlL_DAI' 
            },
            '1': {
                text: '',
                stiker: 'BQADAgADkwcAAm4y2AABGu6Wn28KfQcC' 
            },
            '2': {
                text: '',
                stiker: 'BQADAgADxwEAAjSbDhDmAoF3kaTncAI' 
            },
        }
    },
    loveElse:{
        option:0,
        items:{
            '0': {
                text: 'Я люблю покушать',
                stiker: 'BQADAgADKQIAAkf7CQx4yOhHtlL_DAI' 
            },
            '1': {
                text: 'Люблю футбол',
                stiker: 'BQADAgADkwcAAm4y2AABGu6Wn28KfQcC' 
            },
            '2': {
                text: 'Телеграм любит меня а я его',
                stiker: 'BQADAgADxwEAAjSbDhDmAoF3kaTncAI' 
            },
        }
    },
    default:{
        option:0,
        items:{
             '0': {
                text: 'Ммм..Ладно))',
                stiker: false 
            },
            '1': {
                text: 'Если честно, я немного не понимаю (',
                stiker: 'BQADAgADkwEAAjSbDhCqTTtYV0vLfAI' 
            },
            '2': {
                text: 'Непонятненько',
                stiker: 'BQADAgADIQEAAjSbDhCFO2T2Nld11QI', 
            },
            '3':{
                text: 'В смысле?',
                stiker: 'BQADAgADXAEAAjSbDhDdFx-9I0pqJA'
            }
        }
    }
};

bot.on('message', function (msg) { 
console.log(msg);
var chatId = msg.chat.id;
var response; 

var lowMsg = msg.text.toLowerCase();
var match = lowMsg.match( /напомни/ig);
    if(lowMsg.match( /прив/ig) != null){ 
       answer('hello', chatId);
    }
    else if(lowMsg.match( /cколь/ig) != null && lowMsg.match( /врем/ig) != null || lowMsg.match( /час/ig) != null){
        sendMsg(chatId ,new Date());
    }
    else if(lowMsg.match( /как/ig) != null && lowMsg.match( /дел/ig) != null){
        answer('howAre', chatId);
    }
    else if(lowMsg.match( /напомни/ig) != null){
        sendMsg(chatId ,'ладненько :)')
        notify(chatId);
    }
    else if(lowMsg.match( /люб/ig) != null){
        if(chatId == '278308481'){
            answer('love', chatId);
        }
        else{
            answer('loveElse', chatId);
        }
    }
     else if(lowMsg.match( /что делаешь/ig) != null){
        answer('doing', chatId);
    }
    else if(lowMsg.match( /скуча/ig) != null){
        if(chatId == '278308481'){
            answer('miss', chatId);
        }
        else{
            answer('missElse', chatId);
        }
    }
    else if(lowMsg.match( /где/ig) != null && lowMsg.match( /богд/ig) != null){
        if(chatId == '278308481'){
            answer('where', chatId);
        }
        else{
            answer('whereElse', chatId);
        }
    }
    else{
        answer('default', chatId);
    }  
});

var answer = function(categoryName, chatId){
    var optionNumb = responseOptions[categoryName].option;
    var items = responseOptions[categoryName].items;
    sendMsg(chatId, items[optionNumb].text);
    if(items[optionNumb].stiker != false){
        sendSticers(chatId, items[optionNumb].stiker);
    }
    responseOptions[categoryName].option = optionNumb + 1;
    checkOptionAnswer(items, optionNumb, categoryName);
}

var sendMsg = function(chatId, response){
    bot.sendMessage(chatId, response , {caption: "I'm a bot!"});
}; 

var sendSticers = function(chatId, sticerId){
    bot.sendSticker(chatId, sticerId , {caption: "I'm a bot!"});    
};

var notify = function(chatId){
    setTimeout(function() {
        bot.sendMessage(chatId, 'Я пока немного плохо помню, но ты просил напомнить, не помню когда, решил сделать это сейчас напоминаю тебе что-то ))' , {caption: "I'm a bot!"});
    }, 5000);
};

var checkOptionAnswer = function(obj, optionNumb, categoryName){
    if(_.size(obj) <= optionNumb + 1){
        responseOptions[categoryName].option  = 0;
    }
};

var d = new Date(); 
var n = d.getDay(); 
if(n === 1){ 
    // bot.sendMessage(302447970, "Теперь я умею немного напоминать и искать слова 'напомни' ");
}





// bot.sendMessage(199594454, 'Привет');
