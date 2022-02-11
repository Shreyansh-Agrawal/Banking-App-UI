import React, {useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Nav from '../src/components/Nav';
import TopView from '../src/components/TopView';
import MidView from '../src/components/MidView';
import BottomView from '../src/components/BottomView';

export default function Screen() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          visible={loading}
          size="large"
          color="#5ba367"
          style={{
            position: 'absolute',
            marginLeft: '38%',
            marginTop: '12%',
            zIndex: 1,
          }}
        />
      ) : (
        <TouchableOpacity onPress={startLoading} style={styles.button}>
          <Text style={styles.updates}>Check updates!</Text>
        </TouchableOpacity>
      )}
      <ScrollView>
        <Nav name="Shreyansh" numOfPortfolios="7" />
        <TopView />
        <MidView />
        <BottomView />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginBottom: 0,
    borderRadius: 30,
  },
  updates:{
    fontSize:12,
    color:'#5ba367',
    marginLeft: '41.4%',
  }
});
