// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for(var i=0; i< musicians.length; i++){
    newArray.push(musicians[i]+ " plays "+instruments[i]);
  }
   return newArray;
}

function johnLennonFacts(facts){
  var jlFacts = [];
  var i=0;
  
 while (i<facts.length){
    jlFacts.push(facts[i] +"!!!");
    i++;
  }
  return jlFacts;
}

function iLoveTheBeatles (n){
   var foo = [];
   var i = 0;
}
 do{
   foo.push(n[i] + "I love the Beatles!");
   i++;
   return foo;
 }
 while (i < n);


 