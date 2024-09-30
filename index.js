import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';

// Prompt user for input
inquirer
  .prompt([
    { type: 'input', name: 'text', message: 'Enter up to three characters for the logo text:' },
    { type: 'input', name: 'textColor', message: 'Enter a text color (keyword or hex):' },
    { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter a shape color (keyword or hex):' }
  ])
  .then(answers => {
    // Create shape instance based on user input
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'Square':
        shape = new Square(answers.shapeColor);
        break;
    }

    // Generate SVG content
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      </svg>
    `;

    // Write the SVG content to a file
    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
  });
