export const navLinks = [
  { label: 'Problems', href: '#practice' },
  { label: 'Courses', href: '#courses' },
  { label: 'Roadmap', href: '#features' },
];

export const heroRoadmapNodes = [
  'Arrays & Hashing',
  'Two Pointers',
  'Sliding Window',
  'Trees',
  'Heap / Priority Queue',
  'Backtracking',
];

export const socialProofStats = [
  { label: 'NeetCode 150 progress tracked', value: '51/150' },
  { label: 'Trusted by engineers at top companies', value: '7+' },
  { label: 'Students guided with structured prep', value: '1M+' },
];

export const partnerLogos = ['Google', 'Meta', 'Amazon', 'Microsoft', 'Netflix', 'OpenAI', 'Anthropic'];

export const testimonials = [
  {
    name: 'Amog Chandrashekar',
    company: 'Google',
    quote:
      'I signed my offer with Google as a software engineer (L4) and you have a fair share of contribution in it.',
  },
  {
    name: 'Rodrigo Ramirez',
    company: 'Microsoft',
    quote:
      'I recently got an offer for Microsoft, and I will be starting next year! Thank you so much for your videos!',
  },
  {
    name: 'Aiswarya Sukumar',
    company: 'Amazon',
    quote:
      'Got an offer from Amazon today. Thanks a lot for your videos. It really helped me during the preparation.',
  },
  {
    name: 'Janvi Kalra',
    company: 'OpenAI',
    quote: 'The structure made prep feel calm instead of chaotic. I always knew what to study next.',
  },
  {
    name: 'Thariq Shihipar',
    company: 'Anthropic',
    quote: 'It felt like practicing with a system instead of collecting random problems from the internet.',
  },
];

export const featureHighlights = [
  {
    eyebrow: 'Roadmap',
    title: 'Organized study plans that remove guesswork from interview prep.',
    description:
      'Work through Blind 75, NeetCode 150, and NeetCode 250 with a cleaner sense of progression and less random context-switching.',
    icon: 'roadmap',
  },
  {
    eyebrow: 'Video Solutions',
    title: 'Detailed explanations for every problem when you need signal, not noise.',
    description:
      'The product emphasizes pattern recognition and explanation depth so learners understand why a solution works, not just what to memorize.',
    icon: 'play',
  },
  {
    eyebrow: 'Structured Courses',
    title: 'Courses that connect DSA fundamentals to the broader interview stack.',
    description:
      'Go beyond leetcode repetition with system design, Python, SQL, full stack, and object-oriented design paths that build actual fluency.',
    icon: 'layers',
  },
];

export const courseFamilies = [
  {
    label: 'Data Structures & Algorithms',
    summary: 'Build strong interview fundamentals with the core data structures and algorithms that matter most.',
    color: '#7c8cff',
    papers: ['Algorithms & Data Structures for Beginners', 'Advanced Algorithms'],
    courses: [
      {
        title: 'Algorithms & Data Structures for Beginners',
        description:
          'Interview-focused DSA foundation course for beginners and refreshers. Learn core topics in a practical progression through videos, articles, exercises, and visuals, then move to Advanced Algorithms for deeper concepts.',
        coverTitle: 'Algorithms &\nData Structures for\nBeginners',
        tags: ['25 hours', 'medium'],
        image: '/course-covers/dsa-beginners.png',
      },
      {
        title: 'Advanced Algorithms',
        description:
          'Deep-dive course for higher-level interview patterns and optimization techniques. Focus on practical problem solving, complexity tradeoffs, and efficient implementations across advanced topics.',
        coverTitle: 'Advanced\nAlgorithms',
        tags: ['25 hours', 'hard'],
        image: '/course-covers/advanced-algorithms.png',
      },
    ],
  },
  {
    label: 'System Design',
    summary: 'Learn the core system design concepts behind scalable services and robust backend architecture.',
    color: '#45d0ff',
    papers: ['System Design for Beginners', 'System Design Interview'],
    courses: [
      {
        title: 'System Design for Beginners',
        description:
          'Build strong fundamentals by understanding core computer architecture concepts like disk, RAM, CPU, and cache, then connect them to real-world application and distributed system design decisions.',
        coverTitle: 'System Design for\nBeginners',
        tags: ['10 hours', 'medium'],
        image: '/course-covers/system-design-beginners.png',
      },
      {
        title: 'System Design Interview',
        description:
          'Interview-focused path with structured lessons and guided design questions like rate limiter, TinyURL, Twitter, and distributed queue so you can practice tradeoffs clearly and confidently.',
        coverTitle: 'System Design\nInterview',
        tags: ['10 hours', 'medium'],
        image: '/course-covers/system-design-interview.png',
      },
    ],
  },
  {
    label: 'Python',
    summary: 'Learn practical Python for clean interview solutions and stronger day-to-day programming fluency.',
    color: '#ffc76b',
    papers: ['Python for Beginners', 'Python for Coding Interviews', 'Python OOP'],
    courses: [
      {
        title: 'Python for Beginners',
        description:
          'Learn Python fundamentals from syntax to core data types so you can write clean, reliable code before diving into interview-style problem solving.',
        coverTitle: 'Python\nfor\nBeginners',
        tags: ['12 hours', 'easy'],
        image: '/course-covers/python-beginners.png',
      },
      {
        title: 'Python for Coding Interviews',
        description:
          'Master interview-focused Python patterns, built-ins, and coding style commonly used in NeetCode and LeetCode solutions.',
        coverTitle: 'Python\nfor\nCoding Interviews',
        tags: ['8 hours', 'easy'],
        image: '/course-covers/python-coding-interviews.png',
      },
      {
        title: 'Python OOP',
        description:
          'Build practical object-oriented skills in Python, including class design, encapsulation, and reusable abstractions used in real projects.',
        coverTitle: 'Object-Oriented\nProgramming',
        tags: ['8 hours', 'easy'],
        image: '/course-covers/python-oop.png',
      },
    ],
  },
  {
    label: 'Full Stack Development',
    summary: 'Cover the core application skills needed to build and ship modern full stack projects.',
    color: '#6dd8a3',
    papers: ['SQL for Beginners', 'Full Stack Development'],
    courses: [
      {
        title: 'SQL for Beginners',
        description: 'Learn PostgreSQL with interactive coding lessons.',
        coverTitle: 'SQL\nfor\nBeginners',
        tags: ['10 hours', 'easy'],
        image: '/course-covers/sql-beginners.png',
      },
      {
        title: 'Full Stack Development',
        description: 'Learn how to build an intermediate full stack app.',
        coverTitle: 'Full Stack\nDevelopment',
        tags: ['20 hours', 'medium'],
        image: '/course-covers/full-stack-development.png',
      },
    ],
  },
  {
    label: 'Object Oriented Design',
    summary: 'Practice design principles and reusable patterns that show up in interviews and real systems.',
    color: '#d499ff',
    papers: ['Object Oriented Design Interviews', 'Object Oriented Design Patterns'],
    courses: [
      {
        title: 'Object Oriented Design Interviews',
        description: 'Learn Object Oriented Design interview questions.',
        coverTitle: 'Object-Oriented\nDesign\nInterview',
        tags: ['8 hours', 'easy'],
      },
      {
        title: 'Object Oriented Design Patterns',
        description: 'Learn & implement common coding design patterns.',
        coverTitle: 'Design\nPatterns',
        tags: ['8 hours', 'easy'],
      },
    ],
  },
];

export const courseRoadmapNodes = [
  { id: 'arrays', label: 'Arrays & Hashing', progress: 76, x: 72, y: 8 },
  { id: 'two-pointers', label: 'Two Pointers', progress: 70, x: 43, y: 24 },
  { id: 'stack', label: 'Stack', progress: 62, x: 73, y: 24 },
  { id: 'linked-list', label: 'Linked List', progress: 74, x: 20, y: 42 },
  { id: 'sliding-window', label: 'Sliding Window', progress: 34, x: 43, y: 42 },
  { id: 'binary-search', label: 'Binary Search', progress: 68, x: 70, y: 42 },
  { id: 'trees', label: 'Trees', progress: 58, x: 58, y: 60 },
  { id: 'tries', label: 'Tries', progress: 4, x: 28, y: 79 },
  { id: 'heap', label: 'Heap / Priority Queue', progress: 41, x: 58, y: 79 },
  { id: 'backtracking', label: 'Backtracking', progress: 92, x: 87, y: 79 },
] as const;

export const courseRoadmapEdges = [
  ['arrays', 'two-pointers'],
  ['arrays', 'stack'],
  ['two-pointers', 'linked-list'],
  ['two-pointers', 'sliding-window'],
  ['two-pointers', 'binary-search'],
  ['linked-list', 'trees'],
  ['binary-search', 'trees'],
  ['trees', 'tries'],
  ['trees', 'heap'],
  ['trees', 'backtracking'],
] as const;

export const courseShowcaseCards = [
  {
    eyebrow: 'Data Structures & Algorithms',
    title: 'Interview foundations, then advanced patterns.',
    description:
      'Start with the core data structures and algorithms, then move into the harder patterns that usually separate good prep from serious prep.',
    courses: ['Algorithms & Data Structures for Beginners', 'Advanced Algorithms'],
    accent: 'from-[#7c8cff] via-[#5568ff] to-[#171b36]',
  },
  {
    eyebrow: 'System Design',
    title: 'Build backend intuition before the interview loop.',
    description:
      'Brush up on the principles behind scalable systems so common interview prompts feel structured instead of overwhelming.',
    courses: ['System Design for Beginners', 'System Design Interview'],
    accent: 'from-[#45d0ff] via-[#3979ff] to-[#10203f]',
  },
  {
    eyebrow: 'Python',
    title: 'Learn the language that powers clean interview solutions.',
    description:
      'Cover Python fundamentals, interview-centric fluency, and object-oriented programming without bouncing between disconnected resources.',
    courses: ['Python for Beginners', 'Python for Coding Interviews', 'Python OOP'],
    accent: 'from-[#ffd36b] via-[#ae7f2c] to-[#292110]',
  },
  {
    eyebrow: 'Full Stack Development',
    title: 'Pair interview prep with practical product-building skills.',
    description:
      'Use SQL and full stack foundations to connect algorithmic prep with the type of work early-career engineers actually ship.',
    courses: ['SQL for Beginners', 'Full Stack Development'],
    accent: 'from-[#5df7c2] via-[#1f9a8d] to-[#102423]',
  },
  {
    eyebrow: 'Object Oriented Design',
    title: 'Think in systems, abstractions, and reusable patterns.',
    description:
      'Go deeper into object-oriented design principles and the common patterns that show up in both interviews and production code.',
    courses: ['Object Oriented Design Interviews', 'Object Oriented Design Patterns'],
    accent: 'from-[#f48eff] via-[#9c6bff] to-[#24143a]',
  },
];

export const practiceChecklist = [
  'Organized study plans: Blind 75, NeetCode 150, NeetCode 250',
  'Detailed video explanations for every problem',
  'Track your progress and stay motivated',
  'Join our public Discord community',
];

export const founderStory = {
  name: 'Navi',
  role: 'Creator of NeetCode',
  heading: "Hi, I'm Navi",
  paragraphs: [
    'I created NeetCode in 2020 when I was unemployed and could not find a job.',
    'While I was struggling myself, it was still rewarding for me to make videos.',
    'I received so many messages from others who got jobs after studying with my videos. It felt so gratifying and kept me motivated.',
    'About a year later I managed to get a job at Google.',
  ],
  previous: ['Google', 'Amazon', 'Capital One'],
};

export const footerGroups = [
  { title: 'Links', items: ['Blind 75', 'NeetCode 150', 'NeetCode 250', 'How to use NeetCode Effectively'] },
  { title: 'Social', items: ['YouTube', 'LinkedIn', 'Twitter'] },
  { title: 'Contact', items: ['support@neetcode.io'] },
  { title: 'Legal', items: ['Privacy Policy', 'Terms of Service'] },
];

export const dashboardSidebar = [
  { label: 'Home', icon: 'home' },
  { label: 'Problems', icon: 'code' },
  { label: 'Roadmap', icon: 'roadmap' },
  { label: 'Courses', icon: 'layers' },
  { label: 'Bookmarks', icon: 'bookmark' },
  { label: 'Settings', icon: 'settings' },
] as const;

export const topicProgress = [
  { topic: 'Arrays', progress: 84, solved: 42, color: '#7c8cff' },
  { topic: 'Trees', progress: 68, solved: 27, color: '#45d0ff' },
  { topic: 'Dynamic Programming', progress: 51, solved: 19, color: '#ffc76b' },
  { topic: 'Graphs', progress: 39, solved: 16, color: '#6dd8a3' },
];

export const recentSolved = [
  { title: 'Top K Frequent Elements', difficulty: 'Medium', runtime: '14 mins ago' },
  { title: 'Binary Tree Right Side View', difficulty: 'Medium', runtime: 'Yesterday' },
  { title: 'Valid Anagram', difficulty: 'Easy', runtime: 'Yesterday' },
  { title: 'Clone Graph', difficulty: 'Medium', runtime: '2 days ago' },
];

export const dashboardStats = {
  streak: 19,
  xp: 1840,
  xpGoal: 2400,
  avatar: 'NK',
  dailyProblem: { title: 'Product of Array Except Self', pattern: 'Arrays & Hashing', difficulty: 'Medium', estimate: '18 minutes' },
  recommended: {
    title: 'Construct Binary Tree From Preorder and Inorder Traversal',
    reason: 'Recommended next because your Trees progress is improving, but reconstruction-style problems are still under-represented in your solve history.',
  },
};
