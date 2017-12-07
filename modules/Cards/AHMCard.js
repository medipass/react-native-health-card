import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import ahmCardStyles from './styles/ahmCard.styles';
import cardImages from './card.images';
import { getFocusStyle } from '../../utils/textFocus';

const backAttributes = ['rank', 'issueNumber', 'memberNumber', 'cardHolderName'];

export const AHMCard = ({
  cardHolderName,
  cardStyle,
  width,
  height,
  focus,
  issueDate,
  issueNumber,
  memberNumber,
  rank,
  showBack,
  showCardHolderName,
  showMembershipNumber,
  showIssueDate,
  showRank,
  showIssueNumber,
  showSwipeBar,
}) => (
  <FlipCard
    style={[cardStyle, ahmCardStyles.ahmBackground]}
    friction={6}
    perspective={1000}
    flipVertical={false}
    flip={showBack || backAttributes.includes(focus)}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height }]}>
      <View style={commonStyles.row}>
        <Image source={{ uri: cardImages.ahm.logoUri }} style={ahmCardStyles.logo} />
      </View>
      <View style={[commonStyles.row, { marginTop: 70 }]}>
        <View>
          {
            showIssueDate &&
              <View>
                <Text
                  style={[
                    commonStyles.text,
                    commonStyles.title,
                    getFocusStyle(focus, 'issueDate'),
                    { textAlign: 'right' },
                  ]}
                >
                  ISSUE DATE
                </Text>
                <Text
                  style={[
                    commonStyles.text,
                    getFocusStyle(focus, 'issueDate'),
                    { textAlign: 'right' },
                  ]}
                >
                  {issueDate}
                </Text>
              </View>
          }
        </View>
      </View>
    </View>
    <View style={[commonStyles.back, { width, height }, ahmCardStyles.cardBack]}>
      {showSwipeBar && <View style={commonStyles.bar} />}
      <View style={[commonStyles.row, { top: 50, right: 70, justifyContent: 'flex-end' }]}>
        {
          showRank &&
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text style={[ahmCardStyles.textBlack, getFocusStyle(focus, 'rank')]}>{rank}</Text>
              {
                showCardHolderName &&
                  <Text
                    style={[
                      ahmCardStyles.textBlack,
                      getFocusStyle(focus, 'rank'),
                      { fontSize: 12, marginTop: 2, marginLeft: 5 },
                    ]}
                  >
                    {cardHolderName}
                  </Text>
              }
            </View>
        }
      </View>
      <View style={[commonStyles.row]}>
        {
          showMembershipNumber &&
            <View style={[commonStyles.column, { justifyContent: 'flex-end' }]}>
              <Text
                style={[
                  ahmCardStyles.textBlack,
                  commonStyles.title,
                  getFocusStyle(focus, 'memberNumber'),
                ]}
              >
                Member No.
              </Text>
              <Text style={[ahmCardStyles.textBlack, getFocusStyle(focus, 'memberNumber')]}>
                {memberNumber}
              </Text>
              {
                showCardHolderName &&
                  <Text
                    style={[
                      ahmCardStyles.textBlack,
                      getFocusStyle(focus, 'memberNumber'),
                      { fontWeight: 'bold' },
                    ]}
                  >
                    {cardHolderName.split(' ')[0]}
                  </Text>
              }
            </View>
        }
        {
          showIssueNumber &&
            <View style={[commonStyles.column, { justifyContent: 'flex-end' }]}>
              <Text
                style={[
                  ahmCardStyles.textBlack,
                  getFocusStyle(focus, 'issueNumber'),
                  { textAlign: 'right' },
                ]}
              >
                {issueNumber}
              </Text>
            </View>
        }
      </View>
    </View>
  </FlipCard>
);

AHMCard.propTypes = {
  cardHolderName: PropTypes.string,
  cardStyle: PropTypes.array,
  showSwipeBar: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  focus: PropTypes.string,
  issueDate: PropTypes.string,
  issueNumber: PropTypes.string,
  memberNumber: PropTypes.string,
  rank: PropTypes.string,
  showCardHolderName: PropTypes.bool,
  showMembershipNumber: PropTypes.bool,
  showIssueDate: PropTypes.bool,
  showRank: PropTypes.bool,
  showIssueNumber: PropTypes.bool,
  showBack: PropTypes.bool,
};

export default AHMCard;
