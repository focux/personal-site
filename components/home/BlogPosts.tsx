import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import Heading from '../shared/Heading';
import BlogPostsItem from './BlogPostsItem';
import { getAllPosts, Matter } from '../../lib/api';

type BlogPostsProps = {
  posts: { [key in keyof Matter]: string }[];
} & ClassNameProp;

const BlogPosts: React.FC<BlogPostsProps> = ({ className, posts }) => {
  const containerClassName = classNames(
    'bg-black z-10 relative py-12 px-8 md:px-12 lg:px-24',
    className,
  );

  return (
    <div id="writing" className={containerClassName} style={{ minHeight: 500 }}>
      <Heading level={2} className="text-white">
        Writing
      </Heading>
      <div className="mt-12 space-y-8">
        {posts.map((v) => (
          <BlogPostsItem {...v} key={v.title} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
