DOM “Menu” Lab - Part 1

Intro
In the Intro to the DOM lesson we selected and manipulated DOM elements - this lab provides practice doing the same.

For the last step, you will get to research how to create new elements using the document.createElement method and how to add new elements to the DOM using the node.appendChild method.

This is the first of a two-part lab that builds a menu bar with a slide-down submenu.

👀 Note: Several of the tasks in this lab would be better done upfront in the markup or CSS instead of using JS, however the goal of this lab is to provide practice modifying the DOM using JS. In your projects, if the HTML or CSS is known in advance and/or static (unchanging), be sure to code it in HTML and CSS, not JS!


Setup -  index.html
Create a new HTML/CSS/JS Repl and name it “DOM Lab”.

Update the <body> element in the index.html to this:

 <body>
   <header>
     <nav id="top-menu"></nav>
   </header>
   <main></main>
	
   <script src="script.js"></script>
 </body>

❗️ Note: The HTML is complete - DO NOT modify it in any way, do not add any classes, ids or anything.


Setup - main.css
Add the following CSS within main.css

 * {
   box-sizing: border-box;
 }
	
 /* CSS Custom Properties */
 :root {
   --main-bg: #4a4e4d;
   --top-menu-bg: #0e9aa7;
   --sub-menu-bg: #3da4ab;
 }
	
 body {
   font-family: Tahoma, Geneva, sans-serif;
   height: 100vh;
   margin: 0;
   display: grid;
   grid-template-rows: 3rem auto;
   color: white;
 }
	
 .flex-ctr {
   display: flex;
   justify-content: center;
   align-items: center;
 }
	
 .flex-around {
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
	
 nav a {
   line-height: 3rem;
   padding: 0 1rem;
   text-transform: uppercase;
   text-decoration: none;
   color: white;
 }
	
 #top-menu a:hover {
   background-color: var(--sub-menu-bg);
 }
❗️ Note: The CSS is complete - DO NOT modify it in any way.




Tasks 01 - To Complete 

Task 1.0
Select and cache the <main> element in a variable named mainEl.

Task 1.1
Set the background color of mainEl using the --main-bg CSS custom property.

Hint: Assign a string that uses the CSS var() function like this:
'var(--main-bg)'

Task 1.2
Set the content of mainEl to <h1>SEI Rocks!</h1>.

Task 1.3
Add a class of flex-ctr to mainEl.
*Hint: Element.classList API


Tasks 02 - To Complete 

Task 2.0
Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

Task 2.1
Set the height topMenuEl element to be 100%.

Task 2.2
Set the background color of topMenuEl using the --top-menu-bg CSS custom property.

Task 2.3
Add a class of flex-around to topMenuEl.


Tasks 03 - To Complete 

Task 3.0
Copy the following data structure to the top of script.js:

// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
Task 3.1
Iterate over the entire menuLinks array and for each “link” object:

Create an <a> element.
*Hint: Research the document.createElement method.

On the new element, add an href attribute with its value set to the href property of the “link” object.

Set the new element’s content to the value of the text property of the “link” object.

Append the new element to the topMenuEl element.
*Hint: Research the node.appendChild method.


Congrats!

