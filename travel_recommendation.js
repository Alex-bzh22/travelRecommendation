

const btnSearch = document.getElementById('btnSearch');

function searchDestination() {
        const input = document.getElementById('destinationInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
           //const countries = data.countries.find(item => item.name.toLowerCase() === input);
           //const temples = data.temples.find(item => item.name.toLowerCase() === input);
           //const beaches = data.beaches.find(item => item.name.toLowerCase() === input);
           console.log(data)
           /////////////////////////////////////
           // il faut trouver le moeyn de tester si le mot clé tmples, plage, countries fait bien partie de data.
           /////////////////////////////////////
            //const key = data.find(item => item.toLowerCase() === input);
            data.forEach(item => {
                console.log(item);
              });
            if (data) {


              resultDiv.innerHTML += `<h2>${data.input.name}</h2>`;
              //resultDiv.innerHTML += `<img src="${countries.cities.description}" alt="hjh">`;
            

            } 
           /* else if (temples){
                resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
            }
            else if (beaches){

            }*/
            
            else {
              resultDiv.innerHTML = 'Destination not found.';
            }

          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }
btnSearch.addEventListener('click', searchDestination);
              /*
                            const symptoms = countries.symptoms.join(', ');
              const prevention = condition.prevention.join(', ');
              const treatment = condition.treatment;
              resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
              resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
              resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;*/