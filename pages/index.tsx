import Nav from 'components/layout/Nav';
import Hero from 'components/home/Hero';
import SocialButtons from '../components/home/SocialButtons';
import AboutMe from '../components/home/AboutMe';
import BlogPosts from '../components/home/BlogPosts';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { getClassName } from '../lib/getClassName';

export default function IndexPage({ posts }) {
  const containerClassName = getClassName({
    dark: {
      'bg-primary-dark text-gray-200': true,
    },
    'container mx-auto px-8 md:px-16 lg:px-32 pt-24 bg-white': true,
  });

  const outerClassName = getClassName({
    dark: {
      'bg-primary-dark': true,
    },
    'bg-white': true,
  });

  return (
    <div className={outerClassName}>
      <div className={containerClassName}>
        <Head>
          <title>Leonardo E. Dominguez | Focux</title>
        </Head>
        <Nav />
        <Hero className="mt-24" />
        <SocialButtons className="mt-12" />
        <AboutMe className="mt-12 lg:px-24" />
        <BlogPosts posts={posts} className="mt-24" />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts([
    'title',
    'content',
    'slug',
    'date',
    'time',
    'category',
  ]);

  return {
    props: {
      posts,
    },
  };
}
