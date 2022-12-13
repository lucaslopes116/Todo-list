import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Header } from '../../components/Header';
import Plus from '../../../assets/plus.png';
import Clipboard from '../../../assets/Clipboard.png';

import { styles } from './styles';
import { Task } from '../../components/Task';

type Props = {
  id: number;
  name: string;
  finished: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Props[]>([]);
  const [taskName, setTaskName] = useState('');

  function addTask() {
    setTasks((prevState) => [
      ...prevState,
      { id: Math.random(), name: taskName, finished: false },
    ]);
    setTaskName('');
  }

  function removeTask(name: string) {
    setTasks((prevState) => prevState.filter((task) => task.name !== name));
  }

  function finishedTask(id: number) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === id;
    });

    const tempTasks = [...tasks];

    tempTasks[taskIndex].finished = !tempTasks[taskIndex].finished;

    setTasks(tempTasks);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Image source={Plus} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      <View style={styles.taskController}>
        <View style={styles.resultContainer}>
          <Text style={styles.create}>Criadas</Text>
          <View style={styles.zero}>
            <Text style={styles.result}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.finished}>Concluídas</Text>
          <View style={styles.zero}>
            <Text style={styles.result}>
              {tasks.filter((task) => task.finished === true).length}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            name={item.name}
            onRemove={() => {
              removeTask(item.name);
            }}
            onFinish={() => {
              finishedTask(item.id);
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image source={Clipboard} resizeMode='cover' />
            <Text style={styles.listEmptyText}>
              <Text style={{ fontWeight: '700' }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              {'\n'}
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
