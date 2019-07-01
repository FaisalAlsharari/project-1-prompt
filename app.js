// let playerNames = document.querySelector('[type="submit"]')
// console.log(playerNames);

const addPlayersBtn= document.querySelector('#add-players');

addPlayersBtn.addEventListener('click',function(e){
e.preventDefault()
    const player1 = document.createElement('h2');
    const player1Name=document.querySelector('#player1');

    player1.innerText = document.querySelector('#nameOne').value;
    player1Name.appendChild(player1)
    

    const player2 = document.createElement('h2');
    const player2Name=document.querySelector('#player2');

    player2.innerText = document.querySelector('#nameTwo').value;
    player2Name.appendChild(player2)


})

const ph1 = document.querySelector('#ph1');
ph1.innerText = document.querySelector('#nameOne').value;

const ph2 = document.querySelector('#ph2');
ph2.innerText = document.querySelector('#nameTwo').value;
////////////////////////////////////
let eventType = `click`;
let tableTd = document.querySelectorAll(`td`);

let turn = 'X';
let eventTable = function(event){
// event.target.innerText='X';
    this.innerText = turn; 
    turn = turn === 'X' ? 'O' : 'X'; 

    let tableArray = [
        [],
        [],
        []
    ]
    console.log(tableArray);
    
    // this to check allthe tr, td if someone won or not 
    for(let i=0 ; i<3; i++){
        for(let j=0; j<3; j++){
            tableArray[i][j] = table.children[i].children[j].innerText;
        }
    }

    
    for (let i = 0; i< tableArray.length ; i++){
            checkWin(tableArray[i][0],tableArray[i][1],tableArray[i][2])
            checkWin(tableArray[0][i],tableArray[1][i],tableArray[2][i])

    }

    checkWin(tableArray[0][0],tableArray[1][1],tableArray[2][2])
    checkWin(tableArray[0][2],tableArray[1][1],tableArray[2][0])
    



    this.removeEventListener('click',eventTable);
};
for (let i = 0; i<tableTd.length; i++){
    tableTd[i].addEventListener(eventType,eventTable);
}

const table = document.querySelector('#tableID>tbody');

function checkWin(a,b,c){
    if (a==b && b==c && a!= "" && b !="" && c != ""){
        console.log( "win!", a);
    }else if( a!=b && b!=c && a!= "" && b!="" && c!="")
    console.log(`Tie`);

    
    
}