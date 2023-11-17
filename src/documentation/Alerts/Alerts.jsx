import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Alert } from "../../components/Alert/Alert";

const Alerts = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Alert</h2>
        <p>
          The Alert component is used to give information like success, error,
          warnings etc. We have 4 types of alerts such as successfull, caution,
          error and information.
        </p>

        <div className="image-right-container">
          <Alert type="success" message="Operation successful!" />
          <Alert type="warning" message="Please be cautious." />
          <Alert type="error" message="An error occurred." />
          <Alert type="info" message="Information." />
        </div>

        <div className="instructions-container">
          <h4>How to use the Alert component?</h4>
          <p>Just change the message as per your requirement.</p>
        </div>
        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}  className="custom-style-syntax-highlighter">
            {`<Alert type="success" message="Operation successful!" />
<Alert type="warning" message="Please be cautious." />
<Alert type="error" message="An error occurred." />
<Alert type="info" message="Information." />`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
