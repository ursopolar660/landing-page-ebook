document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get('nome');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    
    await fetch('https://script.google.com/macros/s/AKfycbz21gB4SxHgF2eq8XephtAtqc8v9TD7G--jmBqPJrtLrQ9-9dXeOPseVnPgadEhLtvUSQ/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, email, whatsapp })
    });
    

    alert('Seu download começará em instantes.');
    window.location.href = 'E-book-Proteção-Digital-S.pdf';

    // Limpa o formulário
    form.reset();
  });
});
