import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from '@rneui/themed';
import useTickets from "../../hooks/useTickets";

const showTickets = (tickets, navigation) => {
  return tickets?.map((ticket, idx) => (
    <Card key={idx} containerStyle={styles.cardContainer}>
      <View style={styles.cardHead}>
        <Card.Title>#{ticket.id}</Card.Title>
        <View style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: `https://avatars.dicebear.com/api/open-peeps/${
                ticket?.user?.email || ''
              }.png`,
            }}
          />
          <Text style={styles.name}>{ticket.user.email}</Text>
        </View>
      </View>
      <Card.Divider />

      <Text style={styles.fonts} h4>
        {ticket.title}
      </Text>

      <Text style={styles.fonts}>{ticket.description}</Text>
      <Button
        containerStyle={styles.buttonContainer}
        title="View Ticket"
        onPress={() => navigation.navigate('Detail', {ticket})}
      />
    </Card>
  ));
};

const Tickets = ({navigation}) => {
  const {data: tickets, isLoading, isSuccess} = useTickets();
  return 
      <ScrollView>
        <View style={styles.container}>
          {isLoading && (
            <React.Fragment>
              <Text>Loading...</Text>
            </React.Fragment>
          )}

          {isSuccess && showTickets(tickets, navigation)}
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
  cardHead: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Tickets;
