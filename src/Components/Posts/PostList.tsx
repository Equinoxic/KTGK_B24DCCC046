import PostCard from "./PostCard";

interface Post {
  id: number,
  pic: string,
  title: string,
  author: string,
  date: string,
  desc: string
}

function PostList() {
  const posts = localStorage.getItem("posts");
  const pArr: Post[] = (posts) ? JSON.parse(posts) : [];

  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
    }}>
      {pArr.map((p) => (
        <PostCard id={p.id} pic={p.pic} title={p.title} author={p.author} date={p.date} desc={p.desc.slice(0, 100)} />
      ))}
    </div>
  );
}

export default PostList;