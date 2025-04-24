import React from 'react';
import ReactDOM from 'react-dom';
import { MapModuleButton } from 'oskari-frontend/bundles/mapping/mapmodule/MapModuleButton';
import { GlobalOutlined } from '@ant-design/icons';
import { showProjectionChangePopup } from './ProjectionChangePopup';
import { showProjectionPopup } from './ProjectionCard';

Oskari.clazz.define('Oskari.projection.change.ProjectionChangerPlugin',
    function (options, localization) {
        this.options = options || {};
        this._clazz = 'Oskari.projection.change.ProjectionChangerPlugin';
        this._defaultLocation = 'top right';
        this._index = 55;
        this._templates = {
            projectionchanger: jQuery('<div class="mapplugin oskari-projection-changer"></div>')
        };
        this._loc = localization;
        this._log = Oskari.log('Oskari.projection.change.ProjectionChangerPlugin');
        this.popupControls = null;
        this.projectionCard = null;
    }, {
        popupCleanup: function () {
            if (this.popupControls) {
                this.popupControls.close();
            }
            this.popupControls = null;
            this.renderButton();
        },
        cardCleanup: function () {
            if (this.projectionCard) {
                this.projectionCard.close();
            }
            this.projectionCard = null;
        },
        showPopup: function () {
            if (!this.popupControls) {
                this.popupControls = showProjectionChangePopup(
                    this.options.views,
                    (uuid, srsName) => this.changeProjection(uuid, srsName),
                    Oskari.getSandbox().getMap().getSrsName(),
                    (imgUrl, srsName) => this.showCard(imgUrl, srsName),
                    () => this.popupCleanup()
                );
            } else {
                this.popupCleanup();
            }
            this.renderButton();
        },
        showCard: function (imgUrl, srsName) {
            if (this.projectionCard) {
                this.cardCleanup();
            }
            this.projectionCard = showProjectionPopup(imgUrl, srsName, () => this.cardCleanup());
        },
        /**
         * @method changeProjection
         * @description reloads the page with a new uuid
         */
        changeProjection: function (uuid, srs) {
            if (!uuid) {
                return;
            }
            let url = window.location.origin;
            if (window.location.pathname && window.location.pathname.length) {
                url += window.location.pathname;
            }
            url += '?uuid=' + uuid;
            const selectedMapLayersParams = this.getSelectedMapLayersUrlParam();
            if (selectedMapLayersParams && selectedMapLayersParams.length > 0) {
                url += selectedMapLayersParams;
            }

            window.location.href = url;
        },
        getSelectedMapLayersUrlParam: function () {
            let maplayerUrlString = '&mapLayers=';
            let layerString = '';
            let layers = this.options.sb.getMap().getLayers();

            if (layers.length === 0) {
                return;
            }
            layers.forEach((layer) => {
                if (layerString !== '') {
                    layerString += ',';
                }
                layerString += layer._id + '+' + layer._opacity;
                if (layer.style) {
                    layerString += '+' + layer.style;
                } else {
                    layerString += '+';
                }
            });
            maplayerUrlString += layerString;
            return maplayerUrlString;
        },
        _createControlElement: function () {
            return this._templates.projectionchanger.clone();
        },
        renderButton: function (element) {
            let el = element;
            if (!element) {
                el = this.getElement();
            };
            if (!el) return;
            // eslint-disable-next-line react/no-deprecated
            ReactDOM.render(
                <MapModuleButton
                    icon={<GlobalOutlined />}
                    iconSize='24px'
                    onClick={() => this.showPopup()}
                    iconActive={!!this.popupControls}
                    title={this._loc.tooltip.tool}
                />,
                el[0]
            );
        },
        createUi: function () {
            if (this.getElement()) {
                return;
            }
            this._element = this._createControlElement();
            this.renderButton(this._element);
            this.addToPluginContainer(this._element);
        },
        /**
     * Handle plugin UI and change it when desktop / mobile mode
     * @method  @public redrawUI
     * @param  {Boolean} mapInMobileMode is map in mobile mode
     * @param {Boolean} forced application has started and ui should be rendered with assets that are available
     */
        redrawUI: function () {
            if (this.getElement()) {
                this.teardownUI(true);
            }
            this.createUi();
        },
        teardownUI: function (stopping) {
            // detach old element from screen
            this.getElement().detach();
            this.removeFromPluginContainer(this.getElement());
        },
        getElement: function () {
            return this._element;
        },
        stopPlugin: function () {
            this.teardownUI(true);
        }
    }, {
        extend: ['Oskari.mapping.mapmodule.plugin.BasicMapModulePlugin'],
        protocol: [
            'Oskari.mapframework.module.Module',
            'Oskari.mapframework.ui.module.common.mapmodule.Plugin'
        ]
    });
