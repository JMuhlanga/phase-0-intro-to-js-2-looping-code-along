function writeCards(names,giftEvent){
    let cardMess = [];
    debugger;
    for(let i=0; i < names.length;i++){
        cardMess.push(`Thank you, ${names[i]}, for the wonderful ${giftEvent} gift!`);               
        debugger;
    }   
    return cardMess;
}

function countDown(number){
    while(number>=0){
        number--; 
        console.log(number);
        
    }
    
    return countDown;
                
                
}

