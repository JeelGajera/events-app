import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const EventMenu = ({onPress, name}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text style={styles.category}>{name}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    category: {
        fontSize: 22,
        textTransform: 'capitalize',
        color: '#f8b34b',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'rgb(15,22,37)',
        textAlign: 'center',
    },
});

export default EventMenu;