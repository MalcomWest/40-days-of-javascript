// Different ways JS is loaded

// 1. When we write JS in head tag: it laods JS before HTML 
// if JS codes targets a HTML element then a error will be shown 

//2. end of body tag: loads JS after HTML is fully loaded 
// if HTML code is very big then JS will be loaded after a long time

//3. async loading: loads JS and HTML side by side
// if JS loads beofre HTML is completely error like (1) will be shown

//4. defer: Loads HTML and JS side by side but runs JS after whole HTML is loaded
// no error like before encountered 