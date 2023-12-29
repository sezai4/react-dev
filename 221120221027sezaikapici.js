import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

const App = () => {
  const handleClick = () => {
    alert("meraba");
  };
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="click" onPress={() => alert("merhaba")} />
      <TouchableOpacity onPress={() => alert("merhaba")}>
        <Text>
          click TouchableOpacity
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={() => alert("pressed")}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => alert("merhaba")}>
        <Text>TouchableHighlight</Text>
      </TouchableWithoutFeedback>

      <Image
        // resize mode

        style={{
          width: "100%",
          height: 100,
          borderWidth: 2,
          borderColor: "red",
        }}
      >
        source  = {{
          uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FAksaraydugunfotografcisifotocs%2F&psig=AOvVaw1yiMOF6fQ0YyHdOWbfrP1-&ust=1703939798362000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjR9cjUtIMDFQAAAAAdAAAAABAE"
        }}
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});