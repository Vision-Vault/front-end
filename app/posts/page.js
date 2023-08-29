import Link from "next/link";

export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await response.json();
  //   console.log(posts);

  const postsJSX = posts.map((post) => {
    return (
      <div style={{ padding: "70px" }}>
        <Link href={`/posts/${post.id}`}>
          <h1 style={{ color: "red" }}>{post.title}</h1>
        </Link>
        <p>{post.body}</p>
        <p>{post.description}</p>
        {/* <img src={post.image.upload_to} alt="project image" />

        <video controls>
          <source src={`${post.video.upload_to}`} type="video/mp4" />
        </video>
        <p>Category: {post.category.name}</p>
        <p>Rating: {post.rating}</p>
        <p>Allowed Donors: {post.allowed_donors}</p>
        <p>
          Creator: {post.creator.full_name} ({post.creator.username})
        </p> */}
      </div>
    );
  });
  return (
    <div>
      <h1>Posts </h1>

      {/* POSTS */}
      <div>{postsJSX}</div>
    </div>
  );
}
