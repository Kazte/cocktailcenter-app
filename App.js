import { useState } from "react"
import { StyleSheet, View } from "react-native"

import AddItem from "./components/AddItem"
import List from "./components/List"

export default function App() {
    const [tasks, setTasks] = useState([])

    const handleButton = (task) => {
        if (task !== "") {
            setTasks((currentList) => [...currentList, { id: Math.random(), value: task }])
        }
    }

    const handleClearButton = () => {
        setTasks([])
    }

    const handleDeleteItem = (id) => {
        setTasks((currentList) => currentList.filter((i) => i.id !== id))
    }

    return (
        <View style={styles.container}>
            <AddItem handleAddButton={handleButton} handleClearAllButton={handleClearButton} />

            <List taskList={tasks} deleteItemFromTasks={handleDeleteItem} />
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
