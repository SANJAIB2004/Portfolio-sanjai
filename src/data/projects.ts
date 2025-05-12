export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?:boolean;
};

const projects: Project[] = [
  {
    title: "Blog Application with User Authentication",
    techs: ["Django", "mySql", "HTML", "TailwindCss", "JavaScript"],
    link: "https://github.com/sanjaib2004/blog_app",
  },
  {
    title: "Real-Time Chat Application",
    techs: ["Django", "Django Channels", "WebSockets", "JavaScript", "SQLite"],
    link: "https://github.com/SANJAIB2004/MovieSerializer",
  },
  {
    title: "HoardView",
    techs: ["Python,Hugging Face,TensorFlow,tesseract,computer vision."],
    link: "https://github.com/SANJAIB2004/HOARDVIEW",
  },
  {
    title:"Traffic Sign Board Detection Using CNN ",
    techs:["Python,DeepLearning,OpenCV,CNN,Streamlit"],
    link:"https://github.com/SANJAIB2004/Traffic_symbol_detector_cnn",
    
    
  }
];

export default projects;
