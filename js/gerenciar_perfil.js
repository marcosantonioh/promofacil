document.addEventListener('DOMContentLoaded', () => {
    const configForm = document.getElementById('configForm');

    configForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtenha os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const nomeNegocio = document.getElementById('nomeNegocio').value;
        const enderecoNegocio = document.getElementById('enderecoNegocio').value;
        const telefoneNegocio = document.getElementById('telefoneNegocio').value;
        const descricaoNegocio = document.getElementById('descricaoNegocio').value;

        // Exemplo de armazenamento local (localStorage) - substitua pelo método de armazenamento apropriado
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
        localStorage.setItem('nomeNegocio', nomeNegocio);
        localStorage.setItem('enderecoNegocio', enderecoNegocio);
        localStorage.setItem('telefoneNegocio', telefoneNegocio);
        localStorage.setItem('descricaoNegocio', descricaoNegocio);

        alert('Configurações salvas com sucesso!');
    });

    // Carregar configurações salvas (se houver)
    document.getElementById('nome').value = localStorage.getItem('nome') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('senha').value = localStorage.getItem('senha') || '';
    document.getElementById('nomeNegocio').value = localStorage.getItem('nomeNegocio') || '';
    document.getElementById('enderecoNegocio').value = localStorage.getItem('enderecoNegocio') || '';
    document.getElementById('telefoneNegocio').value = localStorage.getItem('telefoneNegocio') || '';
    document.getElementById('descricaoNegocio').value = localStorage.getItem('descricaoNegocio') || '';
});















document.addEventListener('DOMContentLoaded', () => {
    const editInfoLink = document.getElementById('editInfo');
    const newPromotionLink = document.getElementById('newPromotion');
    const backToPromotionsLink = document.getElementById('backToPromotions');
    
    const currentInfoSection = document.getElementById('currentInfo');
    const editInfoSection = document.getElementById('editInfoSection');
    const newPromotionSection = document.getElementById('newPromotionSection');
    
    // Exibir informações atuais ao carregar a página
    currentInfoSection.style.display = 'block';
    
    // Mostrar seção de editar informações
    editInfoLink.addEventListener('click', (e) => {
        e.preventDefault();
        currentInfoSection.style.display = 'none';
        editInfoSection.style.display = 'block';
        newPromotionSection.style.display = 'none';
    });

    // Mostrar seção de cadastrar nova promoção
    newPromotionLink.addEventListener('click', (e) => {
        e.preventDefault();
        currentInfoSection.style.display = 'none';
        editInfoSection.style.display = 'none';
        newPromotionSection.style.display = 'block';
    });

    // Voltar para a tela de promoções
    backToPromotionsLink.addEventListener('click', (e) => {
        e.preventDefault();
        currentInfoSection.style.display = 'block';
        editInfoSection.style.display = 'none';
        newPromotionSection.style.display = 'none';
    });
});
