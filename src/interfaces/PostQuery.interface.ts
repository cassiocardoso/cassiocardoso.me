export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: {
        path: string;
        title: string;
        date: string;
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
      path: string;
      tags: string;
      title: string;
    };
  };
}
