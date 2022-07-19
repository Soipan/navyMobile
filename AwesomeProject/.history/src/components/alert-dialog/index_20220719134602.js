/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {FancyAlert} from 'react-native-expo-fancy-alerts';
import {connect} from 'react-redux';
import {XCircle, CheckCircle} from 'react-native-feather';

const AlertDialog = props => {
  const {type, message, clearAlert} = props;

  let timer;

  let time = (5000 - 500) / 1000 + 's';

  function handleTimeout() {
    timer = setTimeout(() => {
      clearAlert();
    }, 5000);
  }

  function handleClose() {
    clearTimeout(timer);
    clearAlert();
  }

  useEffect(() => {
    if (message) {
      handleTimeout();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [message, timer]);

  return (
    <React.Fragment>
      {type !== '' && type != null ? (
        <View>
          <FancyAlert
            visible={type !== '' && type != null}
            icon={
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: type === 'success' ? '#4CB748' : 'red',
                  borderRadius: 50,
                  width: '100%',
                }}>
                {type === 'success' ? (
                  <CheckCircle stroke="#FFF" width={40} height={40} />
                ) : (
                  <XCircle stroke="#FFF" width={40} height={40} />
                )}
              </View>
            }
            style={{backgroundColor: 'white'}}>
            <Text style={styles.text}>{message}</Text>
            <TouchableOpacity
              style={[
                styles.btn,
                type === 'success' ? styles.success : styles.failure,
              ]}
              onPress={() => clearAlert()}>
              <Text style={styles.btnText}>OK</Text>
            </TouchableOpacity>
          </FancyAlert>
        </View>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const {type, message} = state.alert;
  return {type, message};
}

const actionCreators = (dispatch, props) => {
  return {
    clearAlert: () => {
      dispatch(alertActions.clear());
    },
  };
};

export default connect(mapStateToProps, actionCreators)(AlertDialog);

const styles = StyleSheet.create({
  text: {
    marginTop: -16,
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
  btn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#4CB748',
    marginTop: 16,
    marginBottom: 20,
    minWidth: '50%',
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
  },
  success: {
    backgroundColor: '#4CB748',
  },
  failure: {
    backgroundColor: 'red',
  },
});
