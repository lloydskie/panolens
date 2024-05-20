const panoImage = document.querySelector( '.pano.image' );
const uphPano = '../images/pool.jpg';

const panorama = new PANOLENS.ImagePanorama(uphPano);
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    autoRotate: true,
    autoRotateSpeed:0.2
});

viewer.add(panorama);