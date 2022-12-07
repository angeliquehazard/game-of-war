// game setup
    // clear screen, randomize cards

// deck setup

// set up deck as an object with keys for suits, values

let deck = {
    suits: ["♠", "♥", "♣", "♦"],
    val: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
}

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