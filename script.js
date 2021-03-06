'use strict';

const body = document.querySelector('body')
const guess = document.querySelector('.guess')
const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const modalBtn = document.querySelector('.modal-btn')



let guessNum

function getRandomNum() {
    return Math.floor(Math.random() * 20) + 1
}

let randomNum = getRandomNum()
let scoreNum = 20
console.log(randomNum)

checkBtn.addEventListener('click', () => {
    if (scoreNum > 0) {
        if (guess.value == '') {    
        alert('Siz hech narsa kiritmadingiz!')
        } else {
        guessNum = guess.value
        console.log(guessNum)
        checking(guessNum)
    }
}
    
})

function checking() {
    if (guessNum == randomNum) {
        console.log('Congratulation')
        number.textContent = `${guessNum}`
        body.style.backgroundColor = 'green'
        message.textContent = 'You win!!!🏆'
        if (highscore.textContent < scoreNum) {
            highscore.textContent = scoreNum
        } 
    } else {
        if (guessNum < randomNum) {
            message.textContent = 'Kiritilgan son kichik'
        } else {
            message.textContent = 'Kiritilgan son katta'
        }
        
        if (scoreNum > 1) {
            scoreNum--
            score.textContent = scoreNum

            // guess.value = ''
        } else if (scoreNum == 1) {
            scoreNum--
            score.textContent = scoreNum
            message.textContent = 'You lose!!!😫 Start the game again'
            hiddenRemove()
            
        }
        
    }
}

againBtn.addEventListener('click', () => {
    againGame()

})
modalBtn.addEventListener('click', () => {
    againGame()
    hiddenAdd()

})
function againGame() {
    body.style.backgroundColor = '#222'
    number.textContent = '?'
    guess.value = ''
    scoreNum = 20
    score.textContent = scoreNum
    message.textContent = 'Start guessing...'
    randomNum = getRandomNum()
    console.log(randomNum)
}

function hiddenRemove() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function hiddenAdd() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}