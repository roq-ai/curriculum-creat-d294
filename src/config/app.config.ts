interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Freelance Educator'],
  tenantRoles: ['School Administrator', 'Content Creator', 'Curriculum Reviewer'],
  tenantName: 'Institution',
  applicationName: 'Curriculum Creators',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own content',
    'Create proposals for content',
    'Read reviews on own content',
    'Update personal user information',
  ],
  ownerAbilities: [
    'Manage institution information',
    'Manage user profiles',
    'Manage educational content',
    'Manage proposals',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/be173170-a804-4cd6-8823-72bf64cb2173',
};
