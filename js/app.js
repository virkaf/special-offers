'use strict';

function addOffer(parentEl, offer) {
    const sizerEl = document.createElement('h3');
    sizerEl.textContent = offer.title;
    sizerEl.id = 'title';
    parentEl.appendChild(sizerEl);
    const viewEl = document.createElement('img');
    viewEl.id = 'image';
    viewEl.src = offer.image;
    viewEl.width = 400;
    parentEl.appendChild(viewEl);
    const cashEl = document.createElement('p');
    cashEl.id = 'description';
    cashEl.textContent = offer.description;
    parentEl.appendChild(cashEl);
    if (offer.remainingDays !== 0) {
        const bannerEl = document.getElementById('title');
        bannerEl.textContent = offer.title;
        const photoEl = document.getElementById('image');
        photoEl.src = offer.image;
        photoEl.width = 400;
        const meterEl = document.createElement('span');
        meterEl.textContent = `Осталось (дней): ${offer.remainingDays}`;
        parentEl.appendChild(meterEl);
        const specificationEl = document.getElementById('description');
        specificationEl.textContent = offer.description;
    }
}

/* let offer = {
    image: 'https://js-rosbank.ru/assets/offer-school.png',
    remainingDays: 0,
    title: 'Школьные выплаты на карту #МожноВСЁ',
    description: 'Получите 10 000 Р от государства +1500 от Росбанка',
};*/

const offer = {
    image: 'https://js-rosbank.ru/assets/offer-visa-cashback.jpg',
    remainingDays: 43,
    title: 'Кешбэк 20% по картам VISA',
    description: 'Оформите карту VISA #МожноВСЁ и получайте кешбэк 20% за покупки у наших партнёров',
};

addOffer(document.body, offer);