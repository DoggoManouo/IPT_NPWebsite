
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css'
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  body { margin: 0; }

  .about-page,
  .about-page * { box-sizing: border-box; }

  .about-page {
    --navy: #002147;
    --green: #5fd58c;
    --muted: #526478;
    min-height: 100svh;
    padding: 64px 24px 32px;
    font-family: "Poppins", sans-serif;
    color: var(--navy);
    background:
      radial-gradient(circle at 0% 85%, #164e84, transparent 45%),
      radial-gradient(circle at 95% 5%, #154d80, transparent 35%),
      #00385f;
  }

  .about-page a { color: inherit; }
  .about-page button { font: inherit; }

  .about-page a:focus-visible,
  .about-page button:focus-visible {
    outline: 3px solid var(--green);
    outline-offset: 5px;
  }

  .about-page .site {
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    border-radius: 20px;
    background: white;
  }

  .about-page .container {
    width: min(100% - 80px, 1000px);
    margin-inline: auto;
  }

  .about-page .header {
    background: var(--navy);
    color: white;
  }

  .about-page .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    min-height: 96px;
  }

  .about-page .brand img {
    display: block;
    width: 140px;
    height: auto;
  }

  .about-page nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  .about-page .nav-item {
    padding: 6px 0;
    border: 0;
    background: none;
    color: white;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  .about-page .nav-item[aria-current="page"] {
    color: var(--green);
    border-bottom: 2px solid var(--green);
  }

  .about-page .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 12px 24px;
    border: 0;
    border-radius: 5px;
    background: white;
    color: var(--navy);
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .6px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .about-page .button-green { background: var(--green); }

  .about-page .hero {
    position: relative;
    overflow: hidden;
    padding: 76px 0 88px;
    background: var(--navy);
    color: white;
  }

  .about-page .hero::after {
    content: "";
    position: absolute;
    right: -60px;
    top: 20px;
    width: 330px;
    aspect-ratio: 1;
    border: 2px solid #ffffff12;
    border-radius: 50%;
    pointer-events: none;
  }

  .about-page .hero .container {
    position: relative;
    z-index: 1;
  }

  .about-page h1,
  .about-page h2,
  .about-page h3,
  .about-page p { margin-top: 0; }

  .about-page .eyebrow {
    margin: 0 0 18px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .about-page .hero .eyebrow { color: var(--green); }

  .about-page h1 {
    max-width: 760px;
    margin-bottom: 24px;
    font-size: clamp(36px, 5vw, 60px);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -1.5px;
  }

  .about-page .hero-description {
    max-width: 570px;
    margin-bottom: 0;
    color: #d3dfeb;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.8;
  }

  .about-page .story {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 64px;
    align-items: start;
    padding-block: 72px;
  }

  .about-page h2 {
    margin-bottom: 20px;
    font-size: clamp(28px, 3vw, 38px);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -.7px;
  }

  .about-page .body-copy {
    color: var(--muted);
    font-size: 15px;
    line-height: 1.9;
  }

  .about-page .body-copy:last-child { margin-bottom: 0; }

  .about-page .mission {
    padding: 36px;
    border-radius: 12px;
    background: var(--green);
  }

  .about-page .mission .eyebrow { margin-bottom: 24px; }

  .about-page .mission p:last-child {
    margin-bottom: 0;
    font-size: 23px;
    font-weight: 600;
    line-height: 1.5;
  }

  .about-page .values-section {
    padding: 64px 0 72px;
    background: #f4f8f7;
  }

  .about-page .section-intro {
    max-width: 540px;
    margin-bottom: 32px;
  }

  .about-page .values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .about-page .value-card {
    padding: 28px;
    border: 1px solid #e2ebe7;
    border-radius: 10px;
    background: white;
  }

  .about-page .value-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    margin-bottom: 24px;
    border-radius: 50%;
    background: #e4f8ec;
    font-size: 13px;
    font-weight: 600;
  }

  .about-page h3 {
    margin-bottom: 12px;
    font-size: 19px;
    font-weight: 600;
  }

  .about-page .value-card p {
    margin-bottom: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.8;
  }

  .about-page .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    padding-block: 64px;
  }

  .about-page .cta h2 { margin-bottom: 12px; }

  .about-page .cta p {
    max-width: 520px;
    margin-bottom: 0;
  }

  .about-page .cta .button { flex-shrink: 0; }

  .about-page .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-block: 24px;
    border-top: 1px solid #e5eaf0;
    color: var(--muted);
    font-size: 12px;
  }

  .about-page .footer p { margin: 0; }

  .about-page .credits {
    margin: 28px 0 0;
    color: white;
    text-align: center;
    font-size: 12px;
    font-weight: 300;
  }

  @media (max-width: 800px) {
    .about-page { padding: 24px 16px; }
    .about-page .container { width: calc(100% - 48px); }

    .about-page .header-inner {
      padding-block: 24px;
      flex-wrap: wrap;
      gap: 24px;
    }

    .about-page nav { gap: 16px; }
    .about-page .hero { padding: 48px 0 56px; }

    .about-page .story {
      grid-template-columns: 1fr;
      gap: 32px;
      padding-block: 48px;
    }

    .about-page .mission { padding: 28px; }
    .about-page .values-section { padding-block: 48px; }
    .about-page .values { grid-template-columns: 1fr; }

    .about-page .cta {
      align-items: flex-start;
      flex-direction: column;
      padding-block: 48px;
      gap: 24px;
    }

    .about-page .footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }
  }
`;

const values = [
  {
    number: "01",
    title: "Compassion first",
    description:
      "Start by listening. Put people, their stories, and their needs at the heart of every cause.",
  },
  {
    number: "02",
    title: "Stronger together",
    description:
      "Make room for everyone to contribute. Shared effort can turn a small beginning into something meaningful.",
  },
  {
    number: "03",
    title: "Purposeful action",
    description:
      "Keep the cause in focus. Encourage thoughtful giving and practical steps toward positive change.",
  },
];
function About() {


  return (
<>
    <div className="about-page">
      <style>{styles}</style>

      <div className="site">
        <Header />

        <main>
          {/* Replace the sample copy with your organization's story. */}
          <section className="hero" aria-labelledby="about-title">
            <div className="container">
              <p className="eyebrow">About Care</p>
              <h1 id="about-title">
                Small acts of kindness.
                <br />
                A world of difference.
              </h1>
              <p className="hero-description">
                We believe meaningful change begins when people come
                together. Care is about connecting generosity with
                causes that matter.
              </p>
            </div>
          </section>

          <section
            className="container story"
            aria-labelledby="story-title"
          >
            <div>
              <p className="eyebrow">Our story</p>
              <h2 id="story-title">
                A shared purpose.
                <br />
                A stronger community.
              </h2>
              <p className="body-copy">
                Every great cause starts with people who care.
                Our story is rooted in a simple idea: giving should
                bring us closer to the people and communities we
                want to support.
              </p>
              <p className="body-copy">
                Whether you are taking your first step as a fundraiser
                or supporting a cause close to your heart, there is
                a place for you here.
              </p>
            </div>

            <aside
              className="mission"
              aria-labelledby="mission-title"
            >
              <h3 className="eyebrow" id="mission-title">
                Our mission
              </h3>
              <p>
                Bring people together to turn compassion into
                meaningful action.
              </p>
            </aside>
          </section>

          <section
            className="values-section"
            aria-labelledby="values-title"
          >
            <div className="container">
              <div className="section-intro">
                <p className="eyebrow">What guides us</p>
                <h2 id="values-title">Care in everything we do.</h2>
                <p className="body-copy">
                  These are the principles we aim to bring to
                  every connection, campaign, and act of giving.
                </p>
              </div>

              <div className="values">
                {values.map((value) => (
                  <article className="value-card" key={value.number}>
                    <span className="value-number" aria-hidden="true">
                      {value.number}
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="container cta"
            aria-labelledby="cta-title"
          >
            <div>
              <h2 id="cta-title">Be part of something good.</h2>
              <p className="body-copy">
                Explore our fundraising page and find your
                next opportunity to make a difference.
              </p>
            </div>
            <a className="button button-green" href="/">
              Explore the cause
            </a>
          </section>
        </main>

        <Footer />
      </div>

      <p className="credits">
        softwareseni &nbsp; | &nbsp; #Design<strong>Shot</strong>™
      </p>
    </div>


</>

  )
}

export default About
