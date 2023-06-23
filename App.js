import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react';

export default function App() {
  const [goalList, SetGoals] = useState([]);
  const [modalIsVisible,setModelIsVisible] = useState(false)
  function startModal(){
    setModelIsVisible(true)
  }
  function hideModal(){
    setModelIsVisible(false)
  }

  function onAddGoal(enteredText) {
    SetGoals(
      (currentGoals) => [
        ...currentGoals, { text: enteredText, id: Math.random().toString() }
      ]
    )
    hideModal();
  }

  function OnDeleteItem(id) {
    SetGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });

  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={startModal}/>
       <GoalInput visible = {modalIsVisible} onAddGoal={onAddGoal} onCancel= {hideModal}/>
      <View style={styles.listContainer} >
        <FlatList
          style={{ flex: 1 }}
          data={goalList}
          renderItem={
            (itemData) => (
              <GoalItem text={itemData.item.text}
                onDeleteItem={OnDeleteItem}
                id={itemData.item.id}
              />
            )
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  listContainer: {
    flex: 4
  }
});
