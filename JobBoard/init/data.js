const jobPosts = [
  {
    company: "AirStay Tech",
    title: "Full Stack Developer",
    location: "Remote",
    salary: "$90,000 - $120,000",
    description: "Develop and maintain web applications for an Airbnb-like platform, utilizing both front-end and back-end technologies.",
    requirements: [
      "Proficiency in JavaScript, React, Node.js",
      "Experience with AWS or cloud services",
      "3+ years of experience in full stack development",
      "Good understanding of APIs and databases (SQL/NoSQL)"
    ],
    deadline: "15/10/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "UI/UX Designer",
    location: "Remote",
    salary: "$70,000 - $95,000",
    description: "Design user interfaces and create seamless user experiences for web and mobile applications on our Airbnb-like platform.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, Adobe XD",
      "Strong portfolio with experience designing responsive websites",
      "Knowledge of HTML/CSS is a plus"
    ],
    deadline: "20/10/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Mobile App Developer (iOS/Android)",
    location: "Remote",
    salary: "$80,000 - $110,000",
    description: "Develop and optimize mobile applications for iOS and Android that interact with the Airbnb-like platform.",
    requirements: [
      "Proficiency in Swift, Kotlin, and/or Flutter",
      "3+ years of experience in mobile development",
      "Experience integrating with RESTful APIs",
      "Experience with mobile app deployment on App Store and Google Play"
    ],
    deadline: "25/10/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "DevOps Engineer",
    location: "Remote",
    salary: "$100,000 - $130,000",
    description: "Automate and streamline deployment pipelines, manage cloud infrastructure, and ensure continuous integration and delivery for the Airbnb-like platform.",
    requirements: [
      "Proficiency in AWS, Docker, Kubernetes",
      "3+ years of DevOps experience",
      "Experience with CI/CD pipelines and infrastructure-as-code tools",
      "Strong problem-solving skills"
    ],
    deadline: "01/11/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Backend Developer",
    location: "Remote",
    salary: "$85,000 - $115,000",
    description: "Build and maintain server-side logic and databases for the Airbnb-like platform.",
    requirements: [
      "Proficiency in Node.js, Python, or Ruby",
      "Experience with RESTful API development",
      "3+ years of backend development experience",
      "Familiarity with databases (SQL/NoSQL)"
    ],
    deadline: "05/11/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Product Manager",
    location: "Remote",
    salary: "$95,000 - $130,000",
    description: "Lead product development and manage the roadmap for the Airbnb-like platform, ensuring it meets market and user needs.",
    requirements: [
      "3+ years of product management experience",
      "Strong understanding of agile methodologies",
      "Excellent communication and leadership skills",
      "Experience in the travel or accommodation industry is a plus"
    ],
    deadline: "10/11/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Data Analyst",
    location: "Remote",
    salary: "$70,000 - $100,000",
    description: "Analyze platform data to provide insights that drive business decisions and improve user experience.",
    requirements: [
      "Proficiency in SQL, Python, and data visualization tools (e.g., Tableau)",
      "Strong analytical and problem-solving skills",
      "2+ years of experience in data analysis",
      "Ability to translate data insights into actionable recommendations"
    ],
    deadline: "15/11/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "QA Engineer",
    location: "Remote",
    salary: "$75,000 - $105,000",
    description: "Test and ensure the quality of web and mobile applications, developing automated and manual test cases.",
    requirements: [
      "3+ years of QA experience",
      "Experience with automated testing tools like Selenium",
      "Strong understanding of software testing methodologies",
      "Excellent attention to detail"
    ],
    deadline: "20/11/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Cybersecurity Engineer",
    location: "Remote",
    salary: "$90,000 - $130,000",
    description: "Implement security best practices and protect user data on the Airbnb-like platform from cyber threats.",
    requirements: [
      "3+ years of cybersecurity experience",
      "Proficiency in network security, firewalls, and encryption techniques",
      "Experience with security monitoring tools",
      "Knowledge of GDPR and data protection regulations"
    ],
    deadline: "25/11/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Cloud Solutions Architect",
    location: "Remote",
    salary: "$120,000 - $150,000",
    description: "Design cloud-based solutions to support scalability, performance, and security for the Airbnb-like platform.",
    requirements: [
      "5+ years of experience with AWS, Azure, or GCP",
      "Proficiency in cloud architecture design and best practices",
      "Strong understanding of infrastructure as code (Terraform, CloudFormation)",
      "Experience with serverless technologies"
    ],
    deadline: "01/12/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Scrum Master",
    location: "Remote",
    salary: "$80,000 - $110,000",
    description: "Facilitate agile development processes, ensuring the team follows best practices and delivers high-quality software.",
    requirements: [
      "Certified Scrum Master (CSM) or similar",
      "3+ years of experience in a Scrum Master role",
      "Strong understanding of agile principles and methodologies",
      "Excellent leadership and communication skills"
    ],
    deadline: "05/12/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Machine Learning Engineer",
    location: "Remote",
    salary: "$110,000 - $150,000",
    description: "Develop and deploy machine learning models to enhance features like personalized recommendations on the Airbnb-like platform.",
    requirements: [
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with large-scale data processing",
      "3+ years of experience in machine learning or data science",
      "Experience with recommendation systems is a plus"
    ],
    deadline: "10/12/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Tech Support Engineer",
    location: "Remote",
    salary: "$50,000 - $70,000",
    description: "Provide technical support for users and assist in troubleshooting issues with the platform.",
    requirements: [
      "Excellent communication and problem-solving skills",
      "2+ years of experience in tech support or customer service",
      "Familiarity with web and mobile technologies",
      "Ability to handle multiple tasks simultaneously"
    ],
    deadline: "15/12/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Business Analyst",
    location: "Remote",
    salary: "$80,000 - $100,000",
    description: "Identify business needs, analyze processes, and work with the development team to deliver solutions that align with company goals.",
    requirements: [
      "3+ years of experience as a business analyst",
      "Strong analytical and documentation skills",
      "Experience in the IT or tech industry",
      "Excellent stakeholder management skills"
    ],
    deadline: "20/12/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "SEO Specialist",
    location: "Remote",
    salary: "$65,000 - $85,000",
    description: "Optimize website content and structure to improve search engine rankings and increase organic traffic.",
    requirements: [
      "Proficiency in SEO tools like Google Analytics, SEMrush",
      "2+ years of experience in SEO",
      "Strong knowledge of on-page and off-page SEO",
      "Experience in content optimization for web platforms"
    ],
    deadline: "25/12/2024",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Digital Marketing Manager",
    location: "Remote",
    salary: "$90,000 - $120,000",
    description: "Develop and implement digital marketing strategies to promote the Airbnb-like platform and drive user acquisition.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Proficiency in Google Ads, Facebook Ads, and social media marketing",
      "Strong analytical skills and experience with performance marketing",
      "Excellent communication and creative skills"
    ],
    deadline: "05/01/2025",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  {
    company: "AirStay Tech",
    title: "Customer Success Manager",
    location: "Remote",
    salary: "$70,000 - $95,000",
    description: "Manage relationships with key users, ensuring their success and satisfaction with the Airbnb-like platform.",
    requirements: [
      "3+ years of experience in customer success or account management",
      "Excellent communication and relationship-building skills",
      "Experience in the tech or travel industry is a plus",
      "Problem-solving skills and empathy"
    ],
    deadline: "10/01/2025",
    companyLogo: "https://logodix.com/logo/1048287.png",
  },
  
];

module.exports = {data: jobPosts};