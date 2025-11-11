import 'oskari-bundle!../../bundles/asdi-lang-overrides';

// These framework bundles have to be imported first
import 'oskari-bundle!oskari-frontend/bundles/framework/mapfull';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/oskariui/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/ui-components/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/divmanazer/bundle.js';

// Then import mapmodule and rest of the application
import 'oskari-bundle!oskari-frontend/bundles/mapping/mapmodule/map2d_ol';
import 'oskari-bundle!oskari-frontend/bundles/mapping/maparcgis';

import 'oskari-bundle!oskari-frontend/bundles/mapping/drawtools';
import 'oskari-bundle!oskari-frontend/bundles/mapping/toolbar';
import 'oskari-bundle!oskari-frontend/bundles/mapping/infobox';
import 'oskari-bundle!oskari-frontend/bundles/mapping/userstyle';

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
import 'oskari-bundle!oskari-frontend/bundles/mapping/layerswipe';

import 'oskari-bundle!oskari-frontend/bundles/framework/layeranalytics';
import 'oskari-bundle!oskari-frontend/bundles/framework/timeseries';
import 'oskari-bundle!oskari-frontend/bundles/framework/guidedtour';

import 'oskari-bundle!../../bundles/asdi-login';
import 'oskari-bundle!../../bundles/asdi-projection-change';
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
