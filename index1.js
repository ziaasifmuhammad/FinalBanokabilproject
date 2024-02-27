let form = document.getElementById("form")
form. addEventListener('submit',function(event){
    event.preventDefault()




// function callvalue(){
    let employeename = document.getElementById("employeename").value;
    console.log("Employee Name=",employeename)
    let employeeid = document.getElementById("employeeid").value;
    console.log("Employee ID=",employeeid)
    let fname = document.getElementById("fname").value;
    console.log("Father Name=",fname)
    let designation = document.getElementById("designation").value;
    console.log("Designation=",designation)
    // document.write("employee name is="+employeename);
    // document.write("employee ID is="+employeeid);
    // document.write("employee fname is="+fname);
    // document.write("employee designation is="+designation);
})