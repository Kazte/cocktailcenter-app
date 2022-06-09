import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Modal } from "react-native"

const List = ({ taskList, deleteItemFromTasks }) => {
    const [itemSelected, setItemSelected] = useState({})
    const [modalOpened, setModalOpened] = useState(false)

    const onHandleDelete = (id) => {
        deleteItemFromTasks(id)
        setItemSelected({})
        setModalOpened(!modalOpened)
    }

    const onHandleModal = (id) => {
        setItemSelected(taskList.filter((i) => i.id === id)[0])
        setModalOpened(!modalOpened)
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.value}</Text>
                <Button title="Delete" onPress={() => onHandleModal(item.id)} color="#880e4f" />
            </View>
        )
    }

    const keyExtractor = (item) => item.id

    return (
        <View>
            <FlatList data={taskList} renderItem={renderItem} keyExtractor={keyExtractor} />

            <Modal animationType="fade" visible={modalOpened} onRequestClose={() => null}>
                <View style={styles.modalContent}>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitle}>Delete Item?</Text>
                        <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalOpened(!modalOpened)}>
                            <Text style={styles.closeModalBtnText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.modalBody}>
                        <Text style={styles.modalBodyTitle}>Do you want to delete the task?</Text>

                        <TouchableOpacity style={styles.closeModalBtn} onPress={() => onHandleDelete(itemSelected.id)}>
                            <Text style={styles.closeModalBtnText}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#DDDDDD",
    },
    text: {
        textAlignVertical: "center",
        fontSize: 20,
        flex: 1,
    },

    modalContent: {
        flex: 1,
        alignItems: "center",
        margin: 30,
    },
    modalTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    modalTitle: {
        flex: 1,
        fontWeight: "bold",
        margin: 10,
        textAlign: "center",
        fontSize: 18,
    },
    closeModalBtn: {
        backgroundColor: "#880e4f",
        paddingVertical: 10,
        paddingHorizontal: 18,
    },
    closeModalBtnText: {
        color: "#ffffff",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    modalBody: {
        marginVertical: 20,
    },
    modalBodyTitle: {
        fontSize: 20,
    },
})

export default List
