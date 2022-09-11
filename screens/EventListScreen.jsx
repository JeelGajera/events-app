import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Button, Linking } from 'react-native';
import EventList from "../components/EventList";
import { SafeAreaView } from 'react-native-safe-area-context';

const EventListScreen = ({ route, navigation }) => {
    const [eventList, setEventList] = useState([]);

    const getEvents = async () => {
        try {
            const response = await fetch(
                `${route.params.item['data']}`
            );
            const json = await response.json();
            setEventList(json["item"]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getEvents();
    });

    const [isList, setList] = useState(true);

    const EventGridView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Browser', { item })}>
                <View style={styles.gridContainer}>
                    <EventList event={item} type="grid" />
                </View>
            </TouchableOpacity>
        )
    };

    const EventListView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Browser', { item })}>
                <View style={styles.listContainer}>
                    <EventList event={item} type="list" />
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.toggle}>
                    {isList == true && (
                        <TouchableOpacity>
                            <Button title="Grid View" onPress={() => setList(!isList)} />
                        </TouchableOpacity>
                    )}
                    {isList == false && (
                        <TouchableOpacity>
                            <Button title="List View" onPress={() => setList(!isList)} />
                        </TouchableOpacity>
                    )}
                </View>
                {isList == true && (
                    <SafeAreaView>
                        <FlatList
                            style={styles.list}
                            stickyHeaderHiddenOnScroll={true}
                            data={eventList}
                            renderItem={EventListView}
                        />
                    </SafeAreaView>
                )}
                {isList == false && (
                    <SafeAreaView>
                        <FlatList
                            style={styles.list}
                            stickyHeaderHiddenOnScroll={true}
                            data={eventList}
                            renderItem={EventGridView}
                            numColumns={2}
                        />
                    </SafeAreaView>
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    gridContainer: {
        width: 180,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 10,
        backgroundColor: 'rgb(211, 189, 189)',
    },
    listContainer: {
        height: 180,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,
        backgroundColor: 'rgb(211, 189, 189)',
    },
    toggle: {
        alignItems: 'flex-end',
        marginRight: 20,
    },
    list: {
        marginBottom: 20,
    }
});

export default EventListScreen;