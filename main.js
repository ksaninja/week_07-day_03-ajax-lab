$(document).ready(function(){
    let num= Math.floor(Math.random() * 9) + 1 
    axios({

        method:"get",
        
        // url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f3181a73076b1db31543d03e32eefb34"
        url:"https://api.unsplash.com/photos/?client_id=9a617984a7522bc29d7081d788c8c39995ed86e64a08f1eb7175726298353d45"
        // url: " https://source.unsplash.com/random "
        // https://source.unsplash.com/collection/[collection_id]/[width]x[height]" 
        //key: "9a617984a7522bc29d7081d788c8c39995ed86e64a08f1eb7175726298353d45"

    })

    .then((response) => {   
           
        $('body').css({background: `url("${response.data[num].urls.regular}")`})
        $('body').css({backgroundSize:'cover'})
        $('body').css({backgroundWidth:'50%'})
        $('body').css({backgroundHeight:'50%'})

        // $('body').css({background: `url("${response.data[num].urls.regular}")`},{width:'100%'},{height:'100%'})
        // $("div").attr("src",)
        // console.log(response)
        // let x = response.data.find((item)=> item.id == '2mV2ibHWWTk')

        // console.log(x)
        // $('div').append(`<img class="beach-image" src="${response.photos.getPhoto(x)}" alt="beach image"/>`)     
        //document.body.appendChild(item);
        // $(".try").css({width:100px,height:100px})


        // $("body").css("background-image",(response.config).css("src",transformResponse.url))
        
             // (res)=> {$( this ).css("src",`${https://source.unsplash.com/random}`)
            // $( this ).attr("url",`${res.url}`)})
    }

    // .catch((error)=>{
    //     $("p").text("Fail Request ")
    //     console.log("there was an ERROR ")
    // })

)})