# Rock, Paper, Scissors
Rock, Paper Scissors is a game where the user plays against the machine which generates random results.
 The site will be targeted toward people who enjoy playing rock, paper, scissors game. 

![Responsice Mockup](assets/images/readme/responsive.png)

## Design

### Typography

Google Fonts was used for the Josefin Sans, it is used for the entire site. It is a sans-serif font. It was chosen as it looked clean and modern.

![Font](assets/images/readme/font.png)

### Imagery

The images were taken from clipartmax.com. I have credited these in the [Credits](#credits) section.

### Wireframes

Wireframes were created for mobile and desktop. The wireframes were generates using balsamic, and the images were modified with canvas.

![wireframe](assets/images/readme/balsamic.png)

## Features

### Existing Features

- __The Rock, Paper, Scissors Logo and Heading__

  - Featured at the top of the page, the Rock, Paper, Scissors logo and heading shows the name of the game and an image that helps the user to identify the game. It is used a font that is clear and easily readable by the user.

![Logo](assets/images/all.png)

- __The Game Options__

  - This section will allow the user to play the game. The users will be able to easily see buttons with icons that allow them to play.
  - The users will be able to select between rock, paper or scissors to be played, they will be playing by clicking on the different buttons with icons, the chosen buton will change its color to match the color of the players choice displayed under the buttons.
  
![Buttons area](assets/images/readme/buttons-area.png)

- __The Choice Area__

  - The choice area is where the users will be able to see their choice and the computer generated choice.
  - Once users have made their selection by clicking on on of the buttons a pop-up will make it known to the users if they won or lose and the images of their and the computer choices will be shown.

![Choice area](assets/images/readme/choice-area.png)

- __The Score Area__

  - This section will allow the users to see exactly how many times they and the computer won.

![Score area](assets/images/readme/score-area.png)

- __The Footer__

  - The footer section shows the rtules of the game.

### Features Left to Implement

  - It could have some animation when the player wins or loses.

### Accessibility

Alt-labels are used for images. Aria-labels for screen readers are implemented at certain places, also semantic elements are used so the page is easy to navigate.

## Testing

### CSS validation

The CSS code was validated using W3C tool.
![css validation](assets/images/readme/css-test.png)

### HTML validation

The HTML code was validated using the W3C tool.
![html validation](assets/images/readme/html-test.png)

### JS validation

The JavaScript code was validated using the W3C tool.
![js validation]()

- JavaScript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 11 functions in this file.
    - Function with the largest signature takes 2 arguments, while the median is 0.
    - Largest function has 10 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Performance

Website performance was checked with Lighthouse tool.
![lighthouse test]()

### Accessibility

To check accessibility the Wave Web Accessibility Evaluation tool was used. One error was detected, refer to [Bugs](##Bugs).
![Wave test](assets/images/readme/wave-test.png)

### Manual testing

Manual testing was done to check common elements and how the perform on different devices:

1.	Clicking on any of the buttons loads the right image on the player choice and the computer choice is automatically generated, trigering the win/lose alert and updating the scores
2.  Confirmation that the image displayed, the result and the update of scores were correct
3.	The responsiveness of the web page

Following devices and browsers were used:

Laptop:

- Macbook Pro

Mobile Devices:

- iPhone SE
  
Browsers:

- Google Chrome
- Safari
  
### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.

## Technologies used

__GitHub__ – storage and deployment<br>
__Codeanywhere__ – IDE used to write, edit, commit and push the code to GitHub<br>
__Google Fonts__ – import font<br>
__Font Awesome__- import social media and contact icons<br>
__Favicon Generator Website__ – convert logo<br>
__Balsamiq__ – wireframes design<br>
__Am I Responsive?__ – check responsiveness of the website<br>
__Python__ - python 3 via terminal to preview my site using a local http server<br>
__HTML5__ - build the core of the site<br>
__CSS__ - style the website and define fonts and layout<br>
__Google Chrome__ - build and test the website<br>
__Canva__ - change format of images<br>

### Languages used

- HTML
- CSS
- Javascript

## Deployment

The site was deployed to GitHub pages.
The project was developed in CodeAnywhere application, where it was committed and pushed to GitHub where it was deployed.
The live link can be found here - <https://judit3.github.io/rock-paper-scissors/>

### How to deploy

1. Log into your account on github
2. Go to the repository of this project, Judit3/rock-paper-scissors
3. Go to the Settings tab of this GitHub repository
4. On the left-hand sidebar, in the Code and automation section, select Pages
5. Make sure:

- Source is set to 'Deploy from Branch'
- Main branch is selected
- Folder is set to / (root)

6. Under Branch, click Save
7. Go back to the Code tab. Wait a few minutes for the build to finish and refresh your repository
8. On the right-hand side, in the Deployments section, click on 'github-pages'
9. Click on the "open in another tab" symbol to see the live site. The URL will be judit3.github.io/rock-paper-scissors/

### Local development

#### How to clone

1. Log into your account on github
2. Go to the repository of this project, Judit3/rock-paper-scissors
3. Click on the code button, and copy your preferred clone link
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory
5. Type 'git clone' into the terminal, paste the link you copied in step 3 and press enter

#### How to fork

To fork the repository:

1. Log in (or sign up) to Github
2. Go to the repository for this project, Judit3/rock-paper-scissors
3. Click the Fork button in the top right corner

## Credits

### Code used

1.	Some code was taken and modified from Love Maths Project Challenge and from the example of rock, paper scissors project provided by CodeInstitute.
4.	The rest of the code was created by the developer.

### Content

Content was partially written and created by the developer with inspiration from other Codeinstitute projects.

### Media

Images were downloaded from website clipartmax.com (<https://www.clipartmax.com) 

### Acknowledgments

My friends for continuous support and helpful feedback.
