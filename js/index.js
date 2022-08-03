let buttons = document.querySelectorAll('.buttons button');
let dc = document.querySelector('.dynamic-content');

const imagesList = [
    "./img/hydroelectricity.jpg",
    "./img/bioenergy.jpg",
    "./img/wind-power.jpg"
 ];
 
 function preloader() {
     const images = [];
     for (let i = 0; i < imagesList.length; i++) {
         images[i] = new Image();
         images[i].src = imagesList[i];
     }
     // Images ready to be used:
     console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
 };    
 window.addEventListener("load", preloader);

let stock = {
    c1: {
        headingContent: 'Hydroelectricity',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas sed tempus urna et.',
        imageSrc:  imagesList[0],
        imageAlt: 'Hydroelectricity'
        },
    c2: {
        headingContent: 'Bioenergy',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas sed tempus urna et.',
        imageSrc:  imagesList[1],
        imageAlt: 'Bioenergy'
    },
    c3: {
        headingContent: 'Wind Power',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas sed tempus urna et.',
        imageSrc:  imagesList[2],
        imageAlt: 'Wind Power'
    },
}

dc.innerHTML = `<article>
                    <h2>${stock.c1.headingContent}</h2>
                    <br>
                    <img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}">
                    <p>${stock.c1.bodyText}</p>
                </article>`;

function handleSelection(ev) {
    let currentBtn = ev.target;
    for (let i=0; i<buttons.length; i++) {
        if (buttons[i].hasAttribute('id','active-button')) {
            buttons[i].removeAttribute('id', 'active-button');
        }
        currentBtn.setAttribute('id', 'active-button');
    }
    console.log(currentBtn.textContent);
    if (currentBtn.textContent === 'Hydroelectricity') {
        dc.innerHTML = `<article>
                            <h2>${stock.c1.headingContent}</h2>
                            <br>
                            <img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}">
                            <p>${stock.c1.bodyText}</p>
                        </article>`;
        } else if (currentBtn.textContent === 'Bioenergy') {
            dc.innerHTML = `<article>
                                <h2>${stock.c2.headingContent}</h2>
                                <br>
                                <img src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}">
                                <p>${stock.c2.bodyText}</p>
                            </article>`;
        } else if (currentBtn.textContent === 'Wind Power') {
            dc.innerHTML = `<article>
                                <h2>${stock.c3.headingContent}</h2>
                                <br>
                                <img src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}">
                                <p>${stock.c3.bodyText}</p>
                            </article>`;
        }
}

for (let btns of buttons) {
    btns.addEventListener('click', handleSelection);
}
