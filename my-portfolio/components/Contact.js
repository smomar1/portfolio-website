// components/Contact.js
export default function Contact() {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>Feel free to reach out to me via email or connect with me on LinkedIn.</p>
          <a href="mailto:your-email@example.com" className="block mt-4 text-blue-500">your-email@example.com</a>
          <a href="https://www.linkedin.com/in/your-linkedin/" className="block mt-2 text-blue-500">LinkedIn Profile</a>
        </div>
      </section>
    );
  }
  