# React Native Health Card 🏥💳

React Native Health Card is a module that displays a look-a-like health fund card on your react native view!

![rn-health-card](http://i.giphy.com/QdkvFqbEhbbm8.gif)

Inspiration from [@sonnylazuardi](https://github.com/sonnylazuardi/react-native-credit-card) and [@jessepollak](https://github.com/jessepollak/card)

## Usage

- `npm install react-native-health-card --save`
- Now you can require the health card by `import HealthCard from 'react-native-health-card'`!

## Available Props

	Property	|	Type		|	Default		|	Description
:-----------------------|:--------------|:--------------|:--------------------------------
	bgColor	|	string	|	`#419dff`	|	The background color of the health card of type `generic`.
  height | number | `180` | The height of the card.
	issueDate	|	string | N/A | The card issue date. E.g. `12/12/2015`
	issueDateFormat       |       string    |      `dd/mm/yyyy`        |  Format of the issue date in the format of `d`, `m`, and `y`.
  issueNumber | string | N/A | The issue number to display on the card.
  issueNumberLength | string | `2` | The length of the issue number.
  memberNumber | string | N/A | The member number to display on the card.
  memberNumberLength | string | `8` | The member number length.
  rank | string | N/A | The card rank.
  rankLength | string | `2` | The card rank length.
	showBack | bool | `false` | Shows the back of the card.
	showIssueDate | bool | `true` | Shows the card issue date.
	showIssueNumber | bool | `true` | Shows the issue number.
	showMembershipNumber | bool | `true` | Shows the membership number.
  showSwipeBar | bool | `true` | Whether or not to show the black swipe bar on the back of the card.
	showRank | bool | `true` | Shows the rank.
  type | string | `generic` | Type of health fund card. Available options: `generic`, `medibank`. (More coming soon)
  width | number | `300` | The width of the card.

## Example

```javascript
import HealthCard from 'react-native-health-card';

...
<HealthCard
  showSwipeBar
  memberNumber="123456789"
  memberNumberLength={10}
  issueDate="01/01/2015"
  rank="01"
  issueNumber="02"
  showRank={false}
/>
...
```
