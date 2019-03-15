export default interface IPostNode {
  node: {
    excerpt: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
  };
}
