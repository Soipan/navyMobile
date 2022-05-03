import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text, Card} from '@rneui/themed';
import useTickets from '../hooks/useTickets';

const Tickets = ({navigation}) => {
  const {tickets, isLoading, isSucess} = useTickets();
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : isSucess ? (
            tickets?.map(ticket => (
              <Card containerStyle={styles.cardContainer}>
                <Card.Title>FONTS</Card.Title>
                <Card.Divider />
                <Text style={styles.fonts} h1>
                  h1 Heading
                </Text>
                <Text style={styles.fonts} h2>
                  h2 Heading
                </Text>
                <Text style={styles.fonts} h3>
                  h3 Heading
                </Text>
                <Text style={styles.fonts} h4>
                  h4 Heading
                </Text>
                <Text style={styles.fonts}>Normal Text</Text>
              </Card>
            ))
          ) : (
            <Text>Error Fetching Tickets</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  cardContainer: {
    marginTop: 15,
  },
});

export default Tickets;
