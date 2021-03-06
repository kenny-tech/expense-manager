import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FormView from '../components/FormView';
import Mytextinput from '../components/Mytextinput';
import Mydateinput from '../components/MyDateinput';
import Myselectinput from '../components/Myselectinput';
import Mybutton from '../components/Mybutton';
import styles from '../styles/style';
import { DB } from '../model/db';

const EditTransaction = ({ route, navigation }) => {

    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [mode, setMode] = useState('');
    const [note, setNote] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [categories, setCategories] = useState([]);
    const [modes, setModes] = useState([]);

    let transaction_id  = route.params.transaction_id;

    useEffect(() => {
        getCategories();
        getModes();
        currentDate();
        getTransaction(transaction_id);
    }, []);    

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={() => handleDeleteTransaction()}>
                <Icon name="trash" size={30} style={styles.check}/>
            </TouchableOpacity>            
          ),
        });
    }, [navigation]);

    const getCategories = () => {
        DB.transaction(tx => {
            tx.executeSql('SELECT rowid, name FROM categories', [], (tx, results) => {
                let allCategories = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    allCategories.push(results.rows.item(i));
                }
                setCategories(allCategories);
            })
        });
    }

    const getModes = () => {
        DB.transaction(tx => {
            tx.executeSql('SELECT rowid, name FROM modes', [], (tx, results) => {
                let allModes = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    allModes.push(results.rows.item(i));
                }
                setModes(allModes);
            })
        });
    }

    const currentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd; 
        setDate(today);
    }

    const getTransaction = (transaction_id) => {
        DB.transaction(tx => {
            tx.executeSql('SELECT rowid, type, amount, category, date, mode, note FROM transactions WHERE rowid = ?', [transaction_id], (tx, results) => {

                setType(results.rows.item(0).type);
                setAmount(results.rows.item(0).amount);
                setCategory(results.rows.item(0).category);
                setDate(results.rows.item(0).date);
                setMode(results.rows.item(0).mode);
                setNote(results.rows.item(0).note);
                setTransactionId(transId)
            })
        });
    }

    const handleSubmit = () => {
        if(amount.trim() != '') {
            DB.transaction(tx => {
                tx.executeSql('UPDATE transactions SET type=?, amount=?, category=?, date=?, mode=?, note=? WHERE rowid=?', [type, amount, category, date, mode, note, transaction_id], (tx, results) => {
                    if(results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'Transaction successfully updated',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.goBack(),
                                },
                            ],
                            { cancelable: false}
                        );
                    } else {
                        Alert.alert('Error', 'Failed to update transaction. Please try again')
                    }
                })
            })
        } else {
            Alert.alert('Error', 'Please enter an amount')
        }
    }

    const handleDeleteTransaction = () => {
        Alert.alert(
            'Delete Transaction',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    cancelable: true
                },
                {
                    text: 'Ok',
                    onPress: () => deleteTransaction(transaction_id),
                }
            ],
            { cancelable: true}
        );
    }

    const deleteTransaction = (transaction_id) => {
        DB.transaction(tx => {
            tx.executeSql('DELETE FROM transactions WHERE rowid = ?', [transaction_id], (tx, results) => {
                if (results.rowsAffected > 0) {
                    Alert.alert(
                        'Success',
                        'Transaction successfully deleted',
                        [
                            {
                                text: 'Ok',
                                onPress: () => navigation.navigate('Transactions'),
                            },
                        ],
                        { cancelable: false}
                    );
                } else {
                    Alert.alert('Error','Invalid Transaction ID');
                }
            })
        });
    }

    const transaction_types = [
        {
            rowid: 1,
            name: 'Income'
        },
        {
            rowid: 2,
            name: 'Expense'
        }
    ];

    return (
        <View>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <FormView 
                        label="Trasaction Type"
                        inputType={<Myselectinput types={transaction_types} 
                        defaultValue={type}
                        onValueChange={(type) => setType(type)}/>}
                    />
                    <FormView 
                        label="Amount" 
                        inputType={<Mytextinput placeholder="Amount" keyboardType="numeric" onChangeText={amount => setAmount(amount)} defaultValue={amount}/>}
                    />
                    <FormView 
                        label="Category"
                        inputType={<Myselectinput types={categories} 
                        defaultValue={category}
                        onValueChange={(category) => setCategory(category)}/>}
                    />
                    <FormView 
                        label="Date" 
                        inputType={<Mydateinput defaultDate={date} onDateChange={(date) => {setDate(date)}}/>}
                    />
                     <FormView 
                        label="Mode"
                        inputType={<Myselectinput types={modes} 
                        defaultValue={mode}
                        onValueChange={(mode) => setMode(mode)}/>}
                    />
                    <FormView 
                        label="Note"
                        inputType={<Mytextinput placeholder="Note" onChangeText={note => setNote(note)} defaultValue={note}/>}
                    />
                    <Mybutton title="Update" customClick={() => handleSubmit()}/>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default EditTransaction;