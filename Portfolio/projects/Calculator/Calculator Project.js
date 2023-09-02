// 1. this.value:
// Means: button me jo value likha hai usko fetch kr lega as a argument.

// 2. Count is parameter.
// 3. Explanation:
// this.value button ka value fetch kr lega as a argument and fir parameter ko send kr  dega jab button click hoga .
// Fir input box ko target krenge , fir input text ka value badlenge = count(count is a parameter) likh kr 


//+(plus sign)means : when we click on button ,num print in text box at different places. 
function btnclick(count){
    document.getElementById("text_box").value+=count;
}

// eval() function : to operate arithmetic operations.
function calculator(){
    document.getElementById("text_box").value=eval(document.getElementById("text_box").value);
}

