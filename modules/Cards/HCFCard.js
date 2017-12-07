import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import hcfCardStyles from './styles/hcfCard.styles';
import cardImages from './card.images';
import { getFocusStyle } from '../../utils/textFocus';

export const HCFCard = ({
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
  showIssueNumber,
  showRank,
  showSwipeBar,
}) => (
  <FlipCard
    style={[cardStyle, hcfCardStyles.medibankBackgroundColor]}
    friction={6}
    perspective={1000}
    flipVertical={false}
    flip={showBack}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height, paddingBottom: 10 }]}>
      <Image source={{ uri: cardImages.hcf.bgUri }} style={[commonStyles.bgImage, { width, height }]} />
      <View style={[commonStyles.row]}>
        <View style={[commonStyles.column]}>
          <View>
            <Image source={{ uri: cardImages.hcf.logoUri }} style={hcfCardStyles.logo} />
            <View style={[commonStyles.row, { marginTop: 10 }]}>
              {
                showCardHolderName &&
                  <Text style={[hcfCardStyles.text, getFocusStyle(focus, 'cardHolderName')]}>{cardHolderName}</Text>
              }
            </View>
            <View style={[commonStyles.row]}>
              {
                showMembershipNumber &&
                  <Text style={[hcfCardStyles.text, getFocusStyle(focus, 'memberNumber')]}>
                    Membership: {memberNumber}
                  </Text>
              }
            </View>
            <View style={[commonStyles.row]}>
              {
                showRank &&
                  <View>
                    <Text
                      style={[
                        hcfCardStyles.text,
                        hcfCardStyles.textSmall,
                        getFocusStyle(focus, 'rank'),
                        { marginTop: 2 },
                      ]}
                    >
                      Persons covered:
                    </Text>
                    <Text
                      style={[hcfCardStyles.text, hcfCardStyles.textSmall, getFocusStyle(focus, 'rank')]}
                    >
                      {rank} {cardHolderName}
                    </Text>
                  </View>
              }
            </View>
          </View>
          <View>
            <View style={[commonStyles.row]}>
              {
                showIssueDate &&
                  <Text
                    style={[hcfCardStyles.text, hcfCardStyles.textSmall, getFocusStyle(focus, 'issueDate')]}
                  >
                    Issue date: {issueDate}
                  </Text>
              }
              {
                showIssueNumber &&
                  <Text
                    style={[hcfCardStyles.text, hcfCardStyles.textSmall, getFocusStyle(focus, 'issueNumber')]}
                  >
                    Card {issueNumber}
                  </Text>
              }
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={[commonStyles.back, { width, height }]}>
      {showSwipeBar && <View style={commonStyles.bar} />}
    </View>
  </FlipCard>
);

HCFCard.propTypes = {
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
  showIssueNumber: PropTypes.bool,
  showRank: PropTypes.bool,
  showBack: PropTypes.bool,
};

export default HCFCard;
