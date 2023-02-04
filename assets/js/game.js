import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'
const points = document.getElementById('points')
const level = document.getElementById('level')
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if(gameOver) {
        let pointElement = parseInt(points.textContent.split(':')[1]);
        let levelElement = parseInt(level.textContent.split(':')[1]);

        let pointsArray = JSON.parse(localStorage.getItem("points")) || [];
        let levelsArray = JSON.parse(localStorage.getItem("level")) || [];
        
        pointsArray.push(pointElement);
        levelsArray.push(levelElement);
        // Sorting the highest scores
        pointsArray.sort((a, b) => b - a);
        levelsArray.sort((a, b) => b - a);
        // Only keeping the top five highest
        pointsArray = pointsArray.slice(0, 5);
        levelsArray = levelsArray.slice(0, 5);
        
        localStorage.setItem('points', JSON.stringify(pointsArray));
        localStorage.setItem('level', JSON.stringify(levelsArray));
        if(confirm('You lost. Press ok to restart.')) {
            window.location.reload()
        }
        return 
    }
    // Requesting browser to render frame
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(gameB) {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}