import React, { useState } from 'react';
import Header from './components/Header'
import AddItem from './components/AddItem'
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import ListItem from './components/ListItem'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'Jajka' },
    { id: 2, text: 'Chleb' },
    { id: 3, text: 'Makaron' },
    { id: 4, text: 'Makaron' },
    { id: 5, text: 'Szyszki na opał' }
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }


  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', "Proszę podać wartość")
    } else {
      setItems(prevItems => {
        return (
          [{ id:uuidv4(), text }, ...prevItems]


        )
      })
    }
  }


  return (
    <View style={styles.container}>
      <Header title='Lista zakupów' >
      

      </Header>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}

        renderItem={({ item }) => <ListItem
          item={item}
          deleteItem={deleteItem}
        />} />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'darkslateblue',


  },
  text: {
    color: 'darkslateblue',
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },

})
export default App;