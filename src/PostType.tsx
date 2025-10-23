export default interface Post {
  id: number;
  pic: string;
  title: string;
  author: string;
  date: string;
  desc: string;
  category?: string;
}