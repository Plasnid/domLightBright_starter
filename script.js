// q3. create a variable called pageBody that will use querySelector to hold onto the bodyTag

// q4.  create an array with the following strings - off, yellow, magenta, cyan, then add your 4 new colours to the array.  Make the array values the same as your css class names for the colours.

/* q5.  set variables for the following
    a.  a variable for holding onto the active colour class to add to the dot
    b.  a width for the board.  This will be an integer representing how many dots wide
    c.  a height for the board.  This will be an integer representing how many dots tall
    d.  an array to hold onto the controls called controlList
*/

function buildHeader(){
    //q6. create a header element for holding the controls for colour
    
    //q7.  put the header element into the page body.
    
    //q8.  create a for loop that will increment through each element of your colour array
    
        //q9a.  for every element of the for loop create a div and add it to the controls
        
        //q9b.  push the newly created element to the controlList array
        
        // q10.  set the text of the div to the text in the colours array
        
        // q11.  add the classes select-colour and not-selected to your control element.  
        
        //*  The command below lets you store data in an html tag, do not change it
        control.dataset.col = colours[i];
        // q12. add a click element to the control that will call the function colorSelectAction
        
        //q13.  append the newly made control to the controls panel
        
    //}
}
function buildBoard(){
    //q14.  creat a div to contain your dot display space, call it playSpace
    
    // the command below will make the new elements id "playSpace"
    playSpace.id = "playSpace";
    //q15.  append playSpace to the pageBody
    
    //q16.  create a for loop for handling the height of the board
    
        //q17. for every new height loop number, make a section tag and append it to the playSpace
        
        //q18.  create a for loop inside the previous for loop for the width of the playspace
        
            //q19.  for every new number in your inner loop make an article tag and append it to thes section tag you made in the outer loop
            
            //q20.  add a click action to the newly made article tag and have it call dotClickAction

        }
    }
}

function colourSelectAction(e){
    for(control of controlList){
        control.classList.add('not-selected');
    }
    if(e.target.dataset.col!="off"){
        colorClass = e.target.dataset.col;
    }else{
        colorClass = null;
    }
    e.target.classList.remove('not-selected');
}

function dotClickAction(e){
    for(clr of colours){
        e.target.classList.remove(clr);
    }
    if(colorClass){
        e.target.classList.add(colorClass);
    }
}
//q21.  call the buildHeader and buildBoard functions