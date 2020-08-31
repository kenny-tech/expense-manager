import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homeLinkView: {
        width: 350,
        height: 70,
        borderRadius: 20,
        marginHorizontal: 30,
        marginVertical: 5,
    },
    homeLinkText: {
        fontSize: 18,
        color: '#639eb8',
        fontWeight: 'bold',
        marginLeft: 40
    },
    pieChartView: {
        margin: 20,
        alignItems: 'center'
    },
    formView: {
        width: 380,
        height: 80,
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginHorizontal: 10,
    },
    formViewLabel: {
        color: '#4b81bf',
        padding: 10,
        fontWeight: 'bold',
    },
    textinputView: {
        borderBottomColor: '#696969',
        borderWidth: 1,
        padding: 10,
    },
    check: {
        marginRight: 20,
        color: '#ffffff',
    },
    transactionMonth: {
        width: 150,
        height: 40,
        backgroundColor: '#4b81bf',
        justifyContent: 'center',
        marginTop: 5,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10
    },
    transactionMonthText: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingLeft: 20,
        fontSize: 18
    },
    transactionView: {
        backgroundColor: '#ffffff',
        width: 390,
        height: 530,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    transactionViewText: {
        marginLeft: 30,
        marginTop: 10,
    },
    transactionText: {
        fontSize: 18
    },
    bottomView: {
        width: 390,
        height: 40,
        backgroundColor: '#4b81bf', 
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 10
    },
    bottomViewText: {
        color: 'white',
        fontSize: 16,
        paddingLeft: 20,
        fontWeight: 'bold'
    },
    incomeTextDescriptionBg: {
        backgroundColor: '#006400',
        width: 10,
        height: 10,
        marginTop: 5,
    },
    expenseTextDescriptionBg: {
        backgroundColor: '#C70039',
        width: 10,
        height: 10,
        marginTop: 5
    },
    transaction: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 390,
        height: 40,
        backgroundColor: '#ffffff', 
        marginHorizontal: 80,
        marginTop: 10,
    },
    transactionTextSize: {
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 150,
        marginHorizontal: 5
    }
});