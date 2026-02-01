import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";
import img7 from "../assets/img/blog/blog-post-7.jpg";
import img8 from "../assets/img/blog/blog-post-8.jpg";
import img9 from "../assets/img/blog/blog-post-9.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Single-Cell ATAC+RNA Classification: Achieving 99.96% F1 Score with SMOTE",
      commentor: "Arif Billah",
      date: "28 November 2025",
      tag: `single-cell-analysis, machine-learning, bioinformatics, computational-genomics, data-science`,
      description1:
        "Single-cell multimodal data presents unique challenges in computational biology. In this research project at United International University, I developed a complete machine learning pipeline for classifying single-cell ATAC+RNA data, achieving a breakthrough 99.96% F1 score on neuronal cells by addressing extreme class imbalance (180:1 ratio).",
      description2:
        "The pipeline leverages advanced dimensionality reduction techniques including PCA, Factor Analysis, and scVI embeddings for latent representation learning. I applied SMOTE (Synthetic Minority Over-sampling Technique) in the embedding space rather than raw feature space, which proved crucial for handling severely imbalanced datasets while preserving biological signal integrity.",
      description3:
        "Automated cell type annotation was implemented using CellTypist, integrated with custom preprocessing workflows. The system was rigorously validated across both PBMC and Alzheimer's Disease (AD) datasets, demonstrating robust performance and generalizability. Feature importance analysis revealed key genomic markers distinguishing cell populations.",
      description4:
        "This work contributes to the growing field of computational genomics and demonstrates how thoughtful application of machine learning can solve real biological problems. The complete implementation is available on GitHub with end-to-end scripts for preprocessing, annotation, classification, and visualization, making it reproducible for the research community.",
    },
    {
      id: 2,
      img: img2,
      title: "Water Quality Prediction Using XGBoost and SHAP: Environmental ML Case Study",
      commentor: "Arif Billah",
      date: "15 November 2025",
      tag: `machine-learning, environmental-science, xgboost, shap, water-quality`,
      description1:
        "Environmental monitoring is critical for public health, especially in densely populated regions like Dhaka, Bangladesh. This research project focuses on predicting Water Quality Index (WQI) of Dhaka rivers using machine learning, analyzing physicochemical parameters including pH, Dissolved Oxygen (DO), Biological Oxygen Demand (BOD), Chemical Oxygen Demand (COD), and Total Dissolved Solids (TDS).",
      description2:
        "I built a comprehensive ML pipeline comparing XGBoost and Random Forest algorithms for WQI classification. XGBoost demonstrated superior performance in handling the complex non-linear relationships between water quality parameters. The dataset required extensive preprocessing to handle missing values, outliers, and seasonal variations in water chemistry.",
      description3:
        "SHAP (SHapley Additive exPlanations) analysis was crucial for model interpretability, revealing which physicochemical parameters most significantly impact water quality. This explainability is essential for environmental policymakers to understand the key contributors to river pollution and prioritize intervention strategies accordingly.",
      description4:
        "The study identified critical pollution hotspots along Dhaka's major rivers and quantified the relative importance of industrial discharge, sewage contamination, and seasonal factors. This work demonstrates how machine learning can support evidence-based environmental policy and public health decision-making in developing countries facing rapid urbanization.",
    },
    {
      id: 3,
      img: img3,
      title: "YOLO-Based Indoor Plant Health Classification: Published Research at ICTIS 2025",
      commentor: "Arif Billah",
      date: "02 November 2025",
      tag: `deep-learning, yolo, computer-vision, plant-health, image-processing`,
      description1:
        "As an Undergraduate Research Assistant at UIU, I co-authored a deep learning paper on indoor plant health monitoring, presented at ICTIS 2025 and published by Springer Nature (LNNS), supporting intelligent and automated agricultural monitoring.",
      description2:
        "The research implements YOLO (You Only Look Once) deep learning architecture to classify plants into three health categories: healthy, unhealthy, and dead. We achieved up to 96.8% classification accuracy through careful dataset curation, data augmentation strategies, and hyperparameter tuning. The model processes images in real-time, making it suitable for practical deployment in smart agriculture applications.",
      description3:
        "Image processing techniques were critical to success: preprocessing pipelines handled varying lighting conditions, background noise, and image quality issues common in real-world scenarios. We explored multiple CNN architectures before selecting YOLO for its optimal balance of accuracy and inference speed, essential for real-time monitoring systems.",
      description4:
        "This research contributes to sustainable agriculture and green computing initiatives by enabling early detection of plant stress, reducing water waste, and optimizing resource allocation. The work demonstrates practical applications of AI in environmental sustainability, aligning with global efforts toward precision agriculture and smart farming technologies.",
    },
    {
      id: 4,
      img: img4,
      title: "Full-Stack Web Development: Building Modern Applications with React and Node.js",
      commentor: "Arif Billah",
      date: "18 October 2025",
      tag: `react, nextjs, nodejs, full-stack, web-development`,
      description1:
        "As a freelance full-stack developer since 2023, I've built modern web applications for international clients using React.js, Next.js, Node.js, Express.js, PHP, and MySQL. This article shares practical insights from real-world projects, covering architecture decisions, performance optimization, and deployment strategies that matter in production environments.",
      description2:
        "Frontend development with React.js and Next.js enables building responsive, performant user interfaces with excellent SEO. I leverage server-side rendering (SSR) for content-heavy pages, static site generation (SSG) for marketing pages, and client-side rendering where appropriate. Component architecture follows SOLID principles, ensuring maintainability and reusability across projects.",
      description3:
        "Backend development with Node.js and Express.js focuses on RESTful API design, database optimization, and security best practices. MySQL database schemas are carefully designed for performance and scalability, with proper indexing strategies and query optimization. Authentication, authorization, input validation, and error handling are implemented following industry standards.",
      description4:
        "Deployment experience spans multiple platforms: Vercel for Next.js applications, AWS EC2 for Node.js backends, and cPanel for PHP projects. CI/CD pipelines ensure smooth deployments, and monitoring tools track application performance and errors. Remote client communication, requirement gathering, and project management skills are equally important for successful freelance delivery.",
    },
    {
      id: 5,
      img: img5,
      title: "Feature Engineering and Predictive Analytics: From Raw Data to Actionable Insights",
      commentor: "Arif Billah",
      date: "05 October 2025",
      tag: `feature-engineering, predictive-analytics, machine-learning, data-science`,
      description1:
        "Feature engineering is often the difference between mediocre and exceptional machine learning models. Drawing from my research experience at UIU, this article explores systematic approaches to transforming raw data into meaningful features that capture underlying patterns and improve model performance across various domains.",
      description2:
        "Statistical modeling begins with exploratory data analysis: understanding distributions, identifying correlations, detecting outliers, and recognizing data quality issues. I apply techniques from my water quality prediction and single-cell classification projects, demonstrating how domain knowledge guides feature creation. Techniques include polynomial features, interaction terms, binning, encoding categorical variables, and handling missing data intelligently.",
      description3:
        "Predictive analytics requires careful model selection and validation strategies. In my research, I've worked with supervised learning algorithms including XGBoost, Random Forest, SVM, and neural networks. Cross-validation, proper train-test splits, and appropriate evaluation metrics prevent overfitting and ensure models generalize to unseen data. Hyperparameter tuning using grid search and Bayesian optimization further enhances performance.",
      description4:
        "Real-world case studies from environmental monitoring and biological data analysis demonstrate end-to-end workflows: data preprocessing with Pandas and NumPy, feature scaling and normalization, dimensionality reduction with PCA, model training with Scikit-learn and TensorFlow, and results visualization with Matplotlib and Seaborn. These techniques form the foundation of effective data-driven decision making.",
    },
    {
      id: 6,
      img: img6,
      title: "Building Production-Ready REST APIs: Best Practices from Real Client Projects",
      commentor: "Arif Billah",
      date: "22 September 2025",
      tag: `rest-api, nodejs, express, mysql, backend-development`,
      description1:
        "As a freelance full-stack developer working with international clients since 2023, I've built numerous REST APIs powering web applications across various domains. This article shares battle-tested patterns and best practices from real production systems, covering API design, security, performance optimization, and deployment strategies that ensure reliability and maintainability.",
      description2:
        "API design fundamentals start with proper resource modeling and HTTP verb usage: GET for retrieval, POST for creation, PUT/PATCH for updates, DELETE for removal. URL structure should be intuitive and consistent (e.g., /api/users/:id/orders). Request/response schemas need validation using libraries like Joi or express-validator. Pagination, filtering, and sorting are essential for endpoints returning collections. Versioning strategies (URL path or headers) protect existing clients during API evolution.",
      description3:
        "Security and performance are non-negotiable in production: JWT authentication for stateless sessions, bcrypt for password hashing, SQL injection prevention through parameterized queries, CORS configuration for cross-origin requests, rate limiting to prevent abuse, and input sanitization to block XSS attacks. Database query optimization with proper indexing, connection pooling, and caching strategies (Redis) dramatically improve response times under load.",
      description4:
        "Deployment experience with Node.js/Express backends on AWS EC2 involves configuring Nginx as a reverse proxy, PM2 for process management, environment-based configuration, automated backups, monitoring with logging tools, and implementing graceful shutdown handlers. Error handling middleware, structured logging, health check endpoints, and comprehensive API documentation (Swagger/Postman) complete professional API development. These practices ensure client satisfaction and system reliability.",
    },
    {
      id: 7,
      img: img7,
      title: "Green Computing and Sustainable AI: Energy Efficiency in Machine Learning",
      commentor: "Arif Billah",
      date: "10 September 2025",
      tag: `green-computing, sustainable-ai, energy-efficiency, llm, vlm`,
      description1:
        "As AI models grow larger and more complex, their environmental impact becomes increasingly significant. My research at UIU explores energy efficiency in Large Language Models (LLMs) and Vision-Language Models (VLMs), investigating sustainable AI practices that balance model performance with environmental responsibility—a critical concern as we scale AI deployment globally.",
      description2:
        "Green computing principles applied to machine learning include: model compression techniques like pruning and quantization, knowledge distillation to create smaller student models from larger teachers, efficient architectures that reduce computational requirements without sacrificing accuracy, and carbon-aware training that schedules jobs during low-carbon energy availability.",
      description3:
        "Energy consumption analysis reveals significant variations across model architectures and training strategies. My research quantifies energy costs of training and inference for different AI systems, identifying optimization opportunities. Techniques like mixed-precision training, gradient checkpointing, and efficient attention mechanisms substantially reduce resource requirements while maintaining model quality.",
      description4:
        "This work aligns with global sustainability goals and European Green Deal initiatives. As AI becomes ubiquitous, developing energy-efficient algorithms isn't just environmentally responsible—it's economically necessary for deployment at scale. Research in sustainable AI combines computer science, environmental science, and policy considerations, representing an exciting frontier for graduate research.",
    },
    {
      id: 8,
      img: img8,
      title: "Object-Oriented Design Patterns: Building Easy Ride Campus Application with JavaFX",
      commentor: "Arif Billah",
      date: "28 August 2025",
      tag: `java, javafx, oop, design-patterns, software-engineering`,
      description1:
        "Easy Ride is a JavaFX desktop application I developed simulating a campus ride-hailing system for UIU. The project demonstrates advanced object-oriented programming (OOP) concepts, SOLID principles, and classic design patterns—essential foundations for scalable software engineering that translate across programming languages and frameworks.",
      description2:
        "The application implements core features including ride booking, vehicle selection, fare calculation, and trip history management. Architecture follows Model-View-Controller (MVC) pattern for separation of concerns, making the codebase maintainable and testable. JavaFX provides the GUI framework, handling event-driven interactions and real-time updates as users interact with the system.",
      description3:
        "SOLID principles guide the design: Single Responsibility ensures each class has one clear purpose, Open/Closed enables extension without modification, Liskov Substitution allows polymorphic behavior, Interface Segregation prevents fat interfaces, and Dependency Inversion decouples high-level logic from low-level details. Design patterns like Factory, Singleton, Observer, and Strategy appear throughout the codebase.",
      description4:
        "This project represents practical application of software engineering theory learned in academic coursework. The complete source code is available on GitHub, demonstrating code organization, documentation practices, and version control workflows. These foundational skills in OOP and design patterns remain relevant whether building desktop applications, web services, or distributed systems.",
    },
    {
      id: 9,
      img: img9,
      title: "Data Mining and Statistical Analysis: Techniques for Knowledge Discovery",
      commentor: "Arif Billah",
      date: "15 August 2025",
      tag: `data-mining, statistics, machine-learning, analytics, pattern-recognition`,
      description1:
        "Data mining extracts meaningful patterns from large datasets, combining statistics, machine learning, and domain expertise. My academic background majoring in Data Science emphasizes these techniques across environmental monitoring, biological data analysis, and computational research—demonstrating how statistical rigor underpins effective machine learning applications.",
      description2:
        "Statistical modeling foundations include hypothesis testing, confidence intervals, regression analysis, ANOVA, and correlation studies. Understanding probability distributions, sampling theory, and statistical significance ensures research findings are valid and generalizable. These fundamentals inform every stage of the machine learning pipeline, from initial exploratory analysis to final model validation.",
      description3:
        "Data mining techniques span multiple paradigms: classification and regression for supervised learning, clustering and dimensionality reduction for unsupervised learning, association rule mining for pattern discovery, and anomaly detection for identifying outliers. Tools like Scikit-learn, XGBoost, and TensorFlow implement these algorithms efficiently, while Pandas and NumPy handle data manipulation at scale.",
      description4:
        "Practical applications from my research portfolio include environmental data analytics predicting water quality, biological data mining for cell type classification, and image processing for automated health monitoring. Each project required careful statistical analysis, appropriate algorithm selection, validation against baselines, and interpretable results that inform real-world decisions—skills essential for research-oriented master's programs in data science.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
