export const blogPosts = [
  {
    slug: "zero-trust-security-2024",
    title: "Zero Trust Security: The Future of Enterprise Protection",
    excerpt: "Learn how Zero Trust architecture is transforming enterprise security and why your organization needs to adopt it now.",
    category: "Security",
    date: "Jan 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    content: `Zero Trust is not just a buzzword—it's the foundation of modern enterprise security. In this comprehensive guide, we explore the principles of Zero Trust architecture and how to implement it effectively.\n\n## What is Zero Trust?\n\nZero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.\n\n## Key Principles\n\n1. **Never Trust, Always Verify** - Every access request must be verified regardless of where it originates.\n2. **Least Privilege Access** - Users get only the minimum access they need.\n3. **Assume Breach** - Design systems assuming attackers are already inside.\n\n## Implementation Steps\n\nStart by identifying your critical assets, mapping data flows, implementing strong identity verification, and continuously monitoring all network traffic.`
  },
  {
    slug: "ai-security-best-practices",
    title: "AI Security: Protecting Your Machine Learning Models",
    excerpt: "Discover essential security practices to protect your AI systems from adversarial attacks and data poisoning.",
    category: "AI",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    content: `As AI becomes integral to business operations, securing these systems is paramount. This guide covers the unique security challenges of AI and ML systems.\n\n## AI-Specific Threats\n\n- **Adversarial Attacks** - Malicious inputs designed to fool ML models\n- **Data Poisoning** - Corrupting training data to compromise model behavior\n- **Model Theft** - Extracting proprietary models through API queries\n\n## Best Practices\n\n1. Implement robust input validation\n2. Use differential privacy for training data\n3. Monitor model behavior for anomalies\n4. Encrypt models at rest and in transit`
  },
  {
    slug: "cloud-identity-management",
    title: "Cloud Identity Management: A Complete Guide",
    excerpt: "Master cloud identity and access management with our comprehensive guide to IAM best practices.",
    category: "Cloud",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    content: `Identity and Access Management (IAM) is the cornerstone of cloud security. This guide covers everything you need to know about implementing effective IAM.\n\n## Core Components\n\n- **Authentication** - Verifying user identity\n- **Authorization** - Determining access permissions\n- **Governance** - Managing identity lifecycle\n\n## Microsoft Entra ID\n\nMicrosoft Entra ID (formerly Azure AD) provides comprehensive identity services including SSO, MFA, and conditional access policies.`
  },
  {
    slug: "microsoft-sentinel-implementation",
    title: "Implementing Microsoft Sentinel for Enterprise Security",
    excerpt: "Step-by-step guide to deploying and configuring Microsoft Sentinel for comprehensive threat detection.",
    category: "Security",
    date: "Jan 2, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    content: `Microsoft Sentinel is a cloud-native SIEM that provides intelligent security analytics across your enterprise.\n\n## Key Features\n\n- **Data Collection** - Ingest data from any source\n- **Threat Detection** - AI-powered anomaly detection\n- **Investigation** - Deep investigation tools\n- **Response** - Automated playbooks\n\n## Getting Started\n\n1. Create a Log Analytics workspace\n2. Enable Microsoft Sentinel\n3. Connect data sources\n4. Configure analytics rules`
  },
];
