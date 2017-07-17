var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');
var _ = require('underscore-node');
var token = '308660723:AAEnoREKI1Mz06ZMZndn06kFhhksbd8j2yA'; 
var bot = new TelegramBot(token, {polling: true}); 

var img = fs.readFileSync('./admin.jpg');

// bot.sendMessage(316753298, 'Очень жарко');

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
                text: 'хз',
                stiker: 'BQADAgADZgMAAvoLtggb_O7T-NnQTAI' 
            },
            '1': {
                text: 'Где-то рядом',
                stiker: false 
            },
            '2': {
                text: 'а ты?',
                stiker: false, 
            },
            '3':{
                text: 'Не знаю',
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
    quick: {
        option: 0,
        items:[
            {
                text: `cлишком быстро! Либо слишком легкий вопрос , либо ты мухлюешь, давай другой`,
                stiker: 'CAADAgADIQEAAjSbDhCFO2T2Nld11QI',
            },
            {
                text: `Cлушай, харош это делать,слишком быстро! я слежу за тобой! Еще один давай!`,
                stiker: '',
            },
             {
                text: `УУУУУУУУУУУ, Правильно, но , давай другой вопрос!`,
                stiker: '',
            }
        ],
    },
    
    questions: {
        option: 0,
        active: false,
        startTime: 0,
        items:[
            {
                text: `Сколько девяток от 1 до 100 (цифрами)`,
                stiker: '',
                answer: 20
            },
            {
                text: `Чем можно поделиться только один раз?`,
                stiker: '',
                answer: 'секретом'
            },
             {
                text: `Какая планета названа не в честь какого-либо Бога?`,
                stiker: '',
                answer: 'земля'
            }
        ],
    },
    negativeAnswer: {
        option: 0,
        active: false,
        startTime: 0,
        items:[
            {
                text: `Я думаю.............................., что это.................... НЕПРАВИЛЬНО!!!`,
                stiker: 'CAADAgADCwEAAooSqg7W-Kv96OaTVgI',
            },
             {
                text: `Как говорил мой дед, "С утра голова работает лучше" вот он был прав, а ты НЕТ`,
                stiker: 'CAADAgADoAMAAvoLtgj5yjtMiAXK4gI',
            },
            {
                text: `Наконец-то)))))) А не, неправильно!!)))`,
                stiker: '',
            },
            {
                text: `perdona меня, но короче нифига`,
                stiker: '',
            },
            {
                text: `Миша все фигня, давай по новой!`,
                stiker: '',
            },
             {
                text: `Ты ходил на курсы как отвечать всегда неправильно? Ты был там лучшим, не сомневаюсь))`,
                stiker: '',
            },
            {
                text: `It seems like wrong`,
                stiker: 'CAADAgADYgEAAvR7GQABrUv2s1LyYdYC',
            },
            {
                text: `ДА!!! А нет, снова нет))))`,
                stiker: '',
            },
            {
                text: `Н Е П Р А В И Л Ь Н О`,
                stiker: '',
            },
        ],
    },
    start: {
        option: 0,
        active: false,
        items:[
            {
                text: `Привет! Тут мне птички нашептали, что у тебя сегодня праздник и конечно же у меня есть для тебя подарок, НО я тебе отдам его при условии, что ты отгадаешь мою загадку, которую не могут решить мои нейронные сети, потому что я не могу так больше, ай нид ответ, ты готов?`,
                stiker: 'BQADAgAD8gEAAjSbDhBvoJ7KsVm-8QI',
            }
        ]
    },
    negative: {
        option: 0,
        items:[
            {
                text: 'Пиши, когда будешь готов',
                stiker: '',
            },
            {
                text: 'Ответ не принят, жду другого',
                stiker: '',
            },
             {
                text: 'Пфффф, нифига не дам, соглашайся и продолжим',
                stiker: '',
            },
        ]
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
console.log(msg.date);
var chatId = msg.chat.id;
var response; 
var lowMsg = msg.text.toLowerCase();
var match = lowMsg.match( /напомни/ig);
    /**
     * Start 
    */
    if(lowMsg.match( /start/ig) != null){
        answer('start', chatId);
        responseOptions.start.active = true;
        return;
    }
    /**
     * Wait for agree to start
     */
    if(responseOptions.start.active){
        if(lowMsg.match( /да/ig) != null || lowMsg.match( /гото/ig) != null || lowMsg.match( /коне/ig) != null){
            responseOptions.questions.active = true;
            answer('questions', chatId);
            responseOptions.start.active = false;
            responseOptions.questions.active = true;
            console.log(msg.date);
            responseOptions.questions.startTime = msg.date;
        }
        else{
            answer('negative', chatId);
        }
        return;
    }
    /**
     * Answer on question
     */
    if(responseOptions.questions.active){
        if(checkAnswer(lowMsg)){
            if(checkTime(msg.date)){
                successAnswer(chatId);
            }
            else{
                answer('quick', chatId);
                answer('questions', chatId);
            }
        }
        else{
            answer('negativeAnswer', chatId);
        }
        return;
    }


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
    // console.log(categoryName)
    var optionNumb = responseOptions[categoryName].option;
    var items = responseOptions[categoryName].items;
    sendMsg(chatId, items[optionNumb].text);
    if(items[optionNumb].stiker){
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


function checkAnswer(answer){
    var answerOption = responseOptions.questions.option - 1;

    answerOption = answerOption < 0 ? responseOptions.questions.items.length - 1 : answerOption;

    console.log(answerOption)
    return answer == responseOptions.questions.items[answerOption].answer;
}

function checkTime(time){
    console.log(time - responseOptions.questions.startTime);
    return time - responseOptions.questions.startTime > 45;
}

function successAnswer(chatId){
    sendSticers( chatId ,'CAADAgADPwEAAvR7GQABViioNKnM2JoC');
    sendMsg(chatId ,'Ураааа, это правиииильнооо)) поздравляю  с  правильным ответом и Днем рождения!!!');
    bot.sendPhoto(chatId, img);
    sendMsg(chatId ,'Это твой последний пункт. Езжай через мак возьми чонить, потом на то место на фотке и произнеси "Мне 23 и это год будет крутой!" и получи свои подарки!');
    setTimeout(function() {
        bot.sendMessage(chatId, 'И еще кое-что, Богдан просил передать, ты пидр ^^' );
    }, 15000);
}
