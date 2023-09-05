interface ContactInfo {
  email: string;
  linkedIn: string;
  location: string;
}

interface Project {
  title: string;
  desc: string;
  date: string;
  thumbnail: string;
  live: string;
  srs: string;
  code: string;
  Tech: string[];
}

interface Expreience {
  title: string;
  desc: string;
  date: string;
  link: string;
  skills: string[];
  companyName: string;
}

interface Skill {
  title: string;
  desc: string;
}

export interface DataType {
  bio: {
    name: string;
    title: string;
    intro: string;
    desc: string;
    cta: string;
    address: string;
    whatCanI: string;
    contact: ContactInfo;
  };
  projects: Project[];
  expreience?: Expreience[];
  whatICan: Skill[];
  recomendation: string[];
  softSkills: string[];
}
