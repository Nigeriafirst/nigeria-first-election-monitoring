import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ng.org.nigeriafirst.electionmonitoring',
  appName: 'Nigeria First Election Monitoring',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  },
  server: {
    cleartext: false
  }
};

export default config;
