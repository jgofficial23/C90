var r1, n1, n2;

function book() {
  
    r1 = document.getElementById("row").value;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
 
    if (r1==""||n1==""||n2==""){
        document.getElementById("p1").innerHTML="Enter valid details"
    }
    else{
        localStorage.setItem("RowName", r1);
        localStorage.setItem("Adults", n1);
        localStorage.setItem("Children", n2);
        window.location = "nextpage.html";
    }
    
}

function showticket() {
    r1=localStorage.getItem("RowName");
    n1=localStorage.getItem("Adults");
    n2=localStorage.getItem("Children");
    t=Number(localStorage.getItem("Adults"))+Number(localStorage.getItem("Children"));
    document.getElementById("total").innerHTML = "Row: " + r1 + "<hr>" + "Adults: " + n1 + "<hr>" + "Children: " + n2 + "<hr>" + "Total: " + t;
}
function backpage(){
    window.location = "booking.html";   
}