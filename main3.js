$(document).ready(function(){

    axios({

        method:"get",
        
        url:"http://api.openweathermap.org/data/2.5//weather?q=Jeddah,SA&units=metric&forecast?id=524901&APPID=f3181a73076b1db31543d03e32eefb34"
    })

    .then((response) => {   
        $('#weather').text(`${response.data.main.temp} in ${response.data.name}`);

    })


    // .catch((error)=>{
    //     $("p").text("Fail Request ")
    //     console.log("there was an ERROR ")
    // })

})