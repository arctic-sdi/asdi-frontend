/**
 * Definition for bundle. See source for details.
 *
 * @class Oskari.elf.geolocator.Bundle
 */
Oskari.clazz.define('Oskari.asdi.logo.Bundle', function () {

}, {
    create: function () {
        return Oskari.clazz.create(
            'Oskari.asdi.logo.BundleInstance',
            'asdi-logo-plugin');
    },
    update: function (manager, bundle, bi, info) {
    }
}, {
    protocol: [
        'Oskari.bundle.Bundle',
        'Oskari.mapframework.bundle.extension.ExtensionBundle'
    ],
    source: {

        scripts: [
            {
                type: 'text/javascript',
                src: './instance.js'
            }, {
                type: 'text/javascript',
                src: './resources/locale/en.js'
            }, {
                type: 'text/javascript',
                src: './resources/locale/fi.js'
            }, {
                type: 'text/javascript',
                src: './resources/locale/se.js'
            }, {
                type: 'text/javascript',
                src: './resources/locale/fr.js'
            }, {
                type: 'text/javascript',
                src: './resources/locale/ru.js'
            }
        ]
    },
    bundle: {
        manifest: {
            'Bundle-Identifier': 'asdi-logo-plugin',
            'Bundle-Name': 'asdi-logo-plugin;',
            'Bundle-Author': [{
                Name: 'jjk',
                Organisation: 'nls.fi',
                Temporal: {
                    Start: '2017'
                },
                Copyleft: {
                    License: {
                        'License-Name': 'EUPL',
                        'License-Online-Resource': 'http://www.oskari.org/documentation/development/license'
                    }
                }
            }],
            'Bundle-Name-Locale': {
                fi: {
                    Name: 'logo',
                    Title: 'logo'
                },
                en: {}
            },
            'Bundle-Version': '1.0.0',
            'Import-Namespace': ['Oskari', 'jquery'],
            'Import-Bundle': {}
        }
    },
    /**
     * @static
     * @property dependencies
     */
    dependencies: ['jquery']

});

Oskari.bundle_manager.installBundleClass('asdi-logo-plugin',
    'Oskari.asdi.logo.Bundle');
