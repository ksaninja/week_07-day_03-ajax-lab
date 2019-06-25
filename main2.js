$(document).ready(function(){
    
const numItemsToGenerate = 1;
const imageWidth = 960;
const imageHeight = 1200;
const collectionID = 1163637;

function renderGalleryItem(){
        fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`)
        .then((response)=> {
        // let galleryItem = document.createElement('div');
        // galleryItem.classList.add('gallery-item');
        // galleryItem.innerHTML = `<img class="gallery-image" src="${response.url}" alt="gallery image"/>`;
        // document.body.appendChild(galleryItem);
        $('body, html').css({height:'100%'},{width:'100%'});
        $('body').css({background : `url("${response.url}")`},{padding:0},{margin:0});
        
        
    })
}
for(let i=0;i<numItemsToGenerate;i++){
    renderGalleryItem();
}
})