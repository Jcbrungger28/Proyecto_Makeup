let darkmode = document.querySelector('#darkmode');


darkmode.onclick = () => {
    if (darkmode.classList.contains('ri-moon-fill')) {
        darkmode.classList.replace('ri-moon-fill', 'ri-sun-fill');
        document.body.classList.add('color');
    } else {
        darkmode.classList.replace('ri-sun-fill', 'ri-moon-fill');
        document.body.classList.remove('color')
    }
}


const sr = ScrollReveal({
    distance: '10px',
    duration: '2400',
    rest: true
});

sr.reveal('.contenido-texto', { delay: 250, origin: 'top' });
sr.reveal('.contenido-img', { delay: 450, origin: 'bottom' });
sr.reveal('.flecha', { delay: 550, origin: 'left' });


sr.reveal('.recomendaciones-info', { daley: 250, origin: 'bottom' })
sr.reveal('.recomendaciones-container', { daley: 250, origin: 'top' })
sr.reveal('.recomendaciones-1', { delay: 450, origin: 'top' });
sr.reveal('.recomendaciones-2', { delay: 550, origin: 'left' });


sr.reveal('.info-video', { daley: 250, origin: 'bottom' })
sr.reveal('.video-tienda1', { daley: 250, origin: 'top' })
sr.reveal('.container-tienda p', { delay: 550, origin: 'left' });


sr.reveal('.form-info-container1', { daley: 250, origin: 'bottom' })
sr.reveal('.form-info-container', { daley: 250, origin: 'top' })
sr.reveal('.info-formulario p', { delay: 550, origin: 'left' });

sr.reveal('.info-formulario h1', { daley: 250, origin: 'top' })

