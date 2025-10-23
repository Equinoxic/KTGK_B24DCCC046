import type Post from "./PostType";

const samplePosts: Post[] = [
  {
    id: 1,
    pic: "https://picsum.photos/seed/1/600/400",
    title: "Hướng dẫn React cơ bản cho người mới",
    author: "Nguyễn A",
    date: new Date().toISOString(),
    desc: "React là thư viện JavaScript dùng để xây dựng giao diện người dùng...".repeat(8),
    category: "Công nghệ"
  },
  {
    id: 2,
    pic: "https://picsum.photos/seed/2/600/400",
    title: "Khám phá Hội An: Một ngày không quên",
    author: "Trần B",
    date: new Date().toISOString(),
    desc: "Hội An là một thành phố cổ đầy quyến rũ với phố đèn lồng...".repeat(8),
    category: "Du lịch"
  },
  {
    id: 3,
    pic: "https://picsum.photos/seed/3/600/400",
    title: "Công thức phở bò gia truyền",
    author: "Lê C",
    date: "5/12/2024",
    desc: "Phở bò là món ăn quốc hồn quốc túy...".repeat(8),
    category: "Ẩm thực"
  },
  {
    id: 4,
    pic: "https://picsum.photos/seed/4/600/400",
    title: "Sống tối giản: Lợi ích và cách bắt đầu",
    author: "Phạm D",
    date: new Date().toISOString(),
    desc: "Tối giản không chỉ là giảm đồ đạc mà còn là giảm tiêu tốn năng lượng tinh thần...".repeat(8),
    category: "Đời sống"
  },
  {
    id: 5,
    pic: "https://picsum.photos/seed/5/600/400",
    title: "Mẹo chữa cây cảnh tại nhà",
    author: "Hoàng E",
    date: new Date().toISOString(),
    desc: "Cây cảnh giúp không gian sống tươi mát hơn...".repeat(8),
    category: "Khác"
  },
];

export default samplePosts;