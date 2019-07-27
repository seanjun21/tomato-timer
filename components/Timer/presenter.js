import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0B24',
  },
  upper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 120,
    fontWeight: '100',
  },
});

function formatTime(time) {
  let timeParam = time;
  const minutes = Math.floor(timeParam / 60);
  timeParam -= minutes * 60;
  const seconds = parseInt(timeParam % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timeInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timeInterval,
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      const { timeInterval } = this.state;
      clearInterval(timeInterval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

Timer.propTypes = {
  isPlaying: PropTypes.bool,
  elapsedTime: PropTypes.number,
  timerDuration: PropTypes.number,
  startTimer: PropTypes.func,
  restartTimer: PropTypes.func,
  addSecond: PropTypes.func,
};

export default Timer;
