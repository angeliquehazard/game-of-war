let computerDeck = [];
let playerDeck = [];
// let computerPile = [];
// let playerPile = [];
// deck setup

let suits = ["♠", "♥", "♣", "♦"];
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//let value = []
let deck = [];

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
        
    // randomize cards
    //from my pac-man game (fisher-yates?) need to review arrow functions:
        function shuffle(deck) {
            return deck.sort(() => Math.random() - 0.5);
    }
        shuffle(deck)
        playerDeck = deck.slice(0,26);
        computerDeck = deck.slice(26,52);
        document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck.length;
        document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck.length;
}


initialize()
console.log(playerDeck)
console.log(computerDeck)
//how to split the deck in half? or keep deck whole, but display number of 
    //cards left //how to define computerDeck and playerDeck?

//when draw button is clicked
let computerCard = computerDeck[0];
let playerCard = playerDeck[0];

//each player draws a card - click draw button
    let button = document.getElementById("draw");
    // while(deck.length > 0) {
    button.addEventListener("click", function draw() {
        document.getElementById("computerSide").innerHTML = computerCard;
        document.getElementById("playerSide").innerHTML = playerCard;
        function checkForWin() {
            if(computerCard.rank>playerCard.rank) {
                computerDeck += 1;
                playerDeck -=1;
                document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck;
                document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck;
                //push cards into computerPile
            } else if(computerCard.rank<playerCard.rank) {
                computerDeck -= 1;
                playerDeck += 1;
                document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck;
                document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck;
                //push cards into playerPile
            } else {
                //tie
            }
            checkForWin()
            }}
        // document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck; 
        // document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck;
        );

console.log(deck)
// gameplay

    //use if...else loop for this
        //if computer card greater than player card, add 1 to computer deck total,
            //reduce one from player deck total, and push the two cards to computer's deck
        //if player card greater than computer card, add 1 to player deck total,  
            //reduce one from computer deck total,
        //if same each player places their top 3 cards face down, reveals top cards. 
            //whoever is higher wins all 6 cards. if another tie, reveal another card.
            //repeat for ties, move on for winner

    //when someone gets to 52 cards, winner

//winner
//initialize() here?