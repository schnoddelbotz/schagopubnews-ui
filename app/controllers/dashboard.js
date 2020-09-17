import Controller from '@ember/controller';
import {action } from '@ember/object';

export default class DashboardController extends Controller {

	isFullScreen = false;

    @action
    toggleFullscreen() {
        if (this.isFullScreen) {
        	this.closeFullscreen();
        	this.set('isFullScreen', false);
        	//this.send('application.toggleSidebar');
        	// call controllers.applications.toggleSidebar or so ... or do in css entirely?
        	document.getElementById('accordionSidebar').classList.toggle("toggled");
        } else {
        	this.openFullscreen();
        	this.set('isFullScreen', true);
        	document.getElementById('accordionSidebar').classList.toggle("toggled");
        }
    }

    /* View in fullscreen */
	openFullscreen() {
	  let elem = document.documentElement;
	  if (elem.requestFullscreen) {
	    elem.requestFullscreen();
	  } else if (elem.mozRequestFullScreen) { /* Firefox */
	    elem.mozRequestFullScreen();
	  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	    elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE/Edge */
	    elem.msRequestFullscreen();
	  }
	}

	/* Close fullscreen */
	closeFullscreen() {
	  if (document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if (document.mozCancelFullScreen) { /* Firefox */
	    document.mozCancelFullScreen();
	  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
	    document.webkitExitFullscreen();
	  } else if (document.msExitFullscreen) { /* IE/Edge */
	    document.msExitFullscreen();
	  }
	}
}
