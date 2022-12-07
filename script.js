// deck setup

let suits = ["♠", "♥", "♣", "♦"];
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let deck = [];
//how to define how the ranks count? - use indeces to determine rank

//i = suits, j = rank. this will push all 52 cards into deck
for(let i = 0; i<4; i++){
    for (let j = 0; j < 13; j++)
        deck.push(suits[i] + rank[j])
}

// game setup
    // clear screen
    function initialize() {
        document.getElementById("computerSide").innerHTML = "";
        document.getElementById("playerSide").innerHTML = "";
        document.getElementById("compDeck").innerHTML = "Number of Cards: 26";
        document.getElementById("playerDeck").innerHTML = "Number of Cards: 26"
        
    // randomize cards
    //from my pac-man game (fisher-yates?) need to review arrow functions:
        function shuffle(deck) {
            return deck.sort(() => Math.random() - 0.5);
    }
        shuffle(deck)
}
initialize()
//how to split the deck in half? or keep deck whole, but display number of 
    //cards left //how to define computerDeck and playerDeck?
let computerDeck = 26
let playerDeck = 26

//how to show cards on the browser screen?
//when draw button is clicked
let computerCard = deck[0];
let playerCard = deck[1];
// let computerCard = computerDeck[0];
// let playerCard = playerDeck[0];
//each player draws a card - click draw button
    let button = document.getElementById("draw");
    // function draw() {
    //         document.getElementById("computerSide").innerHTML = computerCard;
    //         document.getElementById("playerSide").innerHTML = playerCard;
    //     }
    button.addEventListener("click", function draw(){document.getElementById("computerSide").innerHTML = computerCard;
            document.getElementById("playerSide").innerHTML = playerCard});



console.log(deck)
// gameplay

    //use if...else loop for this
        //if computer card greater than player card, add 1 to computer deck 
            //and reduce one from player  deck and clear card fields
        //if player card greater than computer card, add 1 to player deck 
            //and reduce one from computer deck and clear card fields
        //if same each player places their top 3 cards face down, reveals top cards. 
            //whoever is higher wins all 6 cards. if another tie, reveal another card.
            //repeat for ties, move on for winner
if(computerCard>playerCard) {
    computerDeck += 1;
    playerDeck -=1;
} else if(computerCard<playerCard) {
    computerDeck -= 1;
    playerDeck += 1;
}
    //when someone gets to 52 cards, winner

//winner
//initialize() here?