'use strict'
import mongoose, { Schema, Document } from 'mongoose';

export interface IAudit extends Document {
  document: string;
  created_by: string;
  ip_address: string;
  created_on: Date;
  is_active: boolean;
  query_method: string;
  collection_name: string;
  url: string;
  client_url: string;
}

const AuditSchema: Schema = new Schema({
  document: { type: String, required: true },
  created_by: { type: String },
  ip_address: { type: String },
  created_on: { type: Date,  required: true, default: Date.now },
  is_active: { type: Boolean, required: true, default: true },
  query_method: { type: String, required: true },
  collection_name: { type: String, required: true },
  url: { type: String, required: true},
  client_url: { type: String}
});

// Export the model and return your IAudit interface
export default mongoose.model<IAudit>('Audit', AuditSchema);
