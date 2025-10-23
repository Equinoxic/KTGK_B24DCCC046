import { useParams } from "react-router-dom";
import type Post from "../PostType";
import PostDetail from "../Components/Posts/PostDetail";

function PostContent() {
  const params = useParams();
  const id = Number(params.id);
  const postArr: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
  const post = postArr.find(p => p.id === id);

  return (
    <div>
      {
        post ? (
          <PostDetail post={post} />
        ) : (
          <h2 style={{ color: "red" }}>Không tìm thấy bài viết</h2>
        )
      }
    </div>
  )
}

export default PostContent;