import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import medibankCardStyles from './styles/medibankCard.styles';
import cardImages from './card.images';
import { getFocusStyle } from '../../utils/textFocus';

const backAttributes = ['issueNumber'];

export const MedibankCard = ({
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
    style={[cardStyle, medibankCardStyles.medibankBackgroundColor]}
    friction={6}
    perspective={1000}
    flipVertical={false}
    flip={showBack || backAttributes.includes(focus)}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height }]}>
      <View style={[commonStyles.row, { justifyContent: 'flex-end' }]}>
        <Image source={{ uri: cardImages.medibank.logoUri }} style={medibankCardStyles.logo} />
      </View>
      <View style={[commonStyles.row, { marginTop: 20 }]}>
        {
          showRank &&
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={[commonStyles.text, getFocusStyle(focus, 'rank')]}>{rank}</Text>
              {
                showCardHolderName &&
                  <Text
                    style={[commonStyles.text, getFocusStyle(focus, 'cardHolderName'), {
                      marginLeft: 10,
                      marginTop: 2,
                      fontSize: 12,
                    }]}
                  >
                    {cardHolderName}
                  </Text>
              }
            </View>
        }
      </View>
      <View style={[commonStyles.row, { marginTop: 40 }]}>
        <View>
          {
            showMembershipNumber &&
              <View>
                <Text
                  style={[commonStyles.text, commonStyles.title, getFocusStyle(focus, 'memberNumber')]}
                >
                  MEMBERSHIP NO
                </Text>
                <Text style={[commonStyles.text, getFocusStyle(focus, 'memberNumber')]}>
                  {memberNumber}
                </Text>
              </View>
          }
        </View>
        <View>
          {
            showIssueDate &&
              <View>
                <Text
                  style={[commonStyles.text, commonStyles.title, getFocusStyle(focus, 'issueDate'), {
                    textAlign: 'right',
                  }]}
                >
                  ISSUE DATE
                </Text>
                <Text style={[commonStyles.text, getFocusStyle(focus, 'issueDate'), { textAlign: 'right' }]}>
                  {issueDate}
                </Text>
              </View>
          }
        </View>
      </View>
    </View>
    <View style={[commonStyles.back, { width, height }]}>
      {showSwipeBar && <View style={commonStyles.bar} />}
      <View style={[commonStyles.row]}>
        {
          showIssueNumber &&
            <View style={[commonStyles.column, { justifyContent: 'flex-end' }]}>
              <Text
                style={[commonStyles.text, commonStyles.title, getFocusStyle(focus, 'issueNumber'), {
                  textAlign: 'right',
                }]}
              >
                ISSUE NUMBER
              </Text>
              <Text style={[commonStyles.text, getFocusStyle(focus, 'issueNumber'), { textAlign: 'right' }]}>
                {issueNumber}
              </Text>
            </View>
        }
      </View>
    </View>
  </FlipCard>
);

MedibankCard.propTypes = {
  cardHolderName: PropTypes.string,
  cardStyle: PropTypes.array,
  showSwipeBar: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
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

export default MedibankCard;
