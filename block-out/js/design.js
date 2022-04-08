$(document).ready(function () {


   if("game" in localStorage){
      document.getElementById("loader").style.visibility = "hidden";
      document.getElementById("game").style.visibility = "visible";
      document.getElementById("buttonIntro").style.visibility = "hidden";

 
 
    }else{
     
   
      document.getElementById("loader").style.visibility = "visible";
      document.getElementById("game").style.visibility = "hidden";      

 

       setTimeout(() => {
          
         document.getElementById("loader").style.visibility = "hidden";

 
         document.getElementById("game").style.visibility = "visible";  
         document.getElementById("buttonIntro").style.visibility = "visible";
    
      
      }, 14000);

       
 
    }
 
 
 
 
 
 
  
 
 
 })   
 function turnOff(){
     localStorage.setItem("game","InGame")
     location.reload()
     
 
 
 }