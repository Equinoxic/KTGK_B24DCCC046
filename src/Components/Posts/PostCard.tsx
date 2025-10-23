import type Post from "../../PostType";

function PostCard({ pic, title, author, date, desc }: Post) {


  return (
    <div style={{
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 12px",
      backgroundColor: "white",
      justifyItems: "space-between",
      height: "100%",
      maxWidth: "450px"
    }}>
      <div>
        <h2>{title}</h2>
        <h3 style={{ marginBottom: "auto"}}>{author}</h3>
      </div>
      <div style={{ display: "flex", fontSize: 20, gap: 10, justifySelf: "center" }}>
        <img src={pic} width={200} height={250} style={{ borderRadius: "16px" }}/>
        <p style={{ overflowWrap: "break-word", overflow: "auto" }}>{desc}</p>
      </div>
      <div style={{ display: "flex", alignSelf: "flex-end", justifySelf: "flex-end", marginTop: "auto" }}>
        <p><small>{new Date(date).toLocaleDateString()}</small></p>
      </div>
    </div>
  )
}

export default PostCard;