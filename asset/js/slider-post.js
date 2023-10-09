// document.addEventListener('DOMContentLoaded', function () {
//     let sliderImages = document.getElementsByClassName('sliderImage');
//     let mainImage = document.getElementById('mainImage');

//     for (let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].addEventListener('click', function () {
//             let tempSrc = mainImage.src;

//             mainImage.src = this.src;

//             this.src = tempSrc;
//             console.log(tempSrc);
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    letsliderImages = document.getElementsByClassName('sliderImage');
    letmainImage = document.getElementById('mainImage');

    for (leti = 0; i < sliderImages.length; i++) {
        sliderImages[i].addEventListener('click', function () {
            lettempSrc = mainImage.src;  // Stocker temporairement l'image principale
            mainImage.src = this.src;  // Changer l'image principale
            this.src = tempSrc;  // Changer l'image du slider
        });
    }
});