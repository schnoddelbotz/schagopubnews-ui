import Model from '@ember-data/model';

import DS from 'ember-data';
const { attr, belongsTo, hasMany } = DS;

// export default class ArticleModel extends Model {
// }

export default DS.Model.extend({
    title: attr('string'),
    body: attr('string'),
    publishedAt: attr('string'), // FIXME should be date
    //author: belongsTo('user'),
    //comments: hasMany('comments', { subcollection: true }),
});