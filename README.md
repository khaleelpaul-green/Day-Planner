Description:
In this assignment the task was to create a day planner that features time slots for work hours that allows the user to input events, a save feature that allows users to save 
their event, and rows that change colour in relation to the current time of day. For the most part, I was able implement these feature without any major issues, and it was not 
until I began working on the colour changing feature that I had reached a significant roadblock. Using Bootstrap, jQuery and Codepen (https://codepen.io/beccakroese/pen/GQgwbx), 
and moment.js,I added the rows, user input area, lock buttons, and got current time by the hour without hassle. However, with the colour changing feature I had trouble getting the
rows to apply the corresponding class (.past, .present, .future) in relation to the time. Initially, had given each time block their own id value in respects to whatever time they 
displayed, then made a for loop thatcycled through these id's and set up if statements that would set the row to one of the aformentioned classes depending on the id values 
relation to current time. When this did not work I was stumped because after console logging the if statements to display whether they were past, present or future they logged as
they were supposed to, which meant that the only issue was the classes were not being applied. After a lot of trial and error, I decided to use an alternative to the for loop and
used an Array with forEach, and instead of using classes to change colour I made a function that changed background colour and called it whenever a condition in the if 
statement was met. Lastly, as for the save feature I was able to get it to work as intended for one row but I couldn't figure out how to use replicate this for the other seven.
As for bugs, the only one I have noticed is that there is a duplicate of the input text after saving, and this is because I use a span tag to display the data from the local 
storage (alternative I came up with as a remedy for the input field not displaying the saved data). 

Link:
https://khaleelpaul-green.github.io/Day-Planner/
