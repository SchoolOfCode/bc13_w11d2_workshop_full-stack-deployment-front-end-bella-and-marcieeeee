# Shopping List Frontend For Practicing Deployment

Note: Have your back end deployed from the other repo first so that you have your API URL ready to provide as an environment variable for your front end.

When deploying the front end:

- Make sure you set the `REACT_APP_BACKEND_URL` environment variable in the deployment settings (because at build time, the build process will take the values available in the environment where the platform is running your code and inject/hard code them into the generated files, just like our .env does for us locally).
- Have a look at the typical build settings (for a typical project folder structure): https://docs.netlify.com/configure-builds/common-configurations/#create-react-app
