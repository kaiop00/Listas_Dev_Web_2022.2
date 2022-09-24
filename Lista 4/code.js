function digitar(event) {
    console.log(event.target.value)
    let count = document.getElementById('ctd')

    if (event.target.value.length == 0) {
        document.getElementById('btEnviar').disabled = true;
        count.style.opacity = 0;
    } else {
        document.getElementById('btEnviar').disabled = false;
        count.style.opacity = 1;
        count.textContent = 140 - event.target.value.length;
    }

    if (+count.innerText <= 40) {
        if (+count.innerText <= 0) {
            count.classList.remove('yellow');
            count.classList.add('red');
        } else {
            count.classList.add('yellow');
        }
    }
}

function digitarModal(event) {
    let contador = document.getElementById('ctdModal')

    if (event.target.value.length == 0) {

        document.getElementById('btEnviarModal').disabled = true;
        contador.style.opacity = 0;
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
            contador.classList.add('yellow');
        }
    }
}

