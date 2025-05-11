import NavBarOrganism from '../../components/organisms/NavBarOrganism';
import styles from './docs.module.scss';
import Codeblock from '/src/components/Codeblock/Codeblock';

const DocsNavBar = () => {
  const snippet = `
  const NavBarOrganism = () => {
    return (
      <div className="navbar">
        <div className="logo">AI NFT SITE</div>
        <SearchBarOrganism />
        <div className="nav-links">
          <a href="/explore">Explore</a>
          <a href="/drops">Drops</a>
          <a href="/generate">Generate</a>
        </div>
      </div>
  `;

  return (
    <>
      <h4>NavBar</h4>

      <p>
        The NavBarOrganism component is a navigation bar designed to enhance
        user interaction on a website. It features a logo, a search bar, and
        navigation links. The search bar includes a dropdown menu that displays
        search results or suggestions when a user clicks the search button.
        making it easier to find content quickly. This component is ideal for
        integrating a simple navigation experience in web applications,
        especially those requiring dynamic content searches.
      </p>

      <hr />

      <p>Example of the navigation bar component:</p>

      <div className={styles.example}>
        <NavBarOrganism></NavBarOrganism>
      </div>

      <p>Code snippet for the component:</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsNavBar;
