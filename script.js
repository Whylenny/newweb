var currently = ['index3'];

function goto(where){
  console.log(where);
  const newLoc = where + '.html';
 //Scurrently.push(where);
 window.location.href = newLoc;
 
}

function show(pic){
    console.log(pic);
 const newLoc = pic + '.html'
 window.location.href = newLoc;
}

console.log("start");