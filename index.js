const inquirer = require('inquirer');
const fs = require('fs');
const setShape = require('./lib/setShape');
///const colourKeys = require('./lib/colourKeys');
const isCss3Color = require("is-css3-color");

inquirer.prompt([
  {
    name: 'logoShape',
    message: 'What shape should your logo be??',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle'],
},
{
    name: 'logoColourChoice',
    message: 'What formatf is the background colour in? ',
    type: 'list',
    choices: ['Keyword', 'Hexadecimal']
},
{
    type: "input",
    name: "logoColour",
    message: "Enter the keyword",
    when: (answers) => {
        if(answers.logoColourChoice === 'Keyword') {
            return true;
        }
        return false;
    },
    validate: (answers) => {
        if (!isCss3Color(answers)) {
            throw new Error('Please enter a vaild css color keyword');
    }
    else{
        return true;
    }
}
},
{
    type: "input",
    name: "logoColour",
    message: "Enter Hexadecimal (#XXXXXX)",
    when: (answers) => {
        if(answers.logoColourChoice === 'Hexadecimal') {
            return true;
        }
        return false;
    },
    validate: (answer) => {
        const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        if (!answer.match(hexRegEx)) {
            throw new Error("Please enter a valid hexadecimal")
        }
        return true;
    }
},
{
    name: 'logoText',
    message: 'What is the text? (three character maximum)',
    type: 'input',
    validate: (answer) => {
        if (answer.length > 3) {
            throw new Error(" Text must be three characters or less! Please try again");
        }
        return true;
    }
},
{
    name: 'textColourChoice',
    message: 'What format is the text colour in?',
    type: 'list',
    choices: ['Keyword', 'Hexadecimal']
},
{
    type: "input",
    name: "textColour",
    message: "Enter the text colour keys",
    when: (answers) => {
        if(answers.textColourChoice === 'Keyword') {
            return true;
        }
        return false;
    },
    validate: (answers) => {
        if (!isCss3Color(answers)) {
         throw new Error('Please enter a vaild css color keyword');
    }
    return true;
    }
},
{
    type: "input",
    name: "textColour",
    message: "Enter Hexadecimal (#XXXXXX)",
    when: (answers) => {
        if(answers.textColourChoice === 'Hexadecimal') {
            return true;
        }
        return false;
    },
    validate: (answer) => {
        const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        if (!answer.match(hexRegEx)) {
         throw new Error('Please enter a valid hexadecimal')
        }
        return true;
    }
},
]).then((data) => {
  console.log(data)
    console.log(data.textColour);
 
    const logo = setShape(data);
 
    fs.writeFile('./output/example.svg',  logo, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
    );
}).catch((err) => console.error(err));