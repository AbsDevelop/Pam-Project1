// This is a JavaScript file

function calculo(){
    var N = parseFloat(document.getElementById("N").value);
    var div = document.getElementById("resultado"); 
    var res = "";

      for(var x = 1; x <= N; x++)
      {
        res += + N + " x " + x + " = " + N * x + "<br>";
      }
    div.innerHTML = res;
};