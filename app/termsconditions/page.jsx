import React from "react";
import Hero from "../components/Hero";

const page = () => {
  const sections = [
    {
      title: "1. Overview",
      paragraphs: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, corporis? Facere quisquam earum dolore excepturi minima, fuga laborum reiciendis molestias nesciunt, impedit perspiciatis voluptatem nisi ad modi labore ipsam quas.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, quis explicabo? Quis non minima, placeat aspernatur reiciendis, itaque quam quos eaque doloribus vero facere libero enim quo dolor. Et, fugit!",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere harum neque, repellendus, accusamus maiores libero iure corporis alias laboriosam voluptatem perferendis repellat excepturi iusto eos? Illum nam minus officia corrupti!",
      ],
    },
    {
      title: "2. Personal Data We Collect",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga molestias atque, nesciunt, rerum quas voluptates maiores ad libero, eos illum. Dolorem sunt, modi dolores error ipsum deserunt architecto temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit excepturi natus quae deserunt aliquam, aut distinctio, eum a laboriosam earum reiciendis beatae magni, cum minima unde? Sint, saepe reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus qui quidem voluptatibus consequuntur modi ipsa. Perspiciatis, at magni? Tenetur fuga aut in optio incidunt soluta corporis, dolorem beatae doloremque.",
      ],
    },
    {
      title: "3. How We Use Personal Data",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem excepturi repellat ipsum veniam dolores, aperiam obcaecati quaerat! Reiciendis dolore, ipsa eaque a eum architecto sed perspiciatis deserunt totam! Exercitationem, ipsum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam consequatur nisi eius odit eligendi ut tempora deserunt, repudiandae quo hic veritatis sunt optio ea nemo laborum mollitia quae illum.",
      ],
    },
    {
      title: "4. How We Disclose Personal Data",
      paragraphs: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque sed porro dolorum ipsum eum quis eveniet natus, optio ipsa aperiam aliquid quaerat quos vitae maiores. Minima consequuntur quidem perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quaerat ipsam quis nisi in, rem aliquam odio quasi obcaecati. Dolorum error aliquam labore deserunt velit ipsa in corrupti, consectetur cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quia eligendi possimus odit, velit nihil eum perferendis laborum facilis sequi quo provident veritatis nostrum cupiditate accusamus quam tempore? Deleniti, architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum nemo ipsam eum, quam neque quae vel culpa, minus accusantium rerum ullam facere modi quo mollitia, non dolores ipsum aut.",
      ],
    },
  ];
  return (
    <>
      <Hero
        heading={"Terms & Conditions"}
        para={"Last updated: January 2025"}
        bgImg="/images/aboutHero.jpg"
      />
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {section.paragraphs.map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-justify">
                {para}
              </p>
            ))}
            {idx < sections.length - 1 && (
              <hr className="my-8 border-gray-300" />
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
