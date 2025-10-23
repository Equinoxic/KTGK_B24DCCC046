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
          <div key={p.id} style={{ marginBottom: "12px", paddingLeft: "10px" }}>
            <PostCard id={p.id} pic={p.pic} title={p.title} author={p.author} date={p.date} desc={p.desc.slice(0, 100)} />
            <div style={{ marginTop: "6px", display: "flex", justifyContent: "space-between" }}>
              <Link to={`/posts/${p.id}`} className="butt detail">Đọc thêm</Link>
              <button className="butt del" onClick={() => {
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
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;