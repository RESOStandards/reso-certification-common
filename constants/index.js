const resoHelpUrl = 'https://certification-help.reso.org';

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

const detailedReportTypes = {
  data_dictionary_1_7_with_IDX_payload: {
    label: 'Data Dictionary 1.7 with IDX Payload',
    value: 'data_dictionary_1_7_with_IDX_payload'
  },
  data_dictionary: {
    label: 'Data Dictionary',
    value: 'data_dictionary'
  },
  web_api_server_core: {
    label: 'Web API Server Core',
    value: 'web_api_server_core'
  }
};

const statusConstants = certificationStatusOptions.reduce((result, statusOption) => {
  result[statusOption.value] = statusOption;
  return result;
}, {});

module.exports = {
  resoHelpUrl,
  filterEndorsementOptions,
  certificationStatusOptions,
  filterSortByOptions,
  certificationRequestCredentialOptions,
  certificationRequestEndorsementOptions,
  dataDictionaryFilters,
  detailedReportTypes,
  statusConstants
};
