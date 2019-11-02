
var a=[];
console.log(a,"111111111111111111");

localStorage.setItem("inside",a);


function generate() {
  var b=Math.floor(100000 + Math.random() * 900000);
  document.getElementById("demo").innerHTML = b ;

  a.push(b);
  console.log(a,"newanewa");


};

function calculate(){
 var input = document.getElementById("hello").value;
  if(input=='') {

    alert("Please enter a Number");
  }
  else if(a[0]==input){

    alert("you've won")

  }

  else{
    alert("Invalid Number")
  }


}


$("#refresh").hide();
$("#hello").hide();
$("#hai").hide();
$("#h3h3").hide();
$("#button").hide();
$(function () {
   $("#btnRedirect").click(function () {
     $("#refresh").show();
       var seconds = 5;
       $("#dvCountDown").show();
       $("#lblCount").html(seconds);


       setInterval(function () {

          // document.getElementById("demo").innerHTML = localStorage.getItem("inside");
           seconds--;
           $("#lblCount").html(seconds);
           if (seconds == 0) {
               $("#dvCountDown").hide();
               $("#hidehide").hide();
               $("#btnRedirect").hide();
               $("#refresh").hide();
               $("#newhide").hide();
               $("#demo").hide();
               $("#hello").show();
               $("#hai").show();
               $("#h3h3").show();
               $("#button").show();

               // window.location = "/home/chinmaya/Desktop/work/inkloop/nextpage.html/";

           }
       }, 500);
   });
});
