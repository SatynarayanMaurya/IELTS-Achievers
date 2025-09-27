import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Star, Users, Award, Clock, BookOpen, Mic, Target, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full top-0 bg-white/95 backdrop-blur-md shadow-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                IELTS Pro
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Courses', 'Mock Tests', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Courses', 'Mock Tests', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Master IELTS with
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Expert Guidance
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Achieve your target band score with our comprehensive IELTS preparation program. 
                Join thousands of successful students worldwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View Courses
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="w-8 h-8 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-900">IELTS Score</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">8.5</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { skill: 'Listening', score: 8.5, color: 'bg-green-500' },
                      { skill: 'Reading', score: 8.0, color: 'bg-blue-500' },
                      { skill: 'Writing', score: 8.5, color: 'bg-purple-500' },
                      { skill: 'Speaking', score: 9.0, color: 'bg-orange-500' }
                    ].map((item, index) => (
                      <div key={item.skill} className="flex items-center justify-between">
                        <span className="text-gray-700">{item.skill}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(item.score / 9) * 100}%` }}
                              transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                              className={`h-full ${item.color} rounded-full`}
                            />
                          </div>
                          <span className="text-sm font-semibold">{item.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose IELTS Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures you're fully prepared for every aspect of the IELTS exam
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Mic,
                title: 'Speaking Practice',
                description: 'AI-powered speaking sessions with real-time feedback and pronunciation analysis',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Target,
                title: 'Mock Tests',
                description: 'Full-length practice tests that simulate the actual IELTS exam experience',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Award,
                title: 'AI Band Score',
                description: 'Instant band score prediction using advanced AI algorithms',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Users,
                title: 'Expert Tutors',
                description: 'Learn from certified IELTS instructors with years of teaching experience',
                color: 'from-orange-500 to-red-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our students achieved their dream IELTS scores
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                score: '8.5',
                country: 'Canada',
                review: 'IELTS Pro helped me achieve my target score in just 2 months. The speaking practice sessions were incredibly helpful!',
                image: '👩‍💼'
              },
              {
                name: 'Ahmed Hassan',
                score: '8.0',
                country: 'UAE',
                review: 'The mock tests were exactly like the real exam. I felt completely prepared on test day. Highly recommend!',
                image: '👨‍💻'
              },
              {
                name: 'Maria Garcia',
                score: '9.0',
                country: 'Spain',
                review: 'Amazing platform! The AI feedback system helped me improve my writing significantly. Thank you IELTS Pro!',
                image: '👩‍🎓'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.country}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Band {testimonial.score}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">"{testimonial.review}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">IELTS Pro</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner in IELTS preparation. Join thousands of successful students worldwide.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, color: '#3b82f6' }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Courses', 'Mock Tests', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 5, color: '#3b82f6' }}
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {['IELTS Preparation', 'Speaking Practice', 'Writing Correction', 'Mock Tests', 'Band Score Prediction'].map((service) => (
                  <li key={service}>
                    <motion.a
                      whileHover={{ x: 5, color: '#3b82f6' }}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@ieltspro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">123 Education St, Learning City</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8 text-center"
          >
            <p className="text-gray-400">
              © 2025 IELTS Pro. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};


export default Homepage
