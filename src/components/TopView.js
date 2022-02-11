import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

export default function TopView() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5ba367', '#5ba367', '#90c275']}
        style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.myPortfolio}>My Portfolio</Text>
          <Icon name="refresh-outline" size={20} color="#fff" />
        </View>
        <Text style={styles.amount}>$349,706</Text>
      </LinearGradient>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={styles.profit}
          onPress={() => setModalVisible(!modalVisible)}>

          <Text style={styles.profitText}>Profit</Text>
          <Text style={styles.profitAmt}>$11,289.22</Text>
          <Icon name="caret-up-outline" size={20} color="#5ba367" />
          <Text style={styles.profitPercentage}>3.2%</Text>

        </Pressable>
      </Modal>

      <Pressable  style={styles.showProfit} onPress={() => setModalVisible(true)}>
        <Text style={styles.seeProfit}>See your current profit!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: '8%',
    marginRight: '8%',
  },
  container1: {
    backgroundColor: '#5ba367',
    borderRadius: 20,
    padding: 20,
    paddingTop: 28,
    paddingBottom: 62,
  },
  myPortfolio: {
    color: '#ebf0ed',
    fontSize: 15,
    paddingRight: '65%',
  },
  amount: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Italic',
  },
  profit: {
    alignItems: 'center',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: '57%',
    position: 'absolute',
  
  },
  showProfit: {
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop:'31%',
    padding: 12,
    position: 'absolute',
    height:'43%',
    width:'95%'
  },
  seeProfit:{
    color:'#5ba367',
    fontSize:20,
    fontWeight:'bold',
  },
  profitText: {
    fontSize: 18,
    paddingLeft: 6,
  },
  profitAmt: {
    paddingRight: 10,
    paddingLeft: '28%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5ba367',
  },
  profitPercentage: {
    color: '#000',
    fontSize: 15,
    paddingLeft: 3,
    paddingRight: 5,
  },
});
