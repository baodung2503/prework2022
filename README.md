# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dung Than**

Time spent: **5** hours spent in total

Link to project: https://blushing-platinum-spatula.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here: 
- Winning the game: <br>
![ezgif com-gif-maker](https://user-images.githubusercontent.com/42872360/164586679-90e4e425-7f5c-4b75-ba77-7ad46e37c0cb.gif)

- Losing the game out of strikes: <br>
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/42872360/164586774-bffe1ed3-8991-4363-89c1-69d16467a58e.gif)

- Losing the game out of time: <br>
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/42872360/164586803-1b468d88-83ff-42e4-ab52-df4e887b5c10.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I refered to StackOverFlow and W3School: <br>
https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element <br>
https://www.w3schools.com/js/js_htmldom_html.asp <br>
https://www.intmath.com/trigonometric-graphs/music.php

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) <br>
I personally had a lot of trouble adding the pictures to the buttons. One of the features that I struggled with the most is making the pictures only appear on click. At first, I over complicated things a bit and was looking for methods online that would allow the button to update views using Javascript code. That clearly did not work out. And then I started reading through the StackoverfLow answers about adding images as background to buttons, which reminded me of some features we used in the tutorials that allows for hidden visibility and updates this visibility only when the buttons are on active in the CSS file. That’s when I realized that I can add a <pic> tag within the buttons and update the visibility of these pictures upon click. That’s why I updated this feature in the startTone function, because on click at the button, function startTone is called. And using this I was able to add images to all six of my buttons and make them appear only on click.
Another issue that I ran into was to keep track of the counting down clock. At first, I wasn’t very sure when to trigger the clock and how to trigger it at the right time. Then I realize the clock should only be triggered at the start of the sequence, which leads me to realize that the playClueSequence() is the function that needs to be changed. I then ran into another issue which is how to reset the clock when the game is stopped. I then tried to add a new variable reset that allows me to reset the clock after each sequence when the user is not trying to stop/reset the game. Not to mention, since I am not very familiar with the setInterval function, I also needed to look online for some examples of the implementation of this method, and that led me to write the function countdown that was to be passed as a parameter for setInterval. 
It was also hard to figure out a way to change the content in the p tag that displays the remaining time on the clock and the remaining strikes that a player has. After researching a bit on StackOverFlow, I realized I can use the method. innerHTML to make changes to the content in the javascript file.



3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) <br>
One question I have about web development is how can we change from one page to another. For now in this project, we are only updating the content of certain buttons/text boxes on one page. However, in a more complicated project where we might be required to switch from one page to a completely different page that does completely different things, how does this change take place in the HTML and Javascript file? Will we then need a clearer organization of the front end and the backend of each page? 
	Another question I have is that given how much web application behaves essentially like an app, how compatible is the Javascript backend with implementing algorithms in other languages. For example, I know that for my lab, we used Python for a machine learning algorithm, and I am just curious as to how flexible the backend of web development is to support these algorithms written in other languages. 



4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) <br>
One feature that I would want to add to this game is a system that would allow players to sign up for an account and join the game with a friend on two different accounts as well as keeping track of a leaderboard of the users with the highest scores. This would probably require the help of a database system that authenticates the account and password of each user as well as their personal best to be put on a leaderboard. In order to allow users to join each other’s games, there might be a unique id for each game played so that users can join using the ids. Lastly, I would like to make the number of keys played in each sequence to be only limited by either the number of strikes or the countdown clock. More specifically, users should be able to play until they run out of strikes or out of time instead of being restricted to only 10 keys for the longest sequence like the present version. This feature would also make the personal high score feature more meaningful. 




## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/oXO8eGR92jo)


## License

    Copyright Dung Than

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
