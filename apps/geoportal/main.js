import 'oskari-loader!../../bundles/asdi-lang-overrides/bundle.js';

// These framework bundles have to be imported first
import 'oskari-bundle!oskari-frontend/bundles/framework/mapfull';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/oskariui/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/ui-components/bundle.js';
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

import 'oskari-bundle!oskari-frontend/bundles/framework/search';
import 'oskari-bundle!oskari-frontend/bundles/framework/layerlist';
import 'oskari-lazy-bundle?metadataflyout!oskari-frontend/bundles/catalogue/metadataflyout'
import 'oskari-lazy-bundle?metadatasearch!oskari-frontend/bundles/catalogue/metadatasearch';
import 'oskari-bundle!oskari-frontend/bundles/framework/coordinatetool';
import 'oskari-bundle!oskari-frontend/bundles/framework/postprocessor';
import 'oskari-bundle!oskari-frontend/bundles/framework/statehandler';
import 'oskari-lazy-bundle?mydata!oskari-frontend/bundles/framework/mydata';

import 'oskari-lazy-bundle?publisher2!oskari-frontend/bundles/framework/publisher2';
import 'oskari-bundle!oskari-frontend/bundles/framework/maplegend';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/layerswipe/bundle.js';
import 'oskari-loader!oskari-frontend/packages/mapping/ol/userstyle/bundle.js';
import 'oskari-bundle!oskari-frontend/bundles/framework/layeranalytics';
import 'oskari-bundle!oskari-frontend/bundles/framework/timeseries';
import 'oskari-bundle!oskari-frontend/bundles/framework/guidedtour';

import 'oskari-loader!../../bundles/asdi-login/bundle.js';
import 'oskari-loader!../../bundles/asdi-projection-change/bundle.js';
import 'oskari-lazy-bundle?featuredata!oskari-frontend/bundles/framework/featuredata';

import 'oskari-lazy-bundle?userguide!oskari-frontend/bundles/framework/userguide';
import 'oskari-lazy-bundle?language-selector!oskari-frontend/bundles/framework/language-selector';
import 'oskari-lazy-bundle?printout!oskari-frontend/bundles/framework/printout';
import 'oskari-lazy-bundle?announcements!oskari-frontend/bundles/framework/announcements';
import 'oskari-lazy-bundle?admin-announcements!oskari-frontend/bundles/admin/admin-announcements';
import 'oskari-lazy-bundle?admin-layereditor!oskari-frontend/bundles/admin/admin-layereditor';
import 'oskari-lazy-bundle?admin-permissions!oskari-frontend/bundles/admin/admin-permissions';
import 'oskari-lazy-bundle?admin-users!oskari-frontend/bundles/admin/admin-users';
import 'oskari-lazy-bundle?admin!oskari-frontend/bundles/admin/admin';
import 'oskari-lazy-bundle?statsgrid!oskari-frontend/bundles/statistics/statsgrid';
import 'oskari-lazy-bundle?admin-layeranalytics!oskari-frontend/bundles/admin/admin-layeranalytics';

import './css/overwritten.css';
