make_base();

/* Put an image on canvas */
function make_base()
{
    var canvas = document.getElementById('img_c'),
        context = canvas.getContext('2d');

    base_image = new Image();
    base_image.src = '';
    base_image.onload = function(){
        context.drawImage(base_image, 0, 0);
    }
}
