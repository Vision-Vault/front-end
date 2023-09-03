function CategoryPosts({ categoryId }) {

  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];

  return (
    <div>
      <h1>Posts in Category {categoryId}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPosts;

export async function getServerSideProps(context) {
  // const { categoryId } = context.query;
  const router = useRouter();
  const {categoryId} = router.query;

  return {
    props: {
      categoryId,
    },
  };
}
