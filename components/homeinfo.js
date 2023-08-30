import styles from "../styles/style.css";


export default function Homeinfo(){

    return (
      <div className="homeinfo">
        <h1>
          Where Innovation
          <br /> Meets Funding
        </h1>
        <div className="infolist">
          <ul>
            {" "}
            <li>
              At Vision Vault, security is our top priority.
              <br /> <br /> Users can have peace of mind knowing that their data
              and transactions are protected by advanced security measures.
            </li>
            <br />
            <li>
              With our rigorous selection process, users can trust that the
              projects they fund are well-vetted and hold immense potential.
            </li>
            <li>
              <br />
              Transparency and accountability are core principles of
              <br /> Vision Vault.
            </li>
          </ul>
        </div>
        <img src="/images/info1.png" alt="" />
      </div>
    );
}
