import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Heart, Shield, Award, Users, Globe, Star, Sparkles } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    {
      icon: Crown,
      title: 'Excellence',
      description: 'We curate only the finest pieces, ensuring every item meets our exacting standards of quality and authenticity.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for timeless beauty and craftsmanship drives everything we do, from sourcing to customer service.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Every piece comes with a guarantee of authenticity and our commitment to transparent, honest dealings.',
    },
    {
      icon: Award,
      title: 'Heritage',
      description: 'We honor the legacy of master craftsmen and preserve the stories behind each treasured piece.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Satisfied Collectors', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '4.9', label: 'Customer Rating', icon: Star },
  ];

  const team = [
    {
      name: 'Isabella Montclair',
      role: 'Founder & Chief Curator',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years in luxury goods, Isabella founded TimelessTreasures to share her passion for exceptional craftsmanship.',
    },
    {
      name: 'Marcus Ashworth',
      role: 'Head of Authentication',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A renowned expert in antique verification, Marcus ensures every piece meets our strict authenticity standards.',
    },
    {
      name: 'Sophia Chen',
      role: 'Director of Client Relations',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sophia leads our white-glove service team, ensuring every client receives personalized, exceptional care.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-gray-900 dark:to-black"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={heroInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <Crown className="h-20 w-20 text-gold-500 mx-auto mb-6" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Our Story
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Where passion meets perfection, and every treasure tells a story of timeless elegance and uncompromising quality.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 bg-marble-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Founded in 1998 by Isabella Montclair, TimelessTreasures began as a small boutique 
                  in the heart of Paris, specializing in rare antiques and luxury collectibles. 
                  Isabella's discerning eye and passion for exceptional craftsmanship quickly 
                  attracted collectors from around the world.
                </p>
                <p>
                  Today, we've grown into a global marketplace while maintaining our commitment 
                  to personal service and authenticity. Every piece in our collection is 
                  hand-selected by our team of experts, ensuring that our clients receive 
                  only the most exceptional treasures.
                </p>
                <p>
                  Our mission remains unchanged: to connect discerning collectors with 
                  extraordinary pieces that transcend time, carrying with them the stories 
                  and craftsmanship of generations past.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center shadow-xl">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing exceptional pieces 
              to delivering unparalleled service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <value.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <stat.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-marble-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              The passionate experts behind TimelessTreasures, dedicated to bringing you 
              the world's most exceptional pieces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gold-500"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Expert
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Begin Your Journey
            </h2>
            <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
              Discover extraordinary pieces that will become the treasured heirlooms of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gold-600 hover:bg-gray-100">
                Explore Collections
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gold-600">
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;