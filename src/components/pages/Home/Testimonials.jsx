import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Alice",
    image:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0.5],
    says: "The food at Little Lemon Restaurant was delicious, and the service was excellent. Highly recommend!",
  },
  {
    fullName: "Bob",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0],
    says: "Little Lemon Restaurant has a great atmosphere, but the food could use some improvement.",
  },
  {
    fullName: "Charlie",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0.5],
    says: "I had a wonderful experience at Little Lemon Restaurant. The staff was friendly, and the food was tasty.",
  },
  {
    fullName: "Diana",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 1],
    says: "Little Lemon Restaurant exceeded my expectations. The food was amazing, and the ambiance was perfect.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
