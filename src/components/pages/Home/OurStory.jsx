import chefsMarioAndAdrian1Img from "./assets/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2Img from "./assets/chefs-mario-and-adrian_2.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Our Story</h2>
        <p>
          Little Lemon Restaurant was founded with a passion for bringing fresh, 
          locally sourced ingredients to the community. Our journey began in a small 
          kitchen where we experimented with flavors and recipes, aiming to create 
          dishes that are both delicious and healthy. Over the years, we have grown 
          into a beloved dining destination, known for our warm hospitality and 
          commitment to quality. Our chefs, Mario and Adrian, work tirelessly to 
          craft meals that delight the senses and nourish the soul. We believe in 
          the power of food to bring people together, and we strive to make every 
          dining experience memorable. From our family to yours, we invite you to 
          join us at Little Lemon and taste the difference that passion and dedication 
          make.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrian1Img} alt="Chefs Mario and Adrian #1" />
        <img src={chefsMarioAndAdrian2Img} alt="Chefs Mario and Adrian #2" />
      </div>
    </section>
  );
};

export default OurStory;
