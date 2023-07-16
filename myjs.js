function showTime(){
  var formElem=document.getElementById("form1");
  today=new Date();
  formElem.output1.value=today.toLocaleString();
}

//クイズデータ
const quizDate=[
  {
    question:''

