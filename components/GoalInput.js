import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredText, SetTextValue] = useState("");
    function onTextChange(text) {
        SetTextValue(text);
    }
    function onAddGoal() {
        props.onAddGoal(enteredText);
        SetTextValue("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={goalInputStyle.inputContainer}>
                <TextInput style={goalInputStyle.inputText} placeholder="Enter Your Goal!"
                    onChangeText={onTextChange} value={enteredText} />
                <View style={goalInputStyle.buttonsContainerStyle}>
                    <View style = {goalInputStyle.button}>
                    <Button title="Add Goal!" onPress={onAddGoal} />
                    </View>
                    <View style={goalInputStyle.button}>
                    <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const goalInputStyle = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputText: {
        borderColor: "black",
        borderWidth: 1,
        width: "70%",
        marginEnd: 8,
        padding: 8
    },
    buttonsContainerStyle :{
        flexDirection:"row",
        marginTop : 16
    },
    button :{
        width:"30%",
        marginHorizontal:8
    }
});
export default GoalInput;