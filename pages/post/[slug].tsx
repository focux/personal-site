import Nav from '../../components/layout/Nav';
import Heading from '../../components/shared/Heading';
import Paragraph from '../../components/shared/Paragraph';
import markdownToReact from '../../lib/markdownToReact';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import dayjs from 'dayjs';
import Head from 'next/head';
import TwitterIcon from '../../components/home/TwitterIcon';
import { getClassName } from '../../lib/getClassName';

export default function PostPage({
  post: { content, title, category, date, time, slug },
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

  const twitterText = encodeURI(
    `"${title}" by @foocux https://focux.dev/post/${slug}`,
  );

  return (
    <div className={containerClassName}>
      <Head>
        <title>{title}</title>
      </Head>
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
            className="cursor-pointer hover:text-primary-500"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon className="ml-2 h-6 w-6 fill-current transition ease-out duration-150" />
          </a>
        </div>
      </article>
    </div>
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
  ]);
  const content = post.content;

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
