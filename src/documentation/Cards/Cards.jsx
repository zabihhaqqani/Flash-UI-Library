import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CardWithBadges from "../../components/Card/CardWithBadges/CardWithBadges";
import CardWithDismiss from "../../components/Card/CardsWithDismiss/CardWithDismiss";
import CardWithTextOverlay from "../../components/Card/CardsWithTextOverlay/CardsWithTextOverlay";
import TextOnlyCard from "../../components/Card/TextOnlyCards/TextOnlyCard";
import HorizontalCard from "./../../components/Card/VerticalAndHorizontalCards/HorizontalCard";
import VertialCard from "../../components/Card/VerticalAndHorizontalCards/VerticalCard";
import CardWithShadow from './../../components/Card/CardWithShadow/CardWithShadow';

const Cards = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Card</h2>
        <p>
        The card component is like a small box on a webpage that holds information neatly. It usually has a picture, a title, and a description inside. People use these cards to show things like product details, articles, or user profiles in a tidy and organized way.
        </p>

        <h2>Card With Badges</h2>

        <div className="image-right-container">
          <CardWithBadges
            imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            badge="bestseller"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Card with Badge component?</h4>
          <p>
            Change all the props as per your requirement.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<CardWithBadges
imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile
/4/x/0-original-imagtnqjjfgxzpz4.jpeg?q=70"
name="samsung"
title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
badge="bestseller"
originalPrice="₹69,999"
salePrice="₹32,999"
discount="52% off"/>`}
          </SyntaxHighlighter>
        </div>
        <hr />
        <h2>Card with Dismiss</h2>
        <div className="image-right-container">
          <CardWithDismiss
            imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Card with Dismiss component?</h4>
          <p>
          Change all the props as per your requirement.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<CardWithDismiss
imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0
-original-imagtnqjjfgxzpz4.jpeg?q=70"
name="samsung"
title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
originalPrice="₹69,999"
salePrice="₹32,999"
discount="52% off"/>`}
          </SyntaxHighlighter>
        </div>
        <hr />

        <h2>Card With Text Overlay</h2>
        <div className="image-right-container">
          <CardWithTextOverlay
            imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
            message="Out Of Stock"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Card With Text Overlay component?</h4>
          <p>
          Change all the props as per your requirement.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<Button type="primary" text="Cancel" />
<Button type="secondary" text="Okay" />
<Button type="success" text="Submit" />
<Button type="warning" text="Warning" />`}
          </SyntaxHighlighter>
        </div>
        <hr />

        <h2>Card With Text Only</h2>
        <div className="image-right-container">
          <TextOnlyCard
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Card With Text Only component?</h4>
          <p>
          Change all the props as per your requirement.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<TextOnlyCard
name="samsung"
title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
originalPrice="₹69,999"
salePrice="₹32,999"
discount="52% off"/>`}
          </SyntaxHighlighter>
        </div>
        <hr />
        <h2>Horizontal Card </h2>
        <div className="image-right-container">
          <HorizontalCard
            imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Horizontal Card component?</h4>
          <p>
          Change all the props as per your requirement.

          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<HorizontalCard
imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q
/mobile/4/x/0-original-imagtnqjjfgxzpz4jpeg?q=70"
name="samsung"
title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
originalPrice="₹69,999"
salePrice="₹32,999"
discount="52% off"/>`}
          </SyntaxHighlighter>
        </div>
        <hr />
        <h2>Vertical Card </h2>
        <div className="image-right-container">
          <VertialCard
            imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Vertical Card component?</h4>
          <p>
          Change all the props as per your requirement.

          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<VertialCard
imgSrc="https://rukminim2.flixcart.com/image/416/416/
xif0q/mobile/4/x/0-original-imagtnqjjfgxzpz4.jpeg?q=70"
name="samsung"
title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
originalPrice="₹69,999"
salePrice="₹32,999"
discount="52% off"/>`}
          </SyntaxHighlighter>
        </div>

        <hr />
        <h2>Card With Shadow </h2>
        <div className="image-right-container">
          <CardWithShadow
            imgSrc="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
            name="samsung"
            title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
            originalPrice="₹69,999"
            salePrice="₹32,999"
            discount="52% off"
          />
        </div>

        <div className="instructions-container">
          <h4>How to use the Card With Shadow component?</h4>
          <p>
          Change all the props as per your requirement.
          </p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark} className="custom-style-syntax-highlighter">
            {`<CardWithShadow
imgSrc="https://rukminim2.flixcart.com/image/
416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70"
name="samsung"
title=" Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)"
originalPrice="₹69,999"
salePrice="₹32,999"
discount="52% off"/>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Cards;
