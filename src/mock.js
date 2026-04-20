// Mock data powering the portfolio UI.
export const profile = {
  firstName: 'Tanish',
  lastName: 'Singh',
  role: 'Software & AI/ML Engineer',
  subtitle: 'MCA Student @ NIT Trichy',
  brandLabel: 'PORTFOLIO',
  brandName: 'Tanish',
  location: 'Based in India',
  flag: '🇮🇳',
  availability: 'Open to Internships',
  email: 'tanishsinghrajput7733112@gmail.com',
  phone: '+91 6260604011',
  heroIntro:
    "I'm Tanish Singh, a software engineer and AI/ML enthusiast focused on building intelligent systems across computer vision, deep learning, and full-stack web projects.",
  heroDescription:
    'I build scalable solutions using Java, Python, C++, Node.js, and modern web stacks with a strong focus on deep learning, data structures, database design, and measurable real-world impact. I explore AI-assisted workflows, computer vision, and LSTM/YOLO-based systems to ship production-grade, low-latency inference pipelines.',
  pills: ['AI / ML', 'Deep Learning', 'Full Stack', 'DSA / DBMS'],
  aboutParagraph:
    'A Software Engineer and MCA student at NIT Trichy with a strong foundation in Computer Applications, specializing in building AI-powered systems, deep learning pipelines, and scalable web applications. Experienced in full-stack development, computer vision using YOLOv8 and pose estimation, real-time dashboards, and backend services. I leverage modern frameworks like Spring Boot, Node.js, Pandas, NumPy, and Socket.IO to build intelligent, end-to-end solutions. I secured All India Rank 4 in NIMCET 2024 and have solved 400+ DSA problems across HackerRank, LeetCode, GFG, and CodeChef, blending strong algorithmic thinking with practical engineering to ship reliable, performant software.',
  stats: [
    { value: '04', label: 'Total Projects', note: 'AI, ML & full-stack work' },
    { value: '400+', label: 'DSA Problems', note: 'Solved across platforms' },
    { value: 'AIR 4', label: 'NIMCET 2024', note: 'National MCA entrance rank' }
  ],
  socials: {
    github: 'https://github.com/tanishsingh',
    linkedin: 'https://www.linkedin.com/in/tanishsingh',
    instagram: 'https://www.instagram.com/tanishsingh'
  }
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' },
  { label: 'Hub', href: '#hub' }
];

export const experiences = [
  {
    type: 'Work',
    path: '~/work/nit-trichy-internship',
    title: 'Summer Research Intern',
    org: 'NIT Trichy',
    orgUrl: 'https://www.nitt.edu/',
    location: 'Tiruchirappalli, India',
    from: 'May 2025',
    to: 'Jul 2025',
    duration: '2m',
    description:
      'Interned under a faculty supervisor on an AI-assisted smart home security project. Built a two-part system: Fall Detection using Pose Estimation + LSTM, and Human Activity / Intrusion Detection using YOLOv8. Delivered a real-time Streamlit dashboard for live monitoring and alerts. All modules were evaluated and approved by NIT Trichy.',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'LSTM', 'OpenCV', 'Streamlit', 'MediaPipe'],
    status: 'Completed'
  },
  {
    type: 'Work',
    path: '~/work/version24',
    title: "Volunteer — PRC & ARC",
    org: "Version'24 (All India MCA Meet)",
    orgUrl: 'https://www.nitt.edu/',
    location: 'NIT Trichy',
    from: 'Jan 2025',
    to: 'Mar 2025',
    duration: '3m',
    description:
      "Volunteered in the Organising Committee of Version'24 — the All India MCA Meet at NIT Tiruchirappalli. Worked with the Public Relations Committee (PRC) and Alumni Relations Committee (ARC) to coordinate with students from other colleges, drive participation, and collaborate with alumni on fundraising and event-planning initiatives.",
    tech: ['Event Ops', 'Public Relations', 'Alumni Engagement', 'Coordination'],
    status: 'Completed'
  },
  {
    type: 'Education',
    path: '~/education/nit-trichy',
    title: 'Master of Computer Applications (M.C.A.)',
    org: 'NIT Trichy',
    orgUrl: 'https://www.nitt.edu/',
    location: 'Tiruchirappalli, India',
    from: 'Aug 2024',
    to: 'Present',
    duration: '2y',
    description:
      'Pursuing MCA at National Institute of Technology, Tiruchirappalli with a current CGPA of 8.51. Coursework spans Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, and Software Engineering.',
    tech: ['Java', 'C++', 'Python', 'DSA', 'DBMS', 'OS', 'Networks', 'ML'],
    status: 'Present'
  },
  {
    type: 'Education',
    path: '~/education/bca',
    title: 'Bachelor of Computer Applications (B.C.A.)',
    org: 'Govt. Nirbhay Singh Patel Science College',
    orgUrl: '#',
    location: 'Indore, India',
    from: '2021',
    to: '2024',
    duration: '3y',
    description:
      'Completed BCA with a CGPA of 7.65. Built a strong foundation in programming, databases, web development, and software engineering principles.',
    tech: ['C', 'C++', 'Java', 'HTML/CSS', 'JavaScript', 'SQL'],
    status: 'Completed'
  }
];

export const projectCategories = ['AI / ML', 'Web', 'Java', 'Systems'];

export const projects = [
  {
    id: 'ai-surveillance',
    category: 'AI / ML',
    title: 'Smart Surveillance — Anomaly, Fall & Intrusion Detection',
    badge: 'Research',
    description:
      'AI-powered smart home security system combining Pose Estimation + LSTMs for real-time human fall detection with YOLOv8 for activity-aware anomaly and intrusion detection. Includes a low-latency inference pipeline and a live Streamlit dashboard with alerts.',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'LSTM', 'OpenCV', 'Streamlit'],
    date: 'Jun 2025',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    live: '#',
    details: '#'
  },
  {
    id: 'cpm-pert',
    category: 'Web',
    title: 'CPM / PERT Analysis Tool',
    badge: 'Tool',
    description:
      'Full CPM-PERT calculation tool built with Node.js and TypeScript. Dynamically generates Project Network Diagrams in AON and AOA formats, automates critical path, earliest/latest times, and free/total float — giving practitioners real-time scheduling insights.',
    tech: ['Node.js', 'TypeScript', 'D3', 'Express'],
    date: 'Oct 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    live: '#',
    details: '#'
  },
  {
    id: 'sarthi',
    category: 'Web',
    title: 'Sarthi — Student Support Platform',
    badge: 'Team',
    description:
      'Full-stack student-support platform enabling real-time teacher–student chat. Built the UI in HTML/CSS/JavaScript and a live backend messaging layer using Socket.IO. Contributed to interface design and core feature integration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Socket.IO', 'Node.js'],
    date: 'Mar 2025',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    live: '#',
    details: '#'
  },
  {
    id: 'currx',
    category: 'Java',
    title: 'Currx — Currency Converter',
    badge: 'Desktop',
    description:
      'Java-based currency converter with a clean UI for fast, accurate conversions. Implemented core Java concepts including OOP, exception handling, and modular design, with extensibility for live exchange rates.',
    tech: ['Java', 'OOP', 'Swing', 'REST'],
    date: 'Apr 2025',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    live: '#',
    details: '#'
  }
];

export const hubCards = [
  {
    title: 'Achievements',
    description:
      'AIR 4 in NIMCET 2024, Emerging Madhya Pradesh award by CM of MP, 400+ DSA problems solved, 3rd place in inter-school debate.',
    cta: 'View Details',
    color: 'blue',
    href: '#about'
  },
  {
    title: 'Internship',
    description:
      'NIT Trichy summer research on AI-based fall detection, anomaly detection and intrusion detection with Pose Estimation, LSTMs, and YOLOv8.',
    cta: 'Read More',
    color: 'purple',
    href: '#experience'
  },
  {
    title: 'DSA Lab',
    description:
      '400+ problems solved across HackerRank, LeetCode, GeeksforGeeks, and CodeChef — focusing on data structures, algorithms, and competitive programming.',
    cta: 'Explore',
    color: 'green',
    href: '#stats'
  }
];

export const statsData = {
  github: {
    handle: 'tanishsingh',
    url: 'https://github.com/tanishsingh',
    tagline: 'Night Owl Coder',
    repos: '24+',
    followers: 12,
    following: 18,
    publicRepos: 24,
    badges: ['Pull Shark', 'Quickdraw', 'YOLO']
  },
  leetcode: {
    handle: 'tanish-singh',
    url: 'https://leetcode.com/u/tanish-singh',
    tagline: 'Problem Solver',
    solved: 280,
    easy: { done: 120, total: 880 },
    medium: { done: 135, total: 1860 },
    hard: { done: 25, total: 820 },
    streak: 42,
    score: 1580,
    badges: ['50 Days Badge', 'Algorithm I', 'Dynamic Programming', 'Graph Theory I']
  },
  codechef: {
    handle: 'tanish_singh',
    url: 'https://www.codechef.com/users/tanish_singh',
    tagline: 'Competitive Coder',
    rating: 1642,
    stars: '3★',
    problems: 180,
    contests: 22,
    badges: ['Problem Solver', 'Contest Participant', 'Rank Holder']
  },
  academics: {
    handle: 'NIT Trichy — MCA',
    url: '#',
    tagline: 'Academic Excellence',
    cgpa: '8.51',
    rank: 'AIR 4',
    exam: 'NIMCET 2024',
    dsaSolved: '400+',
    badges: ['NIMCET AIR 4', 'Emerging MP Award', 'JNV Alumnus', 'Debate 3rd Place']
  }
};

export const techStack = {
  Languages: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  Frameworks: ['Spring Boot', 'Node.js', 'Express', 'Socket.IO', 'Streamlit'],
  'AI / ML': ['PyTorch', 'YOLOv8', 'LSTM', 'OpenCV', 'Pandas', 'NumPy', 'MediaPipe'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux']
};

export const certificates = [
  {
    title: 'Artificial Intelligence',
    issuer: 'MJG × Techfest IIT Bombay',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  {
    title: 'NIMCET 2024 — AIR 4',
    issuer: 'NITs Joint Admission',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
  },
  {
    title: 'Emerging Madhya Pradesh',
    issuer: 'Zee Madhya Pradesh — Hon. CM of MP',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80'
  }
];

export const initialComments = [
  {
    id: 1,
    name: 'Tanish',
    admin: true,
    date: 'Nov 2025',
    message: "Hey there! Thanks for visiting my portfolio — I'd love to hear your feedback.",
    liked: false
  },
  {
    id: 2,
    name: 'Amit',
    admin: false,
    date: 'Oct 2025',
    message: 'Congrats on AIR 4, man. Your CV project is insane!',
    liked: true
  }
];

