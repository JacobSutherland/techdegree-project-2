/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
//Define global variables that are referenced in functions
const page = document.querySelector('.page');
const studentsLi = document.querySelectorAll('.student-item');
const pageLength = 10;
let currentPage = 1;
let startingIndex = 0;
let endingIndex;


/*
showPage function determines how many elements are displayed per page by setting display none to elements to elements in increments of 10
@param students - array of students 
@param pageNum - page to show
*/


function showPage(students, pageNum){
   //sets value of ending index
   endingIndex = pageLength * pageNum;
   for(let i = 0; i < students.length; i++){
      //creates range for starting & ending index display
         if( i >= startingIndex && i < endingIndex){
            students[i].style.display = '';
            console.log(i);
         } else {
            students[i].style.display = 'none';
         }
      }
}
//initalizes page by loading page 1
showPage(studentsLi, currentPage);


/*
appendPageLinks function creates and appends buttons elements to the page
@param students - array of students
@param pageNum - page to show
*/


function appendPageLinks(students, pageNum){
   //determines the number of buttons needed based on length of array
   let numberOfBtns = Math.ceil(students.length / 10);
   //creates and appends new button elements and parent elements
   const div = document.createElement('div');
   div.classList.add('pagination');
   const ul = document.createElement('ul');
   div.appendChild(ul);
   page.appendChild(div)
   for(let i = 0; i < numberOfBtns; i++){
      const li = document.createElement('li');
      const btn = document.createElement('a');
      btn.textContent = (i + 1);
      li.appendChild(btn);
      ul.appendChild(li);
   }
   //selects the first button so that it can be assigned active class by default
   const firstButton = ul.children[0].children[0];
   firstButton.classList.add('active');

   //Add event listener to buttons container to utilize the event object on clicks
   div.addEventListener('click', e => {
      //determines if the click is happenning to the right element (links)
      if(e.target.tagName === 'A'){
         const button = e.target; 
         //gets the value of button text content as in integer
         const buttonValue = parseInt(button.textContent);
         //loops through all array items and determines if it has te active class and removes it if a link is clicked
         for(let i = 0; i < ul.children.length; i++){
         
                  if(ul.children[i].children[0].className === 'active'){
                     ul.children[i].children[0].classList.remove('active');
                  }
               }
         //adds active class to newly clicked link
         button.classList.add('active');
         
            //creates new formula to determine the page you want to navigate to based on the integer value of the link
            pageNum = buttonValue;
            startingIndex = 10 * buttonValue - 10;
            showPage(students, pageNum);
      }
   });
}

appendPageLinks(studentsLi, currentPage);
