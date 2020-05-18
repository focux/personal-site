import Nav from '../../components/layout/Nav';
import Heading from '../../components/shared/Heading';
import Paragraph from '../../components/shared/Paragraph';
import markdownToReact from '../../lib/markdownToReact';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import dayjs from 'dayjs';

export default function PostPage({
  post: { content, title, category, date, time },
}) {
  const parsedContent = markdownToReact(content);

  return (
    <article className="container mx-auto px-32 py-24">
      <Nav type="post" />
      <Heading level={1} className="mt-20" style={{ fontWeight: 200 }}>
        {title}
      </Heading>
      <Paragraph className="text-gray-500">
        {date} / {category} / {time}
      </Paragraph>
      <main className="space-y-8 mt-12">{parsedContent}</main>
    </article>
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
