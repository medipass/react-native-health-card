import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export const PositionableField = (props) => {
    const currentFieldTextStyle = props.isHighlighted && props.fieldTextHighlightStyle ? props.fieldTextHighlightStyle : props.fieldTextStyle;
    return (
        <View style={props.fieldStyle}>
            <Text style={currentFieldTextStyle}>{props.fieldText1}</Text>
            <Text style={currentFieldTextStyle}>{props.fieldText2}</Text>
        </View>
    );
}

PositionableField.propTypes = {
    isHighlighted: PropTypes.bool,
    fieldText1: PropTypes.string,
    fieldText2: PropTypes.string,
    fieldStyle: PropTypes.array,
    fieldTextStyle: PropTypes.array,
    fieldTextHighlightStyle: PropTypes.array,
}

export default PositionableField;