var APIkey = '975449a451msh2a06483e508d496p18c10djsnf0466bf81871';
var ing = document.getElementById('Hungryfor');
var buttonSelect = document.getElementById('button1');

var ingInput = localStorage.getItem('ing1');


function getIng(event){
event.preventDefault();
console.log(event);  
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
fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q=' + ingInput, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    // for(var i= 0; i< data.length; i++){
    //     data[i].


    // };
 
}


//API for food search



 

    // // fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year='+1970+'&end_year='+2020+'&min_imdb='+6+'&max_imdb='+7.8+'&genre='+action+'&language=english&type='+movie+'&sort=latest&page=any', options1)
    // //     .then(response => response.json())
    // //     .then(response => console.log(response))
    // //     .catch(err => console.error(err));


  buttonSelect.addEventListener('click', getIng);