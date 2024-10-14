export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Contactez-moi</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Nom</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-700" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-700" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 rounded bg-gray-700" required></textarea>
            </div>
            <button type="submit" className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mb-8">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    );
  }