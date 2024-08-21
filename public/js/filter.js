function filterImages(category) {
    const allImages = document.querySelectorAll('.why-choose-our-factory-text .col-lg-4, .why-choose-our-factory-text .col-xl-4, .why-choose-our-factory-text .col-md-6');
    allImages.forEach(image => {
        if (category === 'all') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}