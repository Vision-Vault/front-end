 import styles from "../styles/style.css";
import Navbar from "./navvbar";


 function Header() {


    return (
      <>
        <div className="header">
          <img
            src="/images/h2.jpg"
            alt="Header Image"
            className="header-image"
          />
          <Navbar />
          <div className="desc">
            <p className="pp"> Turning Visions into Reality</p>
            <br />
            <h1 id="vv">Vision Vault</h1> <br />
            <p className="pp">
              Where Dreams <br /> Take Flight!
            </p>
          </div>
        </div>
      </>
    );
}



export default Header;