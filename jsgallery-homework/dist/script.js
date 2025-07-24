// Name this external file gallery.js

function upDate(previewPic) {
    // Log to verify the event is triggered
    console.log("Mouse over triggered");

    // Get the div with id="image"
    var imageDiv = document.getElementById("image");

    // Change background image to the preview image source
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Change the text to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;

    // Optional: log for debugging
    console.log("Alt:", previewPic.alt);
    console.log("Src:", previewPic.src);
}

function unDo() {
    // Get the div with id="image"
    var imageDiv = document.getElementById("image");

    // Reset the background image to the original (empty string)
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}