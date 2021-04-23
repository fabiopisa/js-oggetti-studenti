var arrStudents = [
  {
    firstName : 'giovanni',
    lastName : 'bianchi',
    age : 20,
  },
  {
    firstName : 'carmine',
    lastName : 'rizzo',
    age : 18,
  },
  {
    firstName : 'giovanna',
    lastName : 'rossi',
    age : 22,
  },
  {
    firstName : 'pierantonio',
    lastName : 'mossa',
    age : 24,
  }
]

var newFirstName = prompt("nome studente?");
var newLastName = prompt("cognome studente?");
var newAge = parseInt(prompt("età?"));

addStudent(arrStudents,newFirstName,newLastName,newAge);

for(var student of arrStudents){
  
  for(var key in student){
    console.log("key : " + key + " : " + student[key]);
  }
  console.log("-----------------------------------------");
}

//FUNZONI
function addStudent (target,anFirstName,anLastName,anAge){
  target.push({
    firstName : anFirstName,
    lastName : anLastName,
    age : anAge,
  });
}