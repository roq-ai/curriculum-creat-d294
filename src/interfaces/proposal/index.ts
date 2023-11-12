import { UserInterface } from 'interfaces/user';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface ProposalInterface {
  id?: string;
  title: string;
  description?: string;
  submitted_at?: any;
  status?: string;
  educator_id: string;
  content_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  content?: ContentInterface;
  _count?: {};
}

export interface ProposalGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  educator_id?: string;
  content_id?: string;
}
