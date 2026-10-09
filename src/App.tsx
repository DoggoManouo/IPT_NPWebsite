import img from  "./assets/images.jpg";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css'
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
`;
function App() {


  return (
<>

    <div className="fundraise-page">
      <style>{styles}</style>

      <main className="site" id="content">
        <span className="ring ring-left" aria-hidden="true" />
        <span className="ring ring-right" aria-hidden="true" />
        <Header />
        

        <section className="hero-copy" aria-labelledby="hero-title">
          <h1 id="hero-title">
            Fundraise vs
            <br />
            <strong>CANCER</strong>
          </h1>
          <p className="description">
            A cancer fundraiser.
          </p>
          <button className="button donate" type="button">
            Donate now
          </button>
        </section>

        <div className="photo">
          <img
            src="img"
            alt="Hands holding coins and a note reading Make a change."
          />
        </div>

        <section className="total" aria-label="Fundraising total">
          <p>Raised so far</p>
          <strong>$50,027</strong>
        </section>
      </main>
      <Footer />

    </div>

</>

  )
}

export default App
