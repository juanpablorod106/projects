let you, opponent
let your_score = 0
let opponent_score = 0

let choices = ['rock', 'papper', 'scissors']

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement('img')
        choice.id = choices[i]
        choices.src = choices[i] + '.png'
        document.getElementById('choices').append(choice)
    }
}