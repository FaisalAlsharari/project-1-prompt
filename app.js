// let playerNames = document.querySelector('[type="submit"]')
// console.log(playerNames);

//here  is a varible 'names' and the value = true so it will display the names only ones and after the if i make names = false ;
let names = true;
let addPlayersBtn = document.querySelector('#add-players');
let game = true;
addPlayersBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (names) {

        let player1 = document.createElement('h2');
        let player1Name = document.querySelector('#player1');
        //show me the first name of the player 1
        player1.innerText = document.querySelector('#nameOne').value;
        player1Name.appendChild(player1)


        let player2 = document.createElement('h2');
        let player2Name = document.querySelector('#player2');

        player2.innerText = document.querySelector('#nameTwo').value;
        player2Name.appendChild(player2)
    }
    names = false;


})

let ph1 = document.querySelector('#ph1');
ph1.innerText = document.querySelector('#nameOne').value;

let ph2 = document.querySelector('#ph2');
ph2.innerText = document.querySelector('#nameTwo').value;
////////////////////////////////////
let eventType = `click`;
let tableTd = document.querySelectorAll(`td`);

let turn = 'X';
let eventTable = function (event) {
    // event.target.innerText='X';
    //This if so the game will no more played
    if (game)

        this.innerText = turn;
    //This is if it's X make it o, and if it's o make it x
    turn = turn === 'X' ? 'O' : 'X';
    //here is my 2d arr
    let tableArray = [
        [],
        [],
        []
    ]
    console.log(tableArray);
//this is row
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //tableArray[i][j] the 3 table arr , table.children[i] in the html the first tr , .children[j] the first td in the tr , .innerText; the value of inside the td this is the first loop of tr . 
            tableArray[i][j] = table.children[i].children[j].innerText;
        }
    }

//this is colom
    for (let i = 0; i < tableArray.length; i++) {
        checkWin(tableArray[i][0], tableArray[i][1], tableArray[i][2])
        checkWin(tableArray[0][i], tableArray[1][i], tableArray[2][i])

    }
//this is diagonal 
    checkWin(tableArray[0][0], tableArray[1][1], tableArray[2][2])
    checkWin(tableArray[0][2], tableArray[1][1], tableArray[2][0])
    checkTie()


    this.removeEventListener('click', eventTable);
};
for (let i = 0; i < tableTd.length; i++) {
    tableTd[i].addEventListener(eventType, eventTable);
}

let table = document.querySelector('#tableID>tbody');

function checkWin(a, b, c) {
    if (a == b && b == c && a != `` && b != `` && c != ``) {
        // console.log(player2);

        //This will make the game stop after someone won
        game = false;
        swal(`Winner Winner Chicken Dinner`, a == "X" ? player1.innerText : player2.innerText);
    }
}
//Here we check if it's Tie !
function checkTie() {
    let count = 0;
    for (let i = 0; i < tableTd.length; i++) {
        //if it's not empty add 1 
        if (tableTd[i].innerText != ``)
            count++




    }
    //This if is to check if the count git to 9 and the game is finished !
    if (count == 9 && game == true)
        swal(`Tie `);
}



//select butt button 
let butten = document.querySelector(`#butt`)
// This is the box contaner 
let contaner = document.querySelector(`.game-container`)
let startGame = function () {
    //this will show up the box aafter clicking the butten on a flex
    contaner.style.display = `flex`;
    //after you click the butten this will not show it agine 
    butten.style.display = `none`;



    let buttenR = document.querySelector(`#buttR`)
    let endingGame = function () {
        buttenR.style.display = `none`;
        window.location.reload()

    }
    //Here i want to end my game and start all over 
    buttenR.addEventListener(`click`, endingGame)

}
//This will start the game and show me the box
butten.addEventListener(`click`, startGame)



// let label1= document.querySelector(`#player#2`)
let disappears = function () {
    // label1.style.display=`none`;
}
// label1.addEventListener(`click`, disappears)




