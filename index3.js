let form = document.getElementById("form")
form. addEventListener('submit',function(event){
    event.preventDefault()



    let employeename = document.getElementById("employeename").value;
    console.log("Employee Name=",employeename)
    let employeeid = document.getElementById("employeeid").value;
    console.log("Employee ID=",employeeid)
    
})