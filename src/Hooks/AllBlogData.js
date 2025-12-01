import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Send Email from React Without a Server (EmailJS + Gmail)",
      commentor: "Arif Billah",
      date: "28 September 2025",
      tag: `react, emailjs, gmail, forms, security`,
      description1:
        "A step-by-step guide to wiring a React contact form to your Gmail using EmailJS—no custom backend. We’ll connect the Gmail service, create a template, and map fields.",
      description2:
        "Covers common pitfalls: public vs private keys, domain allowlist, reCAPTCHA, matching template variables (name, user_email, subject, message), and handling errors.",
      description3:
        "Includes working snippets for send and sendForm, .env setup (REACT_APP_*), and a minimal UX pattern with disabled state + toasts.",
      description4:
        "Result: production-ready contact form with proper Reply-To and optional auto-reply to the sender.",
    },
    {
      id: 2,
      img: img2,
      title: "Full-Stack E-commerce on a Budget: React + Node + MySQL",
      commentor: "Arif Billah",
      date: "10 September 2025",
      tag: `fullstack, react, node, express, mysql, ecommerce`,
      description1:
        "How I structure an e-commerce app using React on the front end and Node/Express/MySQL on the back. Focus on clean APIs, pagination, auth, and cart logic.",
      description2:
        "Discusses DB schema basics (users, products, orders), error handling, and environment-based config.",
      description3:
        "Shows a simple deployment path and what to monitor post-launch (logs, slow queries, edge cases).",
      description4:
        "Takeaways you can adapt quickly to MVPs or Upwork client projects.",
    },
    {
      id: 3,
      img: img3,
      title: "Next.js Deployment Guide: Vercel + Environment Variables",
      commentor: "Arif Billah",
      date: "25 August 2025",
      tag: `nextjs, vercel, env, devops, performance`,
      description1:
        "A practical checklist to deploy Next.js to Vercel with proper environment variables and build settings.",
      description2:
        "Explains previews vs production, image optimization, and fixing common 404s after deploy.",
      description3:
        "Also covers Git flow for quick hotfixes and integrating custom domains.",
      description4:
        "Bonus: lightweight monitoring tips and how to roll back safely.",
    },
    {
      id: 4,
      img: img4,
      title: "Designing a Clean Dashboard UI (UI/UX Case Study)",
      commentor: "Arif Billah",
      date: "02 August 2025",
      tag: `uiux, figma, design-system, components`,
      description1:
        "My process for turning messy requirements into a tidy dashboard: information hierarchy, spacing, and typography.",
      description2:
        "From wireframes to a small design system (colors, text styles, components), then a clickable prototype.",
      description3:
        "Discusses accessibility and empty-state patterns that help real users.",
      description4:
        "Results: a consistent, scalable UI that devs can implement faster.",
    },
    {
      id: 5,
      img: img5,
      title: "REST API Patterns I Use on Upwork Projects",
      commentor: "Arif Billah",
      date: "15 July 2025",
      tag: `node, express, api, best-practices, testing`,
      description1:
        "Battle-tested Express patterns: routing, controllers/services, validation, and error shapes clients understand.",
      description2:
        "Touches on auth (JWT/cookies), rate-limits, CORS, and request logging.",
      description3:
        "Simple tests with supertest and how I document endpoints for clients.",
      description4:
        "Reusable structure that keeps code readable under tight deadlines.",
    },
    {
      id: 6,
      img: img6,
      title: "Portfolio Performance: Optimizing Images & Assets (895×552)",
      commentor: "Arif Billah",
      date: "30 June 2025",
      tag: `frontend, images, performance, build, react`,
      description1:
        "How I standardized portfolio thumbnails to 895×552 and avoided layout shifts with CSS and build-time resizing.",
      description2:
        "Covers object-fit, responsive loading, and trimming bundle size.",
      description3:
        "Shows a quick Sharp/Node script to batch-resize assets pre-commit.",
      description4:
        "Outcome: faster loads, cleaner grid, and better Lighthouse scores.",
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
