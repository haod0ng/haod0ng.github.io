import Image from 'next/image';
import AboutMd from '@/data/home/About.mdx';
import { personalInfo } from '@/website.config';
import {
  RiGraduationCapFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from '@remixicon/react';

const profileIcons = {
  'Google Scholar': RiGraduationCapFill,
  GitHub: RiGithubFill,
  LinkedIn: RiLinkedinBoxFill,
  X: RiTwitterXLine,
};

export default function AboutSection() {
  const email = personalInfo.socialMedia.find((social) => social.name === 'Email');
  const profiles = personalInfo.socialMedia.filter((social) => social.name !== 'Email');

  return (
    <section className="about-section" aria-labelledby="profile-name">
      <div className="profile-header">
        <div className="profile-identity">
          <h1 id="profile-name" className="profile-name">{personalInfo.name}</h1>
          <p className="profile-affiliation">
            {personalInfo.role} ·{' '}
            <a href={personalInfo.universityWebsite}>{personalInfo.university}</a>
          </p>
        </div>
        {personalInfo.profilePicture && (
          <Image
            src={personalInfo.profilePicture}
            alt={`Portrait of ${personalInfo.name}`}
            width={160}
            height={160}
            className="profile-portrait"
            priority
          />
        )}
        <div className="profile-contact">
          {email && (
            <p className="profile-email">
              <a href={email.url}>{email.url.replace(/^mailto:/, '')}</a>
            </p>
          )}
          <ul className="profile-links" aria-label="Profiles" role="list">
            {profiles.map((social) => {
              const Icon = profileIcons[social.name];
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Icon ? <Icon size={22} aria-hidden="true" focusable="false" /> : social.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="biography">
        <AboutMd />
      </div>
    </section>
  );
}
