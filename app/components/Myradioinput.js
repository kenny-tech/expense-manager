import React from 'react';
import { View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const Myradioinput = ({ label1,label2,value1,value2,onChangeType,initial }) => {
    let radio_props = [
        {label: label1, value: value1 },
        {label: label2, value: value2 }
    ];
    
    return (
        <View>
            <RadioForm
                radio_props={radio_props}
                formHorizontal={true}
                onPress={onChangeType}
                style={{marginHorizontal: 10}}
                initial={initial}
            />
        </View>
    );
}

export default Myradioinput;