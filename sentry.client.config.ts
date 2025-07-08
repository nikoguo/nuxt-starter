import * as Sentry from "@sentry/nuxt";

Sentry.init({
  // If set up, you can use your runtime config here
  // dsn: useRuntimeConfig().public.sentry.dsn,
  dsn: "https://dce47d82d252168f5bded7a18aafa67a@o4509586243321856.ingest.us.sentry.io/4509633330282496",
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
