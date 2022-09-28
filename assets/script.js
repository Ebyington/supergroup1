var APIkey = 'bf8e223a20msh569c19cc8692d4fp1499d6jsn96e050f62872';
var ing = document.getElementById('Hungryfor');
var buttonSelect = document.getElementById('button1');
var displayRec = document.getElementById('foodResults');
var genre = document.getElementById('GenreSelect');
var startYear = document.getElementById('startYear');
var endYear = document.getElementById('endYear');
var imdb1 = document.getElementById('imdbScore1');
var imdb2 = document.getElementById('imdbScore2');

var ingInput = localStorage.getItem('ing1');
var genreInput = localStorage.getItem('gnr1');
var startYearInput = document.getItem('strY1');
var endYearInput = document.getItem('endY1');
var imdb1Input = document.getElementById('imdbS1');
var imdb2Input = document.getElementById('imdbS2');

function getMov(event){}

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
		'X-RapidAPI-Key': 'bf8e223a20msh569c19cc8692d4fp1499d6jsn96e050f62872',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};
fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q=' + ingInput, options)
        .then(function (response){
            return response.json();
        })    
            .then(function (data) {
                console.log(data);
    
                for (var i= 0; i< data.length; i++){
                    var interDisplay= document.createElement('p');
                    interDisplay.textContent = data[i].value;
        
                 displayRec.append(interDisplay);
        }
    });
        
    }







 

    // // fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year='+1970+'&end_year='+2020+'&min_imdb='+6+'&max_imdb='+7.8+'&genre='+action+'&language=english&type='+movie+'&sort=latest&page=any', options1)
    // //     .then(response => response.json())
    // //     .then(response => console.log(response))
    // //     .catch(err => console.error(err));


  buttonSelect.addEventListener('click', getIng);