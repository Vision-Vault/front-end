export default async function PostDetailsPage({ params }) {
  const postId = params.postId;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: { revalidate: 60 },
  });

  const post = await response.json();
  console.log(params.postId)

  return (
    <>
      <div style={{ padding: "70px" }}>
        <h1>Post Details</h1>
        <div>
          <h1>  {post.title}  </h1>
        </div>
      </div>
    </>
  );
}
