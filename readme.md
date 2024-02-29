# Rubik Cube
The `RubikCode` class represents a Rubik's Cube and provides methods for manipulating its faces. It allows you to perform rotations on the cube and retrieve its current state.

## Usage
To use the RubikCode class, you need to create an instance of it. Here's an example:

### Rotate(An action)
To perform a side rotation, you can call the rotate method with the desired action as an argument. For example:
```javascript
// Rotating the right side clockwise
cube.rotate('F');

// Rotating the right side counterclockwise
cube.rotate("F'");
```

### Execute multiple actions
The RubikCode class provides a executeAction method, which allows you to execute a sequence of actions on the cube. You can pass a string of space-separated actions to the method, and it will handle each action in order.
```javascript
cube.executeAction('F R U');
```

### Retrieve current status
To retrieve the current status of the cube, you can access the call `getStatus` method of the RubikCode instance. This method return a 2D array representing the cube's current configuration.
```javascript
const status = cube.getStatus()
```

### Print current status
```javascript
cube.printStatus()
```

### Development Mode
By default, the RubikCode class is instantiated in production mode, where the cube faces are labeled with colors (W, O, G, R, B, Y). However, you can enable the development mode by passing true to the constructor.
```javascript
const cube = new RubikCode(true);
```
In development mode, the cube faces are labeled with numbers representing their positions.

### Example usage:
```javascript
const RubikCube = require('/path/of/rubikCube.js');

// By default, the RubikCode constructor initializes a solved cube. You can also pass a boolean value to the constructor to enable the development mode, which labels each cube face with numbers.
const cube = new RubikCode();

cube.rotate("F");

cube.rotate("R'");

// The actions should be separated by a space.
const actions = "F R' U B' L D'";

cube.executeAction(actions)

const result = cube.getStatus();
```

## Available Actions
- F : Rotate the front face clockwise.
- F': Rotate the front face counterclockwise.
- R : Rotate the right face clockwise.
- R': Rotate the right face counterclockwise.
- U : Rotate the top face clockwise.
- U': Rotate the top face counterclockwise.
- B : Rotate the back face clockwise.
- B': Rotate the back face counterclockwise.
- L : Rotate the left face clockwise.
- L': Rotate the left face counterclockwise.
- D : Rotate the bottom face clockwise.
- D': Rotate the bottom face counterclockwise.

Note: The actions should be separated by a space.

## Run Example & Test
```shell
# Run example actions
npm run start
```
```shell
# Run tests
npm run test
```
