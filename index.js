import React, { createElement } from 'react';
import PropTypes from 'prop-types';

import {
  View,
} from 'react-native';

import { getCardComponent } from './modules/Cards';
import { parseIssueDate, padNumber } from './utils/cardData';
import styles from './common.styles';

export const HealthCard = ({
  width,
  height,
  bgColor,
  title,
  logo,
  logoStyle,
  cardHolderName,
  cardNumber,
  cardNumberLength,
  focus,
  issueDate,
  issueDateText,
  issueDateFormat,
  issueNumber,
  issueNumberText,
  issueNumberLength,
  memberNumber,
  memberNumberText,
  memberNumberLength,
  rank,
  rankText,
  rankLength,
  style,
  showBack,
  showCardNumber,
  showCardHolderName,
  showIssueDate,
  showIssueNumber,
  showMembershipNumber,
  showRank,
  showSwipeBar,
  type,
}) => {
  const cardStyle = [
    styles.container,
    { width, height, backgroundColor: bgColor },
    style,
  ];
  const cardComponent = getCardComponent(type);
  return (
    <View>
      {
        createElement(cardComponent, {
          title,
          logo,
          logoStyle,
          cardHolderName,
          cardStyle,
          focus,
          cardNumber: padNumber(cardNumber, cardNumberLength),
          issueDate: parseIssueDate(issueDate, issueDateFormat),
          issueDateText,
          issueNumber: padNumber(issueNumber, issueNumberLength),
          issueNumberText,
          memberNumber: padNumber(memberNumber, memberNumberLength),
          memberNumberText,
          rank: padNumber(rank, rankLength),
          rankText,
          showBack,
          showCardNumber,
          showCardHolderName,
          showIssueDate,
          showIssueNumber,
          showMembershipNumber,
          showRank,
          showSwipeBar,
        })
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
  issueNumberText: PropTypes.string,
  issueNumberLength: PropTypes.number,
  memberNumber: PropTypes.string,
  memberNumberText: PropTypes.string,
  memberNumberLength: PropTypes.number,
  rank: PropTypes.string,
  rankText: PropTypes.string,
  rankLength: PropTypes.number,
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
  memberNumberText: 'MEMBERSHIP NO',
  memberNumberLength: 8,
  issueDateText: 'ISSUE DATE',
  issueDateFormat: 'dd/mm/yyyy',
  rankLength: 2,
  rankText: 'RANK',
  issueNumberText: 'ISSUE NUMBER',
  issueNumberLength: 2,
  showBack: false,
  showCardNumber: true,
  showCardHolderName: true,
  showMembershipNumber: true,
  showIssueNumber: true,
  showIssueDate: true,
  showRank: true,
};

export default HealthCard;
