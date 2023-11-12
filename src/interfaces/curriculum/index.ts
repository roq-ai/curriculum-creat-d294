import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CurriculumInterface {
  id?: string;
  title: string;
  description?: string;
  admin_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CurriculumGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  admin_id?: string;
}
