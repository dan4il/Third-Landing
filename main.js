// работа с капчей
var captcha;
var captcha_n;
function generateCaptcha() {
    var a = Math.floor((Math.random() * 100));
    var b = Math.floor((Math.random() * 100));
    captcha=a.toString()+"+"+b.toString()+"=";
    captcha_n=a+b;
    document.getElementById("captcha").value = captcha;
    document.getElementById("inputText").style="background-color:white";


}
function check(){
   var input=document.getElementById("inputText").value;
   if(input==captcha_n){
     document.getElementById("ChBox").checked=true;
   }
   else{
     alert("Not Equal");
   }
}

// новое окно
function newPage(){
  var input=document.getElementById("inputText").value;
  if(input!=captcha_n){
      alert("капча не пройдена!");
  }
    else{
      value1=""+document.form1.name.value;
      self.location="newforma.html?="+value1;
    }
}
