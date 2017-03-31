import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import commonStyles from '../../common.styles';
import genericCardStyles from './styles/genericCard.styles';
import { getFocusStyle } from '../../utils/textFocus';

/*eslint-disable*/
const logoUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAATWElEQVR42u3dz0sc9x/H8V1X1yZNm2jc6OIikuQQ6CGXQA49VHoI5BJayCGBQKCHHhZ6CAYKBQuVHiKBYkkgkIOEREIqlVrZWqwkaJRg1EiMdEUT45+yX9/NTr7b7f6Ymc9nZj4z83zAl29bdXacHy8/n/nM5/1JJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJjcHh09+2J19ebGxsadqampi/v/qZWjAiCyisXivZINhCGAyBgfHz9Xcmh3d/cPjhyAUCsp4ggCCKW9vb2/ShpwJAH8hwwe2AyQNr/3bWRk5ExJowAOb9rOfpUHcAD4YWlp6TuFEPEtCEuaZTKZQyYFXy1ybrhCAf1adQWJHy2WxcXFb0se8Hq/C4XCFY37ykg2YErwVdra2noYptafHwG4s7Pzq0f7TBACpoSIZXt7+5ew7fudW7c+DVP4MZADOOTmnTm35h8//kb3/udyuQNhChKvuuu13B+7/zlXOOBjd7eZnp6ejM5fYuzu2GdhCcDzAwO5II453WKgwtzc3NelAO3vQiqGAdga5DGXc86Vj7hLlQyh6xfq7u7+MAz7adBxT3EbgGd9AZOBANPD5dGjR+d17J/MMzbp2PNsELFSMlQ2m+0y+ffTsW/yzNPU48+dgUi79MWl/pLhdPye6+vrPxu6b0nTj/+J7u5j3Cmg1RfyENS9T/1H+o9wDgBafZ6bnZ39SvX3npiYuGBSIDyZm8uH7TzItcMdhLBKlkJMXmg2pcWluh9ej0z70BpMcjshNHROqo97V1jHzR+FczE9PX2ZOwtGC3tLw6sQfDo/fy0qzyINGKk/yJ0Gurs+efbs2feajlGL3c/UVftv9fnzH6N6XugWwwiytGMp4jx4GN9eWYRAXps53tFxWOcHhHHwyam1lZUb3IEIhMxKKMWIjq6XvMriR9dX9jVO50bXDBmgKd1rXYSs25UKQQCm4np+BgcHT3GHwhPDw8OnS1B69uRDACY5Q6VSPp8/yR0LLUwrWhD2kWEPt0/4VaHIAlyL8ghikC3BZtuVtYQJP72Wl5d/4I6GHa3cLt4+E2y2TRcLNqU4E47OGdWo8W9xeGXClNFhnQEYxRfP/ULVGbRId4tbQZ0MEPkdgLdHR89y5NVJcVi5F4iDmJA5lVz2+tldZlNHAJpW0TkqpqamLpIQjOTCw2dMig/s2zjC/pDFrUiOEHdv5UbiMg5Go8olzX5WpsjV+rmgV86Ls/IfJbrJJpucnPySS9W41mC7agD2J/o/4EiaRe41Eic4Sa/XnoX2IHQVgBy50HWZqVDjVZeWSyzcpGqO3QCkuxuJP3p0mXXikopGS7DZ98j0LY5UtFr90IBnQfEIQB5vhJ/cqySWByqLaJpAZiIUi8UHXPIEIN7RWEEcpnWFy68DJO2WdQIB6BdZxW9paek7ur6EoFYV77SlmDrnfQAyxU2NNdjU09OTIfwiTJraXp3IyoXBvfwcArDG8yNa19r/eEvr0MvPWVtb+4lECkZac/f2H0/m5vLcPgRglMh0UN33jGCZzhAH4Zs3b3633lci9AjAuLUMEwpzq2UAkNgxlCwO83r79W+1Tlx5poEU8kxS9ZkAjLvyqG2yWRiWp7/xcnPYBVUk4e3bt38SgM0DkCKnpdJMYeZqEJ9L6XxGkLWbmJi4QDvDfgAy6yfYPwYkBAGoRaFQuCKjydzGzgNwZ2fnV47WOzLC2tXV9REBCC28fllUnqnQjat/Y+n6vrjp6+vrGBoa+sTLz1hcWLhOQtAKdKU8oszyjJoCcP7x4284ajWPT9Kr59gkQ0zoHpCQ0TH568nt2fzG0vm9cSVvL+j+Y1v+Aw5agfZJ1YvzAwM5bsmmN6urAPTz2VcYyXKuumZ5kAjx4/ovqISe19OLotj6cxqAtALtkWtR3n0l/ODpe4EyW8Sv53xeP/D2w8jIyBnVAIzKc1U/XoeSY+VkRhOlq/BePp8/WesikRkl1nxHv2YpRKX4q5tHD7V+JioDIp2dnR97fu3sX6NyzOSarbd+slzr3PFwzOsSQ/JMJyrloBI1VoRzG4BR6grLOfZyVpC8LsOdilC9QmPd+FG5yRuNKLoNwOMdHYejcnxkPnq9HgeDGYhVAJbLFLWVIkTl+AXxxyfA45QiABHbANzfXGvUSsD39vYe9SoAIxqCLQQgQkPH6y+br17djeLNrCPAmv18FMtlyXM7HX8IWY0NvigWi/dULvao1rzT0YK2s43t7e1fonbsns7PX1MZ/f97c3OMOxO+kQf9bgIiqpVOMpnMIb8CMKqtZ7eDYfKqFnckfGe3JSevtngxc0RepzChlL+0XnQFl4PD3xrVEJR3+O7cuvWpne+V0XHuRJigTaYjybOcWuslrK2s3NB5k0hLUpZADEvX14MATHj1KolTus9trRkack3JtSXXmFxr3G4IFZ3vsUn4yUBK2MJPdwCKjY2NO0EfA5m2qHOqmxSB4I5B5Oi4OaS6Sr0Fn4J4hSPoADTleaBU/9ZVGYg7BZH08uXL2yo3hknvDLpdD9arm9+EYyKj06olvOQa4U4BrcAqJpXZV3nw7mXrx6CR3DStP0DDjSrP+0y6waUghJe/u+KhTRoSgK7OF3cGYsPOazGJdwtWG9PC2d/nTq/DX8OhTZoSgGVNW4N236EEYq1YLD4IMPwO+NH6DfpRgyqZJcSVChj2DNGUUUk/P8vrJVDpxgIBGB4ePh2mVl9QASiy2WyXH8eKKstAMNLyIq68IuPluhOydsr+Z6XCFIBSmsuLYyHHulx5hRkZQBy7yFIMws2Mha2trYceBmBaqqLQzQUIQf/nxK6t/dSs26wzACWA6y38Q/gBMWXSguLyHmNllWgJyEaLAjX4tVql6kyQvwuvqwAhYXqp/YpQbJdW4f2x+59b+y7P12TOs0n7K89ZuaqAEJEJ+qWQsJ4nSivLtH0j/ICQCuM6w+Wad4lCoXDFgKIPXVxFQIiZVEjBTRGIREDLhspzR64eICJKISbdefkd/CiAWqsiM4BoaA9zEFrVceSVG49afUkuESDiVJZgNIEUH9XVqrW2BSCGxsfHz4U1CGcKM1cTLguQejHXGUCISan7IMtuKYzWHpyenr5c7+syRa7Wan0A0JAUQnWzEHwAtfge7O9uqywaJQsUceYA6PT+tRBpTXk1EMHrKwCMIrMhGryeYpXJaguiCGkttAABaLG4sHDdSfjMP378jdUKKz9TvBfgAAkAuKO6lrHl0heX+subTElxVb9C8MXq6k3OIgDHJDy8CKXKxb/9mKZHCAJwRLqPnhRNXVm5IduvXBa0HIgtCQ/n/FpT6QCgIS/W0pBngdb27VRcPtHdfYyBEQB+07qweLll9y92ArBCu+b9SXGKAdSkMWjSbj6j3s/oLJTKWQbwHzrK6E9NTV1UCdlmP6vjPUNZPpSzDUBr689ucQHV1llnZ+fHtAIBaLO4uPitX8/WNAVTWmV/ZRofZx2Acusv4XBgQWPLLE0rEIASmaXhNkR6enoyOsPW6bZGRkbOuN334eHh05x9gNafr60oP7dHKxCAJwGScFl2SncgqUyn4+wD8dbqd3j4vc0mn9fGJQDE1JO5ubzL6sv3dIfV3t7eX34HYLl0FwC6v/Yd7+g4rPszt7a2HrrdphQ7oBsMwK+uo/bPVAnAvr6+DgIQQCwDsP9I/xECEEAsAzCbzXYRgAB8CUAvngGuPn/+o9ttymAGAQjAEbeLoG9vb/+iOwBlPrLfQU4AAjEmU9lMeQ8wiACcnp6+zFUA0A32rPyVDwHYphDiVIgGCMDg5wK7DUC6vwBcU1m43M1qa/W29ejRo/NOtyWLLRGAAFQoLYQ0NDT0iY4AlJL8frb+8vn8SU49AOVy+OPj4+f8DkDK4gPQJeXXimsaAlB56c7FhYXrnHIA722+enVXRwgODg6e8ioAVapX0/oD4Gm3spJMT3PyGVLQoMGuterar97e3qOcaQC1pEuaVXc3632fFDSosT9tOvdFZQYLgBhQmR1it3ss/1/9tUwmc0h3V5euLwDHZFS35LHJyckv5bP6E/0fJP5fmj7t1edxVgEYFYKV5fArp9ZJtRnCD0CgTnR3HysFoFAoXKncj5nCzFXCD4DvpItaCtj+brRb+yODKix4BMBXJUPI/F/Zn0bzgCsHVABAi5GRkTOmBKEUc93fpeT+/1p0lNUHgFC1Biu6yGnOCgA/pQ0MwlZOCwBfusEye0Oet5kUgmtraz9xlgBo93r79W/1Bh1MC8LEu+eDAKDOTuiU5/OmeTYIICoc19+7PTp6Vn5wbWXlhgEhyMJHALxr+TULIJnmFnAIAoC/4VdrZobueb62SnIprDkMIIY2NjbueN0a8zMMOaMA7GrVGT5/b26OWRuWMliVX1tfX/95/z+3yNekleh1+S0A8KXrK1Vc7G67+vuWl5d/oBUIIJQBWG/bMl/XyffLgukEIABfqAbOxMTEhUbbdxqAfoQyACgHTbPwUwlAIdPcCEAARgagne0Xi8V7KuFEAAIwLgATNqedyTt5iuHUQgACMC0AbdEQgAkCEAABSAACIAAJQADBBmCLne2P3R37LIgALJfqAgD9AWg3xFQDcG5u7mtafwA8MTg4eMrLNTlUA9DNfvX29h7lzAIIvBWoEoA8+wPgOdVKzo22ncvlOt2E1LNnz74n/AAY3wrc29v7q952ZTDCaVA9mZvLu9kPWaiJMwnAMR2rvOkIwKfz89fcfPbQ0NAnnEUArklxAw0h2O42AN1+plS04ewBUOa2+1lJnt9VbLLVRgAmCT8ARpiamrqoox5fT09Ppl7LzvqsS19c6ne7/eHh4dOcLQDa1Ru9VQjC91VdisXiA5UuLzM9APghWdJo89Wru9aGJQRZ/BxAbLrElfr6+joSLlaj42wACH1r0DI9PX3ZTnf49ujoWU4BgEDlcrkDXgShlM2qF4QJm5VnAMAXOl6crqVQKFyxusa84gIglkEoo9AcXQBGk2ov2Wy2K+FiQINBDwCh1J/o/6A6rCYnJ7+Ur6mu51tnxBgAgtesfNbbt2//3P+25PmBgZyuEJQpehx5AIFyGlxdXV0f7f9Ym44Q3NnZ+ZUzACAIKcVnef+8yvJidfUmIQggTuHXtv+/tPzzmzdvfpcNyisubrc3Ozv7FacEgJHd3uoCpY1Gd92u+iaDMJwZAEaF3/2x+5/b2UbVtyR5RQaAadJOAimbzR60G6K1vk+e7zn5vM7Ozo85RQACb/1tbGzccbIdXS1OzhKAwAPQ6Xbqfa/T0lucJQCRCcB6iygRgAAiH4BOV6bjLAEIPACten6qAcgzQAChC8CKF55VApAS+QDCGYDlQEq6DUDeBQRgjFolr2yGUtppALr8nFbOEgCjWoFCFjy3G4AUSwUQuRDc3d39o0kApgg/AEZTXfdDutKy/GXlc8KlpaXvVLbHWQHgm56enoxKCEqZfNUWZXm+cRdnA0DoQtBqvUmpLDc/K5/PWQAQGClxrxqCq8+f/5hw+Pyvu7v7Q44+ABOkShrIdmSgxM27hQAQKFn9TTUE8/n8SXllptbXrPL5AGAkHc8FrdZg5b/39vYe5egCCAVNIdg2MjJyhqMJIHSk1aYaggQggFAGn9Vt3Xz16q5KCMpL0hxVAMaTFludslitKiHYaI0RAAjc2N2xz5rN1z3R3X3MbQi+WF29yVEGYBy7o79P5uby8v3y8rObEJSQ5WgDMImbys3SLXa7AHo7hxyAEZwGWHm9kKRVzKCvr6+D8lcAQmd2dvYrpyXyq9f6teb1vnz58javxwCIXOtvcHDwVL2fkbV/ra/lcrkDtAIBGO/26OhZNwsjNQpAJ8G6/20pzgIAI1t/8gK0nZ+rFYB2tr+4sHCdswDAyAC0+3NefAYABBaAjQYpCEAAkQ7AbDZ7sN7PbW1tPSQAAUQ2ACsXPfIqAJ/Oz1/jLAAwLgAbBZuDAEw22X4rZwFAIJoVNigUCldq/ZxUdnEzWEL3F0DYWoHp6p+RqXDNgqzeuiBUhgFgjOows9NSsxGAaVp/ACLRCqwOrCYBmGIeMIDQyGQyh5yEoNQErBOAKeYAAwidiYmJC3bDq7pytN1uL+EHwFhrKys37IaY9c/FYvGBvDRN+AEIveXl5R/shtn5gYGc3VL6HFkAoTA+Pn7Obpkswg9A5EiJK9UQZKobgDBLOn0maDne0XGYwwcg9P7e3BxzEoIcMQCRksvlOnnWByDWGgWgrBbHEQIQObI+iLUEZvVMEFqBAGLT8pspzFytN0q8vr7+M0cLQKS7vol3S2WmaQUCiLTh4eHT1dVcrH+WLjEBCCCyapW/qi5tT6l7AJEPwFpdYvl3GQG2/j2Xyx3gqAGIhL6+vg4JNlkMqV4AVv43jhiASCkHW0ujAJQR4N3d3T84WgAiH4i0+AAQgABAAAIAAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAsf8BfeCSTVXmBRsAAAAASUVORK5CYII=';
/*eslint-enable*/

const backAttributes = ['rank', 'issueNumber'];

export const GenericCard = ({
  title,
  cardHolderName,
  cardStyle,
  width,
  height,
  focus,
  issueDate,
  issueDateText,
  issueNumber,
  issueNumberText,
  memberNumber,
  memberNumberText,
  rank,
  rankText,
  showBack,
  showCardHolderName,
  showMembershipNumber,
  showIssueDate,
  showRank,
  showIssueNumber,
  showSwipeBar,
}) => (
  <FlipCard
    style={cardStyle}
    friction={6}
    perspective={1000}
    flipVertical={false}
    flip={showBack || backAttributes.includes(focus)}
    flipHorizontal
    clickable
  >
    <View style={[commonStyles.front, { width, height }]}>
      <View style={commonStyles.row}>
        <Text style={[commonStyles.text, genericCardStyles.healthFundTitle]}>{title}</Text>
        <Image source={{ uri: logoUri }} style={genericCardStyles.logo} />
      </View>
      <View style={[commonStyles.row, { top: 20 }]}>
        {
          showCardHolderName &&
            <Text style={[commonStyles.text, getFocusStyle(focus, 'cardHolderName')]}>{cardHolderName}</Text>
        }
      </View>
      <View style={[commonStyles.row, { marginTop: 20 }]}>
        <View>
          {
            showMembershipNumber &&
              <View>
                <Text style={[commonStyles.text, commonStyles.title, getFocusStyle(focus, 'memberNumber')]}>
                  {memberNumberText}
                </Text>
                <Text style={[commonStyles.text, getFocusStyle(focus, 'memberNumber')]}>{memberNumber}</Text>
              </View>
          }
        </View>
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
                  {issueDateText}
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
      <View style={[commonStyles.row, { top: 60, justifyContent: 'flex-end' }]}>
        {
          showRank &&
            <View>
              <Text style={[commonStyles.text, commonStyles.title, getFocusStyle(focus, 'rank')]}>{rankText}</Text>
              <Text style={[commonStyles.text, getFocusStyle(focus, 'rank'), { textAlign: 'right' }]}>{rank}</Text>
            </View>
        }
      </View>
      <View style={[commonStyles.row]}>
        {
          showIssueNumber &&
            <View style={[commonStyles.column, { justifyContent: 'flex-end' }]}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.title,
                  getFocusStyle(focus, 'issueNumber'),
                  { textAlign: 'right' },
                ]}
              >
                {issueNumberText}
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

GenericCard.propTypes = {
  title: PropTypes.string,
  cardHolderName: PropTypes.string,
  cardStyle: PropTypes.array,
  showSwipeBar: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  focus: PropTypes.string,
  issueDate: PropTypes.string,
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
};

GenericCard.defaultProps = {
  title: 'HEALTH FUND',
};

export default GenericCard;
