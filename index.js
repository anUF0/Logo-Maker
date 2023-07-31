const inquirer = require('inquirer');
const fs = require('fs');
const setShape = require('./lib/setShape');
const colourKeys = require('./lib/colourKeys');
const { error } = require('console');

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
    validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (var i = 0, len = colourKeys.length; i < len; i) {
            if (answerLowercase.indexOf(colourKeys[i]) != -1) {
            return true;
        }}
        return error("\n Please enter a valid colour key")
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
            return error("\n Please enter a valid hexadecimal")
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
            return error("\n Text must be three characters or less! Please try again");
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
    validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (var i = 0, len = colourKeys.length; i < len; ++i) {
            if (answerLowercase.indexOf(colourKeys[i]) != -1) {
            return true;
        }}
        return error("\n Please enter a valid colour keyword")
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
        error("\n Please enter a valid hexadecimal")
        }
        return true;
    }
},
]).then((data) => {
  console.log(data)
    console.log(data.logoColour);
 
    const logo = setShape(data);
 
    fs.writeFile('./output/example.svg',  logo, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
    );
}).catch((err) => console.error(err));