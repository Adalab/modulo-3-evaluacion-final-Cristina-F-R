# HARRY POTTER'S CHARACTER WEB:

The objective was to create a search engine to find informtion abour Harry Potter`s characters. The user can filter by name or by the house where the character belongs.


## Technologies used:

The technologies we used are: React and Scss.


## How was it made and how it works: 

This project was made with [Create React App](https://github.com/facebook/create-react-app).

I used the React template kit provided by Adalab to create the file structure. Then, I created the necessary components for the web and made the links between them to be fully functional. 

The web connects to an Api ( https://hp-api.onrender.com/ ) to get the information about Harry Potter`s characters. Firt of all, it uploads the Character list from Gryffindor House and the user can filter them by writting on the form and/or selecting a different House. If the user searches for a name that is not matching with any character the web will show a message to inform the user of it. The search engine works as well when the user writtes in uppercase. If the user does a search and wants to expand the information proportiones by the list he can click to a card and it will show further information on a different URL (a dinamic one for each character). When the user is on that detailed card he can go back to the landing page by clickin on a button and the landing page will keep the previous searched elements. The form aslo have a reset button that returns the default card list and cleans the form.

## Bonus:

- I used grid to made the list of card showed on the landing page.
- All the page hace a responsive design that adapts to different screen sizes. 
- The detailed cards shows a different icon depending on the state of the character (an skull for the death ones and a heart for the alive ones) and it shows the emblem of the house to which the character belongs.
- There is a reset button that resets the searchet elements ande returns the default card list.
