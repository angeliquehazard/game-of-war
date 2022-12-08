let computerDeck = [];
let playerDeck = [];


// deck setup
let allCards = {
suits: ["♠", "♥", "♣", "♦"],
rank: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
// value: {
//         "2": 2,
//         "3": 3,
//         "4": 4,
//         "5": 5,
//         "6": 6,
//         "7": 7,
//         "8": 8,
//         "9": 9,
//         "10": 10,
//         "J": 11,
//         "Q": 12,
//         "K": 13,
//         "A": 1
}
let deck = [];

//how to assign a value?


//i = suits, j = rank. this will push all 52 cards into deck
for(let i = 0; i<4; i++){
    for (let j = 0; j < 13; j++)
    //Per Zakk's suggestion, I want this to be an array of objects instead of an array of strings.
        deck.push(allCards.suits[i] + allCards.rank[j])
}

// game setup
    function initialize() {
        document.getElementById("computerSide").innerHTML = "";
        document.getElementById("playerSide").innerHTML = "";
        
    // randomize cards
    //from my pac-man game (fisher-yates?) need to review arrow functions:
        function shuffle(deck) {
            return deck.sort(() => Math.random() - 0.5);
    }
        shuffle(deck)
        //split deck in half
        playerDeck = deck.slice(0,26);
        computerDeck = deck.slice(26,52);
        //show how many cards each player has
        document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck.length;
        document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck.length;
        console.log(playerDeck[0])
    }

initialize()
console.log(playerDeck)
console.log(computerDeck)

//when draw button is clicked, top card from each deck shows
let computerCard = computerDeck[0];
let playerCard = playerDeck[0];


    let button = document.getElementById("draw");
    // while(playerDeck.length > 0 || computerDeck.length > 0) {
    button.addEventListener("click", function draw() {
        document.getElementById("computerSide").innerHTML = computerCard;
        document.getElementById("playerSide").innerHTML = playerCard;
        function checkForWin() {
            if(computerCard.rank>playerCard.rank) {
                //push cards into computerDeck
                //update deck counts
                computerDeck += 1;
                playerDeck -=1;
                document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck;
                document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck;
            
            } else if(computerCard.rank<playerCard.rank) {
                //push cards into computerDeck
                //update deck counts
                computerDeck -= 1;
                playerDeck += 1;
                document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck;
                document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck;
            } else {
                //tie - for now, push each card back to their own deck
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