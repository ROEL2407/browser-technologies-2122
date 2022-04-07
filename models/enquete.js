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
    type: Number
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
    type: Number
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
    type: Number
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
    type: Number
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
    type: Number
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
    type: Number
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