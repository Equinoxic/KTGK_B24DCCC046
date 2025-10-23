

interface Post {
  id: number;
  pic: string;
  title: string;
  author: string;
  date: string;
  desc: string;
}

function PostCard({ id, pic, title, author, date, desc }: Post) {


  return (
    <div style={{
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 12px",
      backgroundColor: "white",
      justifyItems: "space-between",
      height: "100%"
    }} key={id}>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div style={{ display: "flex", fontSize: 20, gap: 10 }}>
        <img src={pic} width={200} height={250}/>
        <p>{desc}</p>
      </div>
      <div style={{ display: "flex", alignSelf: "flex-end", justifySelf: "flex-end", marginTop: "auto" }}>
        <p><small>{new Date(date).toLocaleDateString()}</small></p>
      </div>
    </div>
  )
}

export default PostCard;