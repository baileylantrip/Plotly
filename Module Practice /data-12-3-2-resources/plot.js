d3.json("samples.json").then(function(data){
    console.log(data);
});

// Descending, filter out nulls, and only wfreq
//d3.json("samples.json").then(function(data){
   // wfreq = data.metadata.map(person =>
//person.wfreq).sort((a,b) => b - a);
    //filteredWfreq = wfreq.filter(element => element !=
//null);
    //console.log(filteredWfreq);
//});

// Print key value pair inside array
//console.log(Object.entries(researcher1));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});