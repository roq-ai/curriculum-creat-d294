import { ProposalInterface } from 'interfaces/proposal';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  subject: string;
  grade_level?: number;
  content_type?: string;
  creator_id: string;
  created_at?: any;
  updated_at?: any;
  proposal?: ProposalInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    proposal?: number;
    review?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  subject?: string;
  content_type?: string;
  creator_id?: string;
}
