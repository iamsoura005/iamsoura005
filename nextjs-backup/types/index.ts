export interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  total_stars: number;
  total_commits: number;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export interface TechStack {
  category: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  featured: boolean;
  category: 'ai-ml' | 'fullstack' | 'data-science' | 'other';
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}