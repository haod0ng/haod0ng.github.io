export const personalInfo = {
  name: 'Haodong Zheng',
  profilePicture: '/avatar.jpg', //optional
  role: 'PhD student',
  university: 'EPFL',
  universityWebsite: 'https://www.epfl.ch/en/',
  socialMedia: [
    { name: 'Email', url: 'mailto:haodong.zheng@epfl.ch' },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=5ov2fqEAAAAJ&hl=zh-CN',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/haod0ng',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/haodongzheng/',
    },
    { name: 'X', url: 'https://x.com/zhd000' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'System researcher homepage',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [];

export const homepageSection = {
  AboutSection: true,
  NewsSection: false,
  ExperienceSection: true,
  SelectedPublicationsSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono" | "lato"
