import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import ahmCardStyles from './styles/ahmCard.styles';

/*eslint-disable*/
const logoUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABOCAYAAADFAvPwAAAAAXNSR0IArs4c6QAAENhJREFUeAHtnAWwHEUTgCcQ3N0hSHB3J7gF90DhGqCg8EABDyukcC08uLtLcHcrCg3ursHn76/zepm127l7L49c/u2qu92d7emZ6R7p6e7ZXs45L78a2oQDo7VJPetqdnKgFlibdYVaYLXA2owDbVbdeoTVAmszDrRZdesR1mYC6x1T3169ejVE8967KpyQAPhAK3lazdcTZVG3qrbZe3BbgSiBXXTRRW6BBRbI0X/55Zfddtttp+nzzDOPu/TSS3M42YQvvvjCbbzxxu6XX37Rxp1wwglulVVWyaLlnk877TR3ySWXaPqqq67qjjvuuBxONuHVV19122yzjSZPNNFE7oYbbnCTTDJJFi31/Pfff7vNN9/cvfvuu5q+/fbbu9133z2FU/Rw9913u4MPPlhfzTbbbO6qq65yo48+eg514MCB7qmnnsqlxyZECQxhLLTQQjmaYYUmmGCCQpxsph9//DHVkDLa2XwzzjhjkjTFFFNElTXGGGMkebhfZpll3FhjjZWkld2MP/74yauZZpopqqwPP/wwyTPeeOO5RRddNHkOb+g4XYEogf35559axqeffuoef/zxpLw333wzuf/qq6/cddddlzyX3XzzzTfO6IEzZMgQHW1l+Jb+yiuv2K177733osp6++23kzy///67u/zyy92EE06YpBXdMMK+/fbb5NVLL70UVVbIl++++85dc801brTRhqsIdLB+/fopzX/++Seh3eoNC0rDn1RGpl7vb7zxxhyerA25tCp69r4reY3GyHQta8+SSy6p/ONPpvOW+UVbh3cBuYsB6zEhrtQhfGzqvit5myqoh5DL2hMzDcdWMUpgY445ptIL14TYAmo8l0yN8KKo0zfDo6g17Nlnn3XDhg1z4TrSTCH/77isaY8++qiyIVwfW+ELG6yGcxr7l7Kh3kqBdZ6ucaBSYF0jX+fubg5UrmGMsBpGHg5UCozpsKOjw11xxRVu3333HXlq3kY1mWuuuZR/8HC++ebrUs2jlI511lnHLbzwwm7SSSd1J510UpcKjMmMpeCQQw5xWE8Mfv75Z3fMMcc4ru0GU089tRswYIBW+7LLLnOYzFqFKIH99ttvSh9rQU/A2GOP7fbYY4+UwLA9nnzyyW0p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';
/*eslint-enable*/

export const AHMCard = ({
  cardHolderName,
  cardStyle,
  width,
  height,
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
    flip={showBack}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height }]}>
      <View style={commonStyles.row}>
        <Image source={{ uri: logoUri }} style={ahmCardStyles.logo} />
      </View>
      <View style={[commonStyles.row, { marginTop: 70 }]}>
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
    <View style={[commonStyles.back, { width, height }, ahmCardStyles.cardBack]}>
      {showSwipeBar && <View style={commonStyles.bar} />}
      <View style={[commonStyles.row, { top: 50, right: 70, justifyContent: 'flex-end' }]}>
        {
          showRank &&
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text style={[ahmCardStyles.textBlack]}>{rank}</Text>
              {
                showCardHolderName &&
                  <Text style={[ahmCardStyles.textBlack, { fontSize: 12, marginTop: 2, marginLeft: 5 }]}>
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
              <Text style={[ahmCardStyles.textBlack, commonStyles.title]}>
                Member No.
              </Text>
              <Text style={[ahmCardStyles.textBlack]}>{memberNumber}</Text>
              {
                showCardHolderName &&
                  <Text style={[ahmCardStyles.textBlack, { fontWeight: 'bold' }]}>{cardHolderName.split(' ')[0]}</Text>
              }
            </View>
        }
        {
          showIssueNumber &&
            <View style={[commonStyles.column, { justifyContent: 'flex-end' }]}>
              <Text style={[ahmCardStyles.textBlack, { textAlign: 'right' }]}>{issueNumber}</Text>
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
