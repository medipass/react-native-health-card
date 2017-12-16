import React, { createElement } from 'react';
import PropTypes, { element } from 'prop-types';

import {
    View,
} from 'react-native';

import { getCardComponent } from './modules/Cards';
import { parseIssueDate, padNumber } from './utils/cardData';
import styles from './common.styles';

export const HealthCard = (props) => {
    const cardStyle = [
        styles.container,
        { width: props.width, height: props.height, backgroundColor: props.bgColor },
        props.style,
    ];
    const cardComponent = getCardComponent(props.type);

    const elements = Object.assign({ cardStyle }, props);
    elements.cardNumber = padNumber(props.cardNumber, props.cardNumberLength);
    elements.issueDate = parseIssueDate(props.issueDate, props.issueDateFormat);
    elements.issueNumber = padNumber(props.issueNumber, props.issueNumberLength);
    elements.memberNumber = padNumber(props.memberNumber, props.memberNumberLength);
    elements.rank = padNumber(props.rank, props.rankLength);
    return (
        <View>
            {
                createElement(cardComponent, {...elements})
            }
        </View>
    );
};

HealthCard.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    logoStyle: PropTypes.object,
    bgColor: PropTypes.string,
    height: PropTypes.number,
    cardHolderName: PropTypes.string,
    cardNumber: PropTypes.string,
    cardNumberLength: PropTypes.number,
    focus: PropTypes.string,
    issueDate: PropTypes.string,
    issueDateText: PropTypes.string,
    issueDateFormat: PropTypes.string,
    issueNumber: PropTypes.string,
    issueNumberPosition: PropTypes.string,
    issueNumberText: PropTypes.string,
    issueNumberLength: PropTypes.number,
    issueNumberFieldStyle: PropTypes.object,
    issueNumberTextStyle: PropTypes.object,
    issueNumberTextHighlightStyle: PropTypes.object,
    memberNumberPosition: PropTypes.string,
    memberNumber: PropTypes.string,
    memberNumberText: PropTypes.string,
    memberNumberLength: PropTypes.number,
    memberNumberFieldStyle: PropTypes.object,
    memberNumberTextStyle: PropTypes.object,
    memberNumberTextHighlightStyle: PropTypes.object,
    rankPosition: PropTypes.string,
    rankText: PropTypes.string,
    rankLength: PropTypes.number,
    rankFieldStyle: PropTypes.object,
    rankTextStyle: PropTypes.object,
    rankTextHighlightStyle: PropTypes.object,
    style: PropTypes.object,
    showBack: PropTypes.bool,
    showCardNumber: PropTypes.bool,
    showCardHolderName: PropTypes.bool,
    showIssueNumber: PropTypes.bool,
    showIssueDate: PropTypes.bool,
    showMembershipNumber: PropTypes.bool,
    showRank: PropTypes.bool,
    showSwipeBar: PropTypes.bool,
    type: PropTypes.string,
    width: PropTypes.number,
};

HealthCard.defaultProps = {
    logoStyle: {},
    bgColor: '#419dff',
    cardHolderName: 'John Smith',
    cardNumberLength: 8,
    height: 180,
    type: 'generic',
    width: 300,
    focus: 'all',
    memberNumberPosition: 'front',
    memberNumberText: 'MEMBERSHIP NO',
    memberNumberLength: 8,
    memberNumberFieldStyle: { position: 'absolute', flexDirection: 'column', bottom: '50%', left: '5%', alignItems: 'flex-start' },
    memberNumberTextStyle: { fontWeight: 'normal' },
    memberNumberTextHighlightStyle: { fontWeight: 'bold' },
    issueDateText: 'ISSUE DATE',
    issueDateFormat: 'dd/mm/yyyy',
    rankPosition: 'back',
    rankLength: 2,
    rankText: 'RANK',
    rankFieldStyle: { position: 'absolute', flexDirection: 'row', bottom: '30%', left: '5%', alignItems: 'flex-end' },
    rankTextStyle: { fontWeight: 'normal' },
    rankTextHighlightStyle: { fontWeight: 'bold' },
    issueNumberPosition: 'back',
    issueNumberText: 'ISSUE NUMBER',
    issueNumberLength: 2,
    issueNumberFieldStyle: { position: 'absolute', flexDirection: 'row', top: '7%', left: '5%' },
    issueNumberTextStyle: { fontWeight: 'normal' },
    issueNumberTextHighlightStyle: { fontWeight: 'bold' },
    showBack: false,
    showCardNumber: true,
    showCardHolderName: true,
    showMembershipNumber: true,
    showIssueNumber: true,
    showIssueDate: true,
    showRank: true,
};

export default HealthCard;
