import styles from './docs.module.scss';
import Codeblock from '/src/components/Codeblock/Codeblock';
import Footer from '/src/components/organisms/Footer';

const DocsFooter = () => {
  const snippet = `
  const Footer = () => {
    return (
      <footer className="footer">
        <FooterText>&copy; 2024 AI NFT Image Generator</FooterText>
        <FooterLinks />
        <FooterText>
          By using this site, you agree to our terms and policies.
        </FooterText>
      </footer>
    );
  };
  
  `;

  return (
    <>
      <h4>Footer</h4>

      <p>
        The Footer component serves as the foundational conclusion of your
        website, providing essential information and navigation options to users
        while maintaining a consistent and professional design. It integrates
        seamlessly into the overall structure of the page, offering users easy
        access to important links and legal information. The component is styled
        to match the rest of the site’s aesthetic, reinforcing brand identity
        and ensuring visual cohesion across all pages.
      </p>

      <hr />

      <p>Examples of the footer component:</p>

      <div className={styles.example}>
        <Footer></Footer>
      </div>

      <p>Code snippet for the component:</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsFooter;
