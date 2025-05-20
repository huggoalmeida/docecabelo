function Contact() {
        return (
          <section id="contact" className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-semibold mb-8">Entre em Contato</h2>
              <p className="text-lg mb-4">
                Fale conosco pelo WhatsApp:{' '}
                <a href="https://wa.me/5563992152139" target="_blank" className="text-pink-600 hover:underline">
                  +55 63 99215-2139
                </a>
              </p>
              <p className="text-lg mb-4">
                Siga-nos no Instagram:{' '}
                <a href="https://www.instagram.com/cida.almeida.cabeleireira" target="_blank" className="text-pink-600 hover:underline">
                  @cida.almeida.cabeleireira
                </a>
              </p>
            </div>
          </section>
        );
      }

      export default Contact;