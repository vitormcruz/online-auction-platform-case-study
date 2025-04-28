import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';

appConfig.providers.push(
  provideAuth0({
    domain: 'dev-6mby66cjrp7o6423.us.auth0.com',
    clientId: 'JzA78ORwYhn2hqpOJrKplFaQ2CISc82J',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
