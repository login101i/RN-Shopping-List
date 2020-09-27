import React from 'react'

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const ListItem = ({ item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItems}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
            {/* <Icon name="rocket" size={30} color="#900"/> */}
            <Text 
            style={styles.delete}
            onPress={()=>deleteItem(item.id)}>X</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItems: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1

    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 20,
        fontWeight:'600'

    },
    delete:{
        fontSize:21,
        color:'red',
        fontWeight:'700',
        paddingRight:12,
        scaleX:1.4
    }
})

export default ListItem