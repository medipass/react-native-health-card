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
  issueDate,
  issueDateFormat,
  issueNumber,
  issueNumberLength,
  memberNumber,
  memberNumberLength,
  rank,
  rankLength,
  style,
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
          cardStyle,
          issueDate: parseIssueDate(issueDate, issueDateFormat),
          issueNumber: padNumber(issueNumber, issueNumberLength),
          memberNumber: padNumber(memberNumber, memberNumberLength),
          rank: padNumber(rank, rankLength),
          showSwipeBar,
        })
      }
    </View>
  );
};

HealthCard.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  bgColor: PropTypes.string,
  issueDate: PropTypes.string,
  issueDateFormat: PropTypes.string,
  issueNumber: PropTypes.string,
  issueNumberLength: PropTypes.number,
  memberNumber: PropTypes.string,
  memberNumberLength: PropTypes.number,
  rank: PropTypes.string,
  rankLength: PropTypes.number,
  style: PropTypes.object,
  showSwipeBar: PropTypes.bool,
  type: PropTypes.string,
};

HealthCard.defaultProps = {
  bgColor: '#419dff',
  height: 180,
  type: 'generic',
  width: 300,
  memberNumberLength: 8,
  issueDateFormat: 'dd/mm/yyyy',
  rankLength: 2,
  issueNumberLength: 2,
};

export default HealthCard;
