import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button } from "react-native"

const List = ({ taskList }) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.touchable} activeOpacity={0.5}>
                <View style={styles.container}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return <FlatList data={taskList} renderItem={renderItem} />
}

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10,
    },
    text: {
        flexBasis: "90%",
        textAlignVertical: "center",
        fontSize: 20,
    },
})

export default List
