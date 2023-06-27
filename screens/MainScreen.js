import { Button, Text ,Pressable, ScrollView, View } from "react-native";


function MainScreen ({navigation}) {

    return (
        <View style={{
            padding :16
        }}>
            <Button title = "Goals" onPress={() => navigation.navigate("goals")} />
            <Button title="DB Example"onPress={() => navigation.navigate("dbExample")}/>
        </View>
    );
}
export default MainScreen;

