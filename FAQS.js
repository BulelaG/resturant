let faqs = document.getElementById("faqs");
faqs.addEventListener("click", function(){
    
   let greenlight = confirm("Do you want to open this page in a different window ?")
   if (greenlight  == true) {
      window.open("./FAQs.html", "", 'width=600,height=400');
   }else{
     window.close(); }
    });




