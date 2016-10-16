import carModule from './modules/car.module';
import clientModule from './modules/client.module';

import names from './modules/names';

(function(){
  'use strict';

  carModule();
  clientModule();
  names();
})();
