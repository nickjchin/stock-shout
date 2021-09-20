# stock-shout [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributors](#contributors)
- [Questions](#questions)

## Description

As the user, I would like to be able see stock trends from twitter based upon user tweets
As a user, I would like to create an account to log in and save a watchlist
As a valid user, I would like to be able to track stocks and their tweets based upon my watchist
I shoud to be able to add and delete stocks from my watchlist

## Installation

The dependencies that this application uses are express, bcrypt, sequelize, dotenv, handlebars, connect-session-sequelize, express-handlebars, express-session ,mysql2, needle, and socket.io.

Ensure these are in you package.json upon cloning

```
==== GitBash ====
npm i [any missing dependencies]
mysql -u root -p

==== MySQL ====
Enter password: ******

source db/schema.sql (if you opened terminal from the root folder)
source schema.sql (if you opened terminal from from the db folder)

==== GitBash ====
node seeds/seed.js

npm start
```

## Usage

### - To use deployed app in browser

[https://stock-shout.herokuapp.com/](https://stock-shout.herokuapp.com/)

### - To add to repo

1. Clone the repo
2. Open in vscode
3. Run the installation step to install missing packages and initialize mysql
4. Add your code
5. Open browser
6. Type into browser:

```
localhost:3001/
```

## Demo

### Landing Page

![homepage](/public/img/main.PNG)

### Sign Up

![signup](/public/img/signup.PNG)

### Login Page

![login](/public/img/login.PNG)

### Profile

![profile](/public/img/profile.PNG)

## Contributors

[Masud Ahmed](https://www.github.com/masudahmed88)  
[Michael Rohmann](https://github.com/mrohmann)  
[Nicholas Chin](https://www.github.com/nickjchin)

## Questions

If you have further questions you can email us at:  
[masudahmed88@gmail.com](mailto:masudahmed88@gmail.com?subject=[GitHub%Stock%Shout])  
[mrohmann@gmail.com](mailto:mrohmann@gmail.com?subject=[GitHub%Stock%Shout])  
[njchin23@gmail.com](mailto:njchin23@gmail.com?subject=[GitHub%Stock%Shout])
