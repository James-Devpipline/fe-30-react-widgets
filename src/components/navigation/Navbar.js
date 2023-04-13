import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">

      <div className="NavWrapper">
        <NavLink exact to="/">
          Add / Subtract Counter
        </NavLink>
      </div>

      <div className="NavWrapper">
        <NavLink exact to="/greetingtoggle">
          Greeting Toggle
        </NavLink>
      </div>

      <div className="NavWrapper">
        <NavLink exact to="/showhidetoggle">
          Show / Hide Toggle
        </NavLink>
      </div>
      
      <div className="NavWrapper">
        <NavLink exact to="/fontsizer">
          Font Sizer
        </NavLink>
      </div>

      <div className="NavWrapper">
        <NavLink exact to="/textaligner">
          Text Aligner
        </NavLink>
      </div>

      <div className="NavWrapper">
        <NavLink exact to="/lifecycleclock">
          Life Cycle Clock
        </NavLink>
      </div>

      <div className="NavWrapper">
        <NavLink exact to="/colorchanger">
          Color Changer
        </NavLink>
      </div>

      <div className="NavWrapper">
        <NavLink exact to="/rgbsliders">
          RGB Sliders
        </NavLink>
      </div>


    </div>
  );
}
