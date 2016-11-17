import angular from 'angular';
import 'angular-ui-router';
import { MainController } from "./controllers/";



angular
  .module('app', ['ui.router'])
  .config(routerConfig)
