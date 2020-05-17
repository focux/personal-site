import Heading from '../shared/Heading';

type BlogPostsItemProps = {};

const BlogPostsItem: React.FC<BlogPostsItemProps> = () => {
  return (
    <div className="cursor-pointer border-l-2 border-transparent hover:border-white pl-2 -ml-2 transiton ease-out duration-150">
      <Heading level={3} className="text-white" style={{ fontWeight: 300 }}>
        The State Reducer Pattern with React Hooks
      </Heading>
      <p className="text-gray-500">May 15 / Engineering / 5 Min</p>
    </div>
  );
};

export default BlogPostsItem;
