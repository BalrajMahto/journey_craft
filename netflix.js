document.addEventListener("DOMContentLoaded", function() {
    const main = document.getElementById('main');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');
  
    // Fetch data from API
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      .then(data => {
        data.forEach(movie => {
          // Create a movie card
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
  
          // Create image element
          const img = document.createElement('img');
          img.src = movie.image_url;
          img.alt = movie.title;
  
          // Create p element for movie title
          const title = document.createElement('p');
          title.textContent = movie.title;
  
          // Append elements to movie card
          movieCard.appendChild(img);
          movieCard.appendChild(title);
  
          // Append movie card to main container
          main.appendChild(movieCard);
  
          // Add click event to show modal with movie details
          movieCard.addEventListener('click', () => {
            showModal(movie);
          });
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Show modal with movie details
    function showModal(movie) {
      modalBody.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.image_url}" alt="${movie.title}">
        <p>${movie.description}</p>
      `;
      modal.style.display = 'block';
    }
  
    // Close modal
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  