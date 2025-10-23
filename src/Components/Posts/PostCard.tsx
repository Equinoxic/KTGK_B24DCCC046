

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
      display: "flex"
    }} key={id}>
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
        <img src={pic} />
        <p>{desc}</p>
      <div>
        <p><small>{date}</small></p>
      </div>
    </div>
  )
}

export default PostCard;