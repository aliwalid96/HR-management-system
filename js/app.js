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



function TheConstructor(employeeID,fullName,department,level,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.salary=salary;

}


TheConstructor.prototype.render=function(){
    document.write(`<tr><td> ${this.fullName}</td> <td> ${this.salary}</td></tr>`);
  
}

let firstEmploye= new TheConstructor (1000,"Ghazi Samer	","Administration","Senior",firstEmployeNetSalary);
let secondEmploye= new TheConstructor (1001,"Lana Ali	","Finance","Senior",secondEmployeNetSalary);
let thirdtEmploye= new TheConstructor (1002,"Tamara Ayoub	","Marketing	","Senior",thirdEmployeNetSalary);
let fourthEmploye= new TheConstructor (1003,"Safi Walid	","Administration","Mid-Senior",fourthEmployeNetSalary);
let fifthEmploye= new TheConstructor (1004,"Omar Zaid	","Development	","Senior",fifthEmployeNetSalary);
let sixthEmploye= new TheConstructor (1005,"Rana Saleh	","Development","Junior",sexthEmployeNetSalary);
let seventhEmploye= new TheConstructor (1006,"Hadi Ahmad	","Finance","Mid-Senior",seventhEmployeNetSalary);

firstEmploye.render();
secondEmploye.render();
thirdtEmploye.render();
fourthEmploye.render();
fifthEmploye.render();
sixthEmploye.render();
seventhEmploye.render();






  
 


 
  
  
  
 



