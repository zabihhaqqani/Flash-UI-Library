import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Text from "../../components/Text/Text";
import Image from "../../components/Image/Image";
import RoundedImage from "../../components/Image/RoundedImage";

const Images = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Responsive Image</h2>
        <p>
          The image component on a webpage play a crucial role in enhancing
          visual appeal and conveying information. Serving as visual elements,
          they capture attention, evoke emotions, and provide context to the
          content. We have responsive image and circular image.
        </p>

        <div className="component-container">
          <Image
            imgSrc="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
            name="lianYu"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Responsive Image component?</h4>
          <p>
            Just change the name of your requirement and replace withe imgSrc
            with your url.
          </p>
        </div>
        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<Image
imgSrc="https://fastly.picsum.photos/id/13/2500
/1667.jpghmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
name="lianYu"/>`}
          </SyntaxHighlighter>
        </div>
        <hr />
        <h2 className="title">Rounded Image</h2>
        <div className="component-container">
          <RoundedImage
            imgSrc="https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908"
            name="light-house"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Rounded Image component?</h4>
          <p>
            Just change the name of your requirement and replace withe imgSrc
            with your url.
          </p>
        </div>
        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}>
            {`<RoundedImage
imgSrc="https://fastly.picsum.photos/id/13/2500
/1667.jpghmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
name="lianYu"/>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Images;
