
// Display a string for the user. This is in the HTML file.


// Set three variables to get the numbers for the combination.
const a = 5 * 2;
const b = a * 4;
const c = b - 1;

/*
Create a dialog box with the string and code
    - Pull the `<p>` tag from the HTML file and display it in the dialog box.
*/
const vault = document.getElementsByTagName("p")[0].innerHTML
const vault2 = document.getElementsByTagName("p")[1].innerHTML

window.confirm(vault + "\n" + "\n" + vault2 + " " + a + "-" + b + "-" + c + ".")

