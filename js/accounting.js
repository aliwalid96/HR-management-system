


function randomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkTheSalar(level){
  if(level=="Senior"){
      return randomNumber(1500,2000);
  }else if(level=="Mid-Senior"){
      return randomNumber(1000,1500);
  }else if(level=="Junior"){
   return randomNumber(500,1000);

  }
}

function randomIdNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let firstEmployeId=randomIdNumber(0,9999)
let secondEmployeId=randomIdNumber(0,9999)
let thirdEmployeId=randomIdNumber(0,9999)
let forthEmployeId=randomIdNumber(0,9999)
let fifthEmployeId=randomIdNumber(0,9999)
let sixthEmployeId=randomIdNumber(0,9999)
let seventhEmployeId=randomIdNumber(0,9999)

let firstEmployeSalary= checkTheSalar('Senior');
let secondEmployeSalary= checkTheSalar('Senior');
let thirdEmployeSalary= checkTheSalar('Senior');
let fourthEmployeSalary= checkTheSalar('Mid-Senior');
let fifthEmployeSalary= checkTheSalar('Senior');
let sexthEmployeSalary= checkTheSalar('Junior');
let seventhEmployeSalary= checkTheSalar('Mid-Senior');

function  calcualteTaxe(salary){
  return salary*0.075;
}

let firstEmployeNetSalary=firstEmployeSalary-calcualteTaxe(firstEmployeSalary);
let secondEmployeNetSalary=secondEmployeSalary-calcualteTaxe(secondEmployeSalary);
let thirdEmployeNetSalary=thirdEmployeSalary-calcualteTaxe(thirdEmployeSalary);
let fourthEmployeNetSalary=fourthEmployeSalary-calcualteTaxe(fourthEmployeSalary);
let fifthEmployeNetSalary=fifthEmployeSalary-calcualteTaxe(fifthEmployeSalary);
let sexthEmployeNetSalary=sexthEmployeSalary-calcualteTaxe(sexthEmployeSalary);
let seventhEmployeNetSalary=seventhEmployeSalary-calcualteTaxe(seventhEmployeSalary);



function TheConstructor(employeeID,fullName,department,level,salary,imgurl){
  this.employeeID=employeeID;
  this.fullName=fullName;
  this.department=department;
  this.level=level;
  this.salary=salary;
  this.imgurl=imgurl;

  TheConstructor.allEmployee.push(this);

}

TheConstructor.allEmployee=[];




let firstEmploye= new TheConstructor (firstEmployeId,"Ghazi","Administration","Senior",firstEmployeNetSalary,"Ghazi");
let secondEmploye= new TheConstructor (secondEmployeId,"Lana ali","Finance","Senior",secondEmployeNetSalary,"Lana");
let thirdtEmploye= new TheConstructor (thirdEmployeId,"Tamara Ayoub","Marketing	","Senior",thirdEmployeNetSalary,"Tamara");
let fourthEmploye= new TheConstructor (forthEmployeId,"Safi Walid","Administration","Mid-Senior",fourthEmployeNetSalary,"Safi");
let fifthEmploye= new TheConstructor (fifthEmployeId,"OmarZaid","Development	","Senior",fifthEmployeNetSalary,"Omar");
let sixthEmploye= new TheConstructor (sixthEmployeId,"Rana Saleh","Development","Junior",sexthEmployeNetSalary,"Rana");
let seventhEmploye= new TheConstructor (seventhEmployeId,"Hadi","Finance","Mid-Senior",seventhEmployeNetSalary,"Hadi");

let Administration=0;
let Marketing=0;
let Development=0;
let Finance=0;
let TotalNumberOfEmployee=Administration+Marketing+Development+Finance;


function calaclateNumberOfEmplolyee(arrOfObject){
for(let i=0;i<arrOfObject.length;i++){
if(arrOfObject[i].department=="Administration"){
  Administration ++;
}else if(arrOfObject[i].department=="Marketing"){
  Marketing++;
}else if(arrOfObject[i].department=="Development"){
  Development++;
}else if(arrOfObject[i].department=="Finance"){
  Finance++;

}

}
}



let AdministrationSalary=0;
let MarketingSalary=0;
let DevelopmenSakaryt=0;
let FinanceSalary=0;

let totalSalaryForAll=MarketingSalary+DevelopmenSakaryt+FinanceSalary+AdministrationSalary;

let AdministrationAvg=AdministrationSalary/Administration;
let MarketingAvg=MarketingSalary/Marketing;
let DevelopmentAvg=DevelopmenSakaryt/Development;
let FinanceAvg=FinanceSalary/Finance;
let totalAvg=AdministrationAvg+MarketingAvg+DevelopmentAvg+FinanceAvg;

function calaclatSalaryOfDepartment(arrOfObject){
for(let i=0;i<arrOfObject.length;i++){
if(arrOfObject[i].department=="Administration"){
  AdministrationSalary=AdministrationSalary+arrOfObject[i].salary;
}else if(arrOfObject[i].department=="Marketing"){
  MarketingSalary=MarketingSalary+arrOfObject[i].salary;
}else if(arrOfObject[i].department=="Development"){
  DevelopmenSakaryt=DevelopmenSakaryt+arrOfObject[i].salary;
}else if(arrOfObject[i].department=="Finance"){
  FinanceSalary=FinanceSalary+arrOfObject[i].salary;

}

}
}
calaclatSalaryOfDepartment(TheConstructor.allEmployee);





calaclateNumberOfEmplolyee(TheConstructor.allEmployee);

render();





function settingItem(){
let data = JSON.stringify(TheConstructor.allEmployee);// convert the data to JSON format 
localStorage.setItem('employeeD',data)


}


//2. get date : take the data from local storage 

function gettingItem(){
let stringObj = localStorage.getItem('employeeD');
// console.log(stringObj);
let parsObj = JSON.parse(stringObj);
// console.log(parsObj);
if (parsObj !== null){
  TheConstructor.allEmployeep = parsObj;
  
}



}

gettingItem();



function render(){

  // document.write(`<tr><td> ${this.fullName}</td> <td> ${this.salary}</td></tr>`);
  let theSection=document.getElementById('accForm');

  let divEl=document.createElement('div');
  theSection.appendChild(divEl);
  
 
 let tableE1=document.createElement('table');
 divEl.appendChild(tableE1);
 
 let trE=document.createElement('tr');
 tableE1.appendChild(trE);
 
 let thE=document.createElement('th');
 trE.appendChild(thE);
 thE.textContent='department Name';
 
 
 let thE1=document.createElement('th');
 trE.appendChild(thE1);
 thE1.textContent="number of employee";
 
 let thE2=document.createElement('th');
 trE.appendChild(thE2);
 thE2.textContent="total salary";
 
 let thE3=document.createElement('th');
 trE.appendChild(thE3);
 thE3.textContent="Avareg";
 

 let tr2=document.createElement('tr');
 tableE1.appendChild(tr2) ;
 
 let td1=document.createElement('td');
 tr2.appendChild(td1);
 td1.textContent="Administration";
 
 let td2=document.createElement('td');
 tr2.appendChild(td2);
 td2.textContent=Administration;

 let td3=document.createElement('td');
 tr2.appendChild(td3);
 td3.textContent=AdministrationSalary;

 let td4=document.createElement('td');
 tr2.appendChild(td4);
 td4.textContent=AdministrationAvg;




 let tr3=document.createElement('tr');
 tableE1.appendChild(tr3) ;
 
 let td5=document.createElement('td');
 tr3.appendChild(td5);
 td5.textContent="Markiting";
 
 let td6=document.createElement('td');
 tr3.appendChild(td6);
 td6.textContent=Marketing;

 let td7=document.createElement('td');
 tr3.appendChild(td7);
 td7.textContent=MarketingSalary;

 let td8=document.createElement('td');
 tr3.appendChild(td8);
 td8.textContent=MarketingAvg;
 

 
 let tr4=document.createElement('tr');
 tableE1.appendChild(tr4) ;
 
 let td9=document.createElement('td');
 tr4.appendChild(td9);
 td9.textContent="Finance";
 
 let td10=document.createElement('td');
 tr4.appendChild(td10);
 td10.textContent=Finance;

 let td11=document.createElement('td');
 tr4.appendChild(td11);
 td11.textContent=FinanceSalary;

 let td12=document.createElement('td');
 tr4.appendChild(td12);
 td12.textContent=FinanceAvg;



 let tr5=document.createElement('tr');
 tableE1.appendChild(tr5) ;
 
 let td13=document.createElement('td');
 tr5.appendChild(td13);
 td13.textContent="Development";
 
 let td14=document.createElement('td');
 tr5.appendChild(td14);
 td14.textContent=Development;

 let td15=document.createElement('td');
 tr5.appendChild(td15);
 td15.textContent=DevelopmenSakaryt;

 let td16=document.createElement('td');
 tr5.appendChild(td16);
 td16.textContent=DevelopmentAvg;


 let tr6=document.createElement('tr');
 tableE1.appendChild(tr6) ;
 
 let td17=document.createElement('td');
 tr6.appendChild(td17);
 td17.textContent="Total ";
 
 let td18=document.createElement('td');
 tr6.appendChild(td18);
 td18.textContent=TotalNumberOfEmployee;

 let td19=document.createElement('td');
 tr6.appendChild(td19);
 td19.textContent=totalSalaryForAll;



 
 let td20=document.createElement('td');
 tr6.appendChild(td20);
 td20.textContent=totalAvg;



}



