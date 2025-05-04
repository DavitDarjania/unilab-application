const closeAd = document.querySelector('.close_advertise')
const signUp = document.querySelector('.sign-up-advertise')

closeAd.addEventListener('click', () => {
    signUp.style.display = 'none';
})

const hamburgerModal = document.querySelector('.hamburger-menu')
const hamburgerBtn = document.querySelector('.hamburger')
const hamburgerClose = document.querySelector('.close_menu')

hamburgerBtn.addEventListener('click', () => {
    hamburgerModal.classList.toggle('d-flex')
})
hamburgerClose.addEventListener('click', () => {
    hamburgerModal.classList.remove('d-flex')
})


// New Arrivals section elements
// const arrivalSection = document.querySelector('.arrival-cards-box')
// const sameCard = document.createElement('div')
// sameCard.classList.add('same-card')

// const cardImg = document.createElement('img')
// const cardTitle = document.createElement('h6')

// const starsBox = document.createElement('p')
// const cardStar = document.createElement('div')
// cardStar.classList.add('star-box')
// const halfStar = document.createElement('span')
// halfStar.classList.add('half-star')
// const starCount = document.createElement('span')
// starCount.classList.add('star-count')

// const priceBox = document.createElement('div')
// priceBox.classList.add('price-box', 'd-flex')
// const arrivalPrice = document.createElement('h3')
// arrivalPrice.classList.add('arrival_price')
// const realPrice = document.createElement('h3')
// realPrice.classList.add('real_price')
// const saleAmount = document.createElement('div')
// saleAmount.classList.add('sale-amount')
const arrivalSection = document.querySelector('.arrival-cards-box')
const topSellingSection = document.querySelector('.topSelling-cards-box')

fetch('../db/main.json')
.then(response => response.json())
.then(data => { 
    for(let i = 0; i < 4; i++){
        const sameCard = document.createElement('div')
        sameCard.classList.add('same-card')

        const cardImg = document.createElement('img')
        const cardTitle = document.createElement('h6')

        const starBox = document.createElement('div')
        starBox.classList.add('star-box')
        const starsPar = document.createElement('p')
        const halfStar = document.createElement('span')
        halfStar.classList.add('half-star')
        const starCount = document.createElement('span')
        starCount.classList.add('star-count')

        const priceBox = document.createElement('div')
        priceBox.classList.add('price-box', 'd-flex')
        const arrivalPrice = document.createElement('h3')
        arrivalPrice.classList.add('arrival_price')
        const realPrice = document.createElement('h3')
        realPrice.classList.add('real_price')
        const saleAmount = document.createElement('div')
        saleAmount.classList.add('sale-amount')

        cardImg.src = data[i].image
        
        for(let j = 0; j < Math.floor(data[i].stars); j++){
            starsPar.innerText += "★"
        }
        if(data[i].stars % 1 == 0.5){
            halfStar.innerText += "★"
            starsPar.appendChild(halfStar)
        }
        if(data[i].sale == 0){
            arrivalPrice.innerText += `$${data[i].price}`
            priceBox.appendChild(arrivalPrice)
        }
        else{
            const saledPrice = (data[i].price * (100 - data[i].sale)) / 100
            arrivalPrice.innerText += `$${saledPrice}`
            realPrice.innerText += `$${data[i].price}`
            priceBox.appendChild(arrivalPrice)
            priceBox.appendChild(realPrice)
            saleAmount.innerText += `-${data[i].sale}%`
            priceBox.appendChild(saleAmount)
        }

        starCount.innerText += `${data[i].stars}/5`
        starsPar.appendChild(starCount)
        starBox.appendChild(starsPar)

        
        cardTitle.innerText += data[i].title

        sameCard.appendChild(cardImg)
        sameCard.appendChild(cardTitle)
        sameCard.appendChild(starBox)
        sameCard.appendChild(priceBox)
        console.log(arrivalSection);  
        arrivalSection.appendChild(sameCard)
    }

    for(let i = data.length - 1; i > 4; i--){
        const sameCard = document.createElement('div')
        sameCard.classList.add('same-card')

        const cardImg = document.createElement('img')
        const cardTitle = document.createElement('h6')

        const starBox = document.createElement('div')
        starBox.classList.add('star-box')
        const starsPar = document.createElement('p')
        const halfStar = document.createElement('span')
        halfStar.classList.add('half-star')
        const starCount = document.createElement('span')
        starCount.classList.add('star-count')

        const priceBox = document.createElement('div')
        priceBox.classList.add('price-box', 'd-flex')
        const arrivalPrice = document.createElement('h3')
        arrivalPrice.classList.add('arrival_price')
        const realPrice = document.createElement('h3')
        realPrice.classList.add('real_price')
        const saleAmount = document.createElement('div')
        saleAmount.classList.add('sale-amount')

        cardImg.src = data[i].image
        
        for(let j = 0; j < Math.floor(data[i].stars); j++){
            starsPar.innerText += "★"
        }
        if(data[i].stars % 1 == 0.5){
            halfStar.innerText += "★"
            starsPar.appendChild(halfStar)
        }
        if(data[i].sale == 0){
            arrivalPrice.innerText += `$${data[i].price}`
            priceBox.appendChild(arrivalPrice)
        }
        else{
            const saledPrice = (data[i].price * (100 - data[i].sale)) / 100
            arrivalPrice.innerText += `$${saledPrice}`
            realPrice.innerText += `$${data[i].price}`
            priceBox.appendChild(arrivalPrice)
            priceBox.appendChild(realPrice)
            saleAmount.innerText += `-${data[i].sale}%`
            priceBox.appendChild(saleAmount)
        }

        starCount.innerText += `${data[i].stars}/5`
        starsPar.appendChild(starCount)
        starBox.appendChild(starsPar)

        
        cardTitle.innerText += data[i].title

        sameCard.appendChild(cardImg)
        sameCard.appendChild(cardTitle)
        sameCard.appendChild(starBox)
        sameCard.appendChild(priceBox)
        console.log(arrivalSection);  
        topSellingSection.appendChild(sameCard)
    }
})

const commentsOwl = document.querySelector('#comments-owl')
fetch('./db/comments.json')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        const item = document.createElement('div')
        item.classList.add('item')

        const starBox = document.createElement('div')
        starBox.classList.add('star-box')
        const starsPar = document.createElement('p')
        const halfStar = document.createElement('span')
        halfStar.classList.add('half-star')

        const nameApproval = document.createElement('div')
        nameApproval.classList.add('name-and-approval', 'd-flex')

        const name = document.createElement('h3')
        name.classList.add('element_name')
        name.innerText = element.name

        const approvalImg = document.createElement('img')
        approvalImg.src = './assets/icons/approve.svg'

        const text = document.createElement('p')
        text.innerText = element.text

        for(let j = 0; j < Math.floor(element.stars); j++){
            starsPar.innerText += "★"
        }
        if(element.stars % 1 == 0.5){
            halfStar.innerText += "★"
            starsPar.appendChild(halfStar)
        }
        starBox.appendChild(starsPar)
        nameApproval.appendChild(name)
        nameApproval.appendChild(approvalImg)

        item.appendChild(starBox)
        item.appendChild(nameApproval)
        item.appendChild(text)
        commentsOwl.appendChild(item)
        

        // Add to carousel
        $('#comments-owl').trigger('add.owl.carousel', [$(item)]).trigger('refresh.owl.carousel');

    });
})


function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
