export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  ctaText: string;
  iconName: 'web' | 'stats' | 'terminal';
  caseStudy: {
    client: string;
    impact: string;
    keyDeliverables: string[];
    timeline: string;
  };
}

export interface PrototypeProject {
  id: string;
  domain: string;
  title: string;
  category: string;
  categoryType: 'website' | 'data' | 'software';
  description: string;
  mockupType: 'school-portal' | 'data-dashboard' | 'workflow-pipeline';
  stats?: {
    label: string;
    value: string;
    change?: string;
  }[];
}

export interface WorkflowStep {
  number: number | string;
  title: string;
  isComplete?: boolean;
}

export interface ContactFormState {
  name: string;
  email: string;
  organization: string;
  selectedPillars: string[];
  message: string;
}
