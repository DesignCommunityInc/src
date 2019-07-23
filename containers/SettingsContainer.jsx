import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from "../components/Settings";
import { 
  toggleSettingsScreen, 
  toggleLockSettings, 
  toggleHelpersSettings,
  setNickNameLength,
 } from "../actions/Settings";

const settingsContainer = props => <Settings {...props} />;

const mapStateToProps = ({ session, settings }) => ({
    visible: settings.visible,
    isLocked: settings.isLocked,
    isHelpersEnabled: settings.isHelpersEnabled,
    counter: settings.counter,
})
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    toggleSettingsScreen,
    toggleLockSettings,
    toggleHelpersSettings,
    setNickNameLength,
  }, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(settingsContainer);