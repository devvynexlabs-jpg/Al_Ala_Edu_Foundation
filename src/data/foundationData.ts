import { WelfarePillar, ActivityStory, StrategicGoal, DonationOption } from '../types';

export const FOUNDATION_META = {
  name: "Al-Ala Education Foundation",
  parentSchool: "Al-Ala International Islamic School",
  establishedYear: 1999,
  yearsOfExcellence: 27,
  academicYear: "2025–2026",
  chairperson: "Ma'am Tayyiba Imtiaz",
  tagline: "27 Years of Serving Communities Through Education & Welfare",
  location: "Lahore, Pakistan",
  contactPhone: "+92 42 3588 1999",
  whatsappNumber: "+92 300 845 1999",
  contactEmail: "info@alala.edu.pk",
  address: "Al-Ala Education Foundation Campus, 1.5 KM Off Multan Road, Chung, Lahore, Pakistan",
};

export const CHAIRPERSON_MESSAGE = {
  quote: "Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives. Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility.",
  author: "Ma'am Tayyiba Imtiaz",
  role: "Chairperson, Al-Ala Education Foundation",
  image: "/assets/img_-036.png"
};

export const WELFARE_PILLARS: WelfarePillar[] = [
  {
    id: "social-welfare",
    number: "01",
    title: "Social Welfare",
    shortDescription: "Supporting deserving individuals and families through food security, cancer patient support, and environmental drives.",
    fullDescription: "The Foundation actively participated in various welfare initiatives aimed at supporting deserving individuals and families across Lahore and surrounding regions.",
    imageUrl: "/assets/img_-009.png",
    impactMetric: "10+ Welfare Collaborations",
    activities: [
      "Food Distribution Drive across underprivileged neighborhoods",
      "Regular Charity Support for Underprivileged Cancer Patients through Shaukat Khanum Cancer Hospital",
      "Community kitchen operating in Ramadan (Iftar & Suhoor meals)",
      "Visiting Scholars' Circles promoting moral and spiritual reflection",
      "Save the Earth Campaign raises environmental responsibility",
      "Tree Plantation Campaign planting native shade trees in urban areas",
      "Online Tarbiyyah Program for Underprivileged Children",
      "Ration Support for Cancer patients through Hameed Maggo Trust",
      "Charity Support to Kashana Social Welfare",
      "Charity Support and Ration Assistance to Edhi Homes"
    ]
  },
  {
    id: "child-welfare",
    number: "02",
    title: "Child Welfare",
    shortDescription: "Nurturing moral, spiritual, and educational growth for every child with free schooling, orphan care, and nutritional support.",
    fullDescription: "Al-Ala Education Foundation remained dedicated to the moral, spiritual, and educational development of children across all strata of society.",
    imageUrl: "/assets/img_-014.png",
    impactMetric: "100% Free Tuition for Orphans",
    highlightTag: "Core Focus",
    activities: [
      "Free Education Program – Every Child Deserves to Learn",
      "Scholarships and Fee Concessions for orphans, deserving students, and teachers' children",
      "Distribution of Free Books, Stationery, and Educational Supplies",
      "After-School Support Classes and Academic Assistance",
      "Digital Learning Access and Reading Clubs",
      "Nutritional Meal Program and Child Health Camps – Healthy Child, Bright Future",
      "Orphan Care and Child Protection Awareness Initiatives",
      "Creative Arts, Storytelling Sessions, Sports, and Play Activities",
      "Life Skills Workshops – Skills for Life, Not Just School",
      "Mothers' Quran Classes to strengthen family-based Islamic learning",
      "Free Tarbiyah Classes for support staff and their children",
      "Clothing Collection and Distribution Drive for Chaman Institute of Special Children"
    ]
  },
  {
    id: "educational-welfare",
    number: "03",
    title: "Educational Welfare",
    shortDescription: "The cornerstone of our mission — empowering girls and boys with scholarships, teacher training, and STEM learning.",
    fullDescription: "Education remained the cornerstone of the Foundation's mission, elevating school standards and expanding access to quality Islamic and modern education.",
    imageUrl: "/assets/img_-018.png",
    impactMetric: "27 Years of Excellence",
    highlightTag: "Flagship Pillar",
    activities: [
      "Scholarship Program – Talent Deserves Opportunity",
      "Teacher Training Initiative – Better Teachers, Brighter Futures",
      "School Improvement Project enhancing classroom infrastructure",
      "Digital Learning Access Program providing computers and internet",
      "Adult Literacy Program for illiterate community members",
      "Library Development Drive adding thousands of curated books",
      "After-School Tutoring Program – Learning Beyond Classroom Walls",
      "Girl Child Education Program – Educate a Girl, Empower a Nation",
      "STEM Learning Workshops – Innovate, Create, Elevate",
      "Career Counseling Sessions – Right Direction, Right Future",
      "Inclusive Education Support – Learning Without Barriers",
      "Student Mentorship Program – Guidance Shapes Greatness"
    ]
  },
  {
    id: "women-welfare",
    number: "04",
    title: "Women Welfare",
    shortDescription: "Empowering women through adult education, Islamic learning circles, skill workshops, and transitional support.",
    fullDescription: "Empowering women through education, Islamic knowledge, and personal development remained a core focus of our community outreach.",
    imageUrl: "/assets/img_-022.png",
    impactMetric: "Free Skill Development",
    activities: [
      "Mothers' Workshops on positive parenting and child psychology",
      "Weekly Quran Classes offering Tajweed and Tafseer",
      "Dawrah-e-Quran Sessions during Ramadan and sacred months",
      "Women's Transitional Welfare Support for widows and single mothers",
      "Free Skill Development Courses for community promoted through social media platforms"
    ]
  },
  {
    id: "elderly-disabled-welfare",
    number: "05",
    title: "Elderly & Disabled Welfare",
    shortDescription: "Extending dignified care, mobility assistance, friendship circles, and inclusive education for special needs individuals.",
    fullDescription: "The Foundation extended support to vulnerable members of society through direct assistance and close collaboration with specialized welfare organizations.",
    imageUrl: "/assets/img_-024.png",
    impactMetric: "Care Without Barriers",
    activities: [
      "Elderly Care and Outreach Program visiting seniors in need",
      "Elder Friendship Circles and Quran Reflection & Story-Sharing Sessions",
      "Disability Support and Inclusive Care Services – Care Without Barriers",
      "Mobility Assistance and Accessibility Support for individuals with special needs",
      "Education Ability Beyond Disability Program encouraging equal learning opportunities",
      "Skill Development, Vocational Training, and Life Skills Workshops for persons with disabilities",
      "Mentorship and Empowerment Programs focused on confidence-building, independence, and self-reliance",
      "Free Consultancy and Guidance Services for members of the Al-Ala community"
    ]
  },
  {
    id: "health-welfare",
    number: "06",
    title: "Health Welfare",
    shortDescription: "Free medical & dental checkup camps, health awareness campaigns, and direct medical expense aid for the needy.",
    fullDescription: "Several awareness and support initiatives were conducted to promote physical well-being, preventative health, and healthy lifestyles.",
    imageUrl: "/assets/img_-028.png",
    impactMetric: "Free Medical & Dental Camps",
    activities: [
      "Medical Support for Poor and Needy covering essential treatments",
      "Health Awareness Programs in local communities",
      "Dental Health Awareness & On-Site Screening Camps",
      "Women's Health Education and Hygiene Awareness",
      "Student Health Awareness Sessions on nutrition and hygiene",
      "Healthy Eating and Physical Fitness Campaigns"
    ]
  },
  {
    id: "economic-welfare",
    number: "07",
    title: "Economic Welfare",
    shortDescription: "Providing wedding support, interest-free loans (Qard-e-Hasana), clothing drives, and direct economic relief.",
    fullDescription: "The Foundation supported struggling families through dignified economic assistance programs to foster financial stability.",
    imageUrl: "/assets/img_-029.png",
    impactMetric: "Interest-Free Loan Support",
    activities: [
      "Wedding Support Assistance for deserving brides",
      "Interest-Free Loan Support (Qard-e-Hasana) for micro-business or emergencies",
      "Distribution of Clothing for families in need",
      "Community Cloth Drive Campaigns collecting winter items"
    ]
  },
  {
    id: "community-relief",
    number: "08",
    title: "Community Outreach & Humanitarian Relief",
    shortDescription: "Immediate emergency aid for flood and earthquake victims, Gaza relief drives, and community bake sales.",
    fullDescription: "Al-Ala Education Foundation actively promoted community engagement and humanitarian responsibility through fundraising initiatives and emergency relief efforts.",
    imageUrl: "/assets/img_-032.png",
    impactMetric: "Emergency Emergency Response",
    highlightTag: "Global & Local Relief",
    activities: [
      "Community Bake Sale for charitable causes and fundraising",
      "Donations and support for Gaza Relief Camps",
      "Flood Relief Campaigns supplying emergency food and tents",
      "Earthquake Relief Assistance during natural disasters",
      "Charity drives and welfare support for underprivileged communities"
    ]
  }
];

export const RECENT_STORIES: ActivityStory[] = [
  {
    id: "free-education-drive",
    title: "Free Education Program – Every Child Deserves to Learn",
    category: "Child & Educational Welfare",
    pillarId: "child-welfare",
    date: "Academic Year 2025–2026",
    imageUrl: "/assets/img_-013.png",
    summary: "Providing 100% free schooling, uniforms, books, and after-school academic support to orphans and underprivileged students.",
    fullDetails: "At Al-Ala, we believe economic background should never restrict a child's academic and moral development. This past year, over hundreds of students received full scholarships, free textbook sets, and daily nutritious snacks through our free education initiative."
  },
  {
    id: "medical-dental-camp",
    title: "On-Site Dental Check-Up & Community Health Camp",
    category: "Health Welfare",
    pillarId: "health-welfare",
    date: "Annual Report Highlight",
    imageUrl: "/assets/img_-027.png",
    summary: "Professional dental screening, general health check-ups, and free medicine distribution for students and community members.",
    fullDetails: "Volunteer doctors and dental surgeons conducted complete oral hygiene screenings for young students, providing preventative care kits, toothbrushes, and specialized referrals for treatments funded directly by the Foundation."
  },
  {
    id: "gaza-flood-relief",
    title: "Community Bake Sale & Emergency Humanitarian Relief",
    category: "Community Relief",
    pillarId: "community-relief",
    date: "Relief Drive 2025–2026",
    imageUrl: "/assets/img_-033.png",
    summary: "Students and faculty organized community bake sales to mobilize emergency aid for Gaza Relief Camps and local flood victims.",
    fullDetails: "In a powerful demonstration of youth civic responsibility, Al-Ala school students prepared homemade treats and crafts, raising substantial relief funds distributed through verified humanitarian partners for Gaza and flood-affected districts in Pakistan."
  },
  {
    id: "ramadan-kitchen-cancer-support",
    title: "Ramadan Community Kitchen & Shaukat Khanum Cancer Aid",
    category: "Social Welfare",
    pillarId: "social-welfare",
    date: "Ramadan & Year-Round",
    imageUrl: "/assets/img_-011.png",
    summary: "Sponsoring meal distributions and cancer treatment aid through Shaukat Khanum Hospital and Hameed Maggo Trust.",
    fullDetails: "Through regular charity allocations, the Foundation provided financial assistance to low-income cancer patients undergoing chemotherapy, while serving thousands of warm Iftar meals daily during Ramadan."
  },
  {
    id: "special-children-chaman",
    title: "Clothing Drive for Chaman Institute of Special Children",
    category: "Child & Disabled Welfare",
    pillarId: "elderly-disabled-welfare",
    date: "Winter Outreach 2025–26",
    imageUrl: "/assets/img_-025.png",
    summary: "Distributing tailored clothing, mobility aids, and sensory play materials to children with special needs.",
    fullDetails: "Collaborating with Chaman Institute of Special Children, our student volunteers delivered custom winter clothing sets, mobility aids, and organized an inclusive day of storytelling and creative arts."
  },
  {
    id: "girl-child-stem",
    title: "Girl Child Education & STEM Innovation Workshops",
    category: "Educational Welfare",
    pillarId: "educational-welfare",
    date: "Academic Year 2025–2026",
    imageUrl: "/assets/img_-019.png",
    summary: "'Educate a Girl, Empower a Nation' — hands-on science laboratories and digital literacy programs for female scholars.",
    fullDetails: "Our dedicated STEM workshops provided young female students with hands-on coding modules, robotics kits, and career mentorship sessions from leading female Muslim educators and professionals."
  }
];

export const STRATEGIC_GOALS_2026_2027: StrategicGoal[] = [
  {
    id: 1,
    title: "Promote Educational Excellence & Research-Informed Practice",
    description: "Elevate classroom pedagogy, integrate modern digital tools with traditional Islamic ethics, and continuously measure student learning outcomes.",
    targetCategory: "Educational Excellence"
  },
  {
    id: 2,
    title: "Expand Scholarships & Financial Assistance",
    description: "Increase equitable access to education for orphans, single-mother households, and children of support staff across all grade levels.",
    targetCategory: "Access & Inclusion"
  },
  {
    id: 3,
    title: "Strengthen Community Welfare & Charitable Outreach",
    description: "Expand ration distributions, food banks, and partnership drives with institutions like Edhi Foundation and Kashana Social Welfare.",
    targetCategory: "Social Welfare"
  },
  {
    id: 4,
    title: "Empower Women Through Leadership & Vocational Training",
    description: "Launch new free digital skill courses, vocational certifications, and maternal health workshops for community women.",
    targetCategory: "Women Empowerment"
  },
  {
    id: 5,
    title: "Advance Health, Well-Being & Public Awareness Initiatives",
    description: "Host bi-monthly dental, eye, and general health camps in under-resourced neighborhoods alongside nutrition awareness drives.",
    targetCategory: "Health & Wellness"
  },
  {
    id: 6,
    title: "Build Strategic Partnerships with Community Organizations",
    description: "Formalize collaborative MoUs with leading medical trusts, humanitarian NGOs, and academic bodies to amplify service reach.",
    targetCategory: "Strategic Growth"
  },
  {
    id: 7,
    title: "Foster Community Leadership, Volunteerism & Social Responsibility",
    description: "Engage youth through student-led welfare clubs, environmental drives, and community service projects.",
    targetCategory: "Youth Engagement"
  },
  {
    id: 8,
    title: "Support Humanitarian Relief Efforts & Timely Emergency Response",
    description: "Maintain a rapid-deployment emergency relief fund for natural disasters, flood crises, and international humanitarian emergencies.",
    targetCategory: "Humanitarian Action"
  },
  {
    id: 9,
    title: "Ensure Sustainable Institutional Growth & Long-Term Development",
    description: "Enhance transparent financial auditing, donor governance, and endowment fund sustainability for generations to come.",
    targetCategory: "Governance & Sustainability"
  }
];

export const DONATION_CAUSES: DonationOption[] = [
  {
    id: "orphan-education",
    title: "Sponsor an Orphan Scholar's Education",
    description: "Covers full tuition, school uniforms, textbooks, digital learning access, and nutritional school lunches for 1 academic year.",
    recommendedAmountPKR: 15000,
    category: "education",
    imageUrl: "/assets/img_-015.png"
  },
  {
    id: "cancer-patient-ration",
    title: "Cancer Patient Ration & Treatment Support",
    description: "Provides monthly food packs and financial medical aid to underprivileged cancer patients via Shaukat Khanum & Hameed Maggo Trust.",
    recommendedAmountPKR: 12000,
    category: "health",
    imageUrl: "/assets/img_-010.png"
  },
  {
    id: "ramadan-food-pack",
    title: "Ramadan Food Drive & Community Kitchen",
    description: "Supplies a comprehensive family ration bag (flour, rice, oil, lentils, tea, sugar) lasting a deserving family for a full month.",
    recommendedAmountPKR: 8500,
    category: "food",
    imageUrl: "/assets/img_-012.png"
  },
  {
    id: "gaza-disaster-relief",
    title: "Emergency Humanitarian & Gaza Relief Fund",
    description: "Direct aid for emergency medical supplies, winter blankets, tents, and food packages in disaster and crisis zones.",
    recommendedAmountPKR: 10000,
    category: "relief",
    imageUrl: "/assets/img_-034.png"
  },
  {
    id: "women-skill-training",
    title: "Women's Vocational & Skill Development Sponsorship",
    description: "Funds sewing machines, digital literacy devices, and course material for low-income women seeking economic self-sufficiency.",
    recommendedAmountPKR: 20000,
    category: "general",
    imageUrl: "/assets/img_-023.png"
  }
];

export const BANK_DETAILS = {
  bankName: "Meezan Bank Limited",
  accountTitle: "Al-Ala Education Foundation",
  accountNumber: "0102-0103982711",
  iban: "PK36MEZN0001020103982711",
  branch: "Chung Branch, Lahore, Pakistan",
  swiftCode: "MEZNPKKA",
  easypaisa: "+92 300 845 1999",
  jazzcash: "+92 300 845 1999"
};
