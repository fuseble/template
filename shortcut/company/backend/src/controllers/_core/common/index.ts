import { contact, adminContact } from './contact';
import { faq, adminFAQ } from './faq';
import { notice, adminNotice } from './notice';

const COMMON = {
  Core: {
    Contact: contact,
    FAQ: faq,
    Notice: notice,
  },
  AdminCore: {
    Contact: adminContact,
    FAQ: adminFAQ,
    Notice: adminNotice,
  },
};

export default COMMON;
