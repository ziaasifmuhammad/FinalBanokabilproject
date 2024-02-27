let form = document.getElementById("form")
form. addEventListener('submit',function(event){
    event.preventDefault()




// function callvalue(){
    let username = document.getElementById("username").value;
    console.log("employee Name=",username)
    let BranchCode = document.getElementById("BranchCode").value;
    console.log("Branch Code=",BranchCode)
    let fname = document.getElementById("fname").value;
    console.log("Father Name=",fname)
    let phonenumber = document.getElementById("phonenumber").value;
    console.log("Phone Number=",phonenumber)
    let datejoining = document.getElementById("datejoining").value;
    console.log("Date Of Joining=",datejoining)
})
let form1 = document.getElementById("form1")
form1.addEventListener('submit',function(event){
    event.preventDefault()
    let employeeaccount = document.getElementById("employeeaccount").value;
    console.log("Employee Account=",employeeaccount)
    let insuranceamount = document.getElementById("insuranceamount").value;
    console.log("Insurance Amount=",insuranceamount)
    let organizationcontribution = document.getElementById("organizationcontribution").value;
    console.log("Organination Contribution=",organizationcontribution)
    let medicalallowance = document.getElementById("medicalallowance").value;
    console.log("Medical Allowance=",medicalallowance)
})

let form2 = document.getElementById("form2")
form2.addEventListener('submit',function(event){
    event.preventDefault()
    let Employeename = document.getElementById("Employeename").value;
    console.log("Employee name=",Employeename)
    let employeeid = document.getElementById("employeeid").value;
    console.log("Employee Id=",employeeid)
    let fname = document.getElementById("fname").value;
    console.log("Father Name=",fname)
    let functionalDesignation = document.getElementById("functionalDesignation").value;
    console.log("Functional Designation=",functionalDesignation)
    let addBank = document.getElementById("addBank").value;
    console.log("Add Bank=",addBank)
})