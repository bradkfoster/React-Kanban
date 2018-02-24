const bookshelf = require('./bookshelf');

class Cards extends bookshelf.Model {
  get tableName(){return 'cards'}
  get hasTimestamps() {return true}

}

module.exports = Cards;