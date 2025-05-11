import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // If using BrowserRouter
import './AppBack.css';
import NavBarOrganism from './components/organisms/NavBarOrganism';
import Card from './components/organisms/Card';
import BannerOrganism from './components/organisms/BannerOrganism';
import SignUpOrganism from './components/organisms/SignUpOrganism';
import RatingWidget from './components/organisms/RatingWidget';
import Footer from './components/organisms/Footer';

import RouterComponent from './Router'; // Import your custom Router component
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const handleGetStartedClick = () => {
    console.log('Get Started clicked');
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const handleSignUpClick = () => {
    console.log('Sign up button clicked');
  };

  const handleHiClick = () => {
    console.log('Hi button clicked');
  };

  const handleFuckYouClick = () => {
    console.log('button clicked');
  };

  return (
    <Router>
      <Navbar />
      <RouterComponent /> {/* This component will handle the routing */}
      <NavBarOrganism />
      <section className="banner-container">
        <div className="banner">
          <BannerOrganism
            imageSrc="https://i.pinimg.com/564x/68/29/e6/6829e65a802cce1221ee9e51094c70dd.jpg"
            heading="BRICKS Co"
            subheading="Founder Bricks Co NFT art using our AI art generator brings the hottest AI NFTs collection this winter. Explore and collect AI-generated NFTs that capture the essence of nature's guardians in a digital realm like never before."
            buttonText1="EXPLORE BIOBEARS"
            onButtonClick1={handleHiClick}
            onButtonClick2={handleFuckYouClick}
          />
        </div>
      </section>
      <section className="card-container-section">
        <section className="card-container-section1">
          <div className="card-container">
            <Card
              title="Ivory Sentinel"
              description="A pure white helmet, Ivory Sentinel embodies strength and purity."
              imageUrl="https://i.pinimg.com/564x/5f/7f/5d/5f7f5d16367aa0661d26ad7fd832ad5b.jpg"
            />
            <Card
              title="Onyx Guardian"
              description="A sleek black helmet, Onyx Guardian represents power and mystery."
              imageUrl="https://i.pinimg.com/564x/8b/f3/6e/8bf36e585fd2e255e59c86f79e7a760b.jpg"
            />
            <Card
              title="Crystalline Vanguard"
              description="Crystalline Vanguard features a sleek helmet with a striking pink crystalline glass cover."
              imageUrl="https://i.pinimg.com/564x/a0/fd/ba/a0fdbad7635095e091dc178e5e622d0a.jpg"
            />
            <Card
              title="Golden Aegis"
              description="Golden Aegis is a dazzling helmet rendered in all gold, very dazzling."
              imageUrl="https://i.pinimg.com/564x/d4/fa/f1/d4faf150a0082205697c89d4f99c33fe.jpg"
            />
          </div>
        </section>
      </section>
      <section className="card-container-section">
        <section className="card-container-section1">
          <div className="card-container">
            <Card
              title="Galactic Seraph"
              description="Galactic Seraph features a helmet with a stunning purple and blue marbled design."
              imageUrl="https://i.pinimg.com/564x/b9/d5/09/b9d5091ffb5352075cee90b5fc7ede3b.jpg"
            />
            <Card
              title="Candy Striper"
              description="Candy Striper features a playful helmet design with vibrant pink and white stripes."
              imageUrl="https://i.pinimg.com/564x/ab/08/a4/ab08a48d1dcf69b8bdd6f50ca2f9fcd5.jpg"
            />
            <Card
              title="Dream Weavers"
              description="Dream Weaveris a helmet with a serene blend of pastel pink and pastel blue."
              imageUrl="https://i.pinimg.com/564x/01/7b/4e/017b4e1ee58d66ee0124eee9a287bed5.jpg"
            />
            <Card
              title="Blush Sentinel"
              description="Blush Sentinel is an elegant helmet rendered entirely in pastel pink."
              imageUrl="https://i.pinimg.com/564x/fd/31/fe/fd31fed888bde171978acb58271d24f9.jpg"
            />
          </div>
        </section>
      </section>
      <section className="rating-container">
        <RatingWidget
          headingText="2024 AI Art Generator of the Year"
          rating={5.0}
          paragraphText="Leave a star rating! "
        />
      </section>
      <SignUpOrganism
        subheadingText="Join our community of creators"
        paragraphText="By clicking send you'll receive occasional emails from us. You always have the choice to unsubscribe within every email you receive."
        buttonText="Sign Up"
        onButtonClick={handleSignUpClick}
      />
      <Footer></Footer>
    </Router>
  );
};

export default App;
