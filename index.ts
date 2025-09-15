export interface UserProfile {
  id: number;
  name: string;
  age: number;
  city: string;
  image: string;
  job: string;
  hobbies: string[];
  interests: string[];
  relationshipGoals: string;
  bio: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    label: string;
    value: string;
    score: Record<string, number>;
  }[];
}

export interface QuizResults {
  trust: number;
  empathy: number;
  support: number;
  equality: number;
  respect: number;
  communication: number;
  independence: number;
  forgiveness: number;
  accountability: number;
  intimacy: number;
}