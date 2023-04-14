import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Deepak    (Ziggy-Flow CEO)"}
          feedback={"Manish is well skilled Developer  and Great Learner "}
        />

        

        <TestimonialCard
          name={"Akash"}
          feedback={"Amazing enthusiast and well abled man"}
        />

      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
