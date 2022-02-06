

function gettingItem() {
  let stringObj = localStorage.getItem('employeeD');
  //console.log(stringObj);
  let parsObj = JSON.parse(stringObj);
  // console.log(parsObj);
  if (parsObj !== null) {
    allEmp = parsObj;

  }

  //render();


}
let allEmp = [];
gettingItem();
console.log(allEmp);





let Administration = 0;
let Marketing = 0;
let Development = 0;
let Finance = 0;



function calaclateNumberOfEmplolyee(arrOfObject) {
  for (let i = 0; i < arrOfObject.length; i++) {
   // console.log(arrOfObject[i].department);
    if (arrOfObject[i].department == "Administration") {
      Administration++;
      console.log(Administration);
    } else if (arrOfObject[i].department == "Marketing") {
      Marketing++;
      console.log(Marketing);
    } else if (arrOfObject[i].department == "Development") {
      Development++;
    } else if (arrOfObject[i].department == "Finance") {
      Finance++;

    }

  }
}

calaclateNumberOfEmplolyee(allEmp);

let TotalNumberOfEmployee = Administration + Marketing + Development + Finance;


let AdministrationSalary = 0;
let MarketingSalary = 0;
let DevelopmenSakaryt = 0;
let FinanceSalary = 0;


function calaclatSalaryOfDepartment(arrOfObject) {
  for (let i = 0; i < arrOfObject.length; i++) {
    if (arrOfObject[i].department == "Administration") {
      AdministrationSalary = AdministrationSalary + arrOfObject[i].salary;
    } else if (arrOfObject[i].department == "Marketing") {
      MarketingSalary = MarketingSalary + arrOfObject[i].salary;
    } else if (arrOfObject[i].department == "Development") {
      DevelopmenSakaryt = DevelopmenSakaryt + arrOfObject[i].salary;
    } else if (arrOfObject[i].department == "Finance") {
      FinanceSalary = FinanceSalary + arrOfObject[i].salary;

    }

  }
}


calaclatSalaryOfDepartment(allEmp);
let totalSalaryForAll = MarketingSalary + DevelopmenSakaryt + FinanceSalary + AdministrationSalary;


let AdministrationAvg = AdministrationSalary / Administration;
let MarketingAvg = MarketingSalary / Marketing;
let DevelopmentAvg = DevelopmenSakaryt / Development;
let FinanceAvg = FinanceSalary / Finance;
let totalAvg = AdministrationAvg + MarketingAvg + DevelopmentAvg + FinanceAvg;




function render() {

  let theSection = document.getElementById('accForm');

  let divEl = document.createElement('div');
  theSection.appendChild(divEl);


  let tableE1 = document.createElement('table');
  divEl.appendChild(tableE1);

  let trE = document.createElement('tr');
  tableE1.appendChild(trE);

  let thE = document.createElement('th');
  trE.appendChild(thE);
  thE.textContent = 'department Name';


  let thE1 = document.createElement('th');
  trE.appendChild(thE1);
  thE1.textContent = "number of employee";

  let thE2 = document.createElement('th');
  trE.appendChild(thE2);
  thE2.textContent = "total salary";

  let thE3 = document.createElement('th');
  trE.appendChild(thE3);
  thE3.textContent = "Avareg";


  let tr2 = document.createElement('tr');
  tableE1.appendChild(tr2);

  let td1 = document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent = "Administration";

  let td2 = document.createElement('td');
  tr2.appendChild(td2);
  td2.textContent = Administration;

  let td3 = document.createElement('td');
  tr2.appendChild(td3);
  td3.textContent = AdministrationSalary;

  let td4 = document.createElement('td');
  tr2.appendChild(td4);
  td4.textContent = AdministrationAvg;


  let tr3 = document.createElement('tr');
  tableE1.appendChild(tr3);

  let td5 = document.createElement('td');
  tr3.appendChild(td5);
  td5.textContent = "Markiting";

  let td6 = document.createElement('td');
  tr3.appendChild(td6);
  td6.textContent = Marketing;

  let td7 = document.createElement('td');
  tr3.appendChild(td7);
  td7.textContent = MarketingSalary;

  let td8 = document.createElement('td');
  tr3.appendChild(td8);
  td8.textContent = MarketingAvg;



  let tr4 = document.createElement('tr');
  tableE1.appendChild(tr4);

  let td9 = document.createElement('td');
  tr4.appendChild(td9);
  td9.textContent = "Finance";

  let td10 = document.createElement('td');
  tr4.appendChild(td10);
  td10.textContent = Finance;

  let td11 = document.createElement('td');
  tr4.appendChild(td11);
  td11.textContent = FinanceSalary;

  let td12 = document.createElement('td');
  tr4.appendChild(td12);
  td12.textContent = FinanceAvg;



  let tr5 = document.createElement('tr');
  tableE1.appendChild(tr5);

  let td13 = document.createElement('td');
  tr5.appendChild(td13);
  td13.textContent = "Development";

  let td14 = document.createElement('td');
  tr5.appendChild(td14);
  td14.textContent = Development;

  let td15 = document.createElement('td');
  tr5.appendChild(td15);
  td15.textContent = DevelopmenSakaryt;

  let td16 = document.createElement('td');
  tr5.appendChild(td16);
  td16.textContent = DevelopmentAvg;


  let tr6 = document.createElement('tr');
  tableE1.appendChild(tr6);

  let td17 = document.createElement('td');
  tr6.appendChild(td17);
  td17.textContent = "Total ";

  let td18 = document.createElement('td');
  tr6.appendChild(td18);
  td18.textContent = TotalNumberOfEmployee;

  let td19 = document.createElement('td');
  tr6.appendChild(td19);
  td19.textContent = totalSalaryForAll;

  let td20 = document.createElement('td');
  tr6.appendChild(td20);
  td20.textContent = totalAvg;

}


render();


