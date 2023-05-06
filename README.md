# rock-paper-scissors

Branch for main game to add a UI using only the DOM, aside from the buttons, which are in html
Once dom methods and logic is working properly, the UI will be overhauld to actually be stylish!

logic is tested and working properly and base UI is completed
My idea was to convert this into being a runescape themed RPS using the combat triangle of melee, ranged, and mage combat styles. I meed to procure pixel images of these icons, most likely using the protect prayers.

all font would be the yellow runescape font and the background would be the "grayscale cobblestone" pattern with the two torches on the side with roling and color changing fire. Will there be trade mark issues/can i use this likeness if its not being monetized?

need to brainstorm a full design

Potential Refactoring:
1. would like to use a switch statement instead of the multiple line if..else statements for play round()
2. use a singular array for both computer choice and play choice. play choice is just an equality check for the button mathing the string text
3. use more arrow functions
4. displaying the round results for when the computer wins, as its jsut a generic "you lose" ties in with 1. 
5. change the margins used for buttons into dom methods instead of CSS