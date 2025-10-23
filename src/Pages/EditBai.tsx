import { useParams } from "react-router-dom";
import type Post from "../PostType";
import PostForm from "../Components/Posts/PostForm";

function EditBai() {
  const params = useParams();
  const id = Number(params.id);
  const postArr: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
  const p = postArr.find(p => p.id === id);

  return (
    <div>
      {p ? (
        <PostForm
          id={id}
          title={p.title}
          author={p.author}
          url={p.pic}
          content={p.desc}
          category={p.category}
          message="Cập nhật thành công!"
        />
      ) : (
        <h2 style={{ color: "red" }}>Không tìm thấy bài viết</h2>
      )}
    </div>
  );
}

export default EditBai;