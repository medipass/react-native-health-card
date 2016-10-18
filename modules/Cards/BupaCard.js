import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import bupaCardStyles from './styles/bupaCard.styles';
import cardImages from './card.images';
import { getFocusStyle } from '../../utils/textFocus';

const backAttributes = ['cardNumber'];

export const MedibankCard = ({
  cardHolderName,
  cardNumber,
  cardStyle,
  width,
  height,
  focus,
  memberNumber,
  rank,
  showBack,
  showCardHolderName,
  showCardNumber,
  showMembershipNumber,
  showRank,
  showSwipeBar,
}) => (
  <FlipCard
    style={[cardStyle, bupaCardStyles.bupaBackgroundColor]}
    friction={6}
    perspective={1000}
    flipVertical={false}
    flip={showBack || backAttributes.includes(focus)}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height, flexDirection: 'column', justifyContent: 'space-between' }]}>
      <View style={[commonStyles.row, { justifyContent: 'flex-end' }]}>
        {
          showRank &&
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
              <Text style={[getFocusStyle(focus, 'rank', '#828282')]}>{rank}</Text>
              {
                showCardHolderName &&
                  <Text
                    style={[getFocusStyle(focus, 'cardHolderName', '#828282'), {
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
        <Image source={{ uri: cardImages.bupa.logoUri }} style={bupaCardStyles.logo} />
      </View>
      <View style={[commonStyles.row]}>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          {
            showMembershipNumber &&
              <View>
                <Text
                  style={[commonStyles.title, getFocusStyle(focus, 'memberNumber', '#828282')]}
                >
                  Membership number:
                </Text>
                <Text style={[getFocusStyle(focus, 'memberNumber', '#828282'), { fontSize: 18 }]}>
                  {memberNumber}
                </Text>
              </View>
          }
        </View>
      </View>
    </View>
    <View style={[commonStyles.back, bupaCardStyles.cardBack, { width, height, padding: 8 }]}>
      <View style={[commonStyles.row]}>
        {
          showCardNumber &&
            <View>
              <Text
                style={[commonStyles.title, getFocusStyle(focus, 'cardNumber', '#828282'), {
                  textAlign: 'right',
                }]}
              >
                Card No: {cardNumber}
              </Text>
            </View>
        }
      </View>
      {showSwipeBar && <View style={[commonStyles.bar, { backgroundColor: '#84cbff' }]} />}
    </View>
  </FlipCard>
);

MedibankCard.propTypes = {
  cardNumber: PropTypes.string,
  cardHolderName: PropTypes.string,
  cardStyle: PropTypes.array,
  showSwipeBar: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  focus: PropTypes.string,
  memberNumber: PropTypes.string,
  rank: PropTypes.string,
  showCardHolderName: PropTypes.bool,
  showCardNumber: PropTypes.bool,
  showMembershipNumber: PropTypes.bool,
  showRank: PropTypes.bool,
  showBack: PropTypes.bool,
};

export default MedibankCard;
