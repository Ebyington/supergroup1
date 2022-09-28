var APIkey = 'a19e4cf765a3450f81fa9c3bed59231e';
var ing = document.getElementById('Hungryfor');
var buttonSelect = document.getElementById('button1');
var displayRec = document.getElementById('foodResults');

var ingInput = localStorage.getItem('ing1');


function getIng(event){
event.preventDefault();
console.log(event);  
ing.value.split(" ");
ingInput= ing.value;
localStorage.setItem('ing1', ingInput);
console.log(ingInput);

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '975449a451msh2a06483e508d496p18c10djsnf0466bf81871',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
};
fetch('https://api.spoonacular.com/recipes/findByIngredients=' + ingInput +'&number=10', options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    // for(var i= 0; i< data.length; i++){

        
    //     displayRec.textContent = data[i].value;

        
    // }
}


//API for food search



 

    // // fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year='+1970+'&end_year='+2020+'&min_imdb='+6+'&max_imdb='+7.8+'&genre='+action+'&language=english&type='+movie+'&sort=latest&page=any', options1)
    // //     .then(response => response.json())
    // //     .then(response => console.log(response))
    // //     .catch(err => console.error(err));


  buttonSelect.addEventListener('click', getIng);