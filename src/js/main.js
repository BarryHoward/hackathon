import angular from 'angular';
import 'angular-ui-router';
import { addController } from "./controllers/add";
import { detailsController } from "./controllers/details";
import { homeController } from "./controllers/home";



angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('addController', addController)
  .controller('detailsController', detailsController)
  .controller('homeController', homeController);
