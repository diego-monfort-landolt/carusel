'use strict'

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i) => {
    punto[i].addEventListener('click', ()=> {

        let posicion = i
       // let operacion = posicion * -50
//geändert weil der code so nicht funktioniert hat -translateX( ${ operacion }%) to grande.style.transform = 'translateX( -50%)'
        grande.style.transform = 'translateX( -50%)'
        punto.forEach((cadaPunto, i)=>{
            
            punto[i].classList.remove('activo')

        })
            punto[i].classList.add('activo')


    })
});



