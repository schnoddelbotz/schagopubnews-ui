// import JSONAPISerializer from '@ember-data/serializer/json-api';
import FirestoreSerializerBase from 'emberfire/serializers/firestore';

// exists because
// https://deprecations.emberjs.com/ember-data/v3.x/#toc_ember-data-default-serializers
// but also:
// https://github.com/firebase/emberfire/issues/605

export default class FirestoreSerializer extends FirestoreSerializerBase {
  normalizeCreateRecordResponse(store, primaryModelClass) {
    let result = super.normalizeCreateRecordResponse(...arguments)
    result.data.type = primaryModelClass.modelName
    return result
  }
}
