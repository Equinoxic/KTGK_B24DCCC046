import { Link } from "react-router-dom";
import type Post from "../../PostType";

function PostDetail({ post }: { post: Post }) {
  return (
    <div className="container">
      <div>
        <h1>{post.title}</h1>
        <h2>{`Viết bởi: ${post.author}`}</h2>
        <h2>{`Thể loại: ${post.category}`}</h2>
        <h3>{`Ngày ${new Date(post.date).toLocaleDateString()}`}</h3>
        <img src={post.pic} width={720} height={480} />
        <p>{post.desc}</p>
      </div>
      <div>
        <Link to={`/posts/edit/${post.id}`}>Cập nhật</Link>
      </div>
    </div>
  );
}

export default PostDetail;