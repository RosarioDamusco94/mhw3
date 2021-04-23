function onJson(json) {
    console.log('JSON ricevuto');
    
    const library = document.querySelector('#cucina-view');
    library.innerHTML = '';

    let num_results = 10
  
    // Processa ciascun risultato
    for(let i=0; i<num_results; i++)
    {
     const doc = json.results[i]
     console.log(doc)
      const nomericetta = doc.name;
      const images = doc.image;
      const ricettario = document.createElement('div');
      ricettario.classList.add('ricettario');
      const titolo = document.createElement('h2');
      titolo.textContent = nomericetta;
      const img = document.createElement('img');
      img.src = images;
      ricettario.appendChild(titolo);
      ricettario.appendChild(img);
      library.appendChild(ricettario);
    }
  }




function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }



function cerca(event)
{
  event.preventDefault();
  const prodotto_input = document.querySelector('#alimento');
  const prodotto = encodeURIComponent(prodotto_input.value);
  console.log('Eseguo ricerca: ' + prodotto);
  rest_url = 'https://api.spoonacular.com/food/ingredients/search?query=' + prodotto + '&apiKey=' + api_key + '&format=json';
  console.log('URL: ' + rest_url);
  fetch(rest_url).then(onResponse).then(onJson);
}

const api_key = '347b115b5a104879886af3e9c95cca56'

// Aggiungi event listener al form
const form = document.querySelector('form');
form.addEventListener('submit', cerca)