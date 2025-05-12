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
    " I'm a *Student*, FullStack developer(Django) and ML&DL Engineer. I am currently working with the Project *RealTime problem statement* using *Django , Mysql , Html , Css, JavaScript*. Currently  learning Gen AI.",
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
