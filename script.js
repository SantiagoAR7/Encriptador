function procesar() {
    const textoOriginal = document.getElementById('texto').value.toLowerCase();
    const opcion = document.getElementById('opcion').value;
    let resultado;

    if (opcion === 'encriptar') {
        resultado = encriptarTexto(textoOriginal);
    } else {
        resultado = desencriptarTexto(textoOriginal);
    }

    document.getElementById('resultado').innerText = resultado;
}

function encriptarTexto(texto) {
    const encriptado = texto.split('').map(letra => {
        switch (letra) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return letra;
        }
    }).join('');

    return encriptado;
}

function desencriptarTexto(texto) {
    const desencriptado = texto.replace(/(enter|imes|ai|ober|ufat)/g, match => {
        switch (match) {
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match;
        }
    });

    return desencriptado;
}



function copiarTexto() {
    const resultado = document.getElementById('resultado');
    const textoCopiado = resultado.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = textoCopiado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Texto copiado al portapapeles');
}

