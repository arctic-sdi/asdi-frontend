/**
 * Definition for bundle. See source for details.
 * @class Oskari.projection.change.Bundle
 */
Oskari.clazz.define('Oskari.projection.change', function () {

}, {
    create: function () {
        return Oskari.clazz.create(
            'Oskari.projection.change.instance',
            'projection-change'
        );
    }
}, {
    protocol: ['Oskari.bundle.Bundle', 'Oskari.mapframework.bundle.extension.ExtensionBundle'],
    source: {
        scripts: [
            {
                type: 'text/javascript',
                src: './instance.js'
            }, {
                type: 'text/javascript',
                src: './plugin/ProjectionChangerPlugin.js'
            }, {
                type: 'text/css',
                src: './resources/css/style.css'
            }
        ],
        locales: [
            {
                lang: 'en',
                type: 'text/javascript',
                src: './resources/locale/en.js'
            }, {
                lang: 'fi',
                type: 'text/javascript',
                src: './resources/locale/fi.js'
            }, {
                lang: 'sv',
                type: 'text/javascript',
                src: './resources/locale/sv.js'
            }, {
                lang: 'fr',
                type: 'text/javascript',
                src: './resources/locale/fr.js'
            }, {
                lang: 'ru',
                type: 'text/javascript',
                src: './resources/locale/ru.js'
            }
        ]
    },
    bundle: {
        manifest: {
            'Bundle-Identifier': 'projection-change',
            'Bundle-Name': 'projection-change',
            'Bundle-Author': [{
                Name: 'MMLDEV',
                Organisatpation: 'nls.fi',
                Temporal: {
                    Start: '2018',
                    End: '2018'
                },
                Copyleft: {
                    License: {
                        'License-Name': 'EUPL',
                        'License-Online-Resource': 'http://www.paikkatietoikkuna.fi/license'
                    }
                }
            }],
            'Bundle-Verspation': '1.0.0',
            'Import-Namespace': ['Oskari'],
            'Import-Bundle': {}
        }
    },
    dependencies: ['jquery']
});

Oskari.bundle_manager.installBundleClass('asdi-projection-change', 'Oskari.projection.change');
