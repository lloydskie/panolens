const panorama = new PANOLENS.ImagePanorama( 'images/pool.jpg' );
const panorama2 = new PANOLENS.ImagePanorama( 'images/ouside.jpg' );
let imageContainer = document.querySelector('.image-container')

var infospotPositions = [
    new THREE.Vector3(4068.1449119884, 26.262024736812112, 5000),
    new THREE.Vector3(-109.30626953825754, -617.2876099298969, 5000),
];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
    autoHideInfospot: false,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);

viewer.add( panorama,panorama2 );