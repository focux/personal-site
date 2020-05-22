import Nav from '../../components/layout/Nav';
import Heading from '../../components/shared/Heading';
import Paragraph from '../../components/shared/Paragraph';
import markdownToReact from '../../lib/markdownToReact';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import dayjs from 'dayjs';
import TwitterIcon from '../../components/home/TwitterIcon';
import { getClassName } from '../../lib/getClassName';
import Meta from '../../components/shared/Meta';
import { SITE_URI } from '../../config/constants';
import { generateOgImage } from '../../lib/generateOgImage';

export default function PostPage({
  post: { content, title, category, date, time, slug, description },
}) {
  const parsedContent = markdownToReact(content);

  const containerClassName = getClassName({
    'bg-white': true,
    dark: {
      'bg-primary-dark': true,
    },
  });

  const articleClassName = getClassName({
    dark: {
      'bg-primary-dark text-gray-200': true,
    },
    'container mx-auto px-8 md:px-16 lg:px-32 py-24 bg-white': true,
  });

  const postUrl = `${SITE_URI}post/${slug}`;

  const twitterText = encodeURI(`"${title}" by @foocux ${postUrl}`);

  const shareLinkClassName = getClassName({
    'cursor-pointer': true,
    dark: {
      'hover:text-pink-500': true,
    },
    light: {
      'hover:text-primary-500': true,
    },
  });

  return (
    <>
      <Meta
        title={`${title} — Leonardo Dominguez`}
        description={description}
        url={postUrl}
        imageUrl={`${SITE_URI}og/${slug}.png`}
      />
      <div className={containerClassName}>
        <article className={articleClassName}>
          <Nav type="post" />
          <Heading
            level={1}
            className="mt-20 !text-4xl sm:!text-5xl"
            style={{ fontWeight: 200 }}
          >
            {title}
          </Heading>
          <Paragraph className="text-gray-500">
            {date} / {category} / {time}
          </Paragraph>
          <main className="space-y-8 mt-12">{parsedContent}</main>
          <div className="bg-gray-800 w-20 h-px mt-12" />
          <div className="flex mt-8 text-lg items-center">
            Share on{' '}
            <a
              href={`https://twitter.com/intent/tweet?text=${twitterText}`}
              className={shareLinkClassName}
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon className="ml-2 h-6 w-6 fill-current transition ease-out duration-150" />
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'category',
    'time',
    'description',
  ]);
  const content = post.content;

  await generateOgImage({ slug: post.slug, title: post.title });

  return {
    props: {
      post: {
        ...post,
        content,
        date: dayjs(post.date).format('MMM DD'),
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
