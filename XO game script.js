let turn = 'x'
let display = document.getElementById('display')
let squares=[]
let game = function game(id) {
    let element = document.getElementById(id)
    if ( turn == 'x' && element.innerText == '') {
        element.innerText = 'X'
        display.innerText = 'O'
        turn = 'o'        
    }else if ( turn == 'o' && element.innerText == '') {
        element.innerText = 'O'
        display.innerText = 'X'
        turn = 'x'  
    }  
    winner();
    return element
}
function draw() {
    display.innerText = 'DRAW'
    setInterval(function(){display.innerText += "."},1000)
    setTimeout(function(){location.reload()},4000)
}
function compare(num1,num2,num3) {
        game = ""
        display.innerText = squares[num1]+' Wins'
        display.style.color ='gold'
        document.getElementById("item"+num1).style.color ='gold'
        document.getElementById("item"+num2).style.color ='gold'
        document.getElementById("item"+num3).style.color ='gold'
        document.getElementById("item"+num1).style.background ='black'
        document.getElementById("item"+num2).style.background ='black'
        document.getElementById("item"+num3).style.background ='black'
        setInterval(function(){display.innerText += "."},1000)
        setTimeout(function(){location.reload()},4000)
}
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item"+i).innerText;
    }   
    if (squares[1]==squares[2] && squares[2]==squares[3] && squares[2]!='') {
        compare(1,2,3)
    }else if (squares[1]==squares[4] && squares[4]==squares[7] && squares[4]!='') {
        compare(1,4,7)
    }else if (squares[1]==squares[5] && squares[5]==squares[9] && squares[9]!='') {
        compare(1,5,9)
    }else if (squares[2]==squares[5] && squares[5]==squares[8] && squares[8]!='') {
        compare(2,5,8)
    }else if (squares[3]==squares[5] && squares[5]==squares[7] && squares[7]!='') {
        compare(3,5,7)
    }else if (squares[3]==squares[6] && squares[6]==squares[9] && squares[9]!='') {
        compare(3,6,9)
    }else if (squares[4]==squares[5] && squares[5]==squares[6] && squares[6]!='') {
        compare(4,5,6)
    }else if (squares[7]==squares[8] && squares[8]==squares[9] && squares[9]!='') {
        compare(7,8,9)
    }else if (squares[1]!='' && squares[2]!='' && squares[3]!='' && squares[4]!='' && squares[5]!='' && squares[6]!='' && squares[7]!='' && squares[8]!='' && squares[9]!=''){
        draw()
    }
}