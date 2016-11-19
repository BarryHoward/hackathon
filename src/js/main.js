import angular from "angular";
import { routerConfig } from "./routes";
import { addController } from "./controllers/add";
import { detailsController } from "./controllers/details";
import { homeController } from "./controllers/home";
import { updateController} from "./controllers/update"



import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('addController', addController)
  .controller('detailsController', detailsController)
  .controller('homeController', homeController)
  .controller('updateController', updateController)
