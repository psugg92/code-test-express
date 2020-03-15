const bookshelf = require('../db/bookshelf');
const Member = require('./member');

const Subscription = bookshelf.model('Subscription', {
  tableName: 'subscriptions',
  members() {
    return this.belongsTo(Member,"subscription_id", "id");
  }
});

module.exports = Subscription;
