type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "sanjai.b2022cse@sece.ac.in",
  title: "Hi, I’m SANJAI 👋",
  // profile: "/profile.webp",
  description:
    " I'm a *Student*, frontend developer ,designer. I am currently working with the Project *Connect* using *ReactJS , Typescript ,SQlite and HonoJS API ,CloudFlare to deploy *. Currently  learning TypeScript and AstroJS.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/sanjai-b-29b890259/",
    },
    {
      label: "Github",
      link: "https://github.com/sanjaib2004",
    },
  ],
};

export default presentation;
