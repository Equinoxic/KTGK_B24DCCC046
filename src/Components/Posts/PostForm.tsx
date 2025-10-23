import { useState } from "react";
import { redirect } from "react-router-dom";

function PostForm() {
  const [data, setData] = useState({
    title: "",
    author: "",
    url: "",
    content: "",
    category: "Công nghệ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((prev) => ({...prev, [e.target.id]: e.target.value}))
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = [];
    if (data.title.length < 10) errors.push("Tiêu đề: Bắt buộc, ít nhất 10 ký tự");
    if (data.author.length < 3) errors.push("Tác giả: Bắt buộc, ít nhất 3 ký tự");
    if (data.content.length < 50) errors.push("Nội dung: Bắt buộc, ít nhất 50 ký tự ");
    if (errors.length > 0) {
      alert("Lỗi!\n" + errors.join("\n"));
      return;
    }

    const postArr = JSON.parse(localStorage.getItem("posts") || "[]");

    const post = {
      id: postArr.length + 1,
      title: data.title,
      author: data.author,
      pic: data.url,
      date: new Date().toISOString(),
      desc: data.content,
      category: data.category
    };
    localStorage.setItem("posts", JSON.stringify([...postArr, post]));
    alert("Đăng bài thành công!");
    redirect("/");
  }

  return (
    <form style={{
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    }} onSubmit={handleSubmit}>
      <label htmlFor="title">Tiêu đề:</label>
      <input type="text" id="title" value={data.title} onChange={handleChange}/>
      <label htmlFor="author">Tác giả:</label>
      <input type="text" id="author" value={data.author} onChange={handleChange}/>
      <label htmlFor="url">URL hình ảnh:</label>
      <input type="text" id="url" value={data.url} onChange={handleChange}/>
      <select id="category" onChange={handleChange}>
        <option value={"Công nghệ"}>Công nghệ</option>
        <option value={"Du lịch"}>Du lịch</option>
        <option value={"Ẩm thực"}>Ẩm thực</option>
        <option value={"Đời sống"}>Đời sống</option>
        <option value={"Khác"}>Khác</option>
      </select>
      <label htmlFor="content">Bài viết:</label>
      <textarea rows={4} id="content" value={data.content} onChange={handleChange}/>

      <button type="submit">Đăng bài</button>
    </form>
  );
}

export default PostForm;