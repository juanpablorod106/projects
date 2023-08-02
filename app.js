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

    // random for opponent
    opponent = choices[Math.floor(Math.random() * 3)]
    document.getElementById('opponent-choice'). src = './imgs/' + opponent + '.png'

    // checking winner
    if (you == opponent){
        your_score += 1
        opponent_score += 1
    }
    else {
        check_winner()
    }
}

function check_winner() {
    if (you == 'rock') {
        if (opponent == 'scissors') {
            your_score += 1
        }
        else if (opponent == 'paper') {
            opponent_score += 1
        }
    }
    if (you == 'scissors') {
        if (opponent == 'paper') {
            your_score += 1
        }
        else if (opponent == 'rock') {
            opponent_score += 1
        }
    }
    if (you == 'paper') {
        if (opponent == 'rock') {
            your_score += 1
        }
        else if (opponent == 'scissors') {
            opponent_score += 1
        }
    }
}