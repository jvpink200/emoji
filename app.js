const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');


//Add Event Listener

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active'); //triggers active display in styles.css
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active'); //triggers active display in styles.css
        openFace.classList.remove('active');
    }
});

