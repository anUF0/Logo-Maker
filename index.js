//Imports third-party dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const isCss3Color = require('is-css3-color');
//Imports function that checks inputs into the .svg fil
const setShape = require('./lib/setShape');

//Series of Prompts to get data
inquirer.prompt([
  {
    type: 'list',
    name: 'logoShape',
    message: 'What shape should your logo be??',
    choices: ['Circle', 'Square', 'Triangle'],
},
{
    type: 'list',
    name: 'logoColourChoice',
    message: 'What format is the background colour in? ',
    choices: ['Keyword', 'Hexadecimal']
},
{
    type: 'input',
    name: 'logoColour',
    message: 'Enter the keyword',
    when: (answers) => {
        //Check answer of previous question(repeated)
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
    type: 'input',
    name: 'logoColour',
    message: 'Enter Hexadecimal (#XXXXXX)',
    when: (answers) => {
        if(answers.logoColourChoice === 'Hexadecimal') {
            return true;
        }
        return false;
    },
    // Vadiadates Code of hexadecial options(repeated)
    validate: (answer) => {
        const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        if (!answer.match(hexRegEx)) {
            throw new Error('Please enter a valid hexadecimal')
        }
        return true;
    }
},
{
    type: 'input',
    name: 'logoText',
    message: 'What is the text? (three character maximum)',
    validate: (answer) => {
        if (answer.length > 3) {
            throw new Error(' Text must be three characters or less! Please try again');
        }
        return true;
    }
},
{   
    type: 'list',
    name: 'textColourChoice',
    message: 'What format is the text colour in?',
    choices: ['Keyword', 'Hexadecimal']
},
{
    type: 'input',
    name: 'textColour',
    message: 'Enter the text colour keys',
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
    type: 'input',
    name: 'textColour',
    message: 'Enter Hexadecimal (#XXXXXX)',
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
    const logo = setShape(data);
    
    //Creates the .svg file
    fs.writeFile('./output/logo.svg',  logo, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
    );
}).catch((err) => console.error(err));