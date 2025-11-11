import './instance';

// register create function for bundleid
Oskari.bundle('asdi-login', () => Oskari.clazz.create(
    'Oskari.asdi.login.BundleInstance',
    'asdi-login',
    'Oskari.asdi.login.Flyout')
);
