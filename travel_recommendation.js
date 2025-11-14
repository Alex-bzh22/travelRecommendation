

const btnSearch = document.getElementById('btnSearch');

function searchDestination() {
        const input = document.getElementById('destinationInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
           const countries = data.countries.find(item => item.name.toLowerCase() === input);
           //const temples = data.temples.find(item => item.name.toLowerCase() === input);
           //const beaches = data.beaches.find(item => item.name.toLowerCase() === input);
           console.log(data)
           /////////////////////////////////////
           // il faut trouver le moeyn de tester si le mot clé tmples, plage, countries fait bien partie de data.
           /////////////////////////////////////
            //const key = data.find(item => item.toLowerCase() === input);
            //const key = data.conditions.find(item => item.name.toLowerCase() === input);
                if (data[input]){
                        console.log("key existe : " + data[input])
                        console.log(data[input])
                        data[input].forEach(item => {
                            console.log("pour chaque item le nom : " + item.name);
                            resultDiv.innerHTML += `<h2>${item.name}</h2>`;
                            resultDiv.innerHTML += `<h2>${item.description}</h2>`;
                            resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="description" width="300px">`;
                          });
                        }
                else if (countries){
                    console.log("saisie existe : One country" + countries.name)
                    resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
                    countries.cities.forEach(item => {
                    resultDiv.innerHTML += `<h2>${item.description}</h2>`;
                    resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="description" width="300px">`;`;
                    });
                }

           /* else if (input/data.name == temples){
                resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
            }
            else if (input == beaches){

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