import React, { useEffect, useRef } from 'react';
import { Users, Target, Shield, BarChart3, Building2, Globe2, ChevronDown } from 'lucide-react';
import './Aboutus.css';

function Aboutus() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-animate-stats');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            About <span className="about-brand-highlight">myCRM</span>
          </h1>
          <p className="about-hero-subtitle">
            Empowering businesses with intelligent customer relationship management solutions since 2025
          </p>
          <div className="about-scroll-indicator">
            <p>Scroll to explore</p>
            <ChevronDown className="about-bounce" />
          </div>
        </div>
        <div className="about-hero-pattern"></div>
      </section>

      <section className="about-mission">
        <div className="about-container">
          <div className="about-section-header">
            <p className="about-section-label">Our Mission</p>
            <h2 className="about-section-title">Transforming Customer Relationships</h2>
            <div className="about-title-line"></div>
          </div>
          <p className="about-mission-text">
            We're dedicated to providing innovative CRM solutions that help businesses build stronger, 
            more meaningful relationships with their customers. Our platform combines cutting-edge 
            technology with intuitive design to deliver exceptional results.
          </p>
        </div>
      </section>

      <section className="about-features">
        <div className="about-container">
          <div className="about-features-grid">
            <div className="about-feature-card">
              <div className="about-icon-box">
                <Users className="about-icon" />
              </div>
              <h3 className="about-feature-title">Customer-Centric</h3>
              <p className="about-feature-text">
                We put your customers at the heart of everything we do, ensuring meaningful interactions 
                and lasting relationships.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-icon-box">
                <Target className="about-icon" />
              </div>
              <h3 className="about-feature-title">Goal-Oriented</h3>
              <p className="about-feature-text">
                We help you achieve your business objectives through data-driven insights and 
                strategic planning.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-icon-box">
                <Shield className="about-icon" />
              </div>
              <h3 className="about-feature-title">Secure & Reliable</h3>
              <p className="about-feature-text">
                Your data security is our top priority, with enterprise-grade protection and 
                99.9% uptime guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats" ref={statsRef}>
        <div className="about-container">
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <BarChart3 className="about-stat-icon" />
              <div className="about-stat-content">
                <span className="about-stat-number" data-value="98">0</span>
                <span className="about-stat-symbol">%</span>
              </div>
              <p className="about-stat-label">Customer Satisfaction</p>
            </div>

            <div className="about-stat-item">
              <Building2 className="about-stat-icon" />
              <div className="about-stat-content">
                <span className="about-stat-number" data-value="1000">0</span>
                <span className="about-stat-symbol">+</span>
              </div>
              <p className="about-stat-label">Business Partners</p>
            </div>

            <div className="about-stat-item">
              <Globe2 className="about-stat-icon" />
              <div className="about-stat-content">
                <span className="about-stat-number" data-value="50">0</span>
                <span className="about-stat-symbol">+</span>
              </div>
              <p className="about-stat-label">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-container">
          <div className="about-section-header">
            <h2 className="about-section-title">Our Leadership Team</h2>
            <div className="about-title-line"></div>
            <p className="about-section-subtitle">Meet the experts behind myCRM's success</p>
          </div>
          
          <div className="about-team-grid">
            <div className="about-team-member">
              <div className="about-member-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Sarah Johnson"
                  className="about-member-image"
                />
              </div>
              <h3 className="about-member-name">M.Talha</h3>
              <p className="about-member-role">CEO & Founder</p>
              <p className="about-member-bio">
                Visionary leader with 15+ years of experience in SaaS and CRM solutions.
              </p>
            </div>

            <div className="about-team-member">
              <div className="about-member-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="David Chen"
                  className="about-member-image"
                />
              </div>
              <h3 className="about-member-name">M.Umar</h3>
              <p className="about-member-role">CTO</p>
              <p className="about-member-bio">
                Tech innovator specializing in AI-driven customer experience solutions.
              </p>
            </div>

            <div className="about-team-member">
              <div className="about-member-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Emily Rodriguez"
                  className="about-member-image"
                />
              </div>
              <h3 className="about-member-name">M.Hasnain</h3>
              <p className="about-member-role">Head of Customer Success</p>
              <p className="about-member-bio">
                Customer experience expert dedicated to driving client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;