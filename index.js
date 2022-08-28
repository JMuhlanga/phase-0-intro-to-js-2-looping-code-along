let cardMess = [];

function writeCards(names,giftEvent){  
    
    for (let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${giftEvent} gift!`;
        cardMess.push(message);
    } 
    return cardMess;
}

let countDown = function (value) {
    let i = value;
    while(i>=0){
      console.log(i);
      i--
    }
  }

