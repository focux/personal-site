import Nav from 'components/layout/Nav';
import Hero from 'components/home/Hero';
import SocialButtons from '../components/home/SocialButtons';
import AboutMe from '../components/home/AboutMe';
import BlogPosts from '../components/home/BlogPosts';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';

export default function IndexPage({ posts }) {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-32 pt-24">
      <Head>
        <title>Focux | Leonardo E. Dominguez</title>
      </Head>
      <Nav />
      <Hero className="mt-24" />
      <SocialButtons className="mt-12" />
      <AboutMe className="mt-12 lg:px-24" />
      <BlogPosts posts={posts} className="mt-24" />
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
