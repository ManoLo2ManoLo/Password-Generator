# Password Generator Starter Code

# LINKS SECTION
Link to GitHub Repository: https://github.com/ManoLo2ManoLo/Password-Generator.git <br />
Link to Application: https://manolo2manolo.github.io/Password-Generator/

# SCREENSHOT
![Screenshot (286)](https://user-images.githubusercontent.com/88364269/132936770-146d8d81-bb45-440b-b674-777adca6cbc4.png)

# CREDIT
This code was provided by Rutgers University's Coding Bootcamp. The files/codes were revised and edited by Manuel Canas-Menendez.

# TROUBLESHOOTING AND CHANGES
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

# NECESSARY FILES
index.html (the structure of the webpage) <br />
-assets folder <br />
--css folder <br />
---style.css (the styling of the webpage) <br />
--js folder <br />
---script.js (the interface of the webpage) 

# LICENSE
Copyright (c) 2021 ManoLo2ManoLo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
