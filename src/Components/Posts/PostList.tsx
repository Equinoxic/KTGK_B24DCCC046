import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { useState } from "react";
import type Post from "../../PostType";

function PostList() {
  const poststore = localStorage.getItem("posts");
  const pArr: Post[] = (poststore) ? JSON.parse(poststore) : [];

  const [posts, setPosts] = useState<Post[]>(pArr);

  return (
    <>
      <h3>{`Tổng bài: ${posts.length}`}</h3>
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        width: "100%"
      }}>
        {posts.map((p) => (
          <div key={p.id}>
            <PostCard id={p.id} pic={p.pic} title={p.title} author={p.author} date={p.date} desc={p.desc.slice(0, 100)} />
            <Link to={`/posts/${p.id}`}>Đọc thêm</Link>
            <button onClick={() => {
              if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
                setPosts((prev) => {
                  const update = prev.filter((old) => old.id !== p.id);
                  localStorage.setItem("posts", JSON.stringify(update));
                  return update;
                });
              }
            }}>
              Xóa
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;