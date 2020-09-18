import Controller from '@ember/controller';
import {inject as service } from '@ember/service';
import {action } from '@ember/object';

export default class ApplicationController extends Controller {
    @service session;

    sidebarEnabled = true;
    collapsedPlanning = true;
    collapsedProduction = true;
    collapsedArticles = true;

    @action
    logout() {
        this.session.invalidate();
    }

    @action
    toggleCollapsedPlanning() {
        this.set('collapsedPlanning', !this.collapsedPlanning);
    }

    @action
    toggleCollapsedProduction() {
        this.set('collapsedProduction', !this.collapsedProduction);
    }

    @action
    toggleCollapsedArticles() {
        this.set('collapsedArticles', !this.collapsedArticles);
    }

    @action
    toggleSidebar() {

        // https://medium.com/dailyjs/mimicking-bootstraps-collapse-with-vanilla-javascript-b3bb389040e7
        // map our commands to the classList methods
        // const fnmap = {
        //   'toggle': 'toggle',
        //     'show': 'add',
        //     'hide': 'remove'
        // };
        // const collapse = (selector, cmd) => {
        //   const targets = Array.from(document.querySelectorAll(selector));
        //   targets.forEach(target => {
        //     console.log(target);
        //     target.classList[fnmap[cmd]]('show');
        //   });
        // }

        // from: js/sb-admin-2.js
        // $("body").toggleClass("sidebar-toggled");
        // $(".sidebar").toggleClass("toggled");
        // if ($(".sidebar").hasClass("toggled")) {
        //   $('.sidebar .collapse').collapse('hide');
        // };
        // toggle
        document.getElementById('accordionSidebar').classList.toggle("toggled");
        //this.sidebarEnabled = !this.sidebarEnabled;
        //if (this.sidebarEnabled) {
        // console.log(`TOGGLE SIDEBAR OFF`);
        // collapse('.sidebar .collapse', 'hide');
        //}// else {
        //     console.log(`TOGGLE SIDEBAR On`);
        // }


    }
}
