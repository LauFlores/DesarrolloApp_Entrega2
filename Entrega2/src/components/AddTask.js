import { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import ButtonPrimary from './ButtonPrimary';

const AddTask = ({ 
  taskTitle, 
  onHandlerTitle, 
  taskDescripcion, 
  onHandlerDescription, 
  addTask, 
  categories 
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Sin categoría");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder='Ingresar título'
        placeholderTextColor='white'
        maxLength={25}
        style={styles.input}
      />
      <TextInput
        value={taskDescripcion}
        onChangeText={onHandlerDescription}
        placeholder='Ingresar descripción'
        placeholderTextColor='white'
        multiline
        numberOfLines={4}
        maxLength={100}
        style={styles.input}
      />
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Text style={styles.dropdownButtonText}>{selectedCategory}</Text>
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleCategorySelect(category)}>
                <Text style={styles.dropdownItemText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <ButtonPrimary title="Agregar Tarea" onPress={() => addTask(selectedCategory)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#872FF5',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  dropdownContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  dropdownButton: {
    padding: 10,
  },
  dropdownButtonText: {
    color: 'white',
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#872FF5',
    borderRadius: 5,
    marginTop: 2,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  dropdownItemText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddTask;