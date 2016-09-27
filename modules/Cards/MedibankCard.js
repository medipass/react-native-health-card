import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import medibankCardStyles from './styles/medibankCard.styles';

/*eslint-disable*/
const logoUri = 'data:image/png;base64,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';
/*eslint-enable*/

export const MedibankCard = ({
  cardStyle,
  width,
  height,
  issueDate,
  issueNumber,
  memberNumber,
  rank,
  showBack,
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
    flip={showBack}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height }]}>
      <View style={[commonStyles.row, { justifyContent: 'flex-end' }]}>
        <Image source={{ uri: logoUri }} style={medibankCardStyles.logo} />
      </View>
      <View style={[commonStyles.row, { marginTop: 20 }]}>
        {
          showRank &&
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={[commonStyles.text]}>{rank}</Text>
              <Text style={[commonStyles.text, { marginLeft: 10, marginTop: 2, fontSize: 12 }]}>John Smith</Text>
            </View>
        }
      </View>
      <View style={[commonStyles.row, { marginTop: 40 }]}>
        <View>
          {
            showMembershipNumber &&
              <View>
                <Text style={[commonStyles.text, commonStyles.title]}>MEMBERSHIP NO</Text>
                <Text style={[commonStyles.text]}>{memberNumber}</Text>
              </View>
          }
        </View>
        <View>
          {
            showIssueDate &&
              <View>
                <Text style={[commonStyles.text, commonStyles.title, { textAlign: 'right' }]}>
                  ISSUE DATE
                </Text>
                <Text style={[commonStyles.text, { textAlign: 'right' }]}>{issueDate}</Text>
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
              <Text style={[commonStyles.text, commonStyles.title, { textAlign: 'right' }]}>
                ISSUE NUMBER
              </Text>
              <Text style={[commonStyles.text, { textAlign: 'right' }]}>{issueNumber}</Text>
            </View>
        }
      </View>
    </View>
  </FlipCard>
);

MedibankCard.propTypes = {
  cardStyle: PropTypes.array,
  showSwipeBar: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  issueDate: PropTypes.string,
  issueNumber: PropTypes.string,
  memberNumber: PropTypes.string,
  rank: PropTypes.string,
  showMembershipNumber: PropTypes.bool,
  showIssueDate: PropTypes.bool,
  showRank: PropTypes.bool,
  showIssueNumber: PropTypes.bool,
  showBack: PropTypes.bool,
};

export default MedibankCard;
