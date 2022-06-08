import { useRef, useState } from "react"
import { StyleSheet, View, Button, TextInput, Alert, TouchableHighlight, Text, ScrollView } from "react-native"

import AddItem from "./components/AddItem"
import List from "./components/List"

export default function App() {
    const [tasks, setTasks] = useState([])

    const handleButton = (task) => {
        setTasks([...tasks, task])
    }

    const handleClearButton = () => {
        setTasks([])
    }

    return (
        <View style={styles.container}>
            <AddItem handleAddButton={handleButton} handleClearAllButton={handleClearButton} />

            <List taskList={tasks} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginTop: 60,
    },
})
