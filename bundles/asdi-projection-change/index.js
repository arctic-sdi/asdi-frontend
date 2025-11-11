import './instance';
import './resources/css/style.css';

// register create function for bundleid
Oskari.bundle('asdi-projection-change', () => Oskari.clazz.create(
    'Oskari.projection.change.instance',
    'projection-change')
);
