window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  var cInput = document.getElementById("cInput")
  var fInput = document.getElementById("fInput")
  var weatherImage = document.getElementById("weatherImage")
  var errorMessage = document.getElementById("errorMessage")
  var celsius;
  var fahrenheit;
  var isConvertingCelsiusToFahrenheit = false
  
  cInput.addEventListener("input", (e) => {
     celsius = parseFloat(cInput.value)
     
     if(isNaN(celsius)) {
       errorMessage.textContent = `${cInput.value} is not a number`
     } else {
       errorMessage.textContent = ""
       isConvertingCelsiusToFahrenheit = true
       fInput.value = ""
     }

  })
  
  fInput.addEventListener("input", (e) => {
     fahrenheit = parseFloat(fInput.value)
     if(isNaN(fahrenheit)) {
       errorMessage.textContent = `${fInput.value} is not a number`
     } else {
       errorMessage.textContent = ""
       isConvertingCelsiusToFahrenheit = false
       cInput.value = ""
     }
     console.log(fahrenheit)
  })

  document.getElementById("convertButton").addEventListener("click", () => {
    if(isConvertingCelsiusToFahrenheit) {
      fahrenheit = convertCtoF(celsius)
      fInput.value = fahrenheit
    } else {
      celsius = convertFtoC(fahrenheit)
      cInput.value = celsius
    }
    
    if(fahrenheit <= 30)  {
      weatherImage.src = "img/cold.png"
      weatherImage.alt = "Cold"
    } else if (fahrenheit >= 30 && fahrenheit <= 50) {
         weatherImage.src = "img/cool.png"
      weatherImage.alt = "Cool"
    } else if (fahrenheit > 50) {
      weatherImage.src = "img/warm.png"
      weatherImage.alt = "Warm"
   
    }
  })
  
  
}

function convertCtoF(degreesCelsius) {
  // (0°C × 9/5) + 32 
  return (degreesCelsius * 9/5) + 32
}

function convertFtoC(degreesFahrenheit) {
   // (32°F − 32) × 5/9
   return (degreesFahrenheit - 32) * 5/9
}
