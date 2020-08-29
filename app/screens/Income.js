import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FormView from '../components/FormView';
import Mytextinput from '../components/Mytextinput';
import Myradioinput from '../components/Myradioinput';
import Mydateinput from '../components/MyDateinput';
import Myselectinput from '../components/Myselectinput';
import styles from '../styles/style';

const Income = ({ navigation }) => {
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    const categories = [
        { label: 'Business', value: 'Business' },
        { label: 'Clothing', value: 'Clothing' },
        { label: 'Drinks', value: 'Drinks' },
        { label: 'Education', value: 'Education' },
        { label: 'Food', value: 'Food' },
        { label: 'Salary', value: 'Salary' },
    ];

    const modes = [
        { label: 'Cash', value: 'Cash' },
        { label: 'Credit Card', value: 'Credit Card' },
        { label: 'Debit Card', value: 'Debit Card' },
        { label: 'Bank', value: 'Bank' },
        { label: 'Cheque', value: 'Cheque' },
    ];

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Icon name="check" size={30} style={styles.check}/>
          ),
        });
    }, [navigation]);

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <FormView 
                        label="Type" 
                        inputType={<Myradioinput label1="Income          " value1="Income" label2="Expense" value2="Expense"/>}
                    />
                    <FormView 
                        label="Amount" 
                        inputType={<Mytextinput placeholder="Amount" keyboardType="numeric" onChangeText={amount => setAmount(amount)}/>}
                    />
                    <FormView 
                        label="Category"
                        inputType={<Myselectinput types={categories}/>}
                    />
                    <FormView 
                        label="Date" 
                        inputType={<Mydateinput/>}
                    />
                    <FormView 
                        label="Mode"
                        inputType={<Myselectinput types={modes}/>}
                    />
                    <FormView 
                        label="Note"
                        inputType={<Mytextinput placeholder="Note" onChangeText={note => setNote(note)}/>}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default Income;