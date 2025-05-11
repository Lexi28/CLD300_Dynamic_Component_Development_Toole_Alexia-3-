import styles from './docs.module.scss';

const DocsOverview = () => {
  return (
    <>
      <h1>Welcome to the Docs</h1>
      <p>
        This documentation provides an overview of the components and their functionalities within my system:
      </p>
      <h2>Components Overview</h2>

      <h3>NavBarOrganism</h3>
      <p>
        The <strong>NavBarOrganism</strong> component is a key part of the navigation structure. It includes:
        <ul>
          <li><strong>Logo</strong>: Displays the site’s branding.</li>
          <li><strong>SearchBarOrganism</strong>: Provides a search functionality with a dropdown menu.</li>
          <li><strong>Navigation Links</strong>: Links to major sections like Explore, Drops, and Generate.</li>
        </ul>
      </p>

      <h3>Card</h3>
      <p>
        The <strong>Card</strong> component is used to display information in a visually appealing manner. Features include:
        <ul>
          <li><strong>Flipping Animation</strong>: Clickable to reveal additional details on the back.</li>
          <li><strong>Image, Title, and Description</strong>: Shows key information on the front.</li>
        </ul>
      </p>

      <h3>RatingWidget</h3>
      <p>
        The <strong>RatingWidget</strong> component allows users to provide ratings and feedback. Features include:
        <ul>
          <li><strong>Star Rating System</strong>: Users can click stars to rate.</li>
          <li><strong>Popup</strong>: Shows a message of appreciation and additional information after rating.</li>
        </ul>
      </p>

      <h3>Button</h3>
      <p>
        The <strong>Button</strong> component is used for user actions throughout the application. Features include:
        <ul>
          <li><strong>Customizable Styles</strong>: Includes padding, background color, and hover effects.</li>
          <li><strong>Responsive Feedback</strong>: Visual feedback on click and hover.</li>
        </ul>
      </p>

      <h3>Footer</h3>
      <p>
        The <strong>Footer</strong> component is positioned at the bottom of the page and includes:
        <ul>
          <li><strong>Copyright Information</strong>: Displays legal information.</li>
          <li><strong>FooterLinks</strong>: Provides additional navigation or resource links.</li>
          <li><strong>Terms and Policies</strong>: Links to terms of service and privacy policies.</li>
        </ul>
      </p>

      <h2>System Integration</h2>
      <p>
        All components are styled with dedicated CSS to ensure a consistent look and feel. The modular structure
        allows for easy updates and maintenance.
      </p>

      <h2>Scalability</h2>
      <p>
        The system is optimized for performance, ensuring fast load times and smooth interactions across different
        devices and screen sizes. Scalability is considered to handle growing user demands effectively.
      </p>

    
    </>
  );
};

export default DocsOverview;
