function validate ()
   {
var name=document.getElementById("uname");
var pwd=document.getElementById("pwd");
     if (name || pwd == 0)
      {
         alert("Enter correct credentials!");
         return false;
      }
      return true;
      alert("Login Sucessful");
    }

function sendMsg() {
    alert("Message sent successfully!");
    }

var values_submitted={};
    $("#signup").submit(function(e){
    	e.preventDefault();
    });
