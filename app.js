let you, opponent
let your_score = 0
let opponent_score = 0

let choices = ['rock', 'paper', 'scissors']

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement('img')
        choice.id = choices[i]
        choice.src = './imgs/' + choices[i] + '.png'
        choice.addEventListener('click', select_choice)
        document.getElementById('choices').append(choice)
    }
}

function select_choice() {
    you = this.id
    document.getElementById('your-choice'). src = './imgs/' + you + '.png'
}