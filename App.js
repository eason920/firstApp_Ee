import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const lover = {
    man: 'Eason',
    woman: 'Wenlin'
  }
  const [who, setWho] = useState(lover.man);
  const fnSetWho = ()=> {
    setWho(
      who === lover.woman ? lover.man : lover.woman
    );
    console.log("got cuple click");
  }
  //
  const [sin, setSin] = useState('');
  const [tf, setTf] = useState('錯誤');
  const fnSetSin = (text)=> {
    setSin(text);
    setTf(
      text === '1100130' ? '正確 ~' : '錯誤'
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{who}</Text>
      <Button
        title="COUPLE"
        onPress={() => fnSetWho()}
        style={[styles.button, {color: "#333"}, styles.text]}
      />
      <StatusBar style="auto" />
      <TextInput
        style={[{backgroundColor: '#1BD6B4'}, styles.txtIpt]}
        onChangeText={(text)=> fnSetSin(text)}
        value={sin}
        keyboardType={'numeric'}
        placeholder='請輸入'
        secureTextEntry={true}
        maxLength={20}
        editable={true}
        autoFocus={true}
      />
      <Text style={styles.secure}>輸入的是「{sin}」</Text>
      <Text style={{fontSize: 20}}>密碼{tf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 70,
    color: '#fff',
    width: '100%',
    paddingLeft: '4%',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  button: {
    margin: 20,
    fontSize: 20,
    height: 50,
    padding: 20,
    lineHeight: 2,
    backgroundColor: 'red',
    border: 'solid 2px #aaa',
  },
  txtIpt: {
    color: 'green',
    width: 300,
    height: 80,
    borderWidth: 5,
    borderColor: '#3092ca',
    borderRadius: 20,
    marginTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    fontSize: 20
  },
  secure: {
    color: 'hsl(230, 100%, 50%)',
    fontSize: 10
  }
});
