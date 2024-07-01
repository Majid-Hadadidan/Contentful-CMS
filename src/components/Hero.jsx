import heroImg from "../assets/hero.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Pour-over williamsburg pok pok tote bag activated charcoal DIY. Fam
            beard blue bottle tousled vape viral YOLO +1 jean shorts bodega boys
            DIY adaptogen edison bulb 90's paleo. Air plant gastropub XOXO
            biodiesel master cleanse selfies, fashion axe vice ascot heirloom yr
            sriracha you probably haven't heard of them
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser"  className="img"/>
        </div>
      </div>
    </section>
  );
};
