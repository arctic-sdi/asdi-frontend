import React from 'react';
import { showPopup } from 'oskari-ui/components/window';
import styled from 'styled-components';
import { Message } from 'oskari-ui';
import { PrimaryButton, ButtonContainer } from 'oskari-ui/components/buttons';

const BUNDLE_KEY = 'projection-change';

const Content = styled('div')`
    margin: 12px 24px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ViewImage = styled('img')`
    width: 200px;
    margin: 10px 0 10px 0;
`;

export const PopupContent = ({ srsName, imgUrl, onClose }) => {
    return (
        <Content>
            <Message bundleKey={BUNDLE_KEY} messageKey={`projectionCode.${srsName}.desc`} />
            <ViewImage src={imgUrl} />
            <ButtonContainer>
                <PrimaryButton
                    onClick={() => onClose()}
                    type='close'
                />
            </ButtonContainer>
        </Content>
    );
};

export const showProjectionPopup = (imgUrl, srsName, onClose) => {
    return showPopup(
        `${Oskari.getMsg(BUNDLE_KEY, `projectionCode.${srsName}.name`)} [${srsName}]`,
        <PopupContent imgUrl={imgUrl} srsName={srsName} onClose={onClose} />,
        onClose
    );
};
