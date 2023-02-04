import { getInputDirect } from "./input.js"
export const SNAKE_SPEED = 3

// where the snake always starts
const snakeBody = [
    { x: 10, y: 11 },
]

let newSegments = 0

// removing last piece when snake moves and updates
export function update() {
    addSegments()

    const inputDirection = getInputDirect()
    // console.log('update snake')

    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// drawing the snake
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')

        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')

        gameBoard.appendChild(snakeElement)
    })
}
// Snake grows
export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

// Returning where the snake head is
export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// When snake eats food, the body grows by one
function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}