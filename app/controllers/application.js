import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@service session;

    @action
    logout() {
        this.session.invalidate();
    }

    @action
  	toggleSidebar() {
    	console.log("TOGGLE SIDEBAR!");
    	// from: js/sb-admin-2.js
    	// $("body").toggleClass("sidebar-toggled");
    	// $(".sidebar").toggleClass("toggled");
    	// if ($(".sidebar").hasClass("toggled")) {
    	//   $('.sidebar .collapse').collapse('hide');
    	// };
  	}
}
