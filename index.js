// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for(var i=0; i< musicians.length; i++){
    newArray.push(musicians[i]+ " plays "+instruments[i]);
  }
   return newArray;
}

function johnLennonFacts(facts){
  var jlFacts =[];
  
  while(var i=0; i<facts.length; i++){
    jlFacts.push(facts[i] +" !!!")
  }
  return jlFacts
}
