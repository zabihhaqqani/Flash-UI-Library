import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Text from "../../components/Text/Text";

const Texts = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Text</h2>
        <p>
          The text component is a visual enhancement used to highlight and
          emphasize specific content on a webpage. It adds vibrancy and draws
          attention to key information, creating a more engaging and dynamic
          user experience. We have different colors and sizes of text which are
          customizable.
        </p>

        <div className="component-container">
          <Text text="This is extra large text" color="purple" size="xl" />
          <Text text="This is large text" color="black" size="lg" />
          <Text text="This is normal text" color="blue" size="m" />
          <Text text="This is small text" color="green" size="sm" />
          <Text text="This is extra small text" color="red" size="xs" />
        </div>

        <div className="instructions-container">
          <h4>How to use the Text component?</h4>
          <p>Just change the text, color and size as per your requirement.</p>
        </div>
        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<Text text="This is extra large text" color="purple" size="xl" />
<Text text="This is large text" color="black" size="lg" />
<Text text="This is normal text" color="blue" size="m" />
<Text text="This is small text" color="green" size="sm" />
<Text text="This is extra small text" color="red" size="xs" />`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Texts;
