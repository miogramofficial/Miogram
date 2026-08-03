export interface CreateExperienceInput {
  title: string;
  description: string;

  location?: string;

  mediaUrl: string;
  mediaType: string;
}

export interface UpdateExperienceInput {
  title?: string;
  description?: string;

  location?: string;

  mediaUrl?: string;
  mediaType?: string;
}