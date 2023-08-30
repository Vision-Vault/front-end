import Category from "@/app/category/page";
 import styles from "../styles/style.css";
 
function AllCategories() {
  return (
    <div className="allcat">
      <Category
        imageSrc="images/Technology.jpg"
        heading="Technology and Innovation"
        categoryId="1"
      />
      <Category
        imageSrc="/images/Health.jpg"
        heading="Health and Medicine"
        categoryId="2"
      />
      <Category
        imageSrc="/images/Education.jpg"
        heading="Education and EdTech"
        categoryId="3"
      />
      <Category
        imageSrc="images/Fashion1.jpg"
        heading="Fashion and Design"
        categoryId="4"
      />
    </div>
  );
}

export default AllCategories;
