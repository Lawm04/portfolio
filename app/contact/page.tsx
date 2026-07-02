import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Contact Me
      </h1>

      <ContactForm />
    </section>
  );
}