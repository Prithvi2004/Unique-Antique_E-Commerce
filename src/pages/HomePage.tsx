import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Star,
  Crown,
  Shield,
  Truck,
  Award,
  Sparkles,
  Diamond,
  Users,
  Globe,
  Boxes,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import ParallaxSection from "../components/ui/ParallaxSection";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import ProductCard from "../components/ui/ProductCard";
import { featuredProducts, newArrivals } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";

const HomePage: React.FC = () => {
  const { addItem: addToCart } = useCartStore();
  const { toggleItem: toggleWishlist, isInWishlist } = useWishlistStore();

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [productsRef, productsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: 50000, label: "Luxury Items", icon: Diamond, suffix: "+" },
    { number: 25000, label: "Happy Collectors", icon: Users, suffix: "+" },
    { number: 150, label: "Countries Served", icon: Globe, suffix: "+" },
    { number: 99, label: "Satisfaction Rate", icon: Star, suffix: "%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Advanced Parallax */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-gray-900 dark:to-black" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={heroInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="mb-8"
          >
            <Crown className="h-24 w-24 text-gold-500 mx-auto mb-6" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              Timeless
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 bg-clip-text text-transparent">
              Treasures
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Where <span className="text-gold-400 font-medium">luxury</span>{" "}
            meets <span className="text-gold-400 font-medium">legacy</span>, and
            every piece tells a story of{" "}
            <span className="text-gold-400 font-medium">timeless elegance</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Link to="/shop">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg"
              >
                <Sparkles className="mr-3 h-6 w-6" />
                Explore Collection
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/collections">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-2 border-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg"
              >
                <Boxes className="mr-3 h-6 w-6" />
                View Collections
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <ParallaxSection speed={0.3}>
        <section
          ref={statsRef}
          className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-black dark:to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  </motion.div>
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      className="text-gold-400"
                    />
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Features Section with Advanced Animations */}
      <ParallaxSection speed={0.2}>
        <section
          ref={featuresRef}
          className="py-24 bg-marble-50 dark:bg-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                The <span className="text-gold-600">Luxury</span> Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                We redefine luxury through exceptional quality, unparalleled
                service, and an unwavering commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Authenticity Guaranteed",
                  description:
                    "Every item comes with certificate of authenticity and comprehensive quality assurance.",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Truck,
                  title: "White-Glove Delivery",
                  description:
                    "Premium shipping service with insurance, tracking, and personalized handling.",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Award,
                  title: "Curated Excellence",
                  description:
                    "Hand-picked luxury items from renowned artisans and prestigious brands worldwide.",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Star,
                  title: "Concierge Support",
                  description:
                    "24/7 dedicated service from our luxury specialists and personal consultants.",
                  color: "from-gold-500 to-gold-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <GlassCard className="text-center h-full relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Featured Products with Enhanced Design */}
      <ParallaxSection speed={0.1}>
        <section
          ref={productsRef}
          className="py-24 bg-white dark:bg-black relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Featured <span className="text-gold-600">Masterpieces</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover our most coveted pieces, each carefully selected for
                the discerning collector who appreciates true artistry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                  variant="luxury"
                  index={index}
                />
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link to="/shop">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white px-8 py-4"
                >
                  <Diamond className="mr-3 h-6 w-6" />
                  Explore All Treasures
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Newsletter Section with Advanced Styling */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-gray-900 dark:to-black" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <Sparkles className="h-16 w-16 text-gold-500" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Join the <span className="text-gold-400">Elite Circle</span>
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Be the first to discover exclusive collections, rare finds, and
              receive personalized recommendations from our luxury experts.
            </p>

            <motion.div
              className="max-w-md mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-transparent border-0 text-white placeholder-gray-300 focus:outline-none"
                />
                <Button className="rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 px-8">
                  <Crown className="h-5 w-5 mr-2" />
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
