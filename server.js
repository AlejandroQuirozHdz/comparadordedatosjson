let fs = require('fs');

let existentes=[];
let noExistentes=[];

let archivo1 = fs.readFileSync('archivo1.json', 'utf-8');

let archivo2 = fs.readFileSync('archivo2.json', 'utf-8');

let areglo1=JSON.parse(archivo1);
//console.log(areglo1);
//console.log(areglo1.length);
let areglo2=JSON.parse(archivo2);
//console.log(areglo2);
//console.log(areglo2.length);

areglo2.forEach(element => {
 
  let result=areglo1.find( ides => ides.id === element.id );
    if(result!=undefined){
        existentes.push(element);
    }else{
        noExistentes.push(element);
    }
});

areglo1.forEach(element => {
 
    let result=areglo2.find( ides => ides.id == element.id );
      if(result!=undefined){
        let result=existentes.find( ides => ides.id == element.id );
        if(result==undefined){
          existentes.push(element);
        }
      }else{
        let result=noExistentes.find( ides => ides.id == element.id );
        if(result==undefined){
            noExistentes.push(element);
        }
         
      }
  });


  fs.writeFile("existentes.json", JSON.stringify(existentes), function(err) {
    if(err) {
        return console.log(err);
    }

   
}); 
fs.writeFile("noExistentes.json", JSON.stringify(noExistentes), function(err) {
    if(err) {
        return console.log(err);
    }

    
}); 

console.log("Existente:"+JSON.stringify(existentes));
console.log("No Existentes:"+JSON.stringify(noExistentes));