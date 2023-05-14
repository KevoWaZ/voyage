let flBtn = document.querySelectorAll('.flBtn')
let hotelBtn = document.querySelectorAll('.hotelBtn')
let carBtn = document.querySelectorAll('.carBtn')
let flight = document.querySelector('.flight')
let hotel = document.querySelector('.hotel')
let car = document.querySelector('.car')

flBtn.forEach(button => {
    button.addEventListener('click', () => {
        hotel.style.display = "none"
        car.style.display = "none"
        flight.style.display = "block"
        flBtn.forEach(btn => btn.style.opacity = "1")
        hotelBtn.forEach(btn => btn.style.opacity = "0.8")
        carBtn.forEach(btn => btn.style.opacity = "0.8")
    })
})

hotelBtn.forEach(button => {
    button.addEventListener('click', () => {
        hotel.style.display = "block"
        car.style.display = "none"
        flight.style.display = "none"
        hotelBtn.forEach(btn => btn.style.opacity = "1")
        flBtn.forEach(btn => btn.style.opacity = "0.8")
        carBtn.forEach(btn => btn.style.opacity = "0.8")
    })
})

carBtn.forEach(button => {
    button.addEventListener('click', () => {
        hotel.style.display = "none"
        car.style.display = "block"
        flight.style.display = "none"
        carBtn.forEach(btn => btn.style.opacity = "1")
        hotelBtn.forEach(btn => btn.style.opacity = "0.8")
        flBtn.forEach(btn => btn.style.opacity = "0.8")
    })
})


let humberger = document.querySelector('.humberger')
let menu = document.querySelector('.liste-nav')

humberger.addEventListener('click', () => {
    menu.classList.toggle('active-menu')
});