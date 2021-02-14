{ 
  const cinemaHall = document.querySelector('.cinema__hall');
  const seats = document.querySelectorAll('.cinema__row .cinema__seat:not(.cinema__seat--occupied)');
  const count = document.querySelector('#js-cinemaCount');
  const total = document.querySelector('#js-cinemaTotal');
  const movieSelect = document.querySelector('#js-movieSelect');

  const ticketPrice = +movieSelect.value;

  const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.cinema__seat.cinema__seat--selected');
    const selectedSeatsCount = selectedSeats.length; 

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

  };

  // More performance way instead forEach loop
   cinemaHall.addEventListener('click', (e) => {
    if (e.target.classList.contains('cinema__seat') 
        && !e.target.classList.contains('cinema__seat--occupied')) {
      e.target.classList.toggle('cinema__seat--selected');
      
      updateSelectedCount();
    };
   });

};

