import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import Heading from '../shared/Heading';
import BlogPostsItem from './BlogPostsItem';

const BlogPosts: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(
    'bg-black z-10 relative py-12 px-24',
    className,
  );

  return (
    <div id="writing" className={containerClassName} style={{ minHeight: 500 }}>
      <Heading level={2} className="text-white">
        Writing
      </Heading>
      <div className="mt-12 space-y-8">
        <BlogPostsItem />
        <BlogPostsItem />
        <BlogPostsItem />
      </div>
    </div>
  );
};

export default BlogPosts;
