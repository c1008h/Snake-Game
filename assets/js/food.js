import { onSnake, expandSnake, SNAKE_SPEED } from './snake.js'
import { randomGridPosition } from './grid.js'
let food = getRandomFoodPosition()
let points = 0;
const EXPANSION_RATE = 1
const pointElement = document.getElementById('points')
const levelElement = document.getElementById('level')
let level = 0

export function update() {
    if(onSnake(food)) {
        // Displaying level and points everytime snake eats
        level ++
        points += 50
        levelElement.textContent = ''
        levelElement.textContent = 'Level: ' + level
        pointElement.textContent = ''
        pointElement.textContent = 'Points: ' + points
        console.log(points)

        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        // Every five levels, user gets bonus and snake speeds up 
        if(level % 5 === 0) {
            console.log('Speeding up!')
            SNAKE_SPEED + 1
            points += 500
        }
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