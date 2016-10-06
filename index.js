import React, { createElement, PropTypes } from 'react';
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
  cardHolderName,
  focus,
  issueDate,
  issueDateFormat,
  issueNumber,
  issueNumberLength,
  memberNumber,
  memberNumberLength,
  rank,
  rankLength,
  style,
  showBack,
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
          cardHolderName,
          cardStyle,
          focus,
          issueDate: parseIssueDate(issueDate, issueDateFormat),
          issueNumber: padNumber(issueNumber, issueNumberLength),
          memberNumber: padNumber(memberNumber, memberNumberLength),
          rank: padNumber(rank, rankLength),
          showBack,
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
  bgColor: PropTypes.string,
  height: PropTypes.number,
  cardHolderName: PropTypes.string,
  focus: PropTypes.string,
  issueDate: PropTypes.string,
  issueDateFormat: PropTypes.string,
  issueNumber: PropTypes.string,
  issueNumberLength: PropTypes.number,
  memberNumber: PropTypes.string,
  memberNumberLength: PropTypes.number,
  rank: PropTypes.string,
  rankLength: PropTypes.number,
  style: PropTypes.object,
  showBack: PropTypes.bool,
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
  bgColor: '#419dff',
  cardHolderName: 'John Smith',
  height: 180,
  type: 'generic',
  width: 300,
  focus: 'all',
  memberNumberLength: 8,
  issueDateFormat: 'dd/mm/yyyy',
  rankLength: 2,
  issueNumberLength: 2,
  showBack: false,
  showCardHolderName: true,
  showMembershipNumber: true,
  showIssueNumber: true,
  showIssueDate: true,
  showRank: true,
};

export default HealthCard;
