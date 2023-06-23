import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
function GoalItem(props) {
    return (

        <View style={goalItemStyle.container}>
            <Pressable
                android_ripple={{ color: 'red' }} // android only 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style ={({pressed})=>{
                    pressed && goalItemStyle.pressedItem // ios only 
                }}
                >
                <Text style={goalItemStyle.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}


const goalItemStyle = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        margin: 8,
        borderRadius: 6
    },
    goalText: {
        padding: 8,
        color: "white"
    }
    ,
    pressedItem: {
        opacity: 0.5
    }
});
export default GoalItem;