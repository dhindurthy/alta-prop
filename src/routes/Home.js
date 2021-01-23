import React from "react";
import CarouselDemo from "../components/carouseldemo.jsx";

function Home(props) {
  return (
    <section>
      <section className="body">
        <CarouselDemo />
      </section>

      <h2 className="h2-content" tabIndex="0">
        <hr />
        Lorem ipsum dolor sit amet
        <hr />
      </h2>
      <section className="articles-main">
        <article tabIndex="0">
          <h3>About Us</h3>onsectetur adipiscing elit ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo
        </article>
        <article tabIndex="0">
          <h3>Our Services</h3> ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
          <br /> <br />
          <br />
          Landscaping, Snow Removal, Repairs and Rehab, Trash Out, Secured
          Services, Remediation Services, Winterization
        </article>
      </section>
    </section>
  );
}

export default Home;
