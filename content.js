// ════════════════════════════════════════════════════════════════════════
//  👋 THIS IS THE ONLY FILE YOU NEED TO EDIT.
//
//  Everything on your website — your name, your story, your projects, your
//  skills — lives right here. Change the text between the "quotes" and your
//  website updates automatically.
//
//  ✅ Safe to change: anything inside "quotes"
//  ⚠️  Keep the punctuation: the commas, quotes, [ ] and { } need to stay.
//  💡 Not sure? Ask your AI helper: "Help me edit content.js, I'm not technical."
// ════════════════════════════════════════════════════════════════════════

export const content = {
  // ── YOU ──────────────────────────────────────────────────────────────
  profile: {
    name: "G SAI SHIVA PRASAD", // shown in the top-left logo and around the site
    // The big hero headline. Each item is one word/line. The LAST one gets
    // the colorful gradient. Keep it short and punchy (4–7 words total).
    headline: ["Driving", "Campaigns", "That", "Deliver", "Results."],
    // One or two sentences under the headline — who you are, what you do.
    intro:
      "I'm a Performance Media Manager specializing in end-to-end campaign management across CM360 and DV360 — and I bring emerging AI tools into ad ops workflows to work faster and smarter.",
    // The little status pill at the top of the page.
    availabilityBadge: "Available for select collaborations",
  },

  // ── ABOUT: your numbers + your story ─────────────────────────────────
  about: {
    heading: "A story told in campaigns, not bullet points.",
    // Four quick stats. "value" can be a number (it counts up) or text.
    // "suffix" is added after it (like + or % or AM).
    stats: [
      { value: 4, suffix: "", label: "Companies Worked With" },
      { value: 10, suffix: "+", label: "Ad Platforms Mastered" },
      { value: 8, suffix: "+", label: "Years in Digital Media" },
      { value: 100, suffix: "%", label: "End-to-End Ownership" },
    ],
    // Your journey, as a timeline. Add or remove blocks as you like.
    milestones: [
      {
        year: "2017",
        phase: "Foundations",
        title: "Starting out at Accenture",
        body: "I began my career at Accenture Solutions as a Process Associate, building Google Ads campaigns for small and medium businesses — learning the fundamentals of keyword bidding, auctions, and pay-per-click strategy from the ground up.",
      },
      {
        year: "2019",
        phase: "Sharpening the Craft",
        title: "Deepening expertise at Genpact",
        body: "At Genpact, I sharpened my skills in campaign monitoring, creative testing, and optimization — generating performance reports and working closely with clients to keep campaigns on track and compliant.",
      },
      {
        year: "2021",
        phase: "Owning Client Relationships",
        title: "Becoming a Campaign Manager at Media Mint",
        body: "I stepped into a Campaign Manager role, becoming the primary point of contact for client campaigns across major ad servers. I managed pacing, performance, and reporting cadences while mastering tools like CM360, Sizmek, DoubleVerify, and Moat.",
      },
      {
        year: "2023",
        phase: "Scaling Up",
        title: "Leading as a Business Manager at Publicis Global Delivery",
        body: "Now, as a Business Manager, I drive strategic campaign execution for large global clients — leading teams, owning revenue and margin targets, and ensuring the highest standard of campaign quality from planning through optimization.",
      },
      {
        year: "Today",
        phase: "Innovating",
        title: "Bringing AI into ad operations",
        body: "I'm now exploring and applying emerging AI tools to ad ops — speeding up reporting, QA, and trafficking workflows so my team can spend less time on repetitive tasks and more time on strategy.",
      },
    ],
  },

  // ── WHAT I BRING: your value / services ──────────────────────────────
  value: {
    heading: "I help brands turn ad spend into measurable results.",
    subheading:
      "Whether you're a brand looking to scale campaigns or a team that needs an extra pair of hands that owns performance end to end — here's where I add the most value.",
    availabilityLine: "Currently available for", // followed by the bold part below
    availabilityBold: "freelance & full-time",
    // Drop your résumé PDF into the "public" folder and put its name here.
    resumeFile: "/resume.pdf",
    // Your services / strengths. Each card has a short metric (a proof point).
    services: [
      {
        icon: "✦",
        title: "End-to-End Campaign Management",
        body: "I plan, launch, and manage campaigns from start to finish — keeping every stage on track and accountable for results, not just activity.",
        metric: "Full campaign lifecycle, fully owned",
        points: ["Campaign planning & setup", "Launch & trafficking", "Ongoing optimization"],
      },
      {
        icon: "◈",
        title: "CM360 & DV360 Ad Operations",
        body: "I handle campaign trafficking, targeting, and reporting across CM360 and DV360 — making sure every campaign is set up right and performing at its best.",
        metric: "Precision setup across major ad platforms",
        points: ["Campaign trafficking", "Audience targeting", "Reporting & insights"],
      },
      {
        icon: "❖",
        title: "Performance Optimization",
        body: "I monitor live campaigns closely, spot what's working, and adjust quickly — squeezing more performance out of every dollar spent.",
        metric: "Continuous improvement, not set-and-forget",
        points: ["Real-time monitoring", "Data-driven adjustments", "Budget efficiency"],
      },
      {
        icon: "◆",
        title: "AI-Powered Ad Ops Workflows",
        body: "I bring emerging AI tools into everyday ad ops — speeding up reporting, QA, and trafficking so campaigns move faster with fewer manual errors.",
        metric: "Smarter workflows, faster turnaround",
        points: ["AI-assisted reporting & QA", "Workflow automation", "Faster trafficking turnaround"],
      },
    ],
    closingLine:
      "The common thread? I sweat the details others skip — and I take ownership of results I'd be proud to put my name on.",
  },

  // ── PROJECTS: your real work ─────────────────────────────────────────
  // Click a card on the site → a detail popup opens with everything below.
  // "accent" is the card's color gradient — leave as-is or ask your AI to change it.
  projects: [
    {
      title: "Global Client Campaign Leadership",
      tag: "Business Manager — Publicis Global Delivery",
      role: "Business Manager",
      year: "2023 – Present",
      accent: "linear-gradient(135deg,#8b5cf6,#ff8a5c)",
      emoji: "✦",
      blurb: "Leading end-to-end advertising execution for a large global client across multiple sectors.",
      challenge:
        "A large, multi-sector client needed consistent, high-quality campaign execution along with strong account management and clear revenue accountability.",
      process:
        "I built strong client relationships by deeply understanding their business goals, then led a team to plan, traffic, launch, and optimize campaigns to the highest standard — while owning revenue and margin targets for the business unit.",
      solution:
        "A well-run account operation with reliable global campaign delivery, trained and capable team members, and consistently resolved ad-serving issues.",
      did: [
        "Managed strategic development and relationships across a wide variety of clients",
        "Led a team driving global campaigns on time and within budget",
        "Owned revenue and margin targets for the business unit",
        "Oversaw tag generation, implementation, and scheduled report generation",
        "Troubleshot creative and ad-operations issues across all campaigns",
      ],
      results: ["High-quality global delivery", "Trained, capable team", "Consistent revenue ownership"],
      stack: ["CM360", "Prisma", "Placement Manager", "Google Ads"],
    },
    {
      title: "Programmatic Campaign Management",
      tag: "Campaign Manager — Media Mint (Vuchi Media)",
      role: "Campaign Manager",
      year: "2021 – 2023",
      accent: "linear-gradient(135deg,#46e7ff,#8b5cf6)",
      emoji: "◆",
      blurb: "End-to-end management of programmatic advertising campaigns for publisher and agency ad servers, including Disney.",
      challenge:
        "Advertisers across multiple verticals needed campaigns that consistently hit pacing and performance KPIs, with clean trafficking and fast issue resolution.",
      process:
        "I acted as the client's primary point of contact, gathering requirements and assets, then strategized and implemented campaigns while monitoring pacing and performance against KPIs throughout the flight.",
      solution:
        "Reliable, well-paced campaigns with consistent reporting cadences and quickly resolved platform issues — keeping clients confident in delivery.",
      did: [
        "Managed client relationships at a production and operations level",
        "Strategized, implemented, and managed campaigns across publisher/agency ad servers including Disney",
        "Monitored pacing and performance with regular delivery summaries",
        "Used third-party trafficking tools including DCM-CM360, FlashTalking, DoubleVerify, Sizmek, Moat, and Nielsen",
        "Performed audience creation, data management, and campaign documentation",
      ],
      results: ["Consistent pacing & KPIs", "Strong client retention", "Fast issue resolution"],
      stack: ["CM360", "FlashTalking", "DoubleVerify", "Sizmek", "Moat", "Nielsen"],
    },
    {
      title: "Search & Display Campaign Optimization",
      tag: "Process Associate — Genpact & Accenture",
      role: "Process Associate",
      year: "2017 – 2021",
      accent: "linear-gradient(135deg,#ff8a5c,#ff5cad)",
      emoji: "❖",
      blurb: "Built the foundation of a digital media career through hands-on search and display campaign optimization.",
      challenge:
        "Small to medium businesses needed effective Google Ads strategies, with bids and budgets optimized to win visibility on search and display networks.",
      process:
        "I worked closely with clients to understand their goals, then created and optimized pay-per-click campaigns — continuously refining bid strategy based on performance data.",
      solution:
        "Well-optimized campaigns with healthy revenue and margins, backed by clear daily client communication and performance reporting.",
      did: [
        "Created digital advertising campaigns on Google's pay-per-click platform",
        "Determined bid strategies to win top placement on search and display",
        "Monitored creative upload, testing, and optimization across live campaigns",
        "Generated performance reports and daily campaign health updates for clients",
      ],
      results: ["Improved campaign ROI", "Strong client communication", "Solid ad-ops foundation"],
      stack: ["Google Ads", "Search & Display", "Reporting & Analysis"],
    },
  ],

  // ── SKILLS: your toolkit ─────────────────────────────────────────────
  // "level" shows on hover. x/y is where the bubble sits (0–100 = left→right,
  // top→bottom). "r" is its size (0.6 small … 1.0 big). Don't overthink x/y —
  // just spread them out, or ask your AI to "arrange my skill bubbles nicely".
  skills: [
    { name: "CM360", level: "Expert", x: 50, y: 46, r: 1.0 },
    { name: "DV360", level: "Expert", x: 72, y: 30, r: 0.95 },
    { name: "Google Ads", level: "Expert", x: 28, y: 28, r: 0.9 },
    { name: "Programmatic Buying", level: "Advanced", x: 80, y: 60, r: 0.8 },
    { name: "Prisma", level: "Advanced", x: 22, y: 64, r: 0.75 },
    { name: "GAM", level: "Advanced", x: 60, y: 72, r: 0.72 },
    { name: "Ad Trafficking & Tagging", level: "Advanced", x: 40, y: 18, r: 0.78 },
    { name: "FlashTalking", level: "Intermediate", x: 86, y: 44, r: 0.65 },
    { name: "AI Tools in Ad Ops", level: "Advanced", x: 14, y: 44, r: 0.78 },
    { name: "Reporting & Optimization", level: "Advanced", x: 64, y: 50, r: 0.75 },
  ],

  // ── CERTIFICATIONS & ACHIEVEMENTS ────────────────────────────────────
  experiments: [
    { title: "CM360 Certification", tag: "Google Skillshop", emoji: "🏆", desc: "Certified in Campaign Manager 360 for ad trafficking and reporting." },
    { title: "DV360 Certification", tag: "Google Skillshop", emoji: "🏆", desc: "Certified in Display & Video 360 for programmatic campaign management." },
    { title: "Google Ads Display Certification", tag: "Google Skillshop", emoji: "🏆", desc: "Certified in planning and managing Google Display advertising campaigns." },
    { title: "M.Tech, Power Electronics", tag: "Siddhartha College of Engineering, 2015", emoji: "🎓", desc: "Master's degree specializing in Power Electronics & Electrical Drives." },
    { title: "B.Tech, EEE", tag: "Anurag College of Engineering, 2013", emoji: "🎓", desc: "Bachelor's degree in Electrical & Electronics Engineering." },
    { title: "SSB Interview — Indian Air Force", tag: "Meteorology Branch", emoji: "✈️", desc: "Participated in the SSB Interview for the Meteorology Branch, Course 200/17G/PC/M, Jan 2017." },
  ],

  // ── CONTACT: how people reach you ────────────────────────────────────
  contact: {
    heading: "Let's Build a Campaign That Performs.",
    subtext: "Have a campaign, a role, or a project in mind? I'd love to hear about it.",
    email: "vsai525@gmail.com",
    // Put your real links here. Use "#" if you don't have one yet.
    socials: [
      { label: "Email", href: "mailto:vsai525@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/g-sai-shiva-prasad-b32a86137/" },
    ],
  },

  // ── MUSIC: the little lo-fi player in the nav ────────────────────────
  music: {
    enabled: true, // set to false to remove the music button entirely
  },
};

export default content;
