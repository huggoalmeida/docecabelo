function abrirWhatsApp(nomeProduto) {
  const mensagem = `Olá, tenho interesse no produto ${nomeProduto}, poderia me informar a disponibilidade?`;
  const numero = "5563992152139";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
