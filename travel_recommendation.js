

const btnSearch = document.getElementById('btnSearch');
const btnclear = document.getElementById('btnClear');


function searchDestination() {
        const input = document.getElementById('destinationInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        const regextemp = /^temple/g;
        const regexbeach = /^beach/g;
        const regexcount = /^country|countries/g;
        let key="";
        if (input.match(regextemp)){
            console.log("match regex for templessss")
            key = "temples";
            }
        else if (input.match(regexcount)){
            key = "countries";
            }
        else if (input.match(regexbeach)){
            key = "beaches";
            }
        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
           const countries = data.countries.find(item => item.name.toLowerCase() === input);
           
           console.log("key is : " + key)
           console.log(data)
                if (data[key]){
                    if (key == "countries"){
                        data[key].forEach(item => {
                            resultDiv.innerHTML += `<h2>${item.name}</h2>`;
                            resultDiv.innerHTML += `<h2>${item.cities[0].name}</h2>`;
                            resultDiv.innerHTML += `<img src="${item.cities[0].imageUrl}" alt="description" width="300px">`;
                        });
                    }
                    else{
                        console.log("key existe : " + data[key])
                        console.log(data[key])
                        data[key].forEach(item => {
                            console.log("pour chaque item le nom : " + item.name);
                            resultDiv.innerHTML += `<h2>${item.name}</h2>`;
                            resultDiv.innerHTML += `<h4>${item.description}</h4>`;
                            resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="description" width="300px">`;
                          });
                        }
                }
                else if (countries){
                    console.log("saisie existe : One country" + countries.name)
                    resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
                    countries.cities.forEach(item => {
                    resultDiv.innerHTML += `<h3>${item.name}</h3>`;    
                    resultDiv.innerHTML += `<h4>${item.description}</h4>`;
                    resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="description" width="300px">`;
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
          document.getElementById("destinationInput").value = "";
      }
btnSearch.addEventListener('click', searchDestination);

function clearDestination() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.innerHTML = '';

}
btnClear.addEventListener('click', clearDestination);
