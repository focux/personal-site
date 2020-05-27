import Nav from 'components/layout/Nav';
import Hero from 'components/home/Hero';
import SocialButtons from '../components/home/SocialButtons';
import AboutMe from '../components/home/AboutMe';
import BlogPosts from '../components/home/BlogPosts';
import { getAllPosts } from '../lib/api';
import { getClassName } from '../lib/getClassName';
import Meta from '../components/shared/Meta';
import { generateOgImage } from '../lib/generateOgImage';
import { SITE_URI } from '../config/constants';

const title = 'Leonardo Dominguez';
const description =
  "I'm a software developer interested in jamstack, mobile apps, user experience and new tech.";
const url = 'https://focux.dev/';

export default function IndexPage({ posts }) {
  const containerClassName = getClassName({
    dark: {
      'bg-primary-dark text-gray-200': true,
    },
    'container mx-auto md:px-16 lg:px-32 pt-24 bg-white': true,
  });

  const outerClassName = getClassName({
    dark: {
      'bg-primary-dark': true,
    },
    'bg-white': true,
  });

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        imageUrl={`${SITE_URI}home.png`}
      />
      <div className={outerClassName}>
        <div className={containerClassName}>
          <Nav />
          <Hero className="mt-24" />
          <SocialButtons className="mt-12" />
          <div className="px-8 sm:px-0">
            <AboutMe className="mt-12 lg:px-24" />
          </div>
          <BlogPosts posts={posts} className="mt-24" />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'slug', 'date', 'time', 'category']);

  return {
    props: {
      posts,
    },
  };
}
