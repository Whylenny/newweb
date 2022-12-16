var currently = [0];

function goto(where){
 const fromBody = "body" + currently[currently.length - 1];
 const toBody = "body" + where;
 currently.push(where);
 document.getElementById(fromBody).style.display = "none";
 document.getElementById(toBody).style.display = "block";
}

function goback(){
 const fromBody = "body" + currently.pop();
 const toBody = "body" + currently[currently.length - 1];
 document.getElementById(fromBody).style.display = "none";
 document.getElementById(toBody).style.display = "block";
}

function show(pic){
 const fromBody = "body" + currently[currently.length - 1];
 const toPic = pic;
 document.getElementById(fromBody).style.display = "none";
 document.getElementById(toPic).style.display = "block";
}

function unShow(pic){
 const fromBody = "body" + currently[currently.length - 1];
 const toPic = pic;
 document.getElementById(fromBody).style.display = "block";
 document.getElementById(toPic).style.display = "none";
}

function adv(fromPic,toPic){
 document.getElementById(fromPic).style.display = "none";
 document.getElementById(toPic).style.display = "block";
}