document.getElementById("btn").addEventListener("click", function () {
        let numbers = [];
        for (let i = 0; i < 10; i++) 
        numbers.push(Math.round(Math.random() * 21 - 10));
        document.getElementById("resalt").innerHTML= numbers.join("  ,")
       
        let sum = 0;
  
        for (number of numbers) {
          sum += number;
        }
        document.getElementById("resalt1").innerHTML = sum

        
        let sumL = 0;
        for (number of numbers) {
            sumL += number;
          }
          document.getElementById("resalt2").innerHTML = sumL/numbers.length;
           
          let multiply=1
          for (number of numbers) {
            multiply *= number;
            document.getElementById("resalt3").innerHTML = multiply;
          }

            let max = numbers[0]; 
            for (let i = 0; i < numbers.length; i++) { 
                if (max < numbers[i]) max = numbers[i]; 
            
            document.getElementById("resalt4").innerHTML = max;
          }
        
            let min = numbers[0];
            for (let i = 0; i < numbers.length; i++) {
                if (min > numbers[i]) min = numbers[i];
            }
            document.getElementById("resalt5").innerHTML = min;
        
 
  })

