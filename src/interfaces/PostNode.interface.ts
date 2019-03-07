export default interface IPostNode {
  node: {
    excerpt: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
}
