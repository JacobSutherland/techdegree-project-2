/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const page = document.querySelector('.page');
const studentList = document.querySelector('.student-list');
const studentsLi = document.querySelectorAll('.student-item');
const pageLength = 10;
let startingIndex = 0;
let endingIndex;


console.log(studentsLi.length);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(students, pageNum){
   endingIndex = pageLength * pageNum;
   for(let i = 0; i < students.length; i++){
         if( i >= startingIndex && i < endingIndex){
            students[i].style.display = '';
            console.log(i);
         } else {
            students[i].style.display = 'none';
         }
      }
      console.log(startingIndex, endingIndex);
}







/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(students, pageNum){
   let numberOfBtns = Math.ceil(students.length / 10);
   const div = document.createElement('div');
   div.classList.add('pagination');
   const ul = document.createElement('ul');
   div.appendChild(ul);
   page.appendChild(div)
   for(let i = 0; i < numberOfBtns; i++){
      const li = document.createElement('li');
      const btn = document.createElement('a');
      btn.textContent = (i);
      li.appendChild(btn);
      ul.appendChild(li);
   }
   
   showPage(students, pageNum);
}

appendPageLinks(studentsLi, 1);


// Remember to delete the comments that came with this file, and replace them with your own code comments.