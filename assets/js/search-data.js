// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-case-studies",
          title: "case studies",
          description: "Deep dives into systems I designed, shipped, and measured in production.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/case-studies/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my CV or view it below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-i-increased-retrieval-from-top-5-to-top-20-my-answers-got-worse",
        
          title: 'I Increased Retrieval From Top-5 to Top-20. My Answers Got Worse <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The standard advice for improving RAG retrieval quality is: retrieve more candidates, then filter down. Bigger pool, better reranker, better answers. I followed that advice in my RAG System. On PDFs...",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/ayanarshad02/i-increased-retrieval-from-top-5-to-top-20-my-answers-got-worse-3mke", "_blank");
          
        },
      },{id: "post-i-tested-chunking-on-docs-pdfs-and-code-the-winner-changed-every-time",
        
          title: 'I Tested Chunking on Docs, PDFs, and Code. The Winner Changed Every Time.... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I assumed chunking was a solved problem. Pick a text splitter, set 512 tokens, add some overlap, move on. After running structured experiments across three different data types, that assumption coll...",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/ayanarshad02/i-tested-chunking-on-docs-pdfs-and-code-the-winner-changed-every-time-1lof", "_blank");
          
        },
      },{id: "post-5-critical-failures-we-hit-shipping-a-multi-tenant-rag-chatbot-to-500-enterprises",
        
          title: '5 Critical Failures We Hit Shipping a Multi-Tenant RAG Chatbot to 500+ Enterprises... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Our first enterprise tenant onboarded on a Monday. By Wednesday, 30% of their documents had been silently indexed as empty strings. No error. No exception. The chatbot just said &quot;I don&#39;t have enough...",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/ayanarshad02/we-shipped-a-rag-chatbot-to-500-enterprise-tenants-heres-what-actually-broke-first-1jia", "_blank");
          
        },
      },{id: "post-why-our-rag-system-was-silently-returning-wrong-answers-and-how-we-fixed-it",
        
          title: 'Why Our RAG System Was Silently Returning Wrong Answers — And How We... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "For 3 days, our RAG system was confident. Every query returned an answer. Response times were stable. No errors in the logs. By every operational metric, the system was working. Our RAGAS faithfulne...",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/ayanarshad02/why-our-rag-system-was-silently-returning-wrong-answers-and-how-we-fixed-it-386g", "_blank");
          
        },
      },{id: "projects-multi-tenant-rag-chatbot",
          title: 'Multi-Tenant RAG Chatbot',
          description: "Designed and shipped a production RAG chatbot serving 500+ enterprise WMS clients. Faithfulness from 0.67 to 0.91. Unsupported claim rate below 4%.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_rag_chatbot/";
            },},{id: "projects-ai-ticket-resolution-system",
          title: 'AI Ticket Resolution System',
          description: "Built an AI system for Softeon&#39;s WMS support division that surfaces similar past tickets and relevant documentation at the moment a new ticket is raised. Took requirements directly from the support team, shipped end to end.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_ticket_resolution/";
            },},{id: "projects-kapa-ai-yc-s23-inspired-rag-platform",
          title: 'kapa.ai (YC S23) - Inspired RAG Platform',
          description: "A production-grade, multi-tenant documentation RAG system built from first principles. 12-combination retrieval experiment. RAGAS-gated CI/CD. MCP server for Claude/Cursor integration. All four RAGAS metrics passing gate thresholds.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_kapa_rag_platform/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Md%20Ayan%20Arshad%20-%20AI%20Engineer.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%79%61%6E%61%72%73%68%61%64%32%30%30%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AyanArshad02", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/md-ayan-arshad-740288248", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://dev.to/ayanarshad02", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
