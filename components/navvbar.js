import Link from "next/link";
import styles from "../styles/style.css";

function Navbar()  {


  return (
    <nav className="{styles.nav}">
      <Link href="/">Home</Link>
      <Link href="">About</Link>
      <Link href="">Profile</Link>
      <Link href="">Contact</Link>
      <Link href="">Projects</Link>
      <Link href="/signup">Sign Up</Link>

      <div class="animation start-home"></div>
    </nav>
  );
};

export default Navbar;
