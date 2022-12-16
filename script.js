let computerDeck = [];
let playerDeck = [];


// deck setup
let allCards = {
    suits: ["♠", "♥", "♣", "♦"],
    ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"],
}
  const deck = [];
  buildDeck();
  function buildDeck() {
    allCards.suits.forEach((suit) => {
      allCards.ranks.forEach((rank, indx) => {
        const card = {
            suit: suit,
            rank:rank,
            value: indx + 1
          }
        deck.push(card)
      })
  })
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
        // document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck.length;
        // document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck.length;
    }

initialize()
console.log(computerDeck)
console.log(playerDeck)

//gameplay

//when draw button is clicked, top card from each deck shows
function round() {
    let computerCard = computerDeck.shift();
    let playerCard = playerDeck.shift();

    function checkForWin() {
        document.getElementById("computerSide").innerHTML = computerCard.suit + computerCard.rank;
        document.getElementById("playerSide").innerHTML = playerCard.suit + playerCard.rank;
        if(computerCard.value > playerCard.value) {
            console.log("Computer Wins")
            //push both cards into computerDeck
            computerDeck.push(computerCard)
            computerDeck.push(playerCard)

        } else if(playerCard.value > computerCard.value) {
            console.log("Player Wins")
            //push both cards into playerDeck
            playerDeck.push(computerCard)
            playerDeck.push(playerCard)

        } else if(playerCard.value === computerCard.value) {
            console.log("tie")
            playerDeck.push(playerCard)
            computerDeck.push(computerCard)
            }
        }
    
    checkForWin()
    console.log(computerDeck)
    console.log(playerDeck)
}
round() //run this on a loop 


// this runs an infinite loop - why? - does it have to do with a tie?
// while (playerDeck.length > 0 || computerDeck.length > 0) {
//     round()
// }


// let button = document.getElementById("draw");
// if(playerDeck.length>0 || computerDeck.length>0){
//     button.addEventListener("click", function draw() {
//         document.getElementById("computerSide").innerHTML = computerCard.suit + computerCard.rank;
//         document.getElementById("playerSide").innerHTML = playerCard.suit + playerCard.rank;
//         function checkForWin() {
//             if(computerCard.value>playerCard.value) {
//                 document.getElementById("whowins").innerHTML = "Computer Wins"
//                 //puts both cards end of computerDeck array
//                 computerDeck.push(computerCard)
//                 computerDeck.push(playerCard)
//                 // computerDeck.push(computerCard)
//                 // computerDeck.push(playerCard)
//                 playerDeck.length--
//                 document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck.length;
//                 document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck.length;
    
//             } else if(computerCard.value<playerCard.value) {
//                 document.getElementById("whowins").innerHTML = "Player Wins"
//                 //puts both cards at end of playerDeck array
//                 // playerDeck.push(computerDeck[0])
//                 // playerDeck.push(computerCard)
//                 // playerDeck.push(playerCard)
//                 computerDeck.length--
//                 //update deck counts
//                 document.getElementById("compDeck").innerHTML = "Number of Cards: " + computerDeck.length;
//                 document.getElementById("playerDeck").innerHTML = "Number of Cards: " + playerDeck.length;
    
//             } else {
//                 console.log("tie")
//                 //tie - for now, push each card back to their own deck
//                 playerDeck.push(playerCard);
//                 computerDeck.push(computerCard)
//             }
//         }
//         checkForWin();
//         console.log(computerDeck)
//         console.log(playerDeck)
//     }
//     )
//     } else if (playerDeck.length===0 || computerDeck.length===0) {
//         console.log("winner")
//     }

        //if same each player places their top 3 cards face down, reveals top cards. 
            //whoever is higher wins all 6 cards. if another tie, reveal another card.
            //repeat for ties, move on for winner

    //when someone gets to 52 cards, winner

//winner
