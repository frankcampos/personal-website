
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  responsibilities?: string[];
  link: string;
  image?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    title: "ThinkThrive (Fullstack - Personal Project)",
    description: "Developed a web application to assist users in recalling information and learning procedural and conceptual knowledge.",
    technologies: ["React", "Next.js", "Firebase", "OpenAI API"],
    features: [
      "Integrated OpenAI API for providing feedback and enhancing learning experiences.",
      "Implemented user authentication and data storage using Firebase.",
      "Designed a responsive and user-friendly interface with React and Next.js.",
    ],
    responsibilities: [
      "Developed the front-end using React and Next.js.",
      "Set up and managed the backend with Firebase for real-time database and authentication.",
      "Integrated OpenAI API for dynamic content generation and feedback.",
    ],
    link: "https://thinkthrive.netlify.app/",
    image: "/images/thinkthrive.png",
  },
  {
    title: "WheretoMeet (Fullstack - Group Project)",
    description: "This project was created to solve the issue of where to meet for a meal. It allows users to create groups and events, assign days for events, and decide whether an event is public or private. Users can also chat within the event, share suggestions, and more, making event coordination simple and fun.",
    technologies: ["React", "React Query", "Node.js", "Tailwind CSS", "ShadCN", "Express", "MongoDB Atlas"],
    features: [
      "Create and manage groups and events with ease.",
      "Assign dates for events and set them as public or private.",
      "Integrated chat feature for event participants to communicate.",
      "View event details, join events, and suggest locations.",
      "Personalized notifications and event updates to keep everyone informed.",
      "Responsive UI built with Tailwind CSS for seamless user experience.",
    ],
    link: "https://wheretomeetapp.netlify.app/",
    image: "/images/wheretomeet.png",
  },
];
