const dev = {
    AUTH: {
      APP_CLIENT_ID : '474120039429-76mth48kglmmj4enh1cjamngh0tulf4d.apps.googleusercontent.com',
      APP_CLIENT_SECRET: 'MOPBlpTKDrBiGpjFf-a851NL'
    },
    apiGateway: {
      REGION: "YOUR_DEV_API_GATEWAY_REGION",
      URL: "YOUR_DEV_API_GATEWAY_URL"
    },
};
  
const prod = {
    AUTH: {
        APP_CLIENT_ID : '474120039429-76mth48kglmmj4enh1cjamngh0tulf4d.apps.googleusercontent.com',
        APP_CLIENT_SECRET: 'MOPBlpTKDrBiGpjFf-a851NL'
    },
    apiGateway: {
      REGION: "YOUR_PROD_API_GATEWAY_REGION",
      URL: "YOUR_PROD_API_GATEWAY_URL"
    },
};
  
const config = process.env.NODE_ENV === 'production'
    ? prod
    : dev;
  
export default config;