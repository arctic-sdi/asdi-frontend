import 'oskari-bundle!oskari-frontend/bundles/framework/mapfull';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/oskariui/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/ui-components/bundle.js';
import 'oskari-loader!oskari-frontend/packages/framework/bundle/divmanazer/bundle.js';

import 'oskari-bundle!oskari-frontend/bundles/mapping/mapmodule/map2d_ol';
import 'oskari-bundle!oskari-frontend/bundles/mapping/maparcgis';

import 'oskari-bundle!oskari-frontend/bundles/mapping/drawtools';
import 'oskari-bundle!oskari-frontend/bundles/mapping/toolbar';
import 'oskari-bundle!oskari-frontend/bundles/mapping/infobox';

import 'oskari-bundle!oskari-frontend/bundles/framework/publishedstatehandler';
import 'oskari-lazy-bundle?featuredata!oskari-frontend/bundles/framework/featuredata';
import 'oskari-bundle!oskari-frontend/bundles/framework/coordinatetool';
import 'oskari-bundle!oskari-frontend/bundles/framework/timeseries';
import 'oskari-lazy-bundle?maplegend!oskari-frontend/bundles/framework/maplegend';
import 'oskari-lazy-bundle?statsgrid!oskari-frontend/bundles/statistics/statsgrid';
import 'oskari-bundle!oskari-frontend/bundles/framework/rpc';
import 'oskari-lazy-bundle?layerswipe!oskari-frontend/bundles/mapping/layerswipe';
// So someone could potentially query metadata through RPC and an embedded map:
import 'oskari-lazy-bundle?metadatasearch!oskari-frontend/bundles/catalogue/metadatasearch';

import './css/overwritten.css';
