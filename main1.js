$(document).ready(function(){
    axios({ 
       type: "get",
       url: `${'https://cors-anywhere.herokuapp.com/'}https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`,
       crossDomain: true
    })

    .then((response) => {   
        //response.header("Access-Control-Allow-Origin", "*");
        //console.log(response.data);
        $('h3').text(`${response.data.quoteText}`)
        $('h4').text(`${response.data.quoteAuthor}`)
     })


    .catch((error)=>{
        console.log(error)
    })

})
