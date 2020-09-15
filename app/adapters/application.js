import Ember from 'ember';
import FirestoreAdapter from 'emberfire/adapters/firestore';

import {inject as service } from '@ember/service';

// https://emberigniter.com/real-world-authentication-with-ember-simple-auth/
// https://github.com/frank06/secretcodez/blob/master/app/adapters/application.js
export default class ApplicationAdapter extends FirestoreAdapter {
    // Uncomment the following lines to enable offline persistence and multi-tab support
    @service session;

    enablePersistence = true;
    persistenceSettings = { synchronizeTabs: true };


    // all not here in
    // https://github.com/firebase/emberfire/blob/aa9a8d0481e2e31615cda880f70764f0be62099c/addon/adapters/firestore.ts
   //  authManager = this.get("session");
   //  authorizer = 'XXXauthorizer:application';

   //  // https://guides.emberjs.com/release/models/customizing-adapters/
   //  get headers() {
   //      console.log('CONSTRUNCT HEADERS');
   //      console.log(this.get("session"));
	  //   return {
	  //     "Authorization": `Bearer ${this.get("session.authToken")}`,
	  //   };
  	// }

}
