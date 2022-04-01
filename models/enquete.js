const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enqueteSchema = new Schema({
  studentName: {
    type: String
  },
  studentID: {
    type: String
  },


  WAFSweken: {
    type: String
  },
  WAFSdocent: {
    type: String
  },
  WAFSlesstof: {
    type: String
  },
  WAFSuitleg: {
    type: String
  },
  WAFSownSights: {
    type: String
  },


  CSSweken: {
    type: String
  },
  CSSdocent: {
    type: String
  },
  CSSlesstof: {
    type: String
  },
  CSSuitleg: {
    type: String
  },
  CSSownSights: {
    type: String
  },


  PWAweken: {
    type: String,
  },
  PWAdocent: {
    type: String
  },
  PWAlesstof: {
    type: String
  },
  PWAuitleg: {
    type: String
  },
  PWAownSights: {
    type: String
  },


  BTweken: {
    type: String
  },
  BTdocent: {
    type: String
  },
  BTlesstof: {
    type: String
  },
  BTuitleg: {
    type: String
  },
  BTownSights: {
    type: String
  },


  RWweken: {
    type: String
  },
  RWdocent: {
    type: String
  },
  RWlesstof: {
    type: String
  },
  RWuitleg: {
    type: String
  },
  RWownSights: {
    type: String
  },


  HCDweken: {
    type: String
  },
  HCDdocent: {
    type: String
  },
  HCDlesstof: {
    type: String
  },
  HCDuitleg: {
    type: String
  },
  HCDownSights: {
    type: String
  }
}, { timestamps: true });


const Enquete = mongoose.model('Enquete', enqueteSchema);

module.exports = Enquete;