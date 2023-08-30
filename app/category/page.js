import Link from "next/link";
 import styles from "../../styles/style.css";


function Category({ imageSrc, heading, categoryId }) {
  return (
    <Link href={`/category/${categoryId}`}>
      <div className="category">
        <img src={imageSrc} alt={heading} />
        < h1 >{heading}</h1>
      </div>
    </Link>
  );
}

export default Category;
