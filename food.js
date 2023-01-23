import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
let food = getRandomFoodPosition()
let points = 0;
const EXPANSION_RATE = 1
const pointElement = document.getElementById('points')


export function update() {
    if(onSnake(food)) {
        points += 50
        pointElement.textContent = ''
        pointElement.textContent = points
        console.log(points)
        localStorage.setItem('points', points)
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')

    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')

    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition

    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}