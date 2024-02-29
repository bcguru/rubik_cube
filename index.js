const RubikCube = require('./rubikCode.js');

const isDevelopment = true;

const rubikRube = new RubikCube(isDevelopment)

console.log('Initial status: ');
rubikRube.printStatus();

rubikRube.rotate('F')
// rubikRube.executeAction("F R' U B' L D'");

console.log('Final status: ');
rubikRube.printStatus();
