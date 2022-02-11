import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MidView() {
  return (
    <View style={styles.container1}>
    
      <Text style={styles.listPortfolio}>List Portfolio</Text>

      <View style={styles.container}>
        <View style={styles.dream}>
          <Icon name="home" size={30} color="#5ba367" />

          <Text style={styles.dreamHouse}>Dream House</Text>
          <Text>7 Product</Text>
        </View>
        <View style={styles.portfolio}>
          <Text style={styles.portfolioText}>My Portfolio</Text>
          <Text>Profit</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>$349,706</Text>
          <Icon name="caret-up-outline" size={20} color="#5ba367" />
          <Text style={styles.amountPercentage}>3.2%</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    marginBottom: 35,
    marginTop: 25,
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
  },
  listPortfolio: {
    color: '#000',
    paddingBottom: 15,
    paddingTop: 32,
    fontSize: 16,
  },
  dream: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 25,
  },
  portfolio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 2,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dreamHouse: {
    color: '#000',
    paddingRight: '28%',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  portfolioText: {
    paddingRight: '62%',
    fontSize: 15,
  },
  amountText: {
    color: '#000',
    paddingRight: '41.5%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  amountPercentage: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 2,
  },
});
