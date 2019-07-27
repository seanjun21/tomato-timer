import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timer from './presenter';
import { actionCreators as tomatoActions } from '../../reducer';

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
