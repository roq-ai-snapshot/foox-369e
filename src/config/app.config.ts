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
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own freelancer profile',
    'Apply to jobs',
    'Manage own worklog',
    'Update job application status',
  ],
  ownerAbilities: ['Manage hiring data', 'Manage freelancer profiles', 'Manage worklogs', 'Manage users'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ae37a514-de1e-42e6-a0e0-976aed648ab0',
};
