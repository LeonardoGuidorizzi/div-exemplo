const box = `
    <div id='box'>
        <a class = 'mensagem'> Moreira mil grau </a>
    </div>`

document.body.innerHTML = box

const box1 = document.createElement('div');
box1.setAttribute('id','box1');
box1.textContent = 'Moreira mil grau';
box1.style.color = 'white';

document.body.appendChild(box1);