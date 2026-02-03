# OS-Slots
Tired of picking your character loadouts?  Try rolling them yourself with slots (streamer support available)

# Web version
(Go here)[https://drafter.bestieinslot.com/slots.html]

Note, there is no remote access control options available.  You have to click the button on the page to roll the awakes.  For stream views this can be a little bit annoying so you may want to see the Installation section to learn how to set it up locally with a browser source

# Installation
1. Install (NodeJS)[https://nodejs.org/en/download] 
2. After that's done, open a terminal (on windows/linux type Terminal into the start menu and the first option should do it)
3. using "cd <path>" change your directory to be wherever you want the project to be saved to.  For example, if you have an external drive you may do something like `A:\stream-stuff\`.
4. Clone this repository by typing `clone https://github.com/Moira-Fox/OS-Slots.git`
5. Enter `cd OS-Slots`
6. Run `npm install ws`
6. Run `npm install http-server -g`
7. now you can run `node index.js` to start the app

# Adding as a browser source in OBS
1. Create browser source
2. In the source enter `http://127.0.0.1:8080/slots.html?stream&goalie` or `http://127.0.0.1:8080/slots.html?stream&forward` if you want to roll forward gear options instead.  **Note: after connecting the source you may type "goalie" or "forward" into the terminal to swap to goalie or forward gear options.**
3. Set the width to 915 and the height to 515.  Feel free to increase these if you want a little padding on the sides, but this is the minimum size.
4. Now you can position the browser source as you'd like.

# Using these in combination
When you want to roll the slots (ie: pull the non-existent lever) you can simply press enter in the terminal with no text, or type "go".

# Potential Issues/Things to check
- Make sure the packages are correctly installed
- Make sure you are in the correct directory before installing
- Make sure that the http-server install has the -g flag at the end
- Make sure all of the asset files are present
- If the terminal does not seem to be rolling the loadout when you type "go" or enter an empty line, restart the terminal application and refresh the webpage/browser source.  The webpage/browser MUST be refreshed AFTER the terminal application has started running.

Anything else, create an issue above and I'll try to fix it.
