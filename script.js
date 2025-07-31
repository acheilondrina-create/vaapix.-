document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.textContent = 'Bem-vindo à VAAPIX!';
  div.style.position = 'fixed';
  div.style.bottom = '20px';
  div.style.right = '20px';
  div.style.background = '#333';
  div.style.color = 'white';
  div.style.padding = '10px 15px';
  div.style.borderRadius = '8px';
  div.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 4000);
});
