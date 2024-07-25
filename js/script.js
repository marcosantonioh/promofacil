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





