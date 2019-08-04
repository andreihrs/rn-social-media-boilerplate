import { Constants } from 'expo';

function getUserInfo() {
  const { deviceID, deviceName, platform } = Constants;
  return {
    deviceID,
    deviceName,
    platform,
  };
}

export default getUserInfo;