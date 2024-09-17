// List of local cake images
const cakeImages = [
    'anniversary.jpg',
    'graduation.jpg',
    'babyshower.jpg',
    'cupcakes.jpg',
    'wedding.jpg'
];


function getRandomCakeImage() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * cakeImages.length);
    // Get the image URL
    const imageUrl = cakeImages[randomIndex];
    // Set the image src
    document.getElementById('custom-cake-image').src = imageUrl;
}

// Change the cake image every 1 second
setInterval(getRandomCakeImage, 1000);

// Load a random cake image on page load
window.onload = getRandomCakeImage;

