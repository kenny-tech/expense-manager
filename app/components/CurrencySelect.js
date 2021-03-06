import React from 'react';
import { Picker } from '@react-native-picker/picker';

const CurrencySelect = ({ types,defaultValue,onValueChange }) => {

    return (
        <Picker
            selectedValue={defaultValue}
            style={{ height: 40, width: 150, marginHorizontal: 5 }}
            onValueChange={onValueChange}
        > 
            {
                types.map(type => {
                    return (
                        <Picker.Item key={type.rowid} label={type.name} value={type.symbol} />
                    )
                })
            }
        </Picker>
    )
}

export default CurrencySelect;