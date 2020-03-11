'use strict'

import Audit, { IAudit } from '../models/audit.model';

interface IInsertAuditDataInput {
  document: IAudit['document'];
  created_by: IAudit['created_by'];
  ip_address: IAudit['ip_address'];
  created_on: IAudit['created_on'];
  is_active: IAudit['is_active'];
  query_method: IAudit['query_method'];
  collection_name: IAudit['collection_name'];
  url: IAudit['url'];
  client_url: IAudit['client_url']
}

async function InsertAuditData(insertionData: IInsertAuditDataInput): Promise<IAudit> {
  return Audit.create(insertionData)
    .then((data: IAudit) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  InsertAuditData
};
