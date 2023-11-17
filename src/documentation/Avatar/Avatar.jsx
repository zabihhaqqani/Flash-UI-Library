import { ImageAvatar } from "../../components/Avatar/Avatar";
import Pikachu from "../../assets/pikachu.jpeg";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Avatar = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Avatar</h2>
        <p>
          The avatar component is used to represent a type of image like user
          image or profile picture. We have 4 sizes of avatar small, extra small
          ,large, extra-large.
        </p>

        <div className="image-right-container">
          <div className="image-container">
            <ImageAvatar size="xl" name="Pikachu" src={Pikachu} />
            <p>xl</p>
          </div>
          <div className="image-container">
            <ImageAvatar size="lg" name="Pikachu" src={Pikachu} />
            <p>l</p>
          </div>
          <div className="image-container">
            <ImageAvatar size="sm" name="Pikachu" src={Pikachu} />
            <p>sm</p>
          </div>
          <div className="image-container">
            <ImageAvatar size="xs" name="Pikachu" src={Pikachu} />
            <p>xs</p>
          </div>
        </div>

        <div className="instructions-container">
          <h4>How to use the Avatar component?</h4>
          <p>
            Change the name, size of your choice and src with your image url.
          </p>
        </div>
        <div className="highlight-container">
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            className="custom-style-syntax-highlighter"
          >
            {`<ImageAvatar size="xl" name="pikachu" src={Pikachu} />
<ImageAvatar size="lg" name="Pikachu" src={Pikachu}  />
<ImageAvatar size="sm" name="Pikachu" src={Pikachu}  />
<ImageAvatar size="xs" name="Pikachu" src={Pikachu}  />`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
