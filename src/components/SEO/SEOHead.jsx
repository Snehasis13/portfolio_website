import { useEffect } from 'react';

const SEOHead = ({ 
  title = "Snehasis - Full Stack Developer",
  description = "Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, PostgreSQL, and modern web technologies.",
  keywords = "portfolio, full stack developer, UI/UX developer, react developer, Node.js, javascript, web development",
  image = "/logo.png",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:type', type, true);
  }, [title, description, keywords, image, type]);

  return null;
};

export default SEOHead;
