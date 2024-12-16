import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      right: 20,
      zIndex: 1000,
    },
    button: {
      backgroundColor: '#4CAF50',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  export default styles