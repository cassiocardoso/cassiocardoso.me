const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const { resolve } = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allMdx(limit: 100, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              draft
              noIndex
              path
              title
              date
            }
          }
        }
      }
    }
  `).catch(error => console.error(error));

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/blog${node.frontmatter.path}`,
      component: node.fileAbsolutePath,
      context: {
        pagePath: `/blog${node.frontmatter.path}`,
      },
    });
  });
};
