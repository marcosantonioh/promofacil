document.addEventListener('DOMContentLoaded', () => {
    const empresaButton = document.getElementById('empresaButton');
    const clienteButton = document.getElementById('clienteButton');
    const cadastroEmpresaForm = document.getElementById('cadastroEmpresaForm');
    const cadastroClienteForm = document.getElementById('cadastroClienteForm');

    if (empresaButton) {
        empresaButton.addEventListener('click', () => {
            cadastroEmpresaForm.style.display = 'block';
            cadastroClienteForm.style.display = 'none';
        });
    }

    if (clienteButton) {
        clienteButton.addEventListener('click', () => {
            cadastroEmpresaForm.style.display = 'none';
            cadastroClienteForm.style.display = 'block';
        });
    }

    if (cadastroEmpresaForm) {
        cadastroEmpresaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('empresaNome').value;
            const email = document.getElementById('empresaEmail').value;
            const senha = document.getElementById('empresaSenha').value;
            console.log(`Empresa cadastrada: ${nome}, ${email}`);
        });
    }

    if (cadastroClienteForm) {
        cadastroClienteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('clienteNome').value;
            const email = document.getElementById('clienteEmail').value;
            const senha = document.getElementById('clienteSenha').value;
            console.log(`Cliente cadastrado: ${nome}, ${email}`);
        });
    }

    const cadastroProdutoForm = document.getElementById('cadastroProdutoForm');
    if (cadastroProdutoForm) {
        cadastroProdutoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('nome', document.getElementById('produtoNome').value);
            formData.append('tipo', document.getElementById('produtoTipo').value);
            formData.append('validade', document.getElementById('produtoValidade').value);
            formData.append('preco', document.getElementById('produtoPreco').value);
            formData.append('quantidade', document.getElementById('produtoQuantidade').value);
            formData.append('foto', document.getElementById('produtoFoto').files[0]);

            fetch('api/cadastrarProduto', {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    alert('Produto cadastrado com sucesso!');
                } else {
                    alert('Falha ao cadastrar produto.');
                }
            }).catch(error => {
                console.error('Erro:', error);
                alert('Erro ao cadastrar produto.');
            });
        });
    }
});









function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
    
}

const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});










function redirectToConfirmation(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Redireciona para a página de confirmação
    window.location.href = "cadastro_confirmado.html";
}







const carouselSlide = document.getElementById('carousel-slide');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let counter = 0;
        const size = 859; // Width of each slide

        function updateCarousel() {
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        nextBtn.addEventListener('click', () => {
            counter = (counter + 1) % carouselItems.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            counter = (counter - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        });

        function autoSlide() {
            counter = (counter + 1) % carouselItems.length;
            updateCarousel();
        }

        setInterval(autoSlide, 5000); // Slide automatically every 5 seconds

        window.onload = updateCarousel;












        


// Função para definir um cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para obter um cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cname) === 0) {
            return cookie.substring(cname.length, cookie.length);
        }
    }
    return "";
}

// Função para apagar um cookie
function deleteCookie(name) {
    setCookie(name, "", -1);
}

// Adiciona eventos aos botões e ao link
document.getElementById('acceptCookies').addEventListener('click', function() {
    setCookie('userConsent', 'accepted', 30);
    document.querySelector('.cookie-banner').style.display = 'none';
});

document.getElementById('configCookies').addEventListener('click', function() {
    // Aqui você pode abrir um modal para que o usuário configure suas preferências
    alert('Configurar preferências de cookies');
});

// Verifica se o usuário já aceitou os cookies
window.onload = function() {
    // Apagar o cookie para fins de demonstração
    deleteCookie('userConsent');

    if (getCookie('userConsent') !== '') {
        console.log('Cookies já aceitos');
        document.querySelector('.cookie-banner').style.display = 'none';
    } else {
        console.log('Cookies não aceitos');
        document.querySelector('.cookie-banner').style.display = 'block';
    }
};