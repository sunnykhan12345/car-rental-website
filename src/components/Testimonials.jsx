import React from "react";
import Title from "./Title";
import image from "../assets/user.png"
import { Star } from "lucide-react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: image,
      review:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: image,
      review:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: image,
      review:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },

  ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customer Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxuary accommodations around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star key={index} filled={testimonial.rating > index} />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
