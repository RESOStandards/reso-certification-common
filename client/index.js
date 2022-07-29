const userTypes = {
  admins: 'admins',
  providers: 'providers',
  normalUsers: 'normal-users',
  recipients: 'recipients'
};

const resoHelpUrl = 'https://certification-help.reso.org';

const userPageContext = {
  summary: 'summary-report',
  'data-dictionary': 'data-dictionary-report',
  'web-api': 'web-api-report',
  token: 'admin-actions',
  my_account: 'my-account',
  endorsements: 'endorsements'
};

const filterEndorsementOptions = [
  {
    label: 'All',
    value: ''
  },
  {
    label: 'Web API',
    shortLabel: 'Web API',
    value: 'web_api_server_core'
  },
  {
    label: 'Data Dictionary',
    shortLabel: 'DD',
    value: 'data_dictionary'
  },
  {
    label: 'IDX',
    shortLabel: 'IDX',
    value: 'payloads'
  }
];

const certificationStatusOptions = [
  {
    label: 'All',
    shortLabel: 'All',
    value: '',
    bgColor: '',
    textColor: '',
    priority: -1
  },
  {
    label: 'In Progress',
    shortLabel: 'In Progress',
    value: 'in_progress',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-400',
    icon: 'refresh',
    priority: 0
  },
  {
    label: 'Failed',
    shortLabel: 'Failed',
    value: 'failed',
    bgColor: 'bg-red-100',
    textColor: 'text-red-500',
    borderColor: 'border-red-500',
    icon: 'error',
    priority: 1
  },
  {
    label: 'Canceled',
    shortLabel: 'Canceled',
    secondaryLabel: 'Withdrawn',
    value: 'canceled',
    bgColor: 'bg-red-400',
    textColor: 'text-white',
    borderColor: 'border-red-300',
    icon: 'cross',
    priority: 2
  },
  {
    label: 'Passed',
    shortLabel: 'Passed',
    value: 'passed',
    bgColor: 'bg-green-100',
    textColor: 'text-green-400',
    borderColor: 'border-green-400',
    icon: 'confirm',
    priority: 3
  },
  {
    label: 'Notified',
    shortLabel: 'Notified',
    value: 'recipient_notified',
    bgColor: 'bg-blue-300',
    textColor: 'text-blue-500',
    borderColor: 'border-blue-200',
    icon: 'notifications-updated',
    priority: 4
  },
  // {
  //   label: "Canceled",
  //   shortLabel: "Canceled",
  //   value: "canceled",
  //   bgColor: "bg-red-100",
  //   textColor: "text-red-500",
  //   borderColor: "border-red-600",
  //   icon: "remove",
  //   priority: 5,
  // },
  {
    label: 'Revoked',
    shortLabel: 'Revoked',
    value: 'revoked',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
    borderColor: 'border-red-400',
    icon: 'undo',
    priority: 5
  },
  {
    label: 'Certified',
    shortLabel: 'Certified',
    value: 'certified',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    borderColor: 'border-green-400',
    icon: 'tick-circle',
    priority: 6
  },
  {
    label: 'Legacy',
    shortLabel: 'Legacy',
    value: 'legacy',
    bgColor: 'bg-gray-700',
    textColor: 'text-white',
    borderColor: 'border-gray-400',
    icon: 'issue',
    priority: 7
  }
];

const filterSortByOptions = [
  {
    label: 'Ascending',
    value: 'asc',
    icon: 'sort-alphabetical'
  },
  {
    label: 'Descending',
    value: 'desc',
    icon: 'sort-alphabetical-desc'
  }
];

const defaultPageTitle = `RESO - Real Estate Standards Organization`;

const cookiesResoTerms = 'reso_terms';

const cookiesResoTermsAcceptedOn = 'terms_accepted';

const cookiesProviderExpansionResources = 'resource_expansion';

const dateTimeOutputFormat = 'MMM D YYYY [at] h:mm a';

const resoTermsText = `REAL ESTATE STANDARDS ORGANIZATION 
CERTIFICATION TERMS AND CONDITIONS


By proceeding with RESO certification you agree on behalf your company (“You”) to the following terms (the “Terms”). This is a legally binding contract between You and RESO. You should consult an attorney if you do not understand it. These Terms limit your legal remedies and RESO’s liabilities to You. 

1. Process and pricing. You agree to the certification process as outlined in the RESO Certification Guidelines (which is currently available at: https://www.reso.org/reso-certification-process/) and the fees for certification in RESO’s current certification fee schedule (which is currently available at: https://www.reso.org/certification-fee-schedule/). The RESO certification fee schedule is subject to change from time to time in RESO’s sole discretion.

2. No guarantee; retesting; loss of certification. (a) RESO makes no guarantees that by paying fees and participating in RESO certification, that your product will become RESO certified. The product must pass certification. Additional fees for repeating certification or re-certification may apply. (b) You agree that RESO may retain credentials to re-test your product for certification, and that RESO may re-test your product in RESO’s reasonable discretion. If the credentials have expired, You agree to provide RESO new credentials to re-test your product. (c) Additionally, RESO reserves the right to revoke certification for products that initially pass certification, but are subsequently no longer compliant with a given RESO standard. RESO may also revoke certification if You do not provide RESO reasonable assistance to re-confirm certification.

3. License. (a) You grant to RESO and its contractors a limited, non-exclusive, world-wide, non-transferable, royalty-free (other than costs associated with certification, if applicable), revocable right to access, copy, and use Your systems and data to which You provide access (“Your Data”) so RESO may conduct certification testing as detailed in the RESO Certification Guidelines or otherwise communicated by RESO or intended by You and RESO for certification testing. (b) You further grant RESO and its contractors an unlimited, non-exclusive, world-wide, non-transferable, royalty-free (other than costs associated with certification, if applicable), irrevocable, perpetual right and license to create, copy, publicly display and perform, distribute, and maintain information about You, including your company name and substantially similar information, and about Your Data, including metadata, field types, numbers of resources, access statistics, aggregated information about You and Your Data, and other substantially similar information (collectively “RESO Derivatives”) for the purposes of displaying certification reports and statistics (which are currently available at: certification.reso.org. (c) Following each instance of certification testing, RESO will expunge copies of Your Data, specifically real estate listings, but RESO may maintain and use RESO Derivatives as provided in the foregoing Section 3(b).
 
4. Ownership. As between RESO and You, all rights, title and interest in all information in any medium now known or hereafter discovered including, but not limited to, screens, texts, user names, passwords, web pages, or other materials comprising the certification process are the exclusive property of RESO. As between RESO and You, all rights, title and interest in all information in any medium now known or hereafter discovered in Your Data shall remain Your exclusive property.

5. Limitation of Liability/Exclusion of Warranties. YOU ASSUME RESPONSIBILITY FOR ANY AND ALL LOSSES OR DAMAGES THAT ARISE OUT OF YOUR PARTICIPATION IN RESO CERTIFICATION. IN NO EVENT SHALL RESO BE LIABLE TO YOU FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES OF ANY KIND WHATSOEVER ARISING FROM ANY BREACH OF THESE TERMS, EVEN IF RESO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; YOUR SOLE REMEDY AGAINST RESO HEREUNDER SHALL BE DIRECT DAMAGES NOT IN EXCESS OF $100, OR THE AMOUNT SPENT ON CERTIFICATION, WHICHEVER IS LESS. RESO PROVIDES THE CERTIFICATION ON AN “AS IS” BASIS AND DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES EXCEPT THOSE EXPRESSLY SET FORTH IN THESE TERMS. THIS PARAGRAPH SETS OUT YOUR EXCLUSIVE REMEDIES, AND UNDER NO CIRCUMSTANCES SHALL YOU BE ENTITLED TO EQUITABLE REMEDIES. RESO MAKES NO WARRANTIES, INCLUDING THOSE OF TITLE, AVAILABILITY, OR NON-INFRINGEMENT, REGARDING THE CERTIFICATION PROCESS OR THAT THE PROCESS WILL NECESSARILY BE FROM ERRORS, INTERRUPTION, BUGS, VIRUSES, WORMS, "TROJAN HORSES" OR OTHER MALICIOUS CODE OR HARMFUL FEATURES FROM THIRD PARTIES OR WILL MEET YOUR REQUIREMENTS.

6. Warranties. You warrant that: (a) You have the authority to enter into these Terms on behalf of your company; (b) You have the right to provide the licenses granted under these Terms; (c) You will not provide false, inaccurate, misleading, infringing, or defamatory content to RESO as part of Your Data or otherwise; (d) You will not violate any laws or third party rights; (e) You will not transfer your user account to any other person or entity, or provide your user ID and password to anyone else without RESO’s written permission; (f) You will not gather, or attempt to gather, by any automated means, including but not limited to “screen scraping” or “database scraping,” any software or content from this site; and (g) You will not “hack” or to transmit or otherwise make available to RESO or another party any computer code, file, program or other element (including any virus, worm, or other harmful malware of any nature) that would interrupt, destroy, interfere with or otherwise cause any other effect that might reasonably be considered undesirable.

7. Indemnification. You shall defend and indemnify RESO, RESO members, and all their respective employees, directors, agents, and authorized successors and assigns, against any and all losses, damages, and costs (including reasonable attorneys’ fees) arising from any third party claim (a) related to Your breach of any provision of these Terms and (b) based on Your participation in the certification process. RESO shall (x) promptly notify You in writing of any claim and give You the opportunity to defend or negotiate a settlement of any such claim at Your expense, and (y) cooperate fully with the You, at Your expense, in defending or settling any such claim. RESO shall be entitled to engage its own counsel at its expense.

8. Attorney’s Fees. If RESO prevails in any action to enforce or interpret these Terms or any provision hereof, it shall be entitled to its reasonable attorney’s fees and costs for such legal action.

9. Dispute resolution. The laws of the State of Minnesota shall govern these Terms and their interpretation. Any action to enforce or interpret these Terms shall have venue in Hennepin County, Minnesota, and the parties hereby submit to personal jurisdiction in that venue.

10. Severability. Each provision of these Terms is severable from the whole, and if one provision is declared invalid, the other provisions shall remain in full force and effect. In the event a court having jurisdiction over the parties holds any provision of these Terms invalid or unenforceable, the parties shall negotiate in good faith to replace the invalid or unenforceable provision, if possible, with a valid provision that most closely approximates the intent and economic effect of the invalid provision. If any provision of the limitation of liability or exclusion of warranty is held invalid or unenforceable, these Terms shall immediately terminate unless the parties agree to the contrary.

11. Entire Agreement. These Terms contain the full and complete understanding of the parties regarding the subject matter of these Terms and supersedes all prior representations and understandings, whether oral or written, relating to the same subject matter. 

12. No third party beneficiaries. There are no third party beneficiaries of these Terms.

13. Relationship of the Parties. The relationship of RESO to you is that of an independent contractor. No party shall be deemed to be the agent, partner, joint venturer, franchisor or franchisee, or employee of RESO or have any authority to make any agreements or representations on the behalf of RESO.

14. No waiver. Failure of RESO to enforce any provision of these Terms shall not be deemed a waiver of future enforcement of that or any other provision.

15. Communication. All communications related to these Terms or the certification process shall be mailed or electronically mailed to the parties at their respective addresses. RESO shall use the postal address and email address associated with your account for notices provided to You. RESO’s contact information for communications regarding these Terms and the certification process is below and subject to change upon notice to You. 


Attn:     Sam DeBord, Chief Executive Officer
Address:  PO Box 10824
          Raleigh, NC 27605 
Phone:    206.658.3225
Email:    sam@reso.org

April 15, 2022`;

const certificationRequestCredentialOptions = {
  input_credentials: {
    bearer_token: {
      value: 'bearer_token',
      label: 'Bearer Token'
    },
    client: {
      value: 'client',
      label: 'Client Credentials'
    }
  },
  upload_configuration: {
    value: 'upload_configuration',
    label: 'Upload Configuration'
  }
};

const certificationRequestEndorsementOptions = {
  data_dictionary_1_7_with_IDX_payload: {
    label: 'Data Dictionary 1.7 with IDX Payload',
    value: 'data_dictionary_1_7_with_IDX_payload',
    roles: [
      {
        label: 'RESO User',
        value: 'reso_user'
      },
      {
        label: 'IDX User',
        value: 'idx_user'
      }
    ]
  },
  data_dictionary_1_7: {
    label: 'Data Dictionary 1.7',
    value: 'data_dictionary_1_7',
    roles: [
      {
        label: 'RESO User',
        value: 'reso_user'
      }
    ]
  },
  web_api_core_2_0_0: {
    label: 'Web API Core 2.0.0',
    value: 'web_api_core_2_0_0',
    roles: [
      {
        label: 'RESO User',
        value: 'reso_user'
      }
    ]
  }
};

const resourcesListResourcesByOrder = [
  'Property',
  'Member',
  'Office',
  'Contacts',
  'Media',
  'HistoryTransactional',
  'ContactListings',
  'InternetTracking',
  'SavedSearch',
  'OpenHouse',
  'Prospecting',
  'Queue',
  'Rules',
  'Teams',
  'Showing',
  'TeamMembers',
  'OUID',
  'ContactListingNotes',
  'OtherPhone',
  'PropertyGreenVerification',
  'PropertyPowerProduction',
  'PropertyRooms',
  'PropertyUnitTypes',
  'SocialMedia',
  'Field',
  'Lookup'
];

const resourcesListResources = {
  reso: [
    'ContactListingNotes',
    'ContactListings',
    'Contacts',
    'Field',
    'HistoryTransactional',
    'InternetTracking',
    'Lookup',
    'Media',
    'Member',
    'OUID',
    'Office',
    'OpenHouse',
    'OtherPhone',
    'Property',
    'PropertyGreenVerification',
    'PropertyPowerProduction',
    'PropertyRooms',
    'PropertyUnitTypes',
    'Prospecting',
    'Queue',
    'Rules',
    'SavedSearch',
    'Showing',
    'SocialMedia',
    'TeamMembers',
    'Teams'
  ],
  idx: ['Property', 'Member', 'Office', 'Media', 'OpenHouse', 'PropertyGreenVerification']
};

const dataDictionaryFilters = {
  ALL: {
    name: 'total',
    label: 'All'
  },
  RESO: {
    name: 'reso',
    label: 'RESO'
  },
  LOCAL: {
    name: 'local',
    label: 'Local'
  },
  IDX: {
    name: 'idx',
    label: 'IDX'
  }
};

const dataDictionarySliderTicks = {
  0: {
    label: '0%',
    value: 'eqZero',
    tickValue: 0
  },
  5: {
    label: 'Above 0%',
    value: 'gtZero',
    tickValue: 5
  },
  25: {
    label: '25% and Above',
    value: 'gte25',
    tickValue: 25
  },
  50: {
    label: '50% and Above',
    value: 'gte50',
    tickValue: 50
  },
  75: {
    label: '75% and Above',
    value: 'gte75',
    tickValue: 75
  },
  100: {
    label: '100%',
    value: 'eq100',
    tickValue: 100
  }
};

const dataDictionaryStandardResources = [
  'Property',
  'Member',
  'Office',
  'Contacts',
  'Media',
  'HistoryTransactional',
  'ContactListings',
  'InternetTracking',
  'SavedSearch',
  'OpenHouse',
  'Prospecting',
  'Queue',
  'Rules',
  'Teams',
  'Showing',
  'TeamMembers',
  'OUID',
  'ContactListingNotes',
  'OtherPhone',
  'PropertyGreenVerification',
  'PropertyPowerProduction',
  'PropertyRooms',
  'PropertyUnitTypes',
  'SocialMedia',
  'Field',
  'Lookup'
];

const dataDictionaryStandardResourcesUrls = {
  Property: 'https://ddwiki.reso.org/display/DDW17/Property+Resource',
  Member: 'https://ddwiki.reso.org/display/DDW17/Member+Resource',
  Office: 'https://ddwiki.reso.org/display/DDW17/Office+Resource',
  Contacts: 'https://ddwiki.reso.org/display/DDW17/Contacts+Resource',
  Media: 'https://ddwiki.reso.org/display/DDW17/Media+Resource',
  HistoryTransactional: 'https://ddwiki.reso.org/display/DDW17/HistoryTransactional+Resource',
  ContactListings: 'https://ddwiki.reso.org/display/DDW17/ContactListings+Resource',
  InternetTracking: 'https://ddwiki.reso.org/display/DDW17/InternetTracking+Resource',
  SavedSearch: 'https://ddwiki.reso.org/display/DDW17/SavedSearch+Resource',
  OpenHouse: 'https://ddwiki.reso.org/display/DDW17/OpenHouse+Resource',
  Prospecting: 'https://ddwiki.reso.org/display/DDW17/Prospecting+Resource',
  Queue: 'https://ddwiki.reso.org/display/DDW17/Queue+Resource',
  Rules: 'https://ddwiki.reso.org/display/DDW17/Rules+Resource',
  Teams: 'https://ddwiki.reso.org/display/DDW17/Teams+Resource',
  Showing: 'https://ddwiki.reso.org/display/DDW17/Showing+Resource',
  TeamMembers: 'https://ddwiki.reso.org/display/DDW17/TeamMembers+Resource',
  OUID: 'https://ddwiki.reso.org/display/DDW17/OUID+Resource',
  ContactListingNotes: 'https://ddwiki.reso.org/display/DDW17/ContactListingNotes+Resource',
  OtherPhone: 'https://ddwiki.reso.org/display/DDW17/OtherPhone+Resource',
  PropertyGreenVerification:
    'https://ddwiki.reso.org/display/DDW17/PropertyGreenVerification+Resource',
  PropertyPowerProduction: 'https://ddwiki.reso.org/display/DDW17/PropertyPowerProduction+Resource',
  PropertyRooms: 'https://ddwiki.reso.org/display/DDW17/PropertyRooms+Resource',
  PropertyUnitTypes: 'https://ddwiki.reso.org/display/DDW17/PropertyUnitTypes+Resource',
  SocialMedia: 'https://ddwiki.reso.org/display/DDW17/SocialMedia+Resource',
  Field: '',
  Lookup: ''
};

const acceptanceScreenContents = {
  provider: {
    difference: {
      description:
        'This Difference Report shows where there are discrepancies between the data tested in a general “power user” query by RESO vs. an IDX data consumer query (based on the IDX user credentials supplied to RESO). Please review these results as while they do not result in failed certification, they present an opportunity to create a more consistent experience for the IDX user. ',
      showContactRESOButton: true
    },
    performance: {
      description:
        'RESO has worked with our member data providers like your company to develop Web API server metrics to display to customers. This information will help MLSs and MLS software companies continue to improve the performance of the RESO Web API services that they provide to our members. RESO will publish these statistics along with other Data Dictionary and Web API certification results.'
    }
  },
  recipient: {
    difference: {
      description:
        'This Difference Report shows where there are discrepancies between the data tested in a general “power user” query by RESO vs. an IDX data consumer query (based on the IDX user credentials supplied to RESO). Please review these results with your data provider as while they do not result in failed certification, they present an opportunity to create a more consistent experience for the IDX user. ',
      showContactProviderButton: true,
      showContactRESOButton: true
    },
    performance: {
      description:
        'RESO measures the performance of RESO Web API servers and compares them to the average performance statistics of all certified systems. Your Web API server’s payload size, response time, and bandwidth can give you insights into the performance that your data consumer customers will receive from that service.'
    }
  }
};

const screenFlows = {
  data_dictionary: {
    provider: ['difference', 'performance', 'email'],
    recipient: ['difference', 'performance', 'terms']
  },
  web_api_server_core: {
    provider: ['performance', 'email'],
    recipient: ['performance', 'terms']
  }
};

module.exports = {
  userTypes,
  resoHelpUrl,
  userPageContext,
  filterEndorsementOptions,
  certificationStatusOptions,
  filterSortByOptions,
  defaultPageTitle,
  cookiesResoTerms,
  cookiesResoTermsAcceptedOn,
  cookiesProviderExpansionResources,
  dateTimeOutputFormat,
  resoTermsText,
  certificationRequestCredentialOptions,
  certificationRequestEndorsementOptions,
  resourcesListResourcesByOrder,
  resourcesListResources,
  dataDictionaryFilters,
  dataDictionarySliderTicks,
  dataDictionaryStandardResources,
  dataDictionaryStandardResourcesUrls,
  acceptanceScreenContents,
  screenFlows
};
