import 'oskari-loader!../../bundles/asdi-lang-overrides/bundle.js';

// These framework bundles have to be imported first
import 'oskari-loader!oskari-frontend/packages/framework/bundle/mapfull/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/oskariui/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/divmanazer/bundle.js';

// Then import mapmodule and rest of the application
import 'oskari-loader!oskari-frontend/packages/mapping/ol/mapmodule/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/maparcgis/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/wfsvector/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/ui-components/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/mapwmts/bundle.js';

import 'oskari-loader!oskari-frontend/packages/mapping/ol/drawtools/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/toolbar/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/infobox/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/search/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/layerlist/bundle.js';
import 'oskari-loader!oskari-frontend/packages/catalogue/metadatasearch/bundle.js';
import 'oskari-loader!oskari-frontend/packages/catalogue/bundle/metadataflyout/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/coordinatetool/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/postprocessor/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/statehandler/bundle.js';
import 'oskari-loader!oskari-frontend/bundles/framework/mydata/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/publisher2/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/maplegend/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/layerswipe/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/userstyle/bundle.js';
import 'oskari-loader!oskari-frontend/bundles/framework/layeranalytics/bundle.js';


import 'oskari-loader!oskari-frontend/packages/framework/bundle/timeseries/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/guidedtour/bundle.js';

import 'oskari-loader!../../bundles/asdi-login/bundle.js';
import 'oskari-loader!../../bundles/asdi-projection-change/bundle.js';

import 'oskari-loader!oskari-frontend/packages/framework/featuredata/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/userguide/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/language-selector/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/printout/bundle.js';

import 'oskari-lazy-loader?announcements!oskari-frontend/packages/framework/bundle/announcements/bundle.js';
import 'oskari-lazy-loader?admin-announcements!oskari-frontend/packages/admin/bundle/admin-announcements/bundle.js';

import 'oskari-lazy-loader?admin-layereditor!oskari-frontend/packages/admin/bundle/admin-layereditor/bundle.js';
import 'oskari-lazy-loader?admin-layerrights!oskari-frontend/packages/framework/bundle/admin-layerrights/bundle.js';
import 'oskari-lazy-loader?admin-users!oskari-frontend/packages/framework/bundle/admin-users/bundle.js';
import 'oskari-lazy-loader?admin!oskari-frontend/packages/admin/bundle/admin/bundle.js';
import 'oskari-lazy-loader?statsgrid!oskari-frontend/bundles/statistics/statsgrid/bundle.js';
import 'oskari-lazy-loader?admin-layeranalytics!oskari-frontend/bundles/admin/admin-layeranalytics/bundle.js';

import './css/overwritten.css';
