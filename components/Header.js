import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
            <Image
                source={{ uri: 'https://avatars3.githubusercontent.com/u/61684821?s=460&u=1124b319926894f0a424bc98c4dfa546ce555bc7&v=4' }}
                style={styles.img}
            />
        </View>
    )
}

Header.defaultProps = {
    title: 'Hakuna Matata'
}



const styles = StyleSheet.create({
    header: {
        height: 60,
        width: '100%',
        padding: 15,
        backgroundColor: 'darkslateblue',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text: {
        fontSize: 22,
        alignItems: 'center',
        color: '#FFF'
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 100 / 2,
    

    }
})
export default Header;