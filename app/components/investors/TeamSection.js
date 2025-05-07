// components/about/TeamSection.js
import React from 'react';
import styles from '../../../styles/investors/teamSection.module.css';
import Link from 'next/link';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Aviral',
      role: '2x Gaming Founder',
      bio: 'Raised $2M across ventures, FIFA Division 1, MIT-AITI winner, IIT-Bombay',
      image: '/advisors/aviral.jpeg'
    },
    {
      name: 'Paras',
      role: 'Game Dev',
      bio: '50+ Minecraft Plug-ins, Maths & Computing, IIT-KGP',
      image: '/advisors/paras.jpeg'
    },
    {
      name: 'Swapnil',
      role: 'Game Designer',
      bio: 'Ex-Ubisoft & EA sports, Studio Partnership at X-gaming',
      image: '/advisors/swapnil.jpeg'
    },
    {
      name: 'Pranay',
      role: 'AI Engineering',
      bio: 'Roblox, Minecraft, IIT-Roorkee',
      image: '/advisors/pranay.jpeg'
    },
    {
      name: 'Aryan',
      role: 'AI Engineering',
      bio: 'Game Developer, Front-End Developer',
      image: '/advisors/aryan.jpeg'
    },
    {
      name: 'Mayur',
      role: 'Head of Business Development',
      bio: 'ex-Zynga, ex-Krafton, 2× founder (raised $1.5M for Mayanagri)',
      image: '/advisors/mayur.jpeg'
    }
  ];

  const advisors = [
    {
      name: 'Michael Carlos',
      role: 'CTO and Head of AI R&D at DataSolve Inc, ex-head of AI at Cyberpunk',
      company: 'Cyberpunk',
      image: '/advisors/michael-carlos.jpeg'
    },
    {
      name: 'Kartik Sabharwal',
      role: 'Game Designer at Miniclip',
      company: 'Miniclip',
      image: '/advisors/kartik.jpeg'
    },
    {
      name: 'Maahi Likhari',
      role: 'Technical Artist at Sprung Studios',
      company: 'Sprung Studios',
      image: '/advisors/maahi.jpeg'
    },
    {
      name: 'Jazking Isaac Albacea',
      role: 'Cinematic Designer At EA',
      company: 'EA',
      image: '/advisors/jazking.jpeg'
    },
    {
      name: 'Daniel Collins',
      role: 'ex-CTO, Cisco',
      company: 'Cisco',
      image: '/advisors/daniel.jpeg'
    },
    {
      name: 'Timothy Chou',
      role: 'ex-President, Oracle',
      company: 'Oracle',
      image: '/advisors/tim-chou.jpeg'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Team</h2>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberImageWrapper}>
                <Image 
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <div className={styles.memberRole}>{member.role}</div>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.advisorsHeader}>
          <h2 className={styles.advisorsTitle}>Advisors</h2>
        </div>
        
        <div className={styles.advisorsGrid}>
          {advisors.map((advisor, index) => (
            <div key={index} className={styles.advisor}>
              <div className={styles.advisorImageWrapper}>
                <Image 
                  src={advisor.image}
                  alt={advisor.name}
                  width={150}
                  height={150}
                  className={styles.advisorImage}
                />
              </div>
              <h3 className={styles.advisorName}>{advisor.name}</h3>
              <div className={styles.advisorRole}>{advisor.role}</div>
              <Link href={`https://${advisor.company.toLowerCase().replace(/\s+/g, '')}.com`} className={styles.companyLink}>
                {advisor.company}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;