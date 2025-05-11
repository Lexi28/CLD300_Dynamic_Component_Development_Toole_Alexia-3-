// Codeblock.jsx
import React, { useEffect } from 'react';
import Prism from 'prismjs'; // Import PrismJS

import 'prismjs/themes/prism.css'; // Import a PrismJS theme

const Codeblock = ({ snippet }) => {
  useEffect(() => {
    Prism.highlightAll(); // Initialize PrismJS
  }, [snippet]); // Re-run highlighting if the snippet changes

  return (
    <pre>
      <code className="language-html">
        {snippet}
      </code>
    </pre>
  );
};

export default Codeblock;

