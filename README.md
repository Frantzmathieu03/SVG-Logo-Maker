# User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (or a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, or square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (or a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named logo.svg
AND the output "Generated logo.svg" is printed in the command line
WHEN I open the logo.svg file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
Table of Contents
Installation
Usage
Tests
Example
License
Installation
To use this project, ensure you have Node.js installed. Then follow these steps:

Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/Frantzmathieu03/SVG-Logo-Maker
Navigate to the project directory:
bash
Copy code
cd SVG-Logo-Maker
Install the dependencies:
bash
Copy code
npm install
Usage
To run the application, use the following command:

bash
Copy code
node index.js
You will be prompted to provide the following information:

Text: Enter up to three characters to display on the logo.
Text Color: Enter the color for the text (keyword or hexadecimal).
Shape: Select a shape from the list (Circle, Triangle, Square).
Shape Color: Enter the color for the shape (keyword or hexadecimal).
After entering all the required input, an SVG file named logo.svg will be generated in the root directory.

