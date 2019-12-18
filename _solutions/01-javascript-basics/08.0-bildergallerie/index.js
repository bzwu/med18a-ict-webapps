var images = [
    "https://nrw.nabu.de/imperia/md/nabu/images/regional/nrw/e/161107-cewe-42885-laemmerkamp-allee-franz-josef-besche-680.jpeg",
    "https://vivanty.de/sites/default/files/styles/580x390/adaptive-image/public/news/nature-3294681_1280.jpg?itok=fahV_JIK",
    "https://www.merian.de/sites/merian/files/styles/1024x768/public/images/natur_provinz_barcelona.jpg",
    "https://naturschutzbund.at/files/bilder/landschaften/wiese/goldhaferwiese_c_UMG.JPG",
    "https://static.geo.de/bilder/51/d0/63149/galleryimage/saechsische-schweiz-deutschland-gebirge-s-360905624.jpg",
    "https://www.nabu.de/imperia/md/nabu/images/regional/sachsen/150513-saechsische-schweiz-arndt-asperger-680x453.jpeg"
]

var previewContainer = document.getElementById('preview-image-container');
var largeImage = document.getElementById('large-image');

var imagePreviewClickHandler = function() {
    largeImage.src = this.src;
    for (var i=0; i<previewContainer.children.length; i++) {
        previewContainer.children[i].classList.remove('selected');
    }
    this.classList.add('selected');
}

for(var i=0; i<images.length; i++) {
    var previewImg = document.createElement('img');
    previewImg.src = images[i];
    previewImg.classList.add('preview-image'); 
    previewImg.onclick = imagePreviewClickHandler;
    previewContainer.appendChild(previewImg);    
}