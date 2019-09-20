const utils = require('../dist')

exports['native'] = () => JSON.stringify([1, 2, 3]);

exports['utils'] = () => utils.sortBy([1, 2, 3]);
