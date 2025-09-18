import { TestimonialCard } from "./TestimonialCard";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    text: "Em 3 meses, o faturamento aumentou 340%! A estratégia do MEU COMÉRCIO é simplesmente revolucionária.",
    authorImage: "/avatars/carlos-eduardo.png",
    authorName: "Carlos Eduardo",
    authorTitle: "TechStart Solutions",
  },
  {
    text: "Saí do zero para R$ 50k/mês em vendas online. A equipe é excepcional e os resultados falam por si.",
    authorImage: "/avatars/marina-santos.png",
    authorName: "Marina Santos",
    authorTitle: "Boutique Elegance",
  },
  {
    text: "ROI de 800% no primeiro trimestre. Finalmente encontrei uma agência que entrega o que promete!",
    authorImage: "/avatars/roberto-lima.png",
    authorName: "Roberto Lima",
    authorTitle: "Construtech Pro",
  },
  {
    text: "Triplicamos o número de alunos em 4 meses. A MEU COMÉRCIO transformou nosso negócio completamente.",
    authorImage: "/avatars/ana-beatriz.png",
    authorName: "Ana Beatriz",
    authorTitle: "FitLife Academia",
}, ];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-2">
            <Quote className="w-12 h-12 text-brand-green transform -scale-x-100" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que <span className="text-brand-green">Falam</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Mais de 500 empresas já decolaram conosco. Veja o que nossos clientes espaciais dizem sobre nossa tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              authorImage={testimonial.authorImage}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
            />
          ))}
        </div>
      </div>
    </section>
); }