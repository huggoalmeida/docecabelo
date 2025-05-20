function Home() {
        return (
          <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
            <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Doce Cabelos</h2>
              <p className="text-lg mb-6">Cabelos naturais de alta qualidade para transformar seu visual.</p>
              <a href="https://wa.me/5563992152139" target="_blank" className="bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700">
                Entre em Contato
              </a>
            </div>
          </section>
        );
      }

      export default Home;