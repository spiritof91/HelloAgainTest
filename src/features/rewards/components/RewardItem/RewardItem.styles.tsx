import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0'
    },
    collectedItem: {
      opacity: 0.5
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 15,
      borderRadius: 10
    },
    itemDetails: {
      flex: 1,
      justifyContent: 'center'
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    itemPoints: {
      color: '#666',
      marginBottom: 10
    },
    collectButton: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 5,
      alignSelf: 'flex-start'
    },
    collectButtonText: {
      color: 'white',
      fontWeight: 'bold'
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginTop: 20
    }
  });

  export default styles