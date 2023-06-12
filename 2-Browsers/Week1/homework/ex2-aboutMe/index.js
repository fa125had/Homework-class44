'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// Select all span tags which nested to a li tag 
const listItems = document.querySelectorAll('li span');
// Iterate through each li 
listItems.forEach((listItem) => {
  // Add list-item class to parent of each span tag which is a li tag
  listItem.parentElement.classList.add('list-item');
  // Check id of selected li and assign proper value
  listItem.id === 'nickname'
    ? (listItem.textContent = 'Farshad')
    : listItem.id === 'fav-food'
    ? (listItem.textContent = 'Pizza')
    : listItem.id === 'hometown'
    ? (listItem.textContent = 'Amsterdam')
    : null;
});
