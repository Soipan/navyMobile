import React from 'react';
import moment from 'moment';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Input, Button} from '@rneui/themed';

const TicketDetail = ({navigation, route}) => {
  const {ticket} = route.params;
  return (
    <View>
      <Card containerStyle={styles.cardContainer}>
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
      </Card>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.commentForm}>
            <Input containerStyle={styles.commentFormInput} placeholder="" />
            <Button
              containerStyle={styles.commentFormButtonContainer}
              title="Submit"
              onPress={() => navigation.navigate('Detail', {ticket})}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.fonts} h4>
              Comments
            </Text>
            {!ticket.TicketComment.length && (
              <Text style={styles.fonts}>No comments yet</Text>
            )}
            {ticket?.TicketComment?.map((comment, idx) => (
              <>
                <Card key={idx} containerStyle={styles.commentContainer}>
                  <View style={styles.commnetHead}>
                    <View style={styles.user}>
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                          uri: `https://avatars.dicebear.com/api/open-peeps/${
                            comment?.user?.email || '1'
                          }.png`,
                        }}
                      />
                      <Text style={styles.name}>{ticket.user.email}</Text>
                    </View>
                  </View>
                  <Card.Divider />

                  <Text style={styles.fonts}>{comment.comment}</Text>
                  <View style={styles.commentFooter}>
                    <Text style={styles.commentFooterText}>
                      {moment(comment.createdAt).format(
                        'MMMM Do YYYY, h:mm:ss a',
                      )}
                    </Text>
                    <Text style={styles.commentFooterText}>
                      ( {moment(comment.createdAt).fromNow()})
                    </Text>
                  </View>
                </Card>
              </>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  commentFooterText: {
    fontSize: 12,
    color: '#828282',
  },
  commentFooter: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  commentContainer: {
    width: '100%',
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment: {
    flexDirection: 'column',
  },
  commentUser: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  commentBody: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
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
    fontSize: 11,
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
  commentForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentFormInput: {
    width: '60%',
  },
  commentFormButtonContainer: {
    width: '40%',
  },
});

export default TicketDetail;
