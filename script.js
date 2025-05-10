function toggleGallery() {
  const gallery = document.getElementById('galleryOptions');
  if (gallery.style.display === 'none' || gallery.style.display === '') {
    gallery.style.display = 'block';
  } else {
    gallery.style.display = 'none';
  }
}