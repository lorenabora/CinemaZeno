# CinemaZeno

## Why built this?
This is the face of a fictional site that I built using only frontend languages for a better understanding on how to create a site from scratch. I wanted to use my concepts of design and coding skills in actually a real product because, let’s be honest—most websites aren’t exactly eye candy, so I wanted to challenge that.

## Features
- multi-page site navigation via menu
- standard header/footer for a consistent layout and easy navigation
- login form (NOT at all secure, it was a practice exercise on how to create it; session data is vulnerable)
- animation type carousel (based on `https://freefrontend.com/css-carousels/` with additional changes)
- on-click greetings in several foreign languages (practice exercise using a json file and randomization)

## Languages used
- HTML
- CSS
- JavaScript

## Screenshots
### Homepage
![Homepage](https://github.com/lorenabora/CinemaZeno/blob/main/CinemaZenoSS/Screenshot%202025-08-21%20231230.png)
*Clean home page with a drop down menu for the Gallery and Price list pages.*
![About us](https://github.com/lorenabora/CinemaZeno/blob/main/CinemaZenoSS/Screenshot%202025-08-21%20231303.png)
*Curious about us? Check this page!*
![Gallery](https://github.com/lorenabora/CinemaZeno/blob/main/CinemaZenoSS/Screenshot%202025-08-21%20231351.png)
*For a fictional cinema, I needed some appropriate images with clear and short messages.*
![Movies](https://github.com/lorenabora/CinemaZeno/blob/main/CinemaZenoSS/Screenshot%202025-08-21%20231405.png)
*Top 5 movies available for this week! And maybe some small facts about some well-known actors.*
![Price list](https://github.com/lorenabora/CinemaZeno/blob/main/CinemaZenoSS/Screenshot%202025-08-21%20231421.png)
*Transparency is a must in each business. Maybe you should visit us soon!*

## How to unlock the dynamic js exercises
You need to change the site on localhost, for that you need to:
1. Because the project is static, run in bash/cmd the following command: `python -m http.server 8000`. This will make it easier to connect as localhost to the site.
2. Then open on your browser the site, making sure that the first part of the URL looks like this: `http://localhost:8000/...`. With a refresh, you should be ready to go and explore the interactive applications that I created using js.

## Lessons learnt
1. Center a div? A challenge I laughed it off before I actually spent a full day working on the menu
2. Understanding how each language contributes to the structure and behaviour of the site
3. Styling with CSS, transitions and animations
4. Handling exceptions and building interactive features with JavaScript

## Future Plans
- Maybe make the site more secure (now is the perfect anti-example or a textbook of what NOT to do)
- Possibly integrate a backend and real movie data
