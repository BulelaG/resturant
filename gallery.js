// Attached an event listener to the 'change' event of the file input with id 'fileInput'
document.getElementById('fileInput').addEventListener('change', handleFileSelect);

// Loaded saved images from local storage on page load
document.addEventListener('DOMContentLoaded', loadSavedImages);

// Function to handle file selection
function handleFileSelect(event) {
    // Got the selected files from the event
    const files = event.target.files;

    // Checked if there are files selected
    if (files && files.length > 0) {
        // Iterated through each selected file
        for (const file of files) {
            // Read and processed each file
            readFile(file);
        }
    }
}

// Function to read a file and display it
function readFile(file) {
    // Create a FileReader object
    const reader = new FileReader();

    // Define the onload callback function for when reading is complete
    reader.onload = function (e) {
        // Gets the data URL representing the file content
        const imageUrl = e.target.result;

        // Displays the file
        showFile(imageUrl);

        // Saved the file to local storage
        saveImage(imageUrl);
    };

    // Reads the file as a data URL
    reader.readAsDataURL(file);
}

// Function to display a file
function showFile(imageUrl) {
    // Gets the image gallery element
    const imageGallery = document.getElementById('imageGallery');

    // Creates an image element and set its attributes
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Memories of the Day';
    imgElement.classList.add('memoryImage');

    // Appends the image element to the gallery
    imageGallery.appendChild(imgElement);
}

// Function to save an image URL to local storage
function saveImage(imageUrl) {
    // Retrieves saved images from local storage
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

    // Add the new image URL to the array
    savedImages.push(imageUrl);

    // Save the updated array back to local storage
    localStorage.setItem('savedImages', JSON.stringify(savedImages));
}

// Function to load saved images from local storage
function loadSavedImages() {
    // Retrieves saved images from local storage
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

    // Display saved images on page load
    savedImages.forEach(function(imageUrl) {
        showFile(imageUrl);
    });
}



// document.getElementById('fileInput').addEventListener('change', handleFileSelect);

// function handleFileSelect(event) {
//     const files = event.target.files;

//     if (files && files.length > 0) {
//         for (const file of files) {
//             readFile(file);
//         }
//     }
// }

// function readFile(file) {
//     const reader = new FileReader();

//     reader.onload = function (e) {
//         const imageUrl = e.target.result;
//         showFile(imageUrl);
//     };

//     reader.readAsDataURL(file); // Read image files as data URL
// }

// function showFile(imageUrl) {
//     const imageGallery = document.getElementById('imageGallery');

//     // Create an image element and append it to the gallery
//     const imgElement = document.createElement('img');
//     imgElement.src = imageUrl;
//     imgElement.alt = 'Memories ';
//     imgElement.classList.add('memoryImage');
//     imageGallery.appendChild(imgElement);
// }


