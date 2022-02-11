import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const companyOptions=[
  {
    symbol:"A",
    name:"Amazon",
    amount:"$3,560,48",
    subName:"AMZN",
    profit:"+66.11(2.45%)"
  },
  {
    symbol:"G",
    name:"Alphabet",
    amount:"$3,560,48",
    subName:"GOOGLE",
    profit:"+66.11(2.45%)"
  },
  {
    symbol:"T",
    name:"Tesla",
    amount:"$3,560,48",
    subName:"TSLA",
    profit:"+66.11(2.45%)"
  },
  {
    symbol:"M",
    name:"Meta",
    amount:"$3,560,48",
    subName:"META",
    profit:"+66.11(2.45%)"
  },

]

export default function BottomView() {

  const Block = props => {
    return (
      <View style={styles.box}>
        <View style={styles.symbolBox}>
          <Text style={styles.symbolText}>{props.symbol}</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.stock1}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.absStyle}>
              <Text style={styles.profit}>{props.amount}</Text>
            </View>
          </View>
          <View style={styles.subStock1}>
            <Text style={styles.subName}>{props.subName}</Text>
            <View style={styles.absStyle2}>
              <Text style={styles.profitPercentage}>{props.profit}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bar} />
      <Text style={styles.stock}>My Stocks</Text>
      {companyOptions.map(obj => (
      <Block
        symbol={obj.symbol}
        name={obj.name}
        amount={obj.amount}
        subName={obj.subName}
        profit={obj.profit}
        key={obj.name}
      />
      ))}
      {/* <Block
        symbol="G"
        name="Alphabet"
        amount="$3,560,48"
        subName="GOOGLE"
        profit="+66.11(2.45%)"
      />
      <Block
        symbol="T"
        name="Tesla"
        amount="$3,560,48"
        subName="TSLA"
        profit="+66.11(2.45%)"
      />
      <Block
        symbol="M"
        name="Meta"
        amount="$3,560,48"
        subName="META"
        profit="+66.11(2.45%)"
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0FFF0',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 10,
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  bar: {
    backgroundColor: '#a3aaa4',
    height: '0.4%',
    width: '10%',
    alignSelf: 'center',
    marginTop: 4,
    borderRadius: 25,
  },
  stock: {
    color: '#000',
    paddingBottom: '6%',
    paddingTop: '5%',
    fontSize: 16,
  },
  stock1: {
    flexDirection: 'row',
    paddingBottom: '4%',
  },
  subStock1: {
    flexDirection: 'row',
  },
  symbolBox: {
    flexDirection: 'row',
    backgroundColor: '#b1d1ab',
    width: '20%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
  symbolText: {
    color: '#5ba367',
    fontWeight: 'bold',
    fontSize: 30,
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    paddingLeft: '6%',
  },
  name: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profit: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  absStyle: {
    position: 'absolute',
    marginLeft: 160,
  },
  absStyle2: {
    position: 'absolute',
    marginLeft: 177,
  },
  subName:{
    fontSize:11
  },
  profitPercentage:{
    fontSize:11,
    color:'#5ba367'
  }
});
