import { useState } from 'react'
import {View, Text, ScrollView, StyleSheet ,Dimensions ,Keyboard} from 'react-native'
import uuid from 'react-native-uuid'
import ModalDeleteTask from './src/components/ModalDeleteTask'
import AddTask from './src/components/AddTask'
import ListTasks from './src/components/ListTasks'
import ThemeOptions from './src/components/ThemeOptions';


const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected , setTaskSelected] = useState({})
  const [taskTitle,setTaskTitle] = useState("")
  const [taskDescripcion,setTaskDescription] = useState("")
  const [tasks,setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width
  const [themeColor, setThemeColor] = useState('#000000'); // Color de tema predeterminado
  const [categories, setCategories] = useState(["Sin categoría", "Trabajo", "Estudio", "Personal"]);
  // const [selectedCategory, setSelectedCategory] = useState("Sin categoría");

  const addTask = (selectedCategory) =>{

    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      completed:false,
      title:taskTitle,
      description:taskDescripcion,
      category: selectedCategory
    }

    setTasks([newTask, ...tasks])
    setTaskTitle("")
    setTaskDescription("")
    Keyboard.dismiss()
  }

  const onHandlerTitle = (t) =>{
    setTaskTitle(t)
  }

  const onHandlerDescription = (t) => {
    setTaskDescription(t)
  }

  const onHandlerModaDelete = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible)
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id ))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
  }

  const onSelectTheme = (color) => {
    setThemeColor(color);
  };

  const handleCategorySelect = (categoryName) => {
    setCategories([...categories, categoryName]);
  };

  return( 
    <View style={[styles.container, { backgroundColor: themeColor }]} >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Se agrega una barra superior con titulo */}
        <View style={styles.header}> 
          <Text style={styles.headerText}>Lista de tareas</Text>
        </View>
        <AddTask taskTitle= {taskTitle}
                onHandlerTitle= {onHandlerTitle}
                taskDescripcion = {taskDescripcion}
                onHandlerDescription = {onHandlerDescription}
                addTask = {addTask}
                categories={categories} // Pasar las categorías como prop
                handleCategorySelect={handleCategorySelect} 
        />
        <ListTasks 
          tasks={tasks} 
          onHandlerModaDelete={onHandlerModaDelete}
          screenWidth={screenWidth}
          updateTaskCompleted={updateTaskCompleted}
        />
        <ModalDeleteTask  
          modalVisible={modalVisible}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
          onHandlerModaDelete={onHandlerModaDelete}
        />
        {/* Se agrega el componente ThemeOptions */}
        <ThemeOptions onSelectTheme={onSelectTheme} />
        

      </ScrollView>
  </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F2E4F6",
    flex:1,
    paddingTop:30,
    paddingHorizontal: 20,
  },
  // Estilos para la barra superior
  header: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10, // Se agrega un espacio inferior para crear espacio con el contenedor siguiente.
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
  },
  scrollViewContent: {
    paddingBottom: 20, // Espacio adicional en la parte inferior para evitar que el contenido se solape con la barra de desplazamiento
  },
})