import React from 'react';
import PropTypes from 'prop-types';

import GenericCard from './GenericCard';

/*eslint-disable*/
const defaultLogo = 'data:image/png;base64,';
/*eslint-enable*/

export const BupaCard = (props) => {
  return GenericCard({ ...props, type: 'bupa', applyBackgroundImage: true });
}

BupaCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  logo: PropTypes.string,
  logoStyle: PropTypes.object,
  cardHolderName: PropTypes.string,
  cardStyle: PropTypes.array,
  showSwipeBar: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  focus: PropTypes.string,
  issueDate: PropTypes.string,
  issueNumberPosition: PropTypes.string,
  issueDateText: PropTypes.string,
  issueNumber: PropTypes.string,
  issueNumberText: PropTypes.string,
  memberNumber: PropTypes.string,
  memberNumberText: PropTypes.string,
  rank: PropTypes.string,
  rankText: PropTypes.string,
  showCardHolderName: PropTypes.bool,
  showMembershipNumber: PropTypes.bool,
  showIssueDate: PropTypes.bool,
  showRank: PropTypes.bool,
  showIssueNumber: PropTypes.bool,
  showBack: PropTypes.bool,
  applyBackgroundImage: PropTypes.bool,
};

BupaCard.defaultProps = {
  title: 'HEALTH FUND',
  logo: defaultLogo,
  logoStyle: {},
};

export default BupaCard;
