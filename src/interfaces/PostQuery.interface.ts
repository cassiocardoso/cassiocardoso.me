export interface PostQueryData {
  data: {
    id: string;
    mdx: {
      frontmatter: {
        date: string;
        slug: string;
        title: string;
      };
    };
  };
  pageContext: {
    frontmatter: {
      banner: string;
      date: string;
      draft: boolean;
      language: string;
      noIndex: string;
      slug: string;
      tags: string;
      title: string;
    };
  };
}
