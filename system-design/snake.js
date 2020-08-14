/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
class SnakeGame {
  constructor(width, height, food) {
    this.w = width;
    this.h = height;
    this.foodCoordinates = food;
    this.snakeCoordinates = [[0, 0]];
    this.score = 0;
    this.moveMap = {
      U: [-1, 0],
      D: [1, 0],
      R: [0, 1],
      L: [0, -1],
    };
  }

  /**
     * Moves the snake.
            @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
            @return The game's score after the move. Return -1 if game over. 
            Game over when snake crosses the screen boundary or bites its body. 
     * @param {string} direction
     * @return {number}
     */
  move(direction) {
    const l = this.snakeCoordinates.length;
    const head = this.snakeCoordinates[l - 1];
    const [x, y] = head;
    const [i, j] = this.moveMap[direction];
    const newX = x + i;
    const newY = y + j;

    if (this.isInvalid(newX, newY)) {
      return -1;
    }

    if (this.isFood(newX, newY)) {
      this.foodCoordinates.shift(); // remove food
      this.snakeCoordinates.push([newX, newY]);
      this.score++;
      return this.score;
    }

    let newC = [newX, newY];
    for (let k = l - 1; k >= 0; k--) {
      const last = this.snakeCoordinates[k];
      this.snakeCoordinates[k] = newC;
      newC = last;
    }

    return this.score;
  }

  isFood(x, y) {
    if (this.foodCoordinates.length < 1) {
      return false;
    }
    const [i, j] = this.foodCoordinates[0];
    return x === i && y === j;
  }

  isInvalid(x, y) {
    if (this.isBounds(x, y)) {
      return true;
    }

    // check all but the tail because tail will move
    for (let k = 1; k < this.snakeCoordinates.length; k++) {
      const [i, j] = this.snakeCoordinates[k];
      if (x === i && y === j) {
        return true;
      }
    }

    return false;
  }

  isBounds(x, y) {
    return x < 0 || x >= this.h || y < 0 || y >= this.w;
  }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
module.exports = SnakeGame;
