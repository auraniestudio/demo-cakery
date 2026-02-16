function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-pink-100 shadow p-6 text-center">
        <h1 className="text-4xl font-bold text-pink-700">
          Sweet Delights Bakery
        </h1>
        <p className="mt-2 text-lg text-pink-600">
          Delicious cakes baked with love
        </p>
      </header>

      {/* Hero */}
      <section className="py-12 text-center px-4">
        <img
          src="../cakebg.jpg"
          alt="Cake"
          className="mx-auto rounded-lg shadow-lg w-80"
        />
        <h2 className="text-3xl mt-6 font-semibold">
          Our Signature Cakes
        </h2>
        <p className="mt-2 max-w-xl mx-auto">
          From classic chocolate to fruity delights, we bake cakes that bring smiles.
        </p>
      </section>

      {/* Menu */}
      <section className="py-12 px-4 bg-pink-100">
        <h3 className="text-2xl font-semibold text-center mb-6">Menu</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Chocolate Cake", img: "../public/cake1.jpg" },
            { name: "Strawberry Cake", img: "../cake2.jpg" },
            { name: "Vanilla Delight", img: "../cake3.jpg" },
          ].map((cake) => (
            <div
              key={cake.name}
              className="bg-white p-4 rounded-lg shadow hover:scale-105 transition"
            >
              <img src={cake.img} className="rounded mb-2" />
              <h4 className="font-bold">{cake.name}</h4>
              <p>Freshly baked with premium ingredients.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Order Your Cake</h3>
        <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
          Place Order
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-pink-200 py-6 text-center">
        <p>© 2026 Sweet Delights Bakery</p>
      </footer>
    </div>
  )
}

export default App
