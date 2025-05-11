import styles from './docs.module.scss';

import Codeblock from '/src/components/Codeblock/Codeblock';
import Card from '/src/components/organisms/Card';

const DocsCard = () => {
  const snippet = `
  <Card>
    <h2>A Standard Card Component</h2>
    <p>This is an example of a standard card</p>
  </Card>

  `;

  return (
    <>
      <h4>Card</h4>

      <p>
        The Card component is a versatile UI element designed to display content
        in a visually appealing and interactive way. It supports a front and
        back view, allowing users to flip the card on click to reveal more
        detailed information. The component includes an image, a title, and a
        description on the front, with additional content on the back, making it
        suitable for showcasing products, services, or any other content
        requiring an engaging presentation. The card’s flip functionality is
        controlled through a simple click, toggling between the front and back
        views.
      </p>

      <hr />

      <p>Example of the component</p>

      <div className={styles.example}>
        <p> A standard card </p>

        <Card
          title="Heading"
          description="Description"
          imageUrl="https://i.pinimg.com/564x/5f/7f/5d/5f7f5d16367aa0661d26ad7fd832ad5b.jpg"
        />
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsCard;
