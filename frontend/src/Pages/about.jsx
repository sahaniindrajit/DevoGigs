import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'Founder & CEO',
    bio: 'John is passionate about creating a space where developers can collaborate and grow together. With over 10 years of experience in tech, he leads Devogigs with a vision for the future.',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    bio: 'Jane has been working in software engineering for over 8 years. She oversees all the technical aspects of Devogigs, ensuring the platform runs smoothly and innovatively.',
    photo: 'https://via.placeholder.com/150',
  },
];

const About = () => {
  return (
    <div style={styles.aboutContainer}>
      <div style={styles.aboutHero}>
        <h1>About Devogigs</h1>
        <p>Your Trusted Platform for Developers</p>
      </div>

      {/* Goal Section */}
      <section style={styles.aboutSection}>
        <h2>Our Goal</h2>
        <p>
          At Devogigs, our goal is to build a thriving developer community where collaboration, learning, and growth are at the forefront. We aim to create an environment that fosters innovation and provides opportunities for developers to connect, share knowledge, and solve real-world challenges.
        </p>
      </section>

      {/* Mission Statement */}
      <section style={styles.aboutSection}>
        <h2>Mission Statement</h2>
        <p>
          Our mission at Devogigs is to create a collaborative community where developers can connect, share knowledge, and work together to tackle real-world problems. We strive to empower developers at every level to grow, innovate, and succeed.
        </p>
      </section>

      {/* Vision Statement */}
      <section style={styles.aboutSection}>
        <h2>Vision Statement</h2>
        <p>
          We envision a future where Devogigs becomes the leading platform for developers worldwide, offering opportunities for growth, learning, and professional development. Our long-term goal is to build a global network where developers can thrive and contribute to the evolving tech landscape.
        </p>
      </section>

      {/* Our Story */}
      <section style={styles.aboutSection}>
        <h2>Our Story</h2>
        <p>
          Devogigs was born out of a desire to create a community where developers could come together, share their experiences, and grow as a team. Our journey began in 2021 when a group of tech enthusiasts saw the need for a space where collaboration and learning could flourish. Despite facing challenges along the way, we remained committed to our vision, and today, Devogigs continues to thrive.
        </p>
      </section>

      {/* Team Section */}
      <section style={styles.aboutTeamSection}>
        <h2>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <img src={member.photo} alt={member.name} style={styles.teamPhoto} />
              <h3>{member.name}</h3>
              <p style={styles.teamPosition}>{member.position}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.aboutSection}>
        <h2>Our Values</h2>
        <ul style={styles.valuesList}>
          <li>Collaboration: We believe in the power of working together to achieve common goals.</li>
          <li>Innovation: We strive to push the boundaries of technology and creativity.</li>
          <li>Growth: We are committed to the personal and professional development of every member.</li>
          <li>Community: We foster a supportive and inclusive environment for all developers.</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  aboutContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  aboutHero: {
    textAlign: 'center',
    background: 'linear-gradient(to right, #007bff, #6a11cb)',
    padding: '60px 20px',
    color: 'white',
    marginBottom: '40px',
  },
  aboutSection: {
    marginBottom: '50px',
    padding: '20px',
  },
  aboutTeamSection: {
    textAlign: 'center',
    background: '#f9f9f9',
    padding: '60px 20px',
    marginBottom: '50px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
  },
  teamCard: {
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '300px',
    transition: 'all 0.3s ease-in-out',
  },
  teamCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },
  teamPhoto: {
    borderRadius: '50%',
    marginBottom: '15px',
    width: '120px',
    height: '120px',
  },
  teamPosition: {
    fontSize: '1.1rem',
    color: '#777',
    marginBottom: '15px',
  },
  valuesList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  valuesListLi: {
    background: 'white',
    padding: '15px',
    marginBottom: '15px',
    fontSize: '1.2rem',
    color: '#444',
    borderLeft: '4px solid #007bff',
  },
};

export default About;