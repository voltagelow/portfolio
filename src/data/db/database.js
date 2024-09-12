import Mock from "../mock";

const database = {
  information: {
    name: "Shubham Joshi",
    aboutContent:
      "I am a full stack developer. Currently working as tech lead for a renowned austrakian banking service .I have experience in building scalable application , deploying and managing",
    age: 31,
    phone: "",
    nationality: "Indian",
    language: "English, Hindi",
    email: "joshi.shubham82@yahoo.com",
    address: "201 , SJ Enclave , CV Raman Nagar, bangalore, 560075",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/shubham-joshi92/",
      dribbble: "",
      github: "https://github.com/voltagelow",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/shubham_joshi_Data_Engineer.pdf",
  },
  services: [
    {
      title: "Full Stack Engineer",
      icon: "code",
      details:
        "",
    },
    {
      title: "Web Development",
      icon: "website",
      details:
        "",
    },
    {
      title: "Big Data",
      icon: "files",
      details:
        "",
    },
    {
      title: "One on One Interview Prep",
      icon: "handshake",
      details:
        "",
    },
    {
      title: "Portfolio/CV building",
      icon: "empty-file",
      details:
        "",
    }
  ],
  reviews: [
    {
      id: 1,
      content:
        "Assisted in building a data pipeline on GCP using Dataflow. Great experience working with him, and I’d gladly do so again in the future",
      author: {
        name: "Sarath",
        designation: "Web Developer, Consultant",
      }
    },
      {
        id: 2,
        content:
          "Guided me in choosing the right career path when I was overwhelmed by the numerous technologies and stacks available.",
        author: {
          name: "Nitin Bhatt",
          designation: "college grad , IIIT BTech CSE",
        }
  
  }
  ],
  skills: [
    {
      title: "Python",
      value: 90,
    },
    {
      title: "Java",
      value: 80,
    },
    {
      title: "PySpark",
      value: 70,
    },
    {
      title: "Java Spring Boot",
      value: 80,
    },
    {
      title: "React",
      value: 60,
    },
    {
      title: "SQL",
      value: 70,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Full Stack Engineer",
        company: "ANZ Company",
        details:
          `• Collaborated with the product and business team to understand requirements and business specifications about application, analytics and risk
           • Built Backend/Hadoop component for internal payment application.
           • CI/CD pipelines using Bamboo.
           • Used Kubernetes for deploying frontend/backend to openshift and helm charts for
             packaging.
           • Used pyspark for writing complex batch processing jobs and oozie coordinators for
             orchestration.
           • SAMl and ADFS integration for SSO and authentication.`
      },
      {
        id: 2,
        year: "2019 - 2021",
        position: "Data Engineer at Capgemini Invent",
        company: "Client: SessionM - a customer engagement and loyalty platform",
        details:
          `• Developed ETL pipelines for massive data transformation using Apache NIFI
           • Developed highly scalable API on AWS lambda leveraging Dynamo DB, Athena
           • Built schedulers to pull incremental data from various clients into our platform
           • Python script to generate reports, analysis`
      },
      {
        id: 3,
        year: "2017 - 2019",
        position: "Data/Machine learning Engineer",
        company: "Hudson Data",
        details:
          `<strong>Data Engineering
          • Developed ETL pipeline for both streaming and batch processing using Apache BEAM, Airflow, Spark-Streaming, PySpark
          • Developed and hosted APIs for credit report parsing on Google's App Engine.
          • Created, scheduled, monitored data migration workflows using Apache Airflow
          <strong>Machine Learning
          • Feature Selection -> Used a variety of techniques such as forward selection, Genetic Algorithm, variable importance from a model on H2O AI
          • Building Models -> Build Decision trees,GBM, GLM, Random Forest, XG Boost, using python API for H2O and H2O Flow
          • Model Tuning -> Using Grid Search in GBM to tune
          • Model Monitoring -> Various techniques like PSI, KS, IV, AUC to check model &
          population stability
          • Visualization -> Used DOMO for creating various reports and model monitoring`,
      },
      {id: 4,
        year: "2016 - 2017",
        position: "DevOps Engineer ",
        company: "Overcart",
        details:
          `
          • Develop scripts to automate deployment, administration, and monitoring of this large scale Linux environment
          • Ansible playbook for code deployment and Tower for managing inventory/resources
          • Setup company-wide used reporting module on Metabase and Nginx/Application log visualization on Kibana
          • Setting up auto scaling groups , alarms and alerts, AWS Lambda and APIGateway for micro services
          • Significant Cost and Resource Optimization
          • Datapipelines for migrating data from various sources to datawarehouse for reporting
          • Developed various Reports/Dashboards on top it for different departments
          `


      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2011 - 2015",
        graduation: "Bachelors in technology, Computer Science",
        university: "IIIT JABALPUR",
        details:
          "CGPA : 7.8",
      }
    ],
    courses:[
      {
        id:1,
        year: "2018-2020",
        coursename: "GCP - Professional Data Engineer",
        details: ""
      },
      {
        id:2,
        year: "2015-2016",
        coursename: "Internship @ S&P Global",
        details: ""
      }
    ]
    ,
  },
  blogs: [
    {
      id: 1,
      title: "Understanding Kubernetes",
      featuredImage: "/images/kubernetes.jpg",
      filesource: "../../blog/kubernetes.md",
      createDay: "20",
      createMonth: "August",
      createYear: "2024",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/nodejs.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "19",
      createMonth: "August",
      createYear: "2024",
    }
   ,
  ],
  contactInfo: {
    phoneNumbers: ["+918447082238"],
    emailAddress: ["joshi.shubham82@yahoo.com"],
    address: "201 , SJ Enclave , CV Raman Nagar, bangalore, 560075",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
