function digitar(event) {
    
    let count = document.getElementById('ctd')
    console.log(count.textContent.length)
    if (event.target.value.length <= 0 ) {
        document.getElementById('btEnviar').disabled = true;
        count.style.opacity = 0;
   
    }else {
        document.getElementById('btEnviar').disabled = false;
        count.style.opacity = 1;
        count.textContent = 140 - event.target.value.length;
    }
   

    if (+count.innerText <= 40) {
        if (+count.innerText <= 0) {
            count.classList.remove('yellow');
            count.classList.add('red');
        } else {
            count.classList.remove('red');

            count.classList.add('yellow');
        }
    }else{
        count.classList.remove('yellow');
        count.classList.add('black');
    }
}


document.querySelector('#a').addEventListener("input", () => {
    console.log("23")
})






function digitarModal(event) {
    let contador = document.getElementById('ctdModal')
    console.log(contador.textContent)
    
    if (event.target.value.length <= 0) {

        document.getElementById('btEnviarModal').disabled = true;
        
    } else {
        document.getElementById('btEnviarModal').disabled = false;
        contador.style.opacity = 1;

        contador.textContent = 140 - event.target.value.length;
    }

    if (+contador.innerText <= 40) {
        if (+contador.innerText <= 0) {
            contador.classList.remove('yellow');
            contador.classList.add('red');
        } else {
            contador.classList.remove('red');

            contador.classList.add('yellow');
        }
    }else{
        contador.classList.remove('yellow');
        contador.classList.add('black');
    }
}