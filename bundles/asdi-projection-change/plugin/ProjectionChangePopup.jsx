import React from 'react';
import { showPopup } from 'oskari-ui/components/window';
import styled from 'styled-components';
import { Message, Confirm } from 'oskari-ui';
import { InfoIcon } from 'oskari-ui/components/icons';
import { WarningIcon } from 'oskari-ui';
import { ThemeProvider } from 'oskari-ui/util';

const BUNDLE_KEY = 'projection-change';

const ViewsContainer = styled('div')`
    display: flex;
    flex-direction: row;
    width: 575px;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
`;

const View = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px 20px 10px;
`;

const ViewImage = styled('img')`
    width: 145px;
    cursor: pointer;
    border: ${props => props.active ? '2px solid rgb(12,60,98)' : 'none'};
    border-radius: 50%;
`;

const ViewText = styled('span')`
    margin-top: 5px;
`;

const Info = styled('span')`
    margin-left: 5px;
`;

const Warning = styled('span')`
    margin-left: 5px;
    cursor: pointer;
`;

const getImageUrl = (srsName) => {
    const name = srsName.replace(':', '');
    return '/Oskari/bundles/asdi-projection-change/resources/images/' + name + '.png';
};

const checkSupported = (srsName) => {
    const layers = Oskari.getSandbox().getMap().getLayers();
    const unsupportedLayers = layers.filter((layer) => {
        return !layer.isSupported(srsName);
    });
    return unsupportedLayers;
}

const PopupContent = ({ views, changeView, currentView, showDescription }) => {
    return (
        <ThemeProvider>
            <ViewsContainer>
                {views?.map(view => (
                    <View key={view.srsName}>
                        <ViewImage onClick={() => changeView(view.uuid, view.srsName)} src={getImageUrl(view.srsName)} active={currentView === view.srsName} />
                        <ViewText>
                            <Message bundleKey={BUNDLE_KEY} messageKey={`projectionCode.${view.srsName}.displayName`} />
                            <Info
                                onClick={() => showDescription(getImageUrl(view.srsName), view.srsName)}
                            >
                                <InfoIcon title={<Message bundleKey={BUNDLE_KEY} messageKey='infoPopup.title'/>} />
                            </Info>
                            {checkSupported(view.srsName)?.length > 0 && (
                                <Confirm
                                    title={
                                        <div>
                                            <Message bundleKey={BUNDLE_KEY} messageKey='error.desc'/>
                                            <ul className="projection-errorlist">
                                                {checkSupported(view.srsName)?.map((unsupported, index) => (
                                                        <li key={index}>{unsupported.getName()}</li>
                                                ))} 
                                            </ul>
                                        </div>
                                    }
                                    showCancel={false}
                                >
                                    <Warning>
                                        <WarningIcon title={Oskari.getMsg(BUNDLE_KEY, 'error.hover.icon')} />
                                    </Warning>
                                </Confirm>
                            )}
                        </ViewText>
                    </View>
                ))}
            </ViewsContainer>
        </ThemeProvider>
    );
}

export const showProjectionChangePopup = (views, changeView, currentView, showDescription, onClose) => {
    return showPopup(
        <Message bundleKey={BUNDLE_KEY} messageKey='title' />,
        <PopupContent views={views} changeView={changeView} currentView={currentView} showDescription={showDescription} />,
        onClose,
        {}
    );
};