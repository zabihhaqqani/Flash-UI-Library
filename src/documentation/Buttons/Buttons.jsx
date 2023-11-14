import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "../../components/Button/Button";
import LinkButton from "../../components/Button/LinkButton";
import FloatingAction from "../../components/Button/FloatingAction";
import IconButton from "../../components/Button/IconButton";

const Buttons = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Button</h2>
        <p>
          The button component is used to perform an action based on the click.
          We have different types of buttons such as primary, link, icon and
          floating action buttons.
        </p>

        <h2>Primary Buttons</h2>
        <div className="image-right-container">
          <Button type="primary" text="Cancel" />
          <Button type="secondary" text="Okay" />
          <Button type="success" text="Submit" />
          <Button type="warning" text="Warning" />
        </div>

        <div className="instructions-container">
          <h4>How to use the Primary Button component?</h4>
          <p>
            Change the text as per your requirement. All the buttons are
            clickable and hoverable.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<Button type="primary" text="Cancel" />
<Button type="secondary" text="Okay" />
<Button type="success" text="Submit" />
<Button type="warning" text="Warning" />`}
          </SyntaxHighlighter>
        </div>
        <hr />
        <h2>Link Buttons</h2>
        <div className="image-right-container">
          <LinkButton text="Home" url="/" color="black" />
          <LinkButton text="Components" url="/components" color="blue" />
          <LinkButton text="Alert" url="/components/alert" color="gray" />
          <LinkButton text="Badge" url="/components/badge" color="red" />
        </div>

        <div className="instructions-container">
          <h4>How to use the link button component?</h4>
          <p>
            Change the text,url and color as per your requirement. All the buttons are
            clickable and hoverable.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<LinkButton text="Home" url="/" color="black"/>
<LinkButton text="Components" url="/components" color="blue"/>
<LinkButton text="Alert" url="/components/alert" color="gray" />
<LinkButton text="Badge" url="/components/badge" color="red"  />`}
          </SyntaxHighlighter>
        </div>
        <hr />

        <h2>Icon Buttons</h2>
        <div className="image-right-container">
          <IconButton text="Save" icon="fas fa-save fa-lg" />
          <IconButton
            text="Enable Captions"
            icon="far fa-closed-captioning fa-lg"
          />
          <IconButton text="Upload" icon="fas fa-upload fa-lg" />
          <IconButton text="Download" icon="fas fa-download fa-lg" />
        </div>

        <div className="instructions-container">
          <h4>How to use the Icon Button component?</h4>
          <p>
            Change the text as per your requirement. All the buttons are
            clickable and hoverable.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<Button type="primary" text="Cancel" />
<Button type="secondary" text="Okay" />
<Button type="success" text="Submit" />
<Button type="warning" text="Warning" />`}
          </SyntaxHighlighter>
        </div>
        <hr />

        <h2>Floating Actions Buttons</h2>
        <div className="image-right-container">
          <FloatingAction icon="fas fa-share" />
          <FloatingAction icon="far fa-copy" />
          <FloatingAction icon="fas fa-trash-alt" />
          <FloatingAction icon="fas fa-plus fa-lg" />
        </div>

        <div className="instructions-container">
          <h4>How to use the Alert component?</h4>
          <p>
            Change the icon as per your requirement. All the buttons are
            clickable and hoverable.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<FloatingAction icon="fas fa-share" />
<FloatingAction icon="far fa-copy" />
<FloatingAction icon="fas fa-trash-alt" />
<FloatingAction icon="fas fa-plus fa-lg" />`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
