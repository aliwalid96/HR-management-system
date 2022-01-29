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



let employeeForm= document.getElementById('theEmployeeForm');
employeeForm.addEventListener('submit', addNewEmployee);

function addNewEmployee(event){
event.preventDefault();

let fullName = event.target.fullName.value;
let employeeId = event.target.name.value;  
let imgUrl=event.target.imgUrl.value;
let department=event.target.departure.value;
let level=event.target.level.value;
let salary= checkTheSalar(level);



let newEmployee = new TheConstructor(employeeId,fullName,department,level,salary,imgUrl);
settingItem();
render();

}



function render(){
 // document.write(`<tr><td> ${this.fullName}</td> <td> ${this.salary}</td></tr>`);
 let theSection=document.getElementById('employee');
 for(i=0;i<TheConstructor.allEmployee.length;i++){
let theEmployee=TheConstructor.allEmployee[i];


let divEl=document.createElement('div');
theSection.appendChild(divEl);

let imgEl = document.createElement('img');
divEl.appendChild(imgEl);
imgEl.setAttribute('src', `./${theEmployee.imgurl}.jpg`|| theEmployee.imgurl);
imgEl.setAttribute('alt',theEmployee.name);

let pEmpId=document.createElement('p')
divEl.appendChild(pEmpId);
pEmpId.textContent=theEmployee.employeeID;

let pEmpName=document.createElement('p');
divEl.appendChild(pEmpName);
pEmpName.textContent=`Name : ${theEmployee.fullName}`;

let selectDept=document.createElement('p');
divEl.appendChild(selectDept);
selectDept.textContent=`department ${theEmployee.department}`;

let selectlevel=document.createElement('p');
divEl.appendChild(selectlevel);
selectlevel.textContent=`level ${theEmployee.level}`;



let pSalary=document.createElement('p');
divEl.appendChild(pSalary);
pSalary.textContent=theEmployee.salary;

}


}




let firstEmploye= new TheConstructor (firstEmployeId,"Ghazi","Administration","Senior",firstEmployeNetSalary,"Ghazi");
let secondEmploye= new TheConstructor (secondEmployeId,"Lana ali","Finance","Senior",secondEmployeNetSalary,"Lana");
let thirdtEmploye= new TheConstructor (thirdEmployeId,"Tamara Ayoub","Marketing	","Senior",thirdEmployeNetSalary,"Tamara");
let fourthEmploye= new TheConstructor (forthEmployeId,"Safi Walid","Administration","Mid-Senior",fourthEmployeNetSalary,"Safi");
let fifthEmploye= new TheConstructor (fifthEmployeId,"OmarZaid","Development	","Senior",fifthEmployeNetSalary,"Omar");
let sixthEmploye= new TheConstructor (sixthEmployeId,"Rana Saleh","Development","Junior",sexthEmployeNetSalary,"Rana");
let seventhEmploye= new TheConstructor (seventhEmployeId,"Hadi","Finance","Mid-Senior",seventhEmployeNetSalary,"Hadi");




render();


function settingItem(){
let data = JSON.stringify(TheConstructor.allEmployee);// convert the data to JSON format 
localStorage.setItem('employeeD',data)


}




//2. get date : take the data from local storage 

function gettingItem(){
let stringObj = localStorage.getItem('employeeD');
 //console.log(stringObj);
let parsObj = JSON.parse(stringObj);
 // console.log(parsObj);
if (parsObj !== null){
  TheConstructor.allEmployeep = parsObj;
  
}

render();


}

gettingItem();
