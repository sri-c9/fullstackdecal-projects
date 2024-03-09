document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("unlock-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;

    if (
      username === "fullstackdecal" &&
      password === "proj1" &&
      message === "open sesame!"
    ) {
      const images = [
        "FullSizeRender.jpeg",
        "IMG_0071.JPG",
        "IMG_0080.JPG",
        "IMG_0249.JPG",
        "IMG_0345.JPG",
        "IMG_1175.jpeg",
        "IMG_2572.jpg",
        "IMG_2961.jpeg",
        "IMG_4900.jpeg",
        "IMG_9935.jpeg",
      ];
      const imageContainer = document.getElementById("image-container");
      imageContainer.innerHTML = ""; // Clear previous images
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = "Image";
        imageContainer.appendChild(img);
      });
    } else {
      alert("Incorrect username, password, or message. Please try again.");
    }
  });
});
