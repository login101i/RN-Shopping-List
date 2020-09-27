import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Icon } from 'react-native';

const AddItem = ({ addItem }) => {
    

    const [text, setText] = useState('')

    const onChange = textValue => setText(textValue)
    
 
    return (
        <View>
            <TextInput
                placeholder="Dodaj rzecz.."
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    addItem(text)
                    }}>
        
                    <Text
                        style={styles.addItem}

                    >+</Text>
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        width: '100%',
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",
        zIndex: -23,
        fontSize:15,
        fontWeight:"700",
        paddingLeft:12
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#90EE90',
        justifyContent: 'center'
    },
    addItem: {
        fontSize: 44,
        paddingVertical: 4,
        color:'white'
    }
})
export default AddItem;