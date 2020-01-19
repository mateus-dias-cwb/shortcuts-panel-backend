const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
  listName: String,
  listIcon: String,
  hotEdit: String,
  hotAdd: String,
  link: String,
  items: [String],
  singleLinkList: Boolean
})

module.exports = mongoose.model('List', ListSchema)