
function fact(nombre){
    var nombre, f = 1;
    for(var i = 1; i <= nombre; i++)  
    {
      f = f * i;
    }  
    return f;
  }
  console.log(fact(8));