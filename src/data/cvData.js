export const cvData = {
  personal: {
    name: "Alexander Holzbauer",
    title: "TBA",
    email: "alexander.holzbauer1@gmail.com",
    phone: "+43 68110542959",
    location: "Wien, AT",
    website: "TBA",
  },
  about: "TBA",
  experience: [
    {
      id: 1,
      company: "Erich Schenkel GmbH",
      position: "Brand Manager / Projekt Manager",
      period: "06.2023 - Present",
      description: `• Internationale Markenentwicklung am österreichischen Markt (z.B.: Rummo, Kikkoman)
      • Laufende Weiterentwicklung der Kundenverkaufskanäle (Promotionen, PoS Platzierung)
      • Kommunikation, Reporting und Budgetverhandlungen mit Lieferanten
      • Leitung von diversen (internen)-Projekten (Distributorenmeetings, IT-Infrastruktur, CRM, Zeiterfassung, Office 365`,
      technologies: ["Bsp. Skill"]
    },
    {
      id: 2,
      company: "Mömax GmbH",
      position: "Abteilungsleiter Mömax Vösendorf",
      period: "04.2021 - 05.2023",
      description: `• Teamleitung, Beratung und Verkauf (8 Mitarbeiter)
      • Umsatzsteuerung
      • Präsentation und Pflege der Ware`,
      technologies: ["Bsp. Skill"]
    },
    {
      id: 3,
      company: "OVB Allfinanzvermittlungs GmbH",
      position: "Junior-Geschäftsstellenleiter",
      period: "10.2018 - 12.2020",
      description: `• Vertriebsaufbau und Teamleitung (5-7 Mitarbeiter)
        • Unterstützung bei Neukundenakquise
        • Kundenberatung und - betreuung`,
      technologies: ["Bsp. Skill"]
    },
    {
      id: 4,
      company: "Österreichisches Bundesheer",
      position: "Schreiber des dienstführenden Unteroffiziers, Gefreiter, Grundwehrdienst",
      period: "02.2018 - 08.2018",
      description: `• Administrative Tätigkeiten & Verantwortung über Kameraden der restlichen "Versogungsgruppe"`,
      technologies: ["Bsp. Skill"]
    }
  ],
  skills: {
    "Frontend": [
      { name: "React", percentage: 90 },
      { name: "Vue.js", percentage: 85 },
      { name: "TypeScript", percentage: 80 },
      { name: "Next.js", percentage: 75 },
      { name: "Tailwind CSS", percentage: 95 }
    ],
    "Backend": [
      { name: "Node.js", percentage: 88 },
      { name: "Python", percentage: 82 },
      { name: "PHP", percentage: 78 },
      { name: "Express.js", percentage: 85 },
      { name: "FastAPI", percentage: 70 }
    ],
    "Database": [
      { name: "MongoDB", percentage: 85 },
      { name: "PostgreSQL", percentage: 80 },
      { name: "MySQL", percentage: 83 },
      { name: "Redis", percentage: 75 }
    ],
    "DevOps": [
      { name: "AWS", percentage: 78 },
      { name: "Docker", percentage: 82 },
      { name: "Kubernetes", percentage: 65 },
      { name: "CI/CD", percentage: 80 },
      { name: "Git", percentage: 95 }
    ],
    "Tools": [
      { name: "Git", percentage: 95 },
      { name: "Webpack", percentage: 72 },
      { name: "Jest", percentage: 78 },
      { name: "Figma", percentage: 68 },
      { name: "Jira", percentage: 85 }
    ]
  },
  // Helper function to get skills as simple array for other components
  getSkillsArray: function() {
    return Object.values(this.skills).flat().map(skill => skill.name);
  },
  // Helper function to get skills by category as simple array
  getSkillsByCategory: function() {
    const simpleSkills = {};
    Object.keys(this.skills).forEach(category => {
      simpleSkills[category] = this.skills[category].map(skill => skill.name);
    });
    return simpleSkills;
  },
  voluntaryActivities: [
    {
      id: 1,
      organization: "Open Source Community",
      role: "Core Contributor",
      period: "2019 - Present",
      description: "Regular contributor to various open source projects, focusing on React ecosystem and developer tools.",
      technologies: ["React", "TypeScript", "Open Source", "Community"],
      link: "https://github.com/alexjohnson"
    },
    {
      id: 2,
      organization: "Local Tech Mentorship Program",
      role: "Volunteer Mentor",
      period: "2020 - 2022",
      description: "Mentored aspiring developers from underrepresented backgrounds, providing coding guidance and career advice.",
      technologies: ["Mentoring", "Teaching", "Career Guidance", "Workshops"],
      link: "https://example.com/mentorship"
    },
    {
      id: 3,
      organization: "Tech Conference Organization",
      role: "Volunteer Coordinator",
      period: "2021",
      description: "Organized and coordinated volunteer activities for annual tech conference with 1000+ attendees.",
      technologies: ["Event Planning", "Team Coordination", "Public Speaking", "Logistics"],
      link: "https://example.com/conference"
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2015"
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "UC Berkeley",
      year: "2013"
    }
  ]
};







