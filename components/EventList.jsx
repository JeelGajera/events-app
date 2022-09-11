import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native';

const EventList = ({ event, type }) => {
    return (
        <>
            <Image style={styles.image} source={{ uri: event.thumb_url }} resizeMode={'cover'} />
            <View style={ type == "list" ? styles.list.container : styles.grid.container}>
                <Text style={type == "list" ? styles.list.name : styles.grid.name}>{event.eventname}</Text>
                <Text style={type == "list" ? styles.list.text : styles.grid.text}>{event.location}</Text>
                <Text style={type == "list" ? styles.list.text : styles.grid.text}>{event.label}</Text>
                <Text style={type == "list" ? styles.list.text : styles.grid.text}>{event.venue.city}</Text>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    
    image: {
        height: 150,
        width: 150,
    },
    list: {
        container: {
            flex: 1,
            flexDirection: "column",
            justifyContent: 'space-evenly',
            height: 150,
        },
        name: {
            textAlign: 'left',
            flex: 1,
            paddingLeft: 10,
            color: "#fff",
        },
        text: {
            textAlign: 'left',
            flex: 1,
            paddingLeft: 10,
        }
    },
    grid: {
        container: {
            flex: 1,
            flexDirection: "column",
            justifyContent: 'space-evenly',
        },
        name: {
            textAlign: 'left',
            flex: 1,
            width: 150,
            color: "#fff",
        },
        text: {
            textAlign: 'left',
            flex: 1,
            width: 150,
        }
    }

});

export default EventList;