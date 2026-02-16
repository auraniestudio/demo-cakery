import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: "How far in advance should I order?", 
      a: "We recommend ordering at least 2–7 days in advance, depending on cake size and design." },
    { q: "Do you make custom cakes?", 
      a: "Yes! Every cake can be tailored to your theme, flavor, and occasion." },
    { q: "Where are you located?", 
      a: "We are a boutique home bakery serving Wellington, New Zealand." },
    { q: "Can I schedule a consultation?", 
      a: "Yes! Book a complimentary consultation through our contact form." },
    { q: "Do you offer delivery or pickup?", 
      a: "Pickup is available at our bakery, delivery within Wellington can be arranged." },
    { q: "What flavors do you offer?", 
      a: "Classic, seasonal, and custom flavors. Let us know your preference!" },
    { q: "Do you cater for dietary restrictions?", 
      a: "We offer gluten-free, dairy-free, and vegan options. Mention requirements when ordering." },
    { q: "Do you make cakes for weddings or corporate events?", 
      a: "Yes! Contact us early to discuss details and availability." },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* ================= HERO + HEADER ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/cakebg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* HEADER */}
        <header className="relative z-10 flex justify-between items-center px-4 sm:px-8 md:px-12 py-6 text-white bg-black/5">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">Sweet Delights</h1>
        </header>

        {/* HERO TEXT */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-10 min-h-[90vh]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight max-w-4xl"
          >
            {/* Desktop */}
            <span className="hidden md:inline">Baked Fresh, Loved Daily</span>
            {/* Mobile */}
            <span className="inline md:hidden">Baked Fresh,<br></br> Loved Daily</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-200 max-w-xl"
          >
            <span className="hidden md:inline">
              From sunrise pastries to decadent celebration cakes, <br></br> we craft every bite to bring a smile to your day.
            </span>
            <span className="inline md:hidden">
            From sunrise pastries to decadent celebration cakes,<br></br> we craft every bite to bring a smile to your day.
            </span>
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 border border-rose-400 px-10 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-rose-200 hover:text-black transition duration-300"
          >
            Enquire Now
          </motion.a>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section id="story" className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-rose-100 text-center">
        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          <span className="hidden md:inline">
            "We are passionate about creating elegant,<br></br> handcrafted cakes  that make every celebration unforgettable. 
            <br></br>Each cake is made with premium ingredients <br></br>and designed with love and attention to detail."
          </span>
          <span className="inline md:hidden">
          We are passionate about creating elegant,<br></br> handcrafted cakes <br></br>that make every celebration unforgettable. 
          <br></br>Each cake is made with premium ingredients <br></br>and designed <br></br>with love and attention to detail.
          </span>
        </p>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-center mb-8 sm:mb-12">Our Cake Gallery</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {["/cake1.jpg","/cake2.jpg","/cake3.jpg","/cake4.jpg","/cake5.jpg","/cake6.jpg"].map((src,i)=>(
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i*0.08 }}
                className="group overflow-hidden rounded-2xl shadow-md"
              >
                <img src={src} alt="Cake in Wellington" className="w-full h-60 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition duration-700"/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-rose-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <img src="/cake2.jpg" alt="Cake in Wellington" className="rounded-2xl shadow-lg h-48 sm:h-64 md:h-auto w-full object-cover"/>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4">Stay in Touch</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
              <span className="hidden md:inline">
                Curious about seasonal menus, catering packages, or wholesale partnerships? Reach out for a complimentary consultation, our team is ready to discuss how we can sweeten your next gathering.
              </span>
              <span className="inline md:hidden">
              Reach out for a complimentary consultation, our team is ready to discuss how we can sweeten your next gathering.
              </span>
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                const formData = new FormData(e.target);
                const res = await fetch("https://formspree.io/f/xeelkkrl", {
                  method: "POST",
                  body: formData,
                  headers: { Accept: "application/json" },
                });
                if (res.ok) {
                  setSubmitted(true);
                  e.target.reset();
                  setTimeout(()=>setSubmitted(false),3000);
                }
                setLoading(false);
              }}
              className="space-y-3 sm:space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded-lg px-4 py-2 sm:py-3"/>
              <input type="email" name="email" placeholder="Email" required className="w-full border rounded-lg px-4 py-2 sm:py-3"/>
              <textarea
  name="message"
  placeholder="Tell us about your cake..."
  required
  className="w-full border rounded-lg px-4 py-3 h-24 sm:h-28 md:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
/>

              <button type="submit" disabled={loading} className="bg-rose-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-rose-700 transition disabled:opacity-50">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-center mb-8 sm:mb-12">Your Question, Answered</h3>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((item,i)=>(
              <div key={i} className="bg-white rounded-xl p-4 sm:p-5 cursor-pointer shadow-sm" onClick={()=>setOpen(open===i?null:i)}>
                <div className="font-medium text-sm sm:text-base">{item.q}</div>
                {open===i && <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-rose-200 text-black py-12 px-4 sm:px-8 text-center">
        <h4 className="text-xl sm:text-2xl font-semibold mb-4">Sweet Delights Cakery</h4>
        <p className="opacity-80">email@example.com</p>
        <p className="opacity-80">+64 21 000 0000</p>
        <p className="opacity-80 mb-6">Wellington, New Zealand</p>
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 text-sm">
          <a href="#" className="hover:opacity-70">Instagram</a>
          <a href="#" className="hover:opacity-70">Facebook</a>
          <a href="#" className="hover:opacity-70">Email</a>
        </div>
        <p className="text-xs opacity-60">© 2026 Sweet Delights. All rights reserved.</p>
      </footer>

      {/* ================= SUCCESS POPUP ================= */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-rose-200 rounded-2xl p-8 max-w-sm text-center shadow-xl">
            <div className="text-3xl mb-2">💌</div>
            <h4 className="text-2xl font-semibold mb-3">Thank You!</h4>
            <p className="text-gray-600">Your message has been sent. We’ll be in touch soon.</p>
          </motion.div>
        </div>
      )}

    </div>
  );
}

export default App



