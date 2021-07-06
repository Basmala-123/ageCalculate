
const month=[31,28,31,30,31,30,31,31,30,31,30,31];

function calculateAge(){
    let today= new Date();
    let birthDate= new Date(document.getElementById("BirthDate").value)  ;
    
    console.log(birthDate);
    let BirthMonth,BirthYear,BirthDays;

    let birthDetails = {    
        date: birthDate.getDate(),
        month: birthDate.getMonth()+1,
        year: birthDate.getFullYear()
    }

    let currentDate= today.getDate();
    let currentMonth= today.getMonth()+1;
    let currentYear= today.getFullYear();

    leapChecker(currentYear);

    if ( birthDetails.year > currentYear || birthDetails.month > currentMonth && birthDetails.year == currentYear ||
         birthDetails.date > currentDate && birthDetails.year == currentYear && birthDetails.month == currentMonth)
         {
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
         }
       
         BirthYear= currentYear -birthDetails.year; 

         if(currentMonth >= birthDetails.month)
         {
             BirthMonth = currentMonth - birthDetails.month;
         }else
         {
            BirthYear--;
            BirthMonth= 12 + currentMonth - birthDetails.month;
         }
         if(currentDate >= birthDetails.date)
         {
            BirthDays = currentDate - birthDetails.date;
         }else
         {
         BirthMonth--;
         let days=month[currentMonth-2];
         BirthDays= days + currentDate - birthDetails.date;
         if (BirthMonth<0)
         {
            BirthMonth=11;
            BirthYear--;
         }
         }
         displayResult(BirthDays,BirthMonth,BirthYear);
         
       
}
function displayResult(bdays,bmonths,byears){
    document.getElementById("years").textContent=byears;
    document.getElementById("months").textContent=bmonths;
    document.getElementById("days").textContent=bdays;
}

function leapChecker(year){
     if(year%4==0||(year%100==0&&year%400==0)){
         month[1]=29;
     }else{
        month[1]=29;
     }
    
} 
