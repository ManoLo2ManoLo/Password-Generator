# Password Generator

## Link(s)
Link to Application: https://manolo2manolo.github.io/Password-Generator/

## Table of Contents
* [Description](#description)
* [Screenshot](#screenshot)
* [Credit](#credit)

## Description
The html and css files were already structured to how the password generator was going to be laid out. On the javascript file, the only thing that needed to be created was a function to gather user input on password requirements, then generate a password based on those requirements. The requirements are questions with variables attached to it with window popups.

There are also varaibles that are called charList and randomPassword that will be explained later in this readme.

First Question: How long do you want the password to be? (8-128) <br />
    On this question, it is displayed as a open ended window.prompt. To ensure the user inputs a valid number, there is a do-while loop that will continue to loop within itself asking the same question until the user inputs a valid response.

Second Question: Does your password need an lowercase characters? <br />
    On this question, it is displayed as a true/false window.confirm, where the user presses okay so that they confirm that that they do want lowercase characters. If the user were to press cancel, they are declining that they want lowercase characters. There is an if statement that if the user confirms that they want lowercase characters, then it will add those characters into the variable charlist. Whatever that is already in charlist would not be removed but added to whatever was previously in the list.

Third Question: Does your password need an uppercase characters? <br />
    On this question, it is displayed as a true/false window.confirm, where the user presses okay so that they confirm that that they do want uppercase characters. If the user were to press cancel, they are declining that they want uppercase characters. There is an if statement that if the user confirms that they want uppercase characters, then it will add those characters into the variable charlist. Whatever that is already in charlist would not be removed but added to whatever was previously in the list.

Fourth Question: Does your password need a numeric characters? <br />
    On this question, it is displayed as a true/false window.confirm, where the user presses okay so that they confirm that that they do want numeric characters. If the user were to press cancel, they are declining that they want numeric characters. There is an if statement that if the user confirms that they want numeric characters, then it will add those characters into the variable charlist. Whatever that is already in charlist would not be removed but added to whatever was previously in the list.

Fifth Question: Does your password need a special characters? <br />
    On this question, it is displayed as a true/false window.confirm, where the user presses okay so that they confirm that that they do want special characters. If the user were to press cancel, they are declining that they want special characters. There is an if statement that if the user confirms that they want special characters, then it will add those characters into the variable charlist. Whatever that is already in charlist would not be removed but added to whatever was previously in the list.

After the user answers all the password requirement, there is a for loop that will continue to loop a random character from the charList into the variable randomPassword. It will loops the amount of times you set the length of the password to be, adding a character into randomPassword without deleting what was previously added.

Throughout the whole file, there were console.log for each variable to ensure the code was running as planned. 

## Screenshot



## Credit
This application was typed and revised Manuel Canas-Menendez (ManoLo2ManoLo). <br />

* [Github](https://github.com/ManoLo2ManoLo)
* [Portfolio](https://manolo2manolo.github.io/React-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/manuel-canas-menendez-33354b21b/)

# LICENSE
