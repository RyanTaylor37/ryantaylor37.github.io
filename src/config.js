module.exports = {
  siteTitle: 'Ryan Taylor | Embedded Systems Engineer',
  siteDescription:
    'Ryan Taylor is a rising senior at Vanderbilt University, majoring in Electrical and Computer Engineering  and has a passion for embedded systems',
  siteKeywords:
    'Ryan Taylor, Ryan, Taylor, ryantaylor37, embedded systems, robotics, electronics',
  siteUrl: 'https://mywebsite-e2a61.web.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ryan Taylor',
  location: 'Cedar Hill, Texas',
  email: 'ryan.c.taylor@vanderbilt.edu',
  github: 'https://github.com/RyanTaylor37',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/RyanTaylor37',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ryan-c-taylor37/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rstar0509/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/RyanTay73717055',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
