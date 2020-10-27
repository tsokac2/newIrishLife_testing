# New Irish Life

## From paper to code
![alt text](https://github.com/tsokac2/newIrishLife_testing/blob/master/public/wireframes/w_01.png) ![alt text](https://github.com/tsokac2/newIrishLife_testing/blob/master/public/wireframes/w_02.png)
![alt text](https://github.com/tsokac2/newIrishLife_testing/blob/master/public/wireframes/w_03.png) ![alt text](https://github.com/tsokac2/newIrishLife_testing/blob/master/public/wireframes/w_04.png)


Web-based travel guide for providing correct information how easily start living and working in Ireland.
Finding work, a place to stay where to buy good cheap food in Ireland can be difficult but with the correct preparation, 
advice, and planning this task can be made a lot easier.
This web site is a great starting point.

## UX

**Story:**
* Four years ago, one Croatian landed in Dublin, Ireland. 
On the web, there was a lot of info about life in Ireland, but not essentials information in one place.
Well, not anymore. *

#### User Value
* Definition by HOME section - inform the user of page usage and purpose.
* Definition by TRIP section - pitch users on quick links for travel options, regarding trip planning, prices, destinations road travel in Ireland, and major possibilities.
* Definition by WORK section - user advice of most popular web "job-hunt" services in Ireland as well as education offers.
* Definition by LIFE section - give and introduction of general "life" information in Ireland regarding accommodation, mobile networks, and food shopping 

#### Design process
* #1 Draft all mani section of the web-page - HOME, TRIP, WORK, LIFE
* #2 Brief list all pop-ups/pages - SING IN and LOG IN sub-elements
* #3 List all colors pallets - usage - background color, font color, border.
* #4 List all font styles for best UX 
* #5 Draft web-page layout using Adobe Photoshop for the main layout and Adobe Illustrator for layout components such us Logo, borders, navigation elements
* #6 List possible Fowtawesome Icon for best UX in picture experiences
* #7 List Semantic markup to structure HTML code
* #8 List CSS folder structure for SASS Preprocessor configuration

#### Main Layout
* MENU - Right navigation -- Logo -- Right menu option - Search bar - Sing in  - Log in
* MAIN SECTION AREA - Main section content folowing web site features - HOME - TRIP - WORK - LIFE
* FOOTER -  Footer Menu links - Newsletter Subtraction - Social Media links - Copyrights 

## FEATURES

#### HOME
Simple introduction of web page purpose and what value it is bringing to an end-user. 
Formated in three main sub-sections:
* Movie reference pitch
* Welcoming "Hero" area with picture composition
* Quick box-model overview of the web page mani section

#### TRIP
Section introduction with intro reference and "call-action" headings
Formated in two main sub-sections:
* Flights booking web services quick links
* Ireland public transportation most popular options

#### WORK
Introduction and quick links of the most popular Irish online recruitment sites with an additional section for online education possibilities
Formated in two main sub-sections:
* START HERE - 6 quick links
* CV TIPS - 3 most popular online courses 

#### LIFE
Section with life essentials factors after moving to Ireland
Formated in three main sub-sections:
* Accommodation online search agencies
* Mobile/internet networks providers
* Irish Top food chains

### Features Left to Implement
Expansion plan:
* Implement section for all necessary documentation in Ireland, regarding and PPS number, Bank Account option
* Implement section regarding social events and gathering for necessary user connection expansion 
* Connect to external API for creating user account regarding receiving news and updates - data base configuration
* Offer add for recruitment agencies  - the connection between end-user and possible employer or recruitment agent

## TECHNOLOGIES USED
**HTML** - Semantic elements - nav, section, footer
**CSS3**
**SASS** - Preprocessor - tools included -
* SASS Compiler -  package.json - `"scripts" {"watch" : "node-sass -o public/css public/scss/index.scss -w" }`
* SASS interpolation
* SASS Mixins - Responsive layout functions
* SASS Variables
* SASS Nesting

**BOOTSTRAP 4.5.3**  - Mani layout control - responsive layout usage - helper classe included - example -  .mt, .pt, .d-none .d-md-block, etc...

* Libery provider: https://getbootstrap.com

* Libery URL: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">`

**NODE.JS** -  is an open-source, cross-platform, back-end, JavaScript runtime environment - href="https://nodejs.org/en/

**NPM** - Package manager - Use package - npm i node-sass - https://www.npmjs.com/

**GIT** - usage for project deployment

**GITHUB** - Hosting Platform - https://github.com/

## TESTING
Development and testing cycle in order as follow:
* xxs max - MAX width 240px     - elemet padding - element margins - center allignmet - fluent font size
* xxs   - MIN width 240px       - elemet padding - element margins - center allignmet - fluent font size
* xs    - MIN width - 360px     - elemet padding - element margins - center allignmet - fluent font size
* sm    - MIN width - 576px     - elemet padding - element margins - center allignmet - fluent font size
* md    - MIN width - 768px     - elemet padding - element margins - center allignmet - fluent font size
* lg    - MIN width - 992px     - elemet padding - element margins - center allignmet - fluent font size
* xl    - MIN width - 1200px    - elemet padding - element margins - center allignmet - fluent font size

Testing tools:

MOZILLA FIREFOX -   https://www.mozilla.org/en-US/firefox/new/

GOOGLE CHROME   -   https://www.google.com/chrome 

GITPOD          -   https://www.gitpod.io/
* server startup: `python3 -m http.server`

Code validation platforms:

W3C Markup Validation Service - https://validator.w3.org/

## DEPLOYMNET

Project link - [newIrishLife](https://tsokac2.github.io/newIrishLife/)

GITPOD  -   https://www.gitpod.io/

Tools:
* GIT - `git add . | git commit -m "Description of commit" | git push | git status 



## CREDITS 

### Content
*   Intro pitch - *"The Hobbit: An Unexpected Journey"* - Wiki - <a href="https://en.wikipedia.org/wiki/The_Hobbit_(film_series)" target="_blank">
