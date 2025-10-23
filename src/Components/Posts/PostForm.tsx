import { useState } from "react";
import type Post from "../../PostType";
import { useNavigate } from "react-router-dom";

function PostForm({
  id = -1,
  title = "",
  author = "",
  url = "",
  content = "",
  category = "Công nghệ",
  message = "Đăng bài thành công!",
}) {
  const [data, setData] = useState({
    title: title,
    author: author,
    url: url,
    content: content,
    category: category,
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = [];
    if (data.title.length < 10)
      errors.push("Tiêu đề: Bắt buộc, ít nhất 10 ký tự");
    if (data.author.length < 3)
      errors.push("Tác giả: Bắt buộc, ít nhất 3 ký tự");
    if (data.content.length < 50)
      errors.push("Nội dung: Bắt buộc, ít nhất 50 ký tự ");
    if (errors.length > 0) {
      alert("Lỗi!\n" + errors.join("\n"));
      return;
    }

    const postArr: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");

    const post = {
      id: (id == -1) ? postArr.length + 1 : id,
      title: data.title,
      author: data.author,
      pic: data.url,
      date: new Date().toISOString(),
      desc: data.content,
      category: data.category,
    };
    const newPosts =
      id === -1
        ? [...postArr, post]
        : [...postArr.filter((p) => p.id !== id), post];
    localStorage.setItem("posts", JSON.stringify(newPosts))
    alert(message);
    navigate("/");
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">Tiêu đề:</label>
      <input
        type="text"
        id="title"
        value={data.title}
        onChange={handleChange}
      />
      <label htmlFor="author">Tác giả:</label>
      <input
        type="text"
        id="author"
        value={data.author}
        onChange={handleChange}
      />
      <label htmlFor="url">URL hình ảnh:</label>
      <input type="text" id="url" value={data.url} onChange={handleChange} />
      <label htmlFor="category">Thể loại:</label>
      <select id="category" onChange={handleChange}>
        <option value={"Công nghệ"}>Công nghệ</option>
        <option value={"Du lịch"}>Du lịch</option>
        <option value={"Ẩm thực"}>Ẩm thực</option>
        <option value={"Đời sống"}>Đời sống</option>
        <option value={"Khác"}>Khác</option>
      </select>
      <label htmlFor="content">Bài viết:</label>
      <textarea
        rows={4}
        id="content"
        value={data.content}
        onChange={handleChange}
      />

      <button type="submit">Đăng bài</button>
    </form>
  );
}

export default PostForm;