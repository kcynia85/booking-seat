{ 
  const cinemaHall = document.querySelector('.cinema__hall');
  const seats = document.querySelectorAll('.cinema__row .cinema__seat:not(.cinema__seat--occupied)');
  const count = document.querySelector('#js-cinemaCount');
  const total = document.querySelector('#js-cinemaTotal');
  const movieSelect = document.querySelector('#js-movieSelect');

  let ticketPrice = +movieSelect.value;

  const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }

  const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.cinema__seat.cinema__seat--selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    const selectedSeatsCount = selectedSeats.length; 

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice; 

  };

  const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('cinema__seat--selected')
        }
      });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  };

  movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });

  cinemaHall.addEventListener('click', e => {
    if (e.target.classList.contains('cinema__seat') 
        && !e.target.classList.contains('cinema__seat--occupied')) {
      e.target.classList.toggle('cinema__seat--selected');
      
      updateSelectedCount();
    };
   });
   
   populateUI();
};




