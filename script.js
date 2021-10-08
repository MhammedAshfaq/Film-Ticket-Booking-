const container = document.querySelector('.container')
const seats = document.querySelector('.row.seat:not(.occupied')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;

//Update Total and count
function updateSelectCount(){
    const selectedSeats =document.querySelectorAll('.row .seat.selected')

    const selectedSeatsCount=selectedSeats.length
    count.innerHTML = selectedSeatsCount
    total.innerHTML = selectedSeatsCount *ticketPrice
}

//movie Select Event
movieSelect.addEventListener('change', (e)=>{
    ticketPrice = e.target.value;
    updateSelectCount()
})

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }

    updateSelectCount();
});

