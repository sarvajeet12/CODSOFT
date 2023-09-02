let dob = document.getElementById("dob");
let currDate = document.getElementById("currDate");

const calcAge = ()=>{
    if(dob.value == "" || currDate.value == ""){
        document.getElementById("result").innerText = "Please Enter Your Date of Birth and Current Date";
    }else{
        calcAgeDiff(dob.value ,currDate.value);
    }
}

const calcAgeDiff = (dob,currDate) =>{
    // get year month days indivisually
    let dobY = parseInt(dob.substring(0,4), 10);
    let dobM = parseInt(dob.substring(5,7), 10);
    let dobD = parseInt(dob.substring(8,10), 10);

    let currDateY = parseInt(currDate.substring(0,4), 10);
    let currDateM = parseInt(currDate.substring(5,7), 10);
    let currDateD = parseInt(currDate.substring(8,10), 10);

    let orginalM = currDateM;

    let daysAgeDiff;let monthAgeDiff; let yearAgeDiff
    //days difference
     
     if(currDateD>=dobD){
         daysAgeDiff = currDateD - dobD;
         //console.log(daysAgeDiff);
     }else{
         currDateM--;
         noOfDays = daysInMonth(orginalM,currDateY);
         daysAgeDiff = noOfDays + currDateD - dobD ;
         //console.log(daysAgeDiff);
     }

    // month difference
    
    if(currDateM >= dobM){
        monthAgeDiff = currDateM - dobM;
        //console.log(monthAgeDiff);
    }else{
        currDateY--;
        monthAgeDiff = 12 + currDateM - dobM;
        //console.log(monthAgeDiff);
    }

    // year difference
    yearAgeDiff = currDateY - dobY;
    //console.log(yearAgeDiff);

    //output
    document.getElementById("result").innerText = 
    `${yearAgeDiff} years, ${monthAgeDiff} months,  ${daysAgeDiff} days`;

}

const daysInMonth = (month, year) =>{
    // console.log("month: " + month);
    // console.log("year : " + year);
    let days =  new Date(year, month, 0).getDate(); // result : no of days in a month wrt year
    console.log("no of days :" +  days);
    return days;
}
