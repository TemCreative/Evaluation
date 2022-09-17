
function add(){
    for (var i = Number(digitInput.value); i<13; i++){
       for (var j = 1; j<13; j++){
           myTable.innerHTML += "<tr><td>" + i + "+" + j + "=" + (i+j) + "</tr></td>"
       }
    }   
   }
   
   function subtract(){
       for (var i = Number(digitInput.value); i<13; i++){
          for (var j = 1; j<13; j++){
              myTable.innerHTML += "<tr><td>" + i + "-" + j + "=" + (i-j) + "</tr></td>"
          }
       }   
      }
   
      function multiply(){
       for (var i = Number(digitInput.value); i<13; i++){
          for (var j = 1; j<13; j++){
              myTable.innerHTML += "<tr><td>" + i + "*" + j + "=" + (i*j) + "</tr></td>"
          }
       }   
      }
      
      function divide(){
       for (var i = Number(digitInput.value); i<13; i++){
          for (var j = 1; j<13; j++){
              myTable.innerHTML += "<tr><td>" + i + "%" + j + "=" + (i%j) + "</tr></td>"
          }
       }   
      }
   

     