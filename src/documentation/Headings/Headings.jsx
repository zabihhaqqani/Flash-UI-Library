import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Heading from "../../components/Heading/Heading";
import "./Headings.css";

const Headings = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Heading</h2>
        <p>
          The heading component is a critical element on a webpage, serving as
          the main title that captures the overarching theme or purpose of the
          content. It acts as the initial point of engagement for users,
          providing a glimpse into the core message or focus. We have 6
          different sizes of headings.
        </p>

        <div className="component-container">
          <Heading text="This is extra large heading" type="h1" />
          <Heading text="This is large heading" type="h2" />
          <Heading text="This is medium heading" type="h3" />
          <Heading text="This is normal heading" type="h4" />
          <Heading text="This is small heading" type="h5" />
          <Heading text="This is extra small heading" type="h6" />
        </div>

        <div className="instructions-container">
          <h4>How to use the Heading component?</h4>
          <p>Just change the text and type as per your requirement.</p>
        </div>
        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<Heading text="This is extra large heading" type="h1"/>
<Heading text="This is large heading" type="h2"/>
<Heading text="This is medium heading" type="h3"/>
<Heading text="This is normal heading" type="h4"/>
<Heading text="This is small heading" type="h5"/>
<Heading text="This is extra small heading" type="h6"/>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Headings;
