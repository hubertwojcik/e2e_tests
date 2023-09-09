/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/E2E_tests.app',
      build:
        'ENVFILE=.env.testing xcodebuild -workspace ios/E2E_tests.xcworkspace -scheme E2E_tests -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/E2E_tests.app',
      build:
        'ENVFILE=.env.testing xcodebuild -workspace ios/E2E_tests.xcworkspace -scheme E2E_tests -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && && ENVFILE=.env.testing ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ENVFILE=.env.testing ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14 Pro',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_XL',
      },
    },
  },
  // artifacts: {
  // rootDir: 'e2e/reports/artifacts',
  // plugins: {
  // screenshot: {
  //   enabled: true,
  //   shouldTakeAutomaticSnapshots: true,
  //   keepOnlyFailedTestsArtifacts: true,
  //   takeWhen: {
  //     testStart: true,
  //     testDone: true,
  //     appNotReady: true,
  //   },
  // },
  // },
  // },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
      artifacts: {
        rootDir: './e2e/reports/artifacts/ios',
      },
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
      artifacts: {
        rootDir: './e2e/reports/artifacts/ios',
      },
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
      artifacts: {
        rootDir: './e2e/reports/artifacts/android',
      },
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
      artifacts: {
        rootDir: './e2e/reports/artifacts/android',
      },
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
      artifacts: {
        rootDir: './e2e/reports/artifacts/android',
      },
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
      artifacts: {
        rootDir: './e2e/reports/artifacts/android',
      },
    },
  },
};
