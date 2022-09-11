import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventMenu from '../components/EventMenu';

function HomeScreen({ navigation }) {
  const [cat, setCat] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(
        'https://allevents.s3.amazonaws.com/tests/categories.json'
      );
      const json = await response.json();
      setCat(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Select Event Category</Text>
        {
          cat.map((item, index) => {
            return (
              <EventMenu
                key={index}
                name={item.category}
                onPress={() => navigation.navigate('Events Category', { item })}
              />
            )
          })
        }
        <Text style={styles.footer}>Powered By <Text style={{color: "#3ea4f7"}}>Allevents.in</Text></Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 30,
    padding: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  footer: {
    marginTop: 50,
    textAlign: 'center',
  }
});

export default HomeScreen;