'use strict';

import mongoose from 'mongoose';

var CasesSchema = new mongoose.Schema({
  case_type: String,
  address: String,
  staff_recommendation: String,
  meeting_date: String,
  meeting_date: Date,
  judgement: String,
  judgement_date: String,
  judgement_date2: Date,
  summary: String,
  year: String,
  street_type: String,
  apartment: Number,
  case_number: String,
  street: String,
  web_link: String,
  geometry: Array
});

export default mongoose.model('Cases', CasesSchema);
