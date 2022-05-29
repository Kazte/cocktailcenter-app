import { useRef, useState } from "react"
import { StyleSheet, View, Button, TextInput, Alert, TouchableHighlight, Text, ScrollView } from "react-native"

export default function App() {
    const [task, setTask] = useState(undefined)
    const [tasks, setTasks] = useState([])
    const textInput = useRef()

    const handleButton = () => {
        if (task === "") return

        setTasks([...tasks, task])
        textInput.current.clear()
        setTask(undefined)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContent}>
                <TextInput ref={textInput} style={styles.textInput} value={task} placeholder="new task..." onChangeText={setTask} />
                <Button style={styles.button} onPress={handleButton} title="Add" color="#880e4f" />
            </View>

            <ScrollView style={{ marginVertical: 5 }}>
                {tasks.map((t, i) => {
                    return (
                        <TouchableHighlight
                            activeOpacity={0.9}
                            underlayColor="#560027"
                            style={{
                                padding: 5,
                                margin: 5,
                                backgroundColor: "#880e4f",
                            }}
                            onPress={() => Alert.alert(t)}
                        >
                            <Text
                                style={{
                                    color: "#ffffff",
                                    fontWeight: "bold",
                                }}
                                key={i}
                            >
                                {t}
                            </Text>
                        </TouchableHighlight>
                    )
                })}
            </ScrollView>
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
    inputContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#880e4f",
        padding: 5,
        flex: 0.8,
    },
})
