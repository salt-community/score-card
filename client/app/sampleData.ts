import { DeveloperData } from './types';

// These data should be registered by the developers themselves
export const sampleRegisteredDeveloperData = {
  developerId: '001',
  name: 'feng yang',
  standoutIntro: 'Experienced in various of client projects',
  mainProgrammingLanguage: 'javascript',
  // githubUrl: 'https://github.com/Finns841594',
  githubUserName: 'Finns841594',
  linkedinUrl: 'https://www.linkedin.com/in/feng-yang-511361166/',
  selectedProjectUrls: [
    'https://github.com/Finns841594/moboga',
    'https://github.com/lups-tech/jobMatches',
  ],
  backgroundInformations: {
    nationalities: ['Chinese'],
    spokenLanguages: ['Chinese', 'English', 'Swedish'],
    educations: ['Architecture'],
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
    ],
  },
};

// These data should be fetched/generated by the server
export const sampleGeneratedDeveloperData = {
  id: '001',
  name: 'feng yang',
  standoutIntro: 'Experienced in various of client projects',
  bootcamp: 'javascript',
  githubUrl: 'https://github.com/Finns841594',
  linkedinUrl: 'https://www.linkedin.com/in/feng-yang-511361166/',
  backgroundInformations: {
    nationalities: ['Chinese'],
    spokenLanguages: ['Chinese', 'English', 'Swedish'],
    educations: ['Architecture'],
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
    ],
  },
  // below are generated datas
  githubUserName: 'Finns841594',
  githubProfilePictureUrl:
    'https://avatars.githubusercontent.com/u/65496134?v=4',
  scores: [
    {
      scoreName: 'Communication',
      data: {
        'On site demo 1': 88,
        'On site demo 2': 86,
        'On site demo 3': 91,
        'Personal interview 1': 80,
        'Personal interview 2': 94,
        'Tech interview 1': 89,
        'Tech interview 2': 90,
        'Repository documentation': 89,
        'Tech article': 96,
        'Video demo 1': 90,
        'Video demo 2': 93,
        'Video demo 3': 89,
      },
    },
    {
      scoreName: 'Planning',
      data: {
        Microsteps: 82,
        'Test cases': 85,
        'Project board': 83,
        Figma: 89,
      },
    },
    {
      scoreName: 'Coding',
      data: {
        'Weekend Assignment 1': 100,
        'Weekend Assignment 2': 100,
        'Weekend Assignment 3': 100,
        'On site test 1': 97,
        'On site test 2': 90,
        'On site test 3': 91,
        'Hackday 1': 95,
        'Hackday 2': 96,
        'Hackday 3': 99,
        'Project 1': 97,
        'Project 2': 99,
      },
    },
  ],
  selectedProjects: [
    {
      name: 'Moboga',
      repoUrl: 'https://github.com/Finns841594/moboga',
      data: {
        Commits: 79,
        Issues: 3,
        Duration: '2 week',
        Performance: '62%',
        TestCoverage: '40%',
      },
    },
    {
      name: 'Talenthub',
      repoUrl: 'https://github.com/lups-tech/jobMatches',
      data: {
        Commits: 306,
        Issues: 12,
        Duration: '12 week',
        Performance: '89%',
        TestCoverage: '60%',
      },
    },
  ],
  radarGraphicDatas: [
    {
      subject: 'frontend',
      A: 98,
      fullMark: 100,
    },
    {
      subject: 'backend',
      A: 88,
      fullMark: 100,
    },
    {
      subject: 'charismatic',
      A: 75,
      fullMark: 100,
    },
    {
      subject: 'teamwork',
      A: 80,
      fullMark: 100,
    },
    {
      subject: 'design',
      A: 100,
      fullMark: 100,
    },
    {
      subject: 'management',
      A: 95,
      fullMark: 100,
    },
  ],
  commitsCount: 500,
  issuesCount: 100,
} as DeveloperData;
