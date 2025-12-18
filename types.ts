
export interface CatBreed {
  name: string;
  description: string;
  id: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CatImage {
  id: string;
  url: string;
  alt: string;
}
