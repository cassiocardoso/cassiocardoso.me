import IPostNode from './PostNode.interface';

export default interface IBlogPageQuery {
  data: {
    allMdx: {
      edges: IPostNode[];
    };
  };
}
