import Nav from 'components/layout/Nav';
import Hero from 'components/home/Hero';
import SocialButtons from '../components/home/SocialButtons';
import AboutMe from '../components/home/AboutMe';

export default function IndexPage() {
  return (
    <div className="container mx-auto px-32 py-24">
      <Nav />
      <Hero className="mt-24" />
      <SocialButtons className="mt-12" />
      <AboutMe className="mt-12 px-24" />
    </div>
  );
}
