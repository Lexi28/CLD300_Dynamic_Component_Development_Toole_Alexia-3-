import styles from './docs.module.scss';

import Codeblock from '/src/components/Codeblock/Codeblock';

import Button from '/src/components/atoms/Button';

const DocsTemplate = () => {
  const snippet = `
  const Button = ({ children, onClick }) => {
    return (
      <button className="button" onClick={onClick}>
        {children}
      </button>
    );
  };
  `;

  return (
    <>
      <h4>Button</h4>

      <p>
        The Button component is a fundamental interactive element in your UI
        toolkit, designed for versatility and user engagement. It's ideal for
        triggering actions, submitting forms, or navigating within the
        application.The button responds to user interactions with smooth hover
        effects that change its background color and slightly elevate it,
        providing immediate visual feedback.
      </p>

      <hr />

      <p>Example of button component</p>

      <div className={styles.example}>
        <Button variant="text">Text Button</Button>
      </div>

      <p></p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsTemplate;
