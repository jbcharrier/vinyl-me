// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD8UrALlN_eCq-QZhskmtCmDcQ4dtm2N8w",
    authDomain: "vinyl-me.firebaseapp.com",
    databaseURL: "https://vinyl-me.firebaseio.com",
    projectId: "vinyl-me",
    storageBucket: "vinyl-me.appspot.com",
    messagingSenderId: "379522692239"
  }
};
