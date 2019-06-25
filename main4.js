$(document).ready(function(){

    axios({url:""})

    .then((response) => {   
    console.log(moment().format('LT'))
    $('#moment').append(`<h2 style="text-shadow:rgb(32, 1, 1)"> ${moment().format('LT')}</h2>`)
    }

    // .catch((error)=>{
    //     $("p").text("Fail Request ")
    //     console.log("there was an ERROR ")
    // })

)})