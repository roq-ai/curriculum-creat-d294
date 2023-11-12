import { UserInterface } from 'interfaces/user';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  comment?: string;
  rating?: number;
  reviewed_at?: any;
  reviewer_id: string;
  content_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  content?: ContentInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  reviewer_id?: string;
  content_id?: string;
}
