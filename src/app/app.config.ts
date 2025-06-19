import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideApollo } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { typeDefs } from '../graphql/schema';
import { mocks } from '../graphql/mock-resolvers';

import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const schema = makeExecutableSchema({ typeDefs });
const mockedSchema = addMocksToSchema({ schema, mocks });

export const appConfig: ApplicationConfig = {
    providers: [
        provideApollo(() => ({
            cache: new InMemoryCache(),
            link: new SchemaLink({ schema: mockedSchema }),
        })),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: null,
                    cssLayer: true
                }
            }
        })
    ]
};
