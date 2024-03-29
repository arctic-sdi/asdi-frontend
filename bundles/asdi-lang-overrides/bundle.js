/**
 * Definition for bundle. See source for details.
 *
 *  var obj = {
        "bundlename":"asdi-lang-overrides" ,
        "metadata": {
            "Import-Bundle": { "asdi-lang-overrides": { "bundlePath": "/Oskari/packages/asdi/bundle/" } }
        }
    }
    appSetup.startupSequence.unshift(obj);

 * @class Oskari.asdi.lang.overrides.Bundle
 */
Oskari.clazz.define('Oskari.asdi.lang.overrides', function () {

}, {
    create: function () {
        return this;
    },
    start: function () {},
    stop: function () {}
}, {
    source: {
        scripts: [],
        locales: [
            {
                lang: 'en',
                type: 'text/javascript',
                src: './resources/locale/en.js'
            },
            {
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
            }
        ]
    }
});

Oskari.bundle_manager.installBundleClass('asdi-lang-overrides', 'Oskari.asdi.lang.overrides');
