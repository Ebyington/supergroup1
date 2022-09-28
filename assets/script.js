var APIkey = '975449a451msh2a06483e508d496p18c10djsnf0466bf81871';
var ing = function getIng(){document.getElementbyId('Hungryfor');};

addEventListener(onClick)

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '975449a451msh2a06483e508d496p18c10djsnf0466bf81871',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
};

fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q='+ ing, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    console.log(response);


    