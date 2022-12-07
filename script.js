// deck setup

let suits = ["♠", "♥", "♣", "♦"];
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let deck = [];

//i = suits, j = rank. this will push all 52 cards into deck
for(let i = 0; i<4; i++){
    for (let j = 0; j < 13; j++)
        deck.push(suits[i] + rank[j])
    
}

// game setup
    // clear screen
    // randomize cards


// gameplay
    //function to deal
    //each player draws a card
    //aces high
    //if computer card greater than player card, add 1 to computer cards left
        //use the index of deck.val +2 to calculate
    //if player card greater than computer card, add 1 to computer cards left
    //if same each player places their top 3 cards face down, reveals top cards. 
        //whoever is higher wins all 6 cards. if another tie, reveal another card.
        //repeat for ties, move on for winner
    //whoever wins the hand, place both cards at bottom of stack
    //when someone gets to 52 cards, winner

//winner