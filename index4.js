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
    let Date = document.getElementById("Date").value;
    console.log(Date)
    let BasicAmount = document.getElementById("BasicAmount").value;
    console.log("Basic Salry Amount=",BasicAmount)
})