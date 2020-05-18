import Heading from '../shared/Heading';
import { formatPostDate } from '../../lib/formatPostDate';
import Link from 'next/link';

type BlogPostsItemProps = {
  category: string;
  title: string;
  date: string;
  time: string;
  slug: string;
};

const BlogPostsItem: React.FC<BlogPostsItemProps> = ({
  category,
  time,
  title,
  date,
  slug,
}) => {
  const formattedDate = formatPostDate(date);
  return (
    <Link href="/post/[slug]" as={`/post/${slug}`}>
      <a>
        <div className="cursor-pointer border-l-2 border-transparent hover:border-white pl-2 -ml-2 transiton ease-out duration-150">
          <Heading level={3} className="text-white" style={{ fontWeight: 300 }}>
            {title}
          </Heading>
          <p className="text-gray-500">
            {formattedDate} / {category} / {time}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostsItem;
