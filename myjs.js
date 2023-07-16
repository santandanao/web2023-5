var names;
var divElem;

//ページ読み込み時の処理の関数
function loadPage(){
  names=getCookie("NAME");//クッキーから名前を取得して変数namesに代入
  divElem=document.getElementById("div");

  if(name == ""){ //クッキーから取得できなかった場合
    divElem.innerHTML="<p>お名前は？<input type='text' id='name'/></p>"+
      "<p><input type='button' value='OK' onclick='clickOK()'/></p>";

  }else{ //取得できた場合
    divElem.innerHTML="<b>ようこそ"+names+"さん！</b>";
  }

//OKボタンがクリックされたとき呼び出される関数
function clickOK(){
  setCookie("NAME",document.getElementById("name").value);
  loadPage();
}

//クッキーから値を読み込む関数
function getCookie(keyname){

  var tmp=document.cookie+";";
  var index1=tmp.index0f(keyname,0);

  if(index1 !=-1){
    tmp=tmp.substring(index1, tmp.length);
    var index2=tmp.index0f("=",0);
    var index3=tmp.index0f(";",index2);
    return unescape(tmp.substring(index2+1,index3));
  }
  return"";
}

//クッキーに値を書き込む関数
function setCookie(keyname,val){
  var tmp=kayname+"="+escape(val)+";";
  tmp+="expires=M
