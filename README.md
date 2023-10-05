# Tech-Blog

  [![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://choosealicense.com/licenses/mit/)

  ## Description

  This project uses the `express`, `express-session`, `sequelize`, `mysql2`, `dotenv`, `bcrypt` and `handlebars` packages to build a CMS-style blog app where developers can publish their blog posts and comment on other developer's posts too. The app follows the MCV paradigm and is deployed to Heroku. The app also has the following capabilities:

 * adding a database name, MySQL username, and MySQL password to an environment variable file connects to a database using Sequelize
 * entering schema and seed commands creates a development database and seeds it  with test data
 * entering the command to invoke the application starts the server and the Sequelize models are synced to the MySQL database
 * opening API GET routes in Insomnia for categories, products, or tags displays the data for each of these routes in a formatted JSON
 * when a user visits the site for the first time, they are presented with the homepage, which includes existing blog posts if any have been       
   posted; navigation links for the homepage and the dashboard; and the option to log in
 * clicking on the hompate option takes the user to the homepage
 * clicking on any other links in the navigation leads the user to either sign up or sign in
 * when the user chooses to sign up, then they are prompted to create a username and passwor
 * clicking on the sign-up button saves the user's credentials and logs the user into the site
 * when a user revisits the site at a later time and chooses to sign in, then they are prompted to enter their username and password
 * when the user is signed in to the site, the the user sees navigation links for the homepage, the dashboard, and the option to log out
 * clicking on the homepage option in the navigation takes the user to the homepage and presents existing blog posts that include the post title 
   and the date created
 * clicking on an existing blog post presents the post title, contents, post creator’s username, and date created for that post and havs the option 
   to leave a comment
 * entering a comment and clicking on the submit button while signed in, saves the comment and updates the post to display the comment, the comment 
  creator’s username, and the date created
 * clicking on the dashboard option in the navigation takes the user to the dashboard and presents any blog posts the user has already created and 
   the option to add a new blog post
 * clicking on the button to add a new blog post prompts the user to enter both a title and contents for their blog post
 * clicking on the button to create a new blog post saves the title and contents of the user's post and takes the user back to an updated dashboard 
  with their new blog post
 * clicking on one of their existing posts in the dashboard, the user is able to delete or update their post and takes them back to an updated 
   dashboard
 * licking on the logout option in the navigation signs the user out of the site
 * when a user is idle on the site for more than a set time, then the user is able to view posts and comments but is prompted to log in again 
   before they can add, update, or delete posts

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  1. If not already installed, download [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com) (if using Windows)

  2. Clone the `tech-blog` repository to your machine from the command line (Git Bash on Windows) or terminal (Mac)

  ```bash
      git clone git@github.com:pinkhaze/tech-blog
  ```

  3. In your code editor of choice, navigate to the `tech-blog` repository

  4. Open a new terminal and type the following command to initialize a new Node project:

  ```bash
      npm init -y
  ```

  5. Type the following command to install the `express`, `dotenv`, `mysql2` and `sequelize`, `handlebars` and `bcrypt` packages:

  ```bash
      npm i express
      npm i dotenv
      npm i mysql2
      npm i sequelize
      npm i handlebars
  ```

  6. In a separate terminal, type the following command to connect to mySQL and then enter your password:

  ```bash
      mysql -u root -p
  ```

  7. Source the schema by typing the following command:

  ```bash
      source db/schema.sql
  ```

  8. In the other terminal, type the following command to seed the data:

  ```bash
      node seeds/index.js
  ```

  9. Start the application by entering the following command:

  ```bash
      node server.js
  ```

  ## Usage

  [Deployed Application](https://git.heroku.com/still-tundra-52553.git)

  ## Credits

  [Module 14 Mini Project](https://git.bootcampcontent.com/University-of-Minnesota/UofM-VIRT-FSF-PT-04-2023-U-LOLC-ENTG/-/tree/main/14-MVC/01-Activities/28-Stu_Mini-Project)

  ## License

  [MIT License](https://choosealicense.com/licenses/mit/)

  ## Contribute

  NA

  ## Tests

  NA

  ## Questions

  Check out the other projects on my GitHub profile at [pinkhaze](https://github.com/pinkhaze).