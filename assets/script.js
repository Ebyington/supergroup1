var APIkey = 'bf8e223a20msh569c19cc8692d4fp1499d6jsn96e050f62872';
var ing = document.getElementById('Hungryfor');
var buttonSelect = document.getElementById('button1');
var displayRec = document.getElementById('foodResults');
var genre = document.getElementById('GenreSelect');
var startYear = document.getElementById('startYear');
var endYear = document.getElementById('endYear');
var imdb1 = document.getElementById('imdbScore1');
var imdb2 = document.getElementById('imdbScore2');
var tvOM = document.getElementById('tvOrMovie')

var ingInput = localStorage.getItem('ing1');
var genreInput = localStorage.getItem('gnr1');
var startYearInput = localStorage.getItem('strY1');
var endYearInput = localStorage.getItem('endY1');
var imdb1Input = localStorage.getItem('imdbS1');
var imdb2Input = localStorage.getItem('imdbS2');
var tvOMInput = localStorage.getItem('tvm');

function getMov(event){
event.preventDefault();
console.log(event);
genreInput= genre.value;
localStorage.setItem('gnr1', genreInput);
startYearInput= startYear.value;
localStorage.setItem('strY1', startYearInput);
endYearInput= endYear.value;
localStorage.setItem('endY1',endYearInput);
imdb1Input= imdb1.value;
localStorage.setItem('imdbS1', imdb1Input);
imdb2Input= imdb2.value;
localStorage.setItem('imdbS2', imdb2Input);
tvOMInput= tvOM.value;
localStorage.setItem('tvm', tvOMInput);
 
const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '975449a451msh2a06483e508d496p18c10djsnf0466bf81871',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
};
fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year='+startYearInput+'&end_year='+endYearInput+'&min_imdb='+imdb1Input+'&max_imdb='+imdb2Input+'&genre='+genreInput+'&language=english&type='+tvOMInput+'&sort=latest&page=any', options1)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


}

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