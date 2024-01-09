        function display(val) { 
            document.getElementById("resultat").value += val 
        } 
  
        function evenementTouche(event) { 
            if (event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9" || event.key == "0" || event.key == "/" || event.key == "*" || event.key == "+" || event.key == "-" || event.key == "." || event.key == "=" )
                document.getElementById("resultat").value += event.key; 
        } 
    
        function resoudre() { 
            let x = document.getElementById("resultat").value ;
            let y = math.evaluate(x) ;
            document.getElementById("resultat").value = y ;
        } 
  
        function effacer() { 
            document.getElementById("resultat").value = "" ;
        } 

        function darkMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
          } 