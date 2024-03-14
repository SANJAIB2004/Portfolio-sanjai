export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?:boolean;
};

const projects: Project[] = [
  {
    title: "Talk to Max",
    techs: ["Python", "Tkinter", "SQLite"],
    link: "https://github.com/sanjaib2004",
  },
  {
    title: "Music Management System",
    techs: ["JAVA(JavaFX)", "MongoDB and mysql","Scenebuilder"],
    link: "https://github.com/sivasakthi037/Music_Library_Management_System/tree/master",
  },
  {
    title: "Portfolio",
    techs: ["Astro","Typescript","Tailwindcss"],
    link: "/",
  },
  {
    title:"Connect",
    techs:["ReactJS","HonoJS API","SQlite","CloudFlare"],
    link:"/",
    isComingSoon:true
    
  }
];

export default projects;
