import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AboutHero from '../components/abouthero';
import HeroSkills from '../components/heropie';
import SkillGraph from '../components/skillbar';
import BookCard from '../components/bookcomponent';
import MyStory from '../components/mystory';
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero></AboutHero>
      <HeroSkills></HeroSkills>
      <SkillGraph></SkillGraph>
      <BookCard></BookCard>
      <MyStory></MyStory>
      <Footer></Footer>

    </div>
  );
}

export default About;
