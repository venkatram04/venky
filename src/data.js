export const profile = {
  shortName: 'Venkat',
  fullName: 'Venkata Rami Reddy CH',
  email: 'connectwithvenkatram@gmail.com',
  phone: '+91-8074978091',
  phoneDisplay: '+91 80749 78091',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/venkatram04/',
  github: 'https://github.com/venkatram04',
  leetcode: 'https://leetcode.com/u/codewithram04/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/user/codewithram04/',
  // This is the portrait URL already used in your original portfolio.
  // For a self-hosted image, place your photo in public/profile.jpg and change this to '/profile.jpg'.
  image: 'https://raw.githubusercontent.com/venkatram04/online-ticket-reservation/main/Venkat-formal-suitandbg.jpg',
};

export const education = [
  {
    qualification: 'Bachelor of Engineering — Computer Science',
    institution: 'Sathyabama Institute of Science and Technology, Chennai',
    period: 'Aug 2021 – May 2025',
    result: 'CGPA: 8.19 / 10',
  },
  {
    qualification: 'Higher Secondary Education',
    institution: 'Sri Chaitanya Junior College, Guntur',
    period: 'Jun 2019 – May 2021',
    result: 'Percentage: 88.3%',
  },
  {
    qualification: 'Secondary School Certificate',
    institution: 'Sri Guru Raja E.M. High School, Nandyal',
    period: 'Jun 2018 – May 2019',
    result: 'CGPA: 9.7',
  },
];

export const experience = [
  {
    role: 'Software Developer',
    organization: 'Cognizant',
    period: 'OCT 2026 – Present',
    description:
      'Contributing to software development work with a focus on building reliable solutions, maintaining quality, and improving development efficiency.',
    technologies: ['ASP.NET Web API', 'React', 'C#', 'MS SQL', 'Python', 'AWS'],
  },
  {
    role: 'Programme Analyst Trainee',
    organization: 'Cognizant',
    period: 'June 2025 – Sept 2026',
    description:
      'Contributing to software development work with a focus on building reliable solutions, maintaining quality, and improving development efficiency.',
    technologies: ['ASP.NET Web API', 'React', 'C#', 'MS SQL'],
  },
  {
    role: 'Project Intern',
    organization: 'HCL Technologies · Chennai',
    period: 'Jan 2024 – Mar 2024',
    description:
      'Worked on an Online Ticket Reservation System, strengthening practical software development skills and delivering the project within the planned timeline.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
];

export const projects = [
  {
    number: '01',
    name: 'Online Property Rental Management System',
    type: 'Web application',
    period: 'Oct 2025',
    description:
      'A rental platform with Owner and Tenant roles for property listings, lease finalization, and payment workflows. Connected backend DTOs with the React interface and added validation around key operations.',
    technologies: ['ASP.NET Web API', 'React', 'C#', 'MS SQL'],
    icon: 'building',
    featured: true,
  },
  {
    number: '02',
    name: 'CSE Discipline Forum',
    type: 'College management system',
    period: 'Jan 2025',
    description:
      'A web application designed to simplify student discipline tracking and help college staff review and manage reported issues.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    icon: 'users',
    featured: false,
  },
  {
    number: '03',
    name: 'Online Ticket Reservation System',
    type: 'Booking application',
    period: 'Apr 2024',
    description:
      'A straightforward ticket booking interface focused on clear navigation and a smoother reservation flow for users.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    icon: 'ticket',
    featured: false,
    link: 'https://github.com/venkatram04/online-ticket-reservation',
  },
];

export const skillGroups = [
  { title: 'Programming languages', skills: ['C++', 'C#', 'Python', 'JavaScript'] },
  { title: 'Frontend', skills: ['React.js', 'HTML5', 'CSS3', 'Angular'] },
  { title: 'Backend', skills: ['ASP.NET Web API', 'Node.js', 'Express.js'] },
  { title: 'Databases & cloud', skills: ['MS SQL', 'MySQL', 'MongoDB', 'AWS'] },
  { title: 'Tools', skills: ['Visual Studio Code', 'Git', 'GitHub'] },
  { title: 'Areas of interest', skills: ['Web development', 'Data structures & algorithms', 'Artificial intelligence', 'Cloud technologies'] },
];

export const achievements = [
  {
    title: 'Vibe Code Hackathon',
    detail: 'Built with Gemini Code Assist',
    year: '2025',
  },
  {
    title: 'NPTEL Certification',
    detail: 'Data Science with Python',
    year: '2021',
  },
  {
    title: 'Competitive programming',
    detail: '260+ problems on LeetCode and 190+ on GeeksforGeeks (update these counts before publishing if they have changed).',
    year: 'Ongoing',
  },
];
