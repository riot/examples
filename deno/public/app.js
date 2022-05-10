import '@riotjs/hot-reload';
import hydrate from '@riotjs/hydrate';
import erre from 'erre';
import { Router, Route, route, match, toRegexp } from '@riotjs/route';

var Home = {
  css: null,
  exports: null,

  template: (
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) => template(
    '<h1>Hello <b>Deno</b> :)</h1><p>Did you know that Riot.js components can be rendered also by Deno?<br/>\n  What a great news!</p>',
    []
  ),

  name: 'home'
};

var routes = {
  HOME: {
    path: '/',
    label: 'Home',
    component: 'home'
  },
  ABOUT: {
    path: '/about',
    label: 'What\'s Deno?',
    component: 'about'
  }
};

var NotFound = {
  css: null,

  exports: {
    ...routes
  },

  template: (
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) => template(
    '<h1>Page not found</h1><p>Opsi, wrong page. Go back to <a expr5="expr5"> </a> :(</p>',
    [
      {
        redundantAttribute: 'expr5',
        selector: '[expr5]',

        expressions: [
          {
            type: expressionTypes.TEXT,
            childNodeIndex: 0,
            evaluate: _scope => _scope.HOME.label
          },
          {
            type: expressionTypes.ATTRIBUTE,
            name: 'href',
            evaluate: _scope => _scope.HOME.path
          }
        ]
      }
    ]
  ),

  name: 'not-found'
};

var About = {
  css: null,
  exports: null,

  template: (
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) => template(
    '<h1>A <b>modern</b> runtime for <b>JavaScript</b> and <b>TypeScript</b>.</h1><p>Deno is a simple, modern and secure runtime for JavaScript, TypeScript, and WebAssembly that uses V8 and is built in Rust.</p><p><a href="https://deno.land/" target="_blank" rel="nofollow">Read More</a></p>',
    []
  ),

  name: 'about'
};

var App = {
  css: `app,[is="app"]{ --primary-color: rgba(96, 165, 254, 1); --background-color: aliceblue; --light-gray: #f4f4f4; font-family: ui-sans-serif, system-ui, sans-serif; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 0 auto; padding: 2rem 1rem 1rem; min-height: 100vh; text-align: center; background-color: var(--background-color); } app h1,[is="app"] h1{ font-weight: 300; font-size: 1.6rem; margin-bottom: 1.2rem; } app h1 b,[is="app"] h1 b{ font-weight: bold; } app header,[is="app"] header{ display: flex; justify-content: center; align-items: center; padding: 1.2rem 1rem 1rem; margin: 1rem 0; gap: 2rem; } app main,[is="app"] main{ margin: 0 auto; max-width: 600px; min-height: 200px; } app main p,[is="app"] main p{ line-height: 1.6; margin-bottom: 1rem; } app nav,[is="app"] nav{ display: flex; align-items: center; justify-content: center; } app a,[is="app"] a{ color: var(--primary-color); text-decoration: none; } app a:focus,[is="app"] a:focus,app a:active,[is="app"] a:active,app a:hover,[is="app"] a:hover{ opacity: 0.7; } app nav a,[is="app"] nav a{ padding: 0 0.4rem; } app nav a.active,[is="app"] nav a.active{ text-decoration: underline; pointer-events: none; }`,

  exports: {
    components: {
      Router,
      Route,
      Home,
      About,
      NotFound
    },

    state: {
      currentPath: null,
      showNotFound: false
    },

    // the isServer property is automatically injected by @riotjs/ssr
    onBeforeMount({ initialRoute }) {
      // create a stream on all routes
      this.anyRouteStream = route('(.*)');
      // create a stream to check the riot-router state
      this.routerStateStream = erre();
      // update the state of the not found component depending on the initial route
      this.state.showNotFound = this.isNotFoundVisible(initialRoute);
      // check any route change to understand if the not found site should be displayed
      // and to update the menu link classes
      this.anyRouteStream.on.value(this.onAnyRoute);
      // set the initial current path
      this.state.currentPath = initialRoute;
    },

    onRouterStarted() {
      // broadcast the router started event
      this.routerStateStream.push('started');
    },

    // Needed only for SSR
    onAsyncRendering(resolve) {
      const onReady = () => {
        this.routerStateStream.off.value(onReady);
        resolve();
      };

      // wait the router started event
      this.routerStateStream.on.value(onReady);
    },

    getPages() {
      return Object.values(this.props.routes)
    },

    isNotFoundVisible(path) {
      return !this.getPages().some(p => match(path, toRegexp(p.path)))
    },

    onAnyRoute({ pathname }) {
      // show the not found page if none of the page paths are matched
      this.update({
        currentPath: pathname,
        showNotFound: this.isNotFoundVisible(pathname)
      });
    },

    getLinkClass(path) {

      return this.state?.currentPath === path ? 'active' : null
    },

    onBeforeUnmount() {
      this.routerStateStream.end();
      this.anyRouteStream.end();
    }
  },

  template: (
    template,
    expressionTypes,
    bindingTypes,
    getComponent
  ) => template(
    '<router expr0="expr0"></router>',
    [
      {
        type: bindingTypes.TAG,
        getComponent: getComponent,
        evaluate: _scope => 'router',

        slots: [
          {
            id: 'default',
            html: '<nav><a expr1="expr1"></a></nav><header><img width="111" height="116" src="https://riot.js.org/img/logo/square.svg" alt="Riot.js Logo"/>\n      🚀\n      <img width="110" height="110" src="https://deno.land/logo.svg" alt="Deno Logo"/></header><not-found expr2="expr2"></not-found><main><route expr3="expr3"></route></main>',

            bindings: [
              {
                type: bindingTypes.EACH,
                getKey: null,
                condition: null,

                template: template(
                  ' ',
                  [
                    {
                      expressions: [
                        {
                          type: expressionTypes.TEXT,
                          childNodeIndex: 0,

                          evaluate: _scope => [
                            _scope.page.label
                          ].join(
                            ''
                          )
                        },
                        {
                          type: expressionTypes.ATTRIBUTE,
                          name: 'class',
                          evaluate: _scope => _scope.getLinkClass(_scope.page.path)
                        },
                        {
                          type: expressionTypes.ATTRIBUTE,
                          name: 'href',
                          evaluate: _scope => _scope.page.path
                        }
                      ]
                    }
                  ]
                ),

                redundantAttribute: 'expr1',
                selector: '[expr1]',
                itemName: 'page',
                indexName: null,
                evaluate: _scope => _scope.getPages()
              },
              {
                type: bindingTypes.IF,
                evaluate: _scope => _scope.state.showNotFound,
                redundantAttribute: 'expr2',
                selector: '[expr2]',

                template: template(
                  null,
                  [
                    {
                      type: bindingTypes.TAG,
                      getComponent: getComponent,
                      evaluate: _scope => 'not-found',
                      slots: [],
                      attributes: []
                    }
                  ]
                )
              },
              {
                type: bindingTypes.EACH,
                getKey: null,
                condition: null,

                template: template(
                  null,
                  [
                    {
                      type: bindingTypes.TAG,
                      getComponent: getComponent,
                      evaluate: _scope => 'route',

                      slots: [
                        {
                          id: 'default',
                          html: '<main expr4="expr4"></main>',

                          bindings: [
                            {
                              type: bindingTypes.TAG,
                              getComponent: getComponent,
                              evaluate: _scope => _scope.page.component,
                              slots: [],
                              attributes: [],
                              redundantAttribute: 'expr4',
                              selector: '[expr4]'
                            }
                          ]
                        }
                      ],

                      attributes: [
                        {
                          type: expressionTypes.ATTRIBUTE,
                          name: 'path',
                          evaluate: _scope => _scope.page.path
                        }
                      ]
                    }
                  ]
                ),

                redundantAttribute: 'expr3',
                selector: '[expr3]',
                itemName: 'page',
                indexName: null,
                evaluate: _scope => _scope.getPages()
              }
            ]
          }
        ],

        attributes: [
          {
            type: expressionTypes.EVENT,
            name: 'on-started',
            evaluate: _scope => _scope.onRouterStarted
          },
          {
            type: expressionTypes.ATTRIBUTE,
            name: 'base',
            evaluate: _scope => _scope.props.base
          },
          {
            type: expressionTypes.ATTRIBUTE,
            name: 'initial-route',
            evaluate: _scope => _scope.props.initialRoute
          }
        ],

        redundantAttribute: 'expr0',
        selector: '[expr0]'
      }
    ]
  ),

  name: 'app'
};

// hydrate only on the browser
if (typeof document !== 'undefined') {
  hydrate(App)(document.querySelector('app'),  window.__INITIAL_STATE__);
}

export { App as default };
