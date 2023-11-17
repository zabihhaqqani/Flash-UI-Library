import SideBar from "../../components/SideBar/SideBar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import IconBadge from "../../components/Badge/IconBadge/IconBadge";
import "./Badges.css";
import AvatarBadge from "../../components/Badge/AvatarBadge/AvatarBadge";
import Pikachu from "../../assets/pikachu.jpeg";

const Badges = () => {
  return (
    <div className="main-container">
      <div className="right-container">
        <h2 className="title">Badge On Icons</h2>
        <p>
          The badge on icons component is used to give extra infomation like
          giving a notification or showing status of a user. We have 4 types of
          badges with icons like cart, user, youtube and github.
        </p>

        <div className="badges-container">
          <IconBadge icon="fas fa-shopping-cart fa-lg" number="5" />
          <IconBadge icon="fas fa-user-circle fa-lg" number="3" />
          <IconBadge icon="fab fa-youtube fa-lg" number="8" />
          <IconBadge icon="fab fa-github fa-lg" number="2" />
        </div>

        <div className="instructions-container">
          <h4>How to use the Badge on Icons component?</h4>
          <p>Just change the number as per your requirement.</p>
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}  className="custom-style-syntax-highlighter">
            {`<IconBadge icon="fas fa-shopping-cart fa-lg" number="5" />
<IconBadge icon="fas fa-user-circle fa-lg" number="3"/>
<IconBadge icon="fab fa-youtube fa-lg" number="8"/>
<IconBadge icon="fab fa-github fa-lg" number="2"/>`}
          </SyntaxHighlighter>
        </div>

        <h2 className="title">Badge on Avatars</h2>
        <p>
          The badge on avatar component is primarly used to show the status of a
          user. We have 4 badge on avatar components sucha as offline, online,
          busy and away.
        </p>

        <div className="instructions-container">
          <h4>How to use the Badge on Avatar component?</h4>
          <p>
            Change the size, name, color as per your requirement and replace the
            src with your image url.
          </p>
        </div>
        <div className="badges-container">
          <AvatarBadge size="xl" name="Pikachu" src={Pikachu} color="red" />
          <AvatarBadge size="lg" name="Pikachu" src={Pikachu} color="green" />
          <AvatarBadge size="sm" name="Pikachu" src={Pikachu} color="blue" />
          <AvatarBadge size="xs" name="Pikachu" src={Pikachu} color="gray" />
        </div>

        <div className="highlight-container">
          <SyntaxHighlighter language="jsx" style={atomOneDark}  className="custom-style-syntax-highlighter">
            {`<AvatarBadge size="xl" name="Pikachu" src={Pikachu} color="red" />
<AvatarBadge size="lg" name="Pikachu" src={Pikachu} color="green" />
<AvatarBadge size="sm" name="Pikachu" src={Pikachu} color="blue" />
<AvatarBadge size="xs" name="Pikachu" src={Pikachu} color="gray" />`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Badges;
