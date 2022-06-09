import { useRef, useState } from "react"
import { StyleSheet, View, Button, TextInput } from "react-native"

export default AddItem = ({ handleAddButton, handleClearAllButton }) => {
    const textInput = useRef()

    const [task, setTask] = useState("")

    const handleOnPress = () => {
        textInput.current.clear()
        handleAddButton(task)
    }

    const handleOnClear = () => {
        textInput.current.clear()
        handleClearAllButton(task)
    }

    return (
        <View style={styles.inputContent}>
            <TextInput ref={textInput} style={styles.textInput} value={task} placeholder="new task..." onChangeText={setTask} />
            <Button onPress={handleOnPress} title="Add" color="#880e4f" />
            <Button onPress={handleOnClear} title="Clear" color="#880e4f" />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 5,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#880e4f",
        padding: 5,
        flex: 0.8,
    },
})
