(function (exports) {
  'use strict';

  /**
   * Entities can be attached to each other by using the `setParent` method. However, there are cases where we might want to attach entities
   * to other objects that are not entities created by the same scene (for example, the player's avatar). For those cases, we have this class.
   * @public
   */
  var Attachable = /** @class */ (function () {
      function Attachable() {
      }
      /** Used to attach entities to the avatar. Entities will follow the avatar when it moves */
      Attachable.AVATAR = {
          getEntityRepresentation: function (engine) { return engine.avatarEntity; }
      };
      /** Used to attach entities to the camera. When in first person mode, the attached entities will also rotate with the camera */
      Attachable.FIRST_PERSON_CAMERA = {
          getEntityRepresentation: function (engine) { return engine.firstPersonCameraEntity; }
      };
      return Attachable;
  }());

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  function __spreadArray(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
      return to;
  }

  var lastGeneratedId = 0;
  /**
   * Log function. Only works in debug mode, otherwise it does nothing.
   * @param args - any loggable parameter
   * @public
   */
  function log() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      if (typeof dcl !== 'undefined') {
          dcl.log.apply(dcl, __spreadArray([], __read(args)));
      }
      else {
          console.log.apply(console, __spreadArray(['DEBUG:'], __read(args)));
      }
  }
  /**
   * Error function. Prints a console error. Only works in debug mode, otherwise it does nothing.
   * @param error - string or Error object.
   * @param data - any debug information.
   * @public
   */
  function error(error, data) {
      if (typeof dcl !== 'undefined') {
          dcl.error(error, data);
      }
      else {
          console.error('ERROR:', error, data);
      }
  }
  /**
   * Generates a new prefixed id
   * @public
   */
  function newId(type) {
      lastGeneratedId++;
      if (type.length === 0)
          throw new Error('newId(type: string): type cannot be empty');
      return type + lastGeneratedId.toString(36);
  }
  /**
   * @internal
   */
  function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (Math.random() * 16) | 0;
          var v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
  }
  /**
   * Returns an array of the given size filled with element built from the given constructor and the paramters
   * @param size - the number of element to construct and put in the array
   * @param itemBuilder - a callback responsible for creating new instance of item. Called once per array entry.
   * @returns a new array filled with new objects
   * @internal
   */
  function buildArray$1(size, itemBuilder) {
      var a = [];
      for (var i = 0; i < size; ++i) {
          a.push(itemBuilder());
      }
      return a;
  }
  /**
   * @public
   */
  function openExternalURL(url) {
      if (typeof dcl !== 'undefined') {
          dcl.openExternalUrl(url);
      }
      else {
          error('ERROR: openExternalURL dcl is undefined');
      }
  }
  /**
   * Popup NFT info dialog
   * @param scr - 'ethereum://contractAddress/tokenID'
   * @param comment - optional. add a comment.
   * @public
   */
  function openNFTDialog(scr, comment) {
      if (comment === void 0) { comment = null; }
      if (typeof dcl !== 'undefined') {
          var regex = /ethereum:\/\/(.+)\/(.+)/;
          var matches = scr.match(regex);
          if (!matches || matches.length < 3) {
              return;
          }
          dcl.openNFTDialog(matches[1], matches[2], comment);
      }
      else {
          error('ERROR: openNFTDialog dcl is undefined');
      }
  }

  var eventNameSymbol = '__event_name__';
  var takenEventNames = [];
  function getEventNameFromConstructor(ctor) {
      if (!(eventNameSymbol in ctor) || typeof ctor[eventNameSymbol] !== 'string') {
          throw new Error('The EventConstructor is not registered');
      }
      return ctor[eventNameSymbol];
  }
  /**
   * @public
   */
  var EventManager = /** @class */ (function () {
      function EventManager() {
          this.listeners = {};
      }
      EventManager.prototype.addListener = function (eventClass, listener, listenerFunction) {
          if (!eventClass || typeof eventClass !== 'function') {
              throw new Error('Invalid EventConstructor');
          }
          var eventName = getEventNameFromConstructor(eventClass);
          var listeners = this.listeners[eventName];
          if (!listeners) {
              listeners = this.listeners[eventName] = [];
          }
          for (var i = 0; i < listeners.length; i++) {
              var x = listeners[i];
              if (x.listener === listener) {
                  throw new Error('The provided listener is already registered');
              }
          }
          listeners.push({
              listener: listener,
              fn: listenerFunction
          });
          return this;
      };
      EventManager.prototype.removeListener = function (listener, eventClass) {
          if (!eventClass || typeof eventClass !== 'function') {
              throw new Error('Invalid EventConstructor');
          }
          var eventName = getEventNameFromConstructor(eventClass);
          var listeners = this.listeners[eventName];
          if (!listeners) {
              return false;
          }
          for (var i = 0; i < listeners.length; i++) {
              var x = listeners[i];
              if (x.listener === listener) {
                  listeners.splice(i, 1);
                  return true;
              }
          }
          return false;
      };
      EventManager.prototype.fireEvent = function (event) {
          var eventName = getEventNameFromConstructor(event.constructor);
          var listeners = this.listeners[eventName];
          if (listeners) {
              for (var i = 0; i < listeners.length; i++) {
                  try {
                      var l = listeners[i];
                      l.fn.call(l.listener, event);
                  }
                  catch (e) {
                      // TODO: e may not be an instance of Error
                      error(e);
                  }
              }
          }
          return this;
      };
      return EventManager;
  }());
  /**
   * @public
   */
  function EventConstructor() {
      var eventName = newId('EV');
      if (takenEventNames.indexOf(eventName) !== -1) {
          throw new Error("The event name ".concat(eventName, " is already taken"));
      }
      takenEventNames.push(eventName);
      // eslint-disable-next-line @typescript-eslint/ban-types
      return function (target) {
          target[eventNameSymbol] = eventName;
          return target;
      };
  }

  /**
   * @public
   */
  var ComponentRemoved = /** @class */ (function () {
      function ComponentRemoved(entity, componentName, component) {
          this.entity = entity;
          this.componentName = componentName;
          this.component = component;
          // stub
      }
      ComponentRemoved = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [Object, String, Object])
      ], ComponentRemoved);
      return ComponentRemoved;
  }());
  /**
   * @public
   */
  var ComponentAdded = /** @class */ (function () {
      function ComponentAdded(entity, componentName, classId) {
          this.entity = entity;
          this.componentName = componentName;
          this.classId = classId;
          // stub
      }
      ComponentAdded = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [Object, String, Object])
      ], ComponentAdded);
      return ComponentAdded;
  }());
  /**
   * @public
   */
  var ParentChanged = /** @class */ (function () {
      function ParentChanged(entity, parent) {
          this.entity = entity;
          this.parent = parent;
          // stub
      }
      ParentChanged = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [Object, Object])
      ], ParentChanged);
      return ParentChanged;
  }());

  /**
   * @public
   */
  exports.UIValueType = void 0;
  (function (UIValueType) {
      UIValueType[UIValueType["PERCENT"] = 0] = "PERCENT";
      UIValueType[UIValueType["PIXELS"] = 1] = "PIXELS";
  })(exports.UIValueType || (exports.UIValueType = {}));
  /**
   * @public
   */
  var UIValue = /** @class */ (function () {
      function UIValue(value) {
          this.type = exports.UIValueType.PIXELS;
          if (typeof value === 'string') {
              var valueAsString = value;
              if (valueAsString.indexOf('px') > -1) {
                  this.type = exports.UIValueType.PIXELS;
              }
              else if (valueAsString.indexOf('%') > -1) {
                  this.type = exports.UIValueType.PERCENT;
              }
              this.value = parseFloat(valueAsString);
          }
          else {
              this.value = value;
          }
      }
      UIValue.prototype.toString = function () {
          var result = this.value.toString();
          if (this.type === exports.UIValueType.PERCENT) {
              result += '%';
          }
          else {
              result += 'px';
          }
          return result;
      };
      return UIValue;
  }());

  var componentSymbol = '__name__symbol_';
  var componentClassIdSymbol = '__classId__symbol_';
  var componentIdSymbol = '__component__id_';
  /**
   * @public
   */
  var DisposableComponentCreated = /** @class */ (function () {
      function DisposableComponentCreated(componentId, componentName, classId) {
          this.componentId = componentId;
          this.componentName = componentName;
          this.classId = classId;
          // stub
      }
      DisposableComponentCreated = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [String, String, Number])
      ], DisposableComponentCreated);
      return DisposableComponentCreated;
  }());
  /**
   * @public
   */
  var DisposableComponentRemoved = /** @class */ (function () {
      function DisposableComponentRemoved(componentId) {
          this.componentId = componentId;
          // stub
      }
      DisposableComponentRemoved = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [String])
      ], DisposableComponentRemoved);
      return DisposableComponentRemoved;
  }());
  /**
   * @public
   */
  var DisposableComponentUpdated = /** @class */ (function () {
      function DisposableComponentUpdated(componentId, component) {
          this.componentId = componentId;
          this.component = component;
          // stub
      }
      DisposableComponentUpdated = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [String, Object])
      ], DisposableComponentUpdated);
      return DisposableComponentUpdated;
  }());
  /**
   * @public
   */
  function Component(componentName, classId) {
      return function (target) {
          if (target.isComponent) {
              throw new TypeError("You cannot extend a component. Trying to extend ".concat(target.originalClassName, " with: ").concat(componentName));
          }
          var extendedClass = target;
          var RegisteredComponent = function RegisteredComponent() {
              // eslint-disable-next-line prefer-rest-params
              var args = Array.prototype.slice.call(arguments);
              var ret = new (extendedClass.bind.apply(extendedClass, __spreadArray([void 0], __read(args))))();
              Object.defineProperty(ret, componentSymbol, {
                  enumerable: false,
                  writable: false,
                  configurable: false,
                  value: componentName
              });
              if (classId !== undefined) {
                  Object.defineProperty(ret, componentClassIdSymbol, {
                      enumerable: false,
                      writable: false,
                      configurable: false,
                      value: classId
                  });
              }
              return ret;
          };
          if (classId !== undefined) {
              RegisteredComponent[componentClassIdSymbol] = classId;
          }
          RegisteredComponent[componentSymbol] = componentName;
          RegisteredComponent.isComponent = true;
          RegisteredComponent.originalClassName = componentName;
          RegisteredComponent.prototype = target.prototype;
          RegisteredComponent.prototype.constructor = target;
          return RegisteredComponent;
      };
  }
  /**
   * @public
   */
  function DisposableComponent(componentName, classId) {
      return function (target) {
          if (target.isComponent) {
              throw new TypeError("You cannot extend a component. Trying to extend ".concat(target.originalClassName, " with: ").concat(componentName));
          }
          if (typeof classId !== 'number' || isNaN(classId)) {
              throw new Error("classId: ".concat(classId, " is an invalid integer"));
          }
          var extendedClass = target;
          var RegisteredComponent = function RegisteredComponent() {
              if (!DisposableComponent.engine) {
                  throw new Error('You need to set a DisposableComponent.engine before creating disposable components');
              }
              // eslint-disable-next-line prefer-rest-params
              var args = Array.prototype.slice.call(arguments);
              var ret = new (extendedClass.bind.apply(extendedClass, __spreadArray([void 0], __read(args))))();
              var id = newId('C');
              Object.defineProperty(ret, componentSymbol, {
                  enumerable: false,
                  writable: false,
                  configurable: false,
                  value: componentName
              });
              Object.defineProperty(ret, componentIdSymbol, {
                  enumerable: false,
                  writable: false,
                  configurable: false,
                  value: id
              });
              if (classId !== undefined) {
                  Object.defineProperty(ret, componentClassIdSymbol, {
                      enumerable: false,
                      writable: false,
                      configurable: false,
                      value: classId
                  });
              }
              if (DisposableComponent.engine) {
                  DisposableComponent.engine.registerComponent(ret);
              }
              return ret;
          };
          if (classId !== undefined) {
              RegisteredComponent[componentClassIdSymbol] = classId;
          }
          RegisteredComponent[componentSymbol] = componentName;
          RegisteredComponent.isComponent = true;
          RegisteredComponent.isDisposableComponent = true;
          RegisteredComponent.originalClassName = componentName;
          RegisteredComponent.prototype = target.prototype;
          RegisteredComponent.prototype.constructor = target;
          return RegisteredComponent;
      };
  }
  /** @internal */
  (function (DisposableComponent) {
      /** @internal */
      // eslint-disable-next-line prefer-const
      DisposableComponent.engine = null;
  })(DisposableComponent || (DisposableComponent = {}));
  /**
   * @public
   */
  function getComponentName(component) {
      if (!component) {
          throw new TypeError(component + ' is not a component.');
      }
      if (component[componentSymbol]) {
          return component[componentSymbol];
      }
      throw new TypeError(component + ' is not a registered component.');
  }
  /**
   * @public
   */
  function getComponentClassId(component) {
      if (!component) {
          throw new TypeError(component + ' is not a component.');
      }
      if (component[componentClassIdSymbol]) {
          return component[componentClassIdSymbol];
      }
      if (!component[componentSymbol]) {
          throw new TypeError(component + ' is not a registered component.');
      }
      return null;
  }
  /**
   * @public
   */
  function getComponentId(component) {
      if (!component) {
          throw new TypeError(component + ' is not a component.');
      }
      if (component[componentIdSymbol]) {
          return component[componentIdSymbol];
      }
      throw new TypeError(component + ' is not a registered disposable component.');
  }
  /**
   * @public
   */
  var ObservableComponent = /** @class */ (function () {
      function ObservableComponent() {
          // @internal
          this.dirty = false;
          // @internal
          this.data = {};
          this.subscriptions = [];
      }
      ObservableComponent.component = function (target, propertyKey) {
          if (delete target[propertyKey]) {
              var componentSymbol_1 = propertyKey + '_' + Math.random();
              target[componentSymbol_1] = undefined;
              Object.defineProperty(target, componentSymbol_1, __assign(__assign({}, Object.getOwnPropertyDescriptor(target, componentSymbol_1)), { enumerable: false }));
              Object.defineProperty(target, propertyKey.toString(), {
                  get: function () {
                      return this[componentSymbol_1];
                  },
                  set: function (value) {
                      var oldValue = this[componentSymbol_1];
                      if (value) {
                          this.data[propertyKey] = getComponentId(value);
                      }
                      else {
                          this.data[propertyKey] = null;
                      }
                      this[componentSymbol_1] = value;
                      if (value !== oldValue) {
                          this.dirty = true;
                          for (var i = 0; i < this.subscriptions.length; i++) {
                              this.subscriptions[i](propertyKey, value, oldValue);
                          }
                      }
                  },
                  enumerable: true
              });
          }
      };
      ObservableComponent.field = function (target, propertyKey) {
          if (delete target[propertyKey]) {
              Object.defineProperty(target, propertyKey.toString(), {
                  get: function () {
                      return this.data[propertyKey];
                  },
                  set: function (value) {
                      var oldValue = this.data[propertyKey];
                      this.data[propertyKey] = value;
                      if (value !== oldValue) {
                          this.dirty = true;
                          for (var i = 0; i < this.subscriptions.length; i++) {
                              this.subscriptions[i](propertyKey, value, oldValue);
                          }
                      }
                  },
                  enumerable: true
              });
          }
      };
      ObservableComponent.uiValue = function (target, propertyKey) {
          if (delete target[propertyKey]) {
              Object.defineProperty(target, propertyKey.toString(), {
                  get: function () {
                      return this.data[propertyKey].toString();
                  },
                  set: function (value) {
                      var oldValue = this.data[propertyKey];
                      var finalValue = new UIValue(value);
                      this.data[propertyKey] = finalValue;
                      if (finalValue !== oldValue) {
                          this.dirty = true;
                          for (var i = 0; i < this.subscriptions.length; i++) {
                              this.subscriptions[i](propertyKey, finalValue, oldValue);
                          }
                      }
                  },
                  enumerable: true
              });
          }
      };
      ObservableComponent.readonly = function (target, propertyKey) {
          if (delete target[propertyKey]) {
              Object.defineProperty(target, propertyKey.toString(), {
                  get: function () {
                      if (propertyKey in this.data === false) {
                          throw new Error("The field ".concat(propertyKey, " is uninitialized"));
                      }
                      return this.data[propertyKey];
                  },
                  set: function (value) {
                      if (propertyKey in this.data) {
                          throw new Error("The field ".concat(propertyKey, " is readonly"));
                      }
                      this.data[propertyKey] = value;
                      this.dirty = true;
                  },
                  enumerable: true,
                  configurable: false
              });
          }
      };
      ObservableComponent.prototype.onChange = function (fn) {
          this.subscriptions.push(fn);
          return this;
      };
      ObservableComponent.prototype.toJSON = function () {
          return this.data;
      };
      return ObservableComponent;
  }());
  /**
   * @public
   */
  function isDisposableComponent(component) {
      return componentIdSymbol in component;
  }

  /**
   * @public
   */
  var ComponentGroup = /** @class */ (function () {
      function ComponentGroup() {
          var requires = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              requires[_i] = arguments[_i];
          }
          this.entities = [];
          this.active = false;
          this._requiresNames = [];
          // validate requires list
          if (!requires) {
              throw new Error('ComponentGroup: Could not load the requires list');
          }
          if (!(requires instanceof Array)) {
              throw new Error('ComponentGroup: requires list is not an Array');
          }
          Object.defineProperty(this, 'requires', {
              get: function () {
                  return requires.slice();
              }
          });
          Object.defineProperty(this, 'requiresNames', {
              get: function () {
                  return this._requiresNames.slice();
              }
          });
          var _loop_1 = function (ix) {
              var component = requires[ix];
              var name = null;
              if (!component) {
                  throw new Error("ComponentGroup: the required component at location ".concat(ix, " is invalid"));
              }
              try {
                  name = getComponentName(component);
              }
              catch (e) {
                  throw new Error("ComponentGroup: the required component at location ".concat(ix, " is not registered as a @Component. Remember to provide the class of the component, not the name"));
              }
              if (this_1._requiresNames.some(function ($) { return $ === name; })) {
                  throw new Error("ComponentGroup: the required component list has a repeated name ".concat(name));
              }
              this_1._requiresNames.push(name);
          };
          var this_1 = this;
          for (var ix = 0; ix < requires.length; ix++) {
              _loop_1(ix);
          }
      }
      ComponentGroup.prototype.hasEntity = function (entity) {
          if (!entity.isAddedToEngine())
              return false;
          return this.entities.indexOf(entity) !== -1;
      };
      // @internal
      ComponentGroup.prototype.addEntity = function (entity) {
          if (!entity.isAddedToEngine()) {
              throw new TypeError('ComponentGroup: Cannot add a entity that is not added to the engine');
          }
          if (this.entities.indexOf(entity) === -1) {
              this.entities.push(entity);
          }
      };
      // @internal
      ComponentGroup.prototype.removeEntity = function (entity) {
          var id = this.entities.indexOf(entity);
          if (id !== -1) {
              this.entities.splice(id, 1);
          }
      };
      // @internal
      ComponentGroup.prototype.componentRemoved = function (entity, component) {
          if (this._requiresNames.indexOf(component) !== -1) {
              this.removeEntity(entity);
          }
      };
      // @internal
      ComponentGroup.prototype.meetsRequirements = function (entity) {
          for (var i = 0; i < this._requiresNames.length; i++) {
              var componentName = this._requiresNames[i];
              if (!(componentName in entity.components)) {
                  return false;
              }
          }
          return true;
      };
      return ComponentGroup;
  }());

  /**
   * @public
   */
  var Entity = /** @class */ (function () {
      function Entity(name) {
          this.name = name;
          this.children = {};
          this.eventManager = null;
          this.alive = false;
          this.uuid = newId('E');
          this.components = {};
          // @internal
          this.engine = null;
          // @internal
          this._parent = null;
          // stub
      }
      /**
       * Adds or replaces a component in the entity.
       * @param component - component instance.
       */
      Entity.prototype.addComponentOrReplace = function (component) {
          if (typeof component === 'function') {
              throw new Error('You passed a function or class as a component, an instance of component is expected');
          }
          if (typeof component !== 'object') {
              throw new Error("You passed a ".concat(typeof component, ", an instance of component is expected"));
          }
          var componentName = getComponentName(component);
          if (this.components[componentName]) {
              if (this.components[componentName] === component) {
                  return component;
              }
              this.removeComponent(this.components[componentName], false);
          }
          return this.addComponent(component);
      };
      Entity.prototype.hasComponent = function (component) {
          var typeOfComponent = typeof component;
          if (typeOfComponent !== 'string' &&
              typeOfComponent !== 'object' &&
              typeOfComponent !== 'function') {
              throw new Error('Entity#has(component): component is not a class, name or instance');
          }
          if (component === null)
              return false;
          var componentName = typeOfComponent === 'string'
              ? component
              : getComponentName(component);
          var storedComponent = this.components[componentName];
          if (!storedComponent) {
              return false;
          }
          if (typeOfComponent === 'object') {
              return storedComponent === component;
          }
          if (typeOfComponent === 'function') {
              return storedComponent instanceof component;
          }
          return true;
      };
      Entity.prototype.getComponent = function (component) {
          var typeOfComponent = typeof component;
          if (typeOfComponent !== 'string' && typeOfComponent !== 'function') {
              throw new Error('Entity#get(component): component is not a class or name');
          }
          var componentName = typeOfComponent === 'string'
              ? component
              : getComponentName(component);
          var storedComponent = this.components[componentName];
          if (!storedComponent) {
              throw new Error("Can not get component \"".concat(componentName, "\" from entity \"").concat(this.identifier, "\""));
          }
          if (typeOfComponent === 'function') {
              if (storedComponent instanceof component) {
                  return storedComponent;
              }
              else {
                  throw new Error("Can not get component \"".concat(componentName, "\" from entity \"").concat(this.identifier, "\" (by instance)"));
              }
          }
          return storedComponent;
      };
      Entity.prototype.getComponentOrNull = function (component) {
          var typeOfComponent = typeof component;
          if (typeOfComponent !== 'string' && typeOfComponent !== 'function') {
              throw new Error('Entity#getOrNull(component): component is not a class or name');
          }
          var componentName = typeOfComponent === 'string'
              ? component
              : getComponentName(component);
          var storedComponent = this.components[componentName];
          if (!storedComponent) {
              return null;
          }
          if (typeOfComponent === 'function') {
              if (storedComponent instanceof component) {
                  return storedComponent;
              }
              else {
                  return null;
              }
          }
          return storedComponent;
      };
      /**
       * Gets a component, if it doesn't exist, it creates the component and returns it.
       * @param component - component class
       */
      Entity.prototype.getComponentOrCreate = function (component) {
          if (typeof component !== 'function') {
              throw new Error('Entity#getOrCreate(component): component is not a class');
          }
          var ret = this.getComponentOrNull(component);
          if (!ret) {
              ret = new component();
              // Safe-guard to only add registered components to entities
              getComponentName(ret);
              this.addComponentOrReplace(ret);
          }
          return ret;
      };
      /**
       * Adds a component. If the component already exist, it throws an Error.
       * @param component - component instance.
       */
      Entity.prototype.addComponent = function (component) {
          if (typeof component !== 'object') {
              throw new Error('Entity#add(component): You passed a function or class as a component, an instance of component is expected');
          }
          var componentName = getComponentName(component);
          var classId = getComponentClassId(component);
          if (this.components[componentName]) {
              throw new Error("A component of type \"".concat(componentName, "\" is already present in entity \"").concat(this.identifier, "\""));
          }
          this.components[componentName] = component;
          if (this.eventManager) {
              this.eventManager.fireEvent(new ComponentAdded(this, componentName, classId));
          }
          var storedComponent = component;
          if (typeof storedComponent.addedToEntity === 'function') {
              storedComponent.addedToEntity(this);
          }
          return component;
      };
      Entity.prototype.removeComponent = function (
      // eslint-disable-next-line @typescript-eslint/ban-types
      component, triggerRemovedEvent) {
          if (triggerRemovedEvent === void 0) { triggerRemovedEvent = true; }
          var typeOfComponent = typeof component;
          if (typeOfComponent !== 'string' &&
              typeOfComponent !== 'function' &&
              typeOfComponent !== 'object') {
              throw new Error('Entity#remove(component): component is not a class, class or name');
          }
          var componentName = typeOfComponent === 'string'
              ? component
              : getComponentName(component);
          var storedComponent = this.components[componentName];
          if (!storedComponent) {
              log("Entity Warning: Trying to remove inexisting component \"".concat(componentName, "\" from entity \"").concat(this.identifier, "\""));
              return;
          }
          if (typeOfComponent === 'function') {
              if (storedComponent instanceof component) {
                  delete this.components[componentName];
                  if (storedComponent) {
                      if (triggerRemovedEvent && this.eventManager) {
                          this.eventManager.fireEvent(new ComponentRemoved(this, componentName, storedComponent));
                      }
                      if (typeof storedComponent.removedFromEntity === 'function') {
                          storedComponent.removedFromEntity(this);
                      }
                  }
                  return;
              }
              else {
                  log("Entity Warning: Trying to remove wrong (by constructor) component \"".concat(componentName, "\" from entity \"").concat(this.identifier, "\""));
                  return;
              }
          }
          delete this.components[componentName];
          if (storedComponent) {
              if (triggerRemovedEvent && this.eventManager) {
                  this.eventManager.fireEvent(new ComponentRemoved(this, componentName, storedComponent));
              }
              if (typeof storedComponent.removedFromEntity === 'function') {
                  storedComponent.removedFromEntity(this);
              }
          }
          return;
      };
      /**
       * Returns true if the entity is already added to the engine.
       * Returns false if no engine was defined.
       */
      Entity.prototype.isAddedToEngine = function () {
          if (this.engine &&
              (this.uuid in this.engine.entities || this.engine.rootEntity === this)) {
              return true;
          }
          return false;
      };
      /**
       * Sets the parent entity
       */
      Entity.prototype.setParent = function (_parent) {
          var newParent;
          // Check if parent is of type Attachable
          if (_parent && 'getEntityRepresentation' in _parent) {
              if (!this.engine) {
                  throw new Error("In order to set an attachable as parent, you first need to add the entity to the engine.");
              }
              newParent = _parent.getEntityRepresentation(this.engine);
          }
          else {
              newParent = !_parent && this.engine ? this.engine.rootEntity : _parent;
          }
          var currentParent = this.getParent();
          if (newParent === this) {
              throw new Error("Failed to set parent for entity \"".concat(this.identifier, "\": An entity can't set itself as a its own parent"));
          }
          if (newParent === currentParent) {
              return this;
          }
          var circularAncestor = this.getCircularAncestor(newParent);
          if (circularAncestor) {
              throw new Error("Failed to set parent for entity \"".concat(this.identifier, "\": Circular parent references are not allowed (See entity \"").concat(circularAncestor, "\")"));
          }
          if (currentParent) {
              delete currentParent.children[this.uuid];
          }
          // Make sure that the parent and child are both on the engine, or off the engine, together
          if (newParent !== null && newParent.uuid !== '0') {
              if (!newParent.isAddedToEngine() && this.isAddedToEngine()) {
                  this.engine.removeEntity(this);
              }
              if (newParent.isAddedToEngine() && !this.isAddedToEngine()) {
                  newParent.engine.addEntity(this);
              }
          }
          this._parent = newParent || null;
          this.registerAsChild();
          if (this.eventManager && this.engine) {
              this.eventManager.fireEvent(new ParentChanged(this, newParent));
          }
          return this;
      };
      /**
       * Gets the parent entity
       */
      Entity.prototype.getParent = function () {
          return this._parent;
      };
      Object.defineProperty(Entity.prototype, "identifier", {
          get: function () {
              return this.name || this.uuid;
          },
          enumerable: false,
          configurable: true
      });
      Entity.prototype.getCircularAncestor = function (ent) {
          var root = this.engine ? this.engine.rootEntity : null;
          var e = ent;
          while (e && e !== root) {
              var parent = e.getParent();
              if (parent === this) {
                  return e.uuid;
              }
              e = parent;
          }
          return null;
      };
      Entity.prototype.registerAsChild = function () {
          var parent = this.getParent();
          if (this.uuid && parent) {
              parent.children[this.uuid] = this;
          }
      };
      return Entity;
  }());

  /**
   * @public
   */
  var Engine = /** @class */ (function () {
      function Engine(rootEntity) {
          this.eventManager = new EventManager();
          // @internal
          this.systems = [];
          // @internal
          this.entityLists = {};
          // @internal
          this.addedSystems = [];
          this._entities = {};
          this._disposableComponents = {};
          this._componentGroups = {};
          // systems that doesn't require any component or handle their own logic
          this.simpleSystems = [];
          this.eventManager.addListener(ComponentAdded, this, this.componentAddedHandler);
          this.eventManager.addListener(ComponentRemoved, this, this.componentRemovedHandler);
          this.rootEntity = rootEntity;
          this.firstPersonCameraEntity = new Entity();
          this.firstPersonCameraEntity.uuid =
              'FirstPersonCameraEntityReference';
          this.addEntity(this.firstPersonCameraEntity);
          this.avatarEntity = new Entity();
          this.avatarEntity.uuid = 'AvatarEntityReference';
          this.addEntity(this.avatarEntity);
      }
      Object.defineProperty(Engine.prototype, "entities", {
          get: function () {
              return this._entities;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Engine.prototype, "disposableComponents", {
          get: function () {
              return this._disposableComponents;
          },
          enumerable: false,
          configurable: true
      });
      Engine.prototype.addEntity = function (entity) {
          var parent = entity.getParent();
          if (entity.isAddedToEngine()) {
              return entity;
          }
          entity.eventManager = this.eventManager;
          entity.engine = this;
          this._entities[entity.uuid] = entity;
          this.checkRequirementsAndAdd(entity);
          if (!parent) {
              entity.setParent(this.rootEntity);
          }
          else {
              if (!parent.isAddedToEngine() && parent !== this.rootEntity) {
                  log('Engine: warning, added an entity with a parent not present in the engine. Parent id: ' +
                      parent.uuid);
              }
          }
          entity.alive = true;
          for (var i in entity.children) {
              var child = entity.children[i];
              if (child) {
                  if (!child.isAddedToEngine()) {
                      this.addEntity(child);
                  }
              }
          }
          return entity;
      };
      Engine.prototype.removeEntity = function (entity) {
          var id = entity.uuid;
          if (entity.isAddedToEngine()) {
              for (var componentName in entity.components) {
                  var componentGroups = this._componentGroups[componentName];
                  if (componentGroups) {
                      for (var groupIndex in componentGroups) {
                          componentGroups[groupIndex].removeEntity(entity);
                      }
                  }
                  delete this.entityLists[componentName][id];
              }
              for (var i = 0; i < this.simpleSystems.length; i++) {
                  var system = this.simpleSystems[i];
                  if (system.onRemoveEntity) {
                      system.onRemoveEntity(entity);
                  }
              }
              for (var i in entity.children) {
                  var child = entity.children[i];
                  if (child) {
                      this.removeEntity(child);
                  }
              }
              entity.alive = false;
              entity.eventManager = null;
              delete this._entities[id];
              return true;
          }
          else {
              log('Engine: Trying to remove non existent entity from engine.');
              if (!entity.isAddedToEngine()) {
                  log("Engine: Entity \"".concat(entity.uuid, "\" has not been added to any engine yet."));
              }
              else {
                  log('Engine: Entity id: ' + id);
              }
              log("Engine: Entity's components:");
              for (var componentName in entity.components) {
                  log(componentName);
              }
              return false;
          }
      };
      Engine.prototype.addSystem = function (system, priority) {
          if (priority === void 0) { priority = 0; }
          if (this.addedSystems.indexOf(system) !== -1) {
              log('Engine: Trying to add a system that is already added. Aborting');
              return system;
          }
          if (this.systems.length > 0) {
              for (var i = 0; i < this.systems.length; i++) {
                  var entry = this.systems[i];
                  var isLast = i === this.systems.length - 1;
                  if (entry.priority > priority) {
                      this.addedSystems.push(system);
                      this.systems.splice(i, 0, { system: system, priority: priority });
                      break;
                  }
                  else if (isLast) {
                      this.addedSystems.push(system);
                      this.systems.splice(i + 1, 0, { system: system, priority: priority });
                      break;
                  }
              }
          }
          else {
              this.addedSystems.push(system);
              this.systems.splice(1, 0, { system: system, priority: priority });
          }
          this.registerSystem(system);
          return system;
      };
      Engine.prototype.removeSystem = function (system) {
          var idx = this.addedSystems.indexOf(system);
          if (idx !== -1) {
              system.active = false;
              if (system.deactivate) {
                  system.deactivate();
              }
              this.addedSystems.splice(idx, 1);
              for (var i = 0; i < this.systems.length; i++) {
                  var sys = this.systems[i].system;
                  if (sys === system) {
                      this.systems.splice(i, 1);
                  }
              }
              return true;
          }
          return false;
      };
      Engine.prototype.update = function (dt) {
          for (var i in this.systems) {
              var system = this.systems[i].system;
              if (system.active && system.update) {
                  try {
                      system.update(dt);
                  }
                  catch (e) {
                      // TODO: e may not be an Error
                      error(e);
                  }
              }
          }
          return this;
      };
      Engine.prototype.getEntitiesWithComponent = function (component) {
          var componentName = typeof component === 'string' ? component : getComponentName(component);
          if (componentName in this.entityLists) {
              return this.entityLists[componentName];
          }
          else {
              return (this.entityLists[componentName] = {});
          }
      };
      Engine.prototype.registerComponent = function (component) {
          var id = getComponentId(component);
          var name = getComponentName(component);
          var classId = getComponentClassId(component);
          this._disposableComponents[id] = component;
          if (classId !== null) {
              this.eventManager.fireEvent(new DisposableComponentCreated(id, name, classId));
              this.eventManager.fireEvent(new DisposableComponentUpdated(id, component));
          }
      };
      Engine.prototype.disposeComponent = function (component) {
          var id = getComponentId(component);
          if (delete this._disposableComponents[id]) {
              this.eventManager.fireEvent(new DisposableComponentRemoved(id));
              if (component.onDispose) {
                  component.onDispose();
              }
              return true;
          }
          return false;
      };
      Engine.prototype.updateComponent = function (component) {
          this.eventManager.fireEvent(new DisposableComponentUpdated(getComponentId(component), component));
      };
      Engine.prototype.getComponentGroup = function () {
          var requires = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              requires[_i] = arguments[_i];
          }
          var componentGroup = undefined;
          // Return an already created component-group if it already exists
          if (requires.length > 0) {
              // 1. get component groups for first require
              var componentGroups = this._componentGroups[getComponentName(requires[0])];
              if (componentGroups) {
                  var components = requires.slice();
                  // 2. search for a component group that has all the same requirements
                  for (var i = 0; i < componentGroups.length; i++) {
                      var traversedComponentGroup = componentGroups[i];
                      if (components.length === traversedComponentGroup.requires.length) {
                          for (var j = 0; j < components.length; j++) {
                              if (traversedComponentGroup.requires.indexOf(components[j]) === -1)
                                  break;
                              if (j === components.length - 1) {
                                  componentGroup = traversedComponentGroup;
                              }
                          }
                          if (componentGroup)
                              break;
                      }
                  }
              }
          }
          if (componentGroup) {
              // 3. Found an existent component group with the exact same requirements
              return componentGroup;
          }
          // Otherwise create and store it
          componentGroup = new (ComponentGroup.bind.apply(ComponentGroup, __spreadArray([void 0], __read(requires))))();
          componentGroup.active = true;
          var requiresNames = componentGroup.requiresNames;
          for (var i = 0; i < requiresNames.length; i++) {
              var componentName = requiresNames[i];
              var componentGroups = this._componentGroups[componentName];
              if (!componentGroups) {
                  this._componentGroups[componentName] = componentGroups = [];
              }
              if (componentGroups.indexOf(componentGroup) === -1) {
                  componentGroups.push(componentGroup);
              }
          }
          for (var entityId in this._entities) {
              this.checkRequirements(this._entities[entityId], componentGroup);
          }
          return componentGroup;
      };
      Engine.prototype.removeComponentGroup = function (componentGroup) {
          if (componentGroup.active) {
              componentGroup.active = false;
              var requiresNames = componentGroup.requiresNames;
              for (var i = 0; i < requiresNames.length; i++) {
                  var componentName = requiresNames[i];
                  var componentGroups = this._componentGroups[componentName];
                  if (componentGroups) {
                      var idx = componentGroups.indexOf(componentGroup);
                      if (idx !== -1) {
                          componentGroups.splice(idx, 1);
                      }
                  }
              }
              return true;
          }
          return false;
      };
      Engine.prototype.registerSystem = function (system) {
          system.active = true;
          if (system.activate) {
              system.activate(this);
          }
          this.simpleSystems.push(system);
      };
      Engine.prototype.checkRequirementsAndAdd = function (entity) {
          if (!entity.isAddedToEngine())
              return;
          for (var componentName in entity.components) {
              if (!(componentName in this.entityLists)) {
                  this.entityLists[componentName] = {};
              }
              this.entityLists[componentName][entity.uuid] = entity;
              var componentGroups = this._componentGroups[componentName];
              if (componentGroups) {
                  for (var systemIndex in componentGroups) {
                      this.checkRequirements(entity, componentGroups[systemIndex]);
                  }
              }
          }
          for (var i = 0; i < this.simpleSystems.length; i++) {
              var system = this.simpleSystems[i];
              if (system.onAddEntity) {
                  system.onAddEntity(entity);
              }
          }
      };
      Engine.prototype.checkRequirements = function (entity, system) {
          if (system.meetsRequirements(entity)) {
              if (!system.hasEntity(entity)) {
                  system.addEntity(entity);
              }
          }
          else {
              if (system.hasEntity(entity)) {
                  system.removeEntity(entity);
              }
          }
      };
      Engine.prototype.componentAddedHandler = function (event) {
          var _a;
          var entity = event.entity, componentName = event.componentName;
          if (!entity.isAddedToEngine())
              return;
          if (!this.entityLists[componentName]) {
              this.entityLists[componentName] = (_a = {}, _a[entity.uuid] = entity, _a);
          }
          else {
              this.entityLists[componentName][entity.uuid] = entity;
          }
          var componentGroups = this._componentGroups[componentName];
          if (componentGroups) {
              for (var i in componentGroups) {
                  this.checkRequirements(entity, componentGroups[i]);
              }
          }
      };
      Engine.prototype.componentRemovedHandler = function (event) {
          // In case a single component gets removed from an entity, we inform
          // all systems that this entity lost this specific component.
          var entity = event.entity, componentName = event.componentName;
          if (!entity.isAddedToEngine())
              return;
          delete this.entityLists[componentName][entity.uuid];
          var componentGroups = this._componentGroups[componentName];
          if (componentGroups) {
              for (var i in componentGroups) {
                  this.checkRequirements(entity, componentGroups[i]);
              }
          }
      };
      return Engine;
  }());

  var _defer = Promise.resolve().then.bind(Promise.resolve());
  /**
   * Executes an asynchronous task
   * @param task - the task to execute
   * @public
   */
  function executeTask(task) {
      var result = _defer(task);
      result.isComplete = false;
      result
          .then(function ($) {
          result.isComplete = true;
          result.result = $;
          result.didFail = false;
      })
          .catch(function ($) {
          result.isComplete = true;
          result.error = $;
          result.didFail = true;
          error('executeTask: FAILED ' + $.toString(), $);
      });
      return result;
  }

  /**
   * A class serves as a medium between the observable and its observers
   * @public
   */
  var ObserverEventState = /** @class */ (function () {
      /**
       * Create a new EventState
       * @param mask - defines the mask associated with this state
       * @param skipNextObservers - defines a flag which will instruct the observable to skip following observers when set to true
       * @param target - defines the original target of the state
       * @param currentTarget - defines the current target of the state
       */
      function ObserverEventState(mask, skipNextObservers, target, currentTarget) {
          if (skipNextObservers === void 0) { skipNextObservers = false; }
          this.initalize(mask, skipNextObservers, target, currentTarget);
      }
      /**
       * Initialize the current event state
       * @param mask - defines the mask associated with this state
       * @param skipNextObservers - defines a flag which will instruct the observable to skip following observers when set to true
       * @param target - defines the original target of the state
       * @param currentTarget - defines the current target of the state
       * @returns the current event state
       */
      ObserverEventState.prototype.initalize = function (mask, skipNextObservers, target, currentTarget) {
          if (skipNextObservers === void 0) { skipNextObservers = false; }
          this.mask = mask;
          this.skipNextObservers = skipNextObservers;
          this.target = target;
          this.currentTarget = currentTarget;
          return this;
      };
      return ObserverEventState;
  }());
  /**
   * Represent an Observer registered to a given Observable object.
   * @public
   */
  var Observer = /** @class */ (function () {
      /**
       * Creates a new observer
       * @param callback - defines the callback to call when the observer is notified
       * @param mask - defines the mask of the observer (used to filter notifications)
       * @param scope - defines the current scope used to restore the JS context
       */
      function Observer(
      /**
       * Defines the callback to call when the observer is notified
       */
      callback, 
      /**
       * Defines the mask of the observer (used to filter notifications)
       */
      mask, 
      /**
       * Defines the current scope used to restore the JS context
       */
      scope) {
          if (scope === void 0) { scope = null; }
          this.callback = callback;
          this.mask = mask;
          this.scope = scope;
          /**
           * Gets or sets a property defining that the observer as to be unregistered after the next notification
           */
          this.unregisterOnNextCall = false;
          /** For internal usage */
          this._willBeUnregistered = false;
      }
      return Observer;
  }());
  /**
   * Represent a list of observers registered to multiple Observables object.
   * @public
   */
  var MultiObserver = /** @class */ (function () {
      function MultiObserver() {
          this._observers = null;
          this._observables = null;
      }
      /**
       * Raise a callback when one of the observable will notify
       * @param observables - defines a list of observables to watch
       * @param callback - defines the callback to call on notification
       * @param mask - defines the mask used to filter notifications
       * @param scope - defines the current scope used to restore the JS context
       * @returns the new MultiObserver
       */
      MultiObserver.Watch = function (observables, callback, mask, scope) {
          var e_1, _a;
          if (mask === void 0) { mask = -1; }
          if (scope === void 0) { scope = null; }
          var result = new MultiObserver();
          result._observers = new Array();
          result._observables = observables;
          try {
              for (var observables_1 = __values(observables), observables_1_1 = observables_1.next(); !observables_1_1.done; observables_1_1 = observables_1.next()) {
                  var observable = observables_1_1.value;
                  var observer = observable.add(callback, mask, false, scope);
                  if (observer) {
                      result._observers.push(observer);
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (observables_1_1 && !observables_1_1.done && (_a = observables_1.return)) _a.call(observables_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return result;
      };
      /**
       * Release associated resources
       */
      MultiObserver.prototype.dispose = function () {
          if (this._observers && this._observables) {
              for (var index = 0; index < this._observers.length; index++) {
                  this._observables[index].remove(this._observers[index]);
              }
          }
          this._observers = null;
          this._observables = null;
      };
      return MultiObserver;
  }());
  /**
   * The Observable class is a simple implementation of the Observable pattern.
   *
   * There's one slight particularity though: a given Observable can notify its observer using a particular mask value, only the Observers registered with this mask value will be notified.
   * This enable a more fine grained execution without having to rely on multiple different Observable objects.
   * For instance you may have a given Observable that have four different types of notifications: Move (mask = 0x01), Stop (mask = 0x02), Turn Right (mask = 0X04), Turn Left (mask = 0X08).
   * A given observer can register itself with only Move and Stop (mask = 0x03), then it will only be notified when one of these two occurs and will never be for Turn Left/Right.
   *
   * @public
   */
  var Observable = /** @class */ (function () {
      /**
       * Creates a new observable
       * @param onObserverAdded - defines a callback to call when a new observer is added
       */
      function Observable(onObserverAdded) {
          this._observers = new Array();
          this._onObserverAdded = null;
          this._eventState = new ObserverEventState(0);
          if (onObserverAdded) {
              this._onObserverAdded = onObserverAdded;
          }
      }
      /**
       * Create a new Observer with the specified callback
       * @param callback - the callback that will be executed for that Observer
       * @param mask - the mask used to filter observers
       * @param insertFirst - if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.
       * @param scope - optional scope for the callback to be called from
       * @param unregisterOnFirstCall - defines if the observer as to be unregistered after the next notification
       * @returns the new observer created for the callback
       */
      Observable.prototype.add = function (callback, mask, insertFirst, scope, unregisterOnFirstCall) {
          if (mask === void 0) { mask = -1; }
          if (insertFirst === void 0) { insertFirst = false; }
          if (scope === void 0) { scope = null; }
          if (unregisterOnFirstCall === void 0) { unregisterOnFirstCall = false; }
          if (!callback) {
              return null;
          }
          var observer = new Observer(callback, mask, scope);
          observer.unregisterOnNextCall = unregisterOnFirstCall;
          if (insertFirst) {
              this._observers.unshift(observer);
          }
          else {
              this._observers.push(observer);
          }
          if (this._onObserverAdded) {
              this._onObserverAdded(observer);
          }
          return observer;
      };
      /**
       * Create a new Observer with the specified callback and unregisters after the next notification
       * @param callback - the callback that will be executed for that Observer
       * @returns the new observer created for the callback
       */
      Observable.prototype.addOnce = function (callback) {
          return this.add(callback, undefined, undefined, undefined, true);
      };
      /**
       * Remove an Observer from the Observable object
       * @param observer - the instance of the Observer to remove
       * @returns false if it doesn't belong to this Observable
       */
      Observable.prototype.remove = function (observer) {
          if (!observer) {
              return false;
          }
          var index = this._observers.indexOf(observer);
          if (index !== -1) {
              this._deferUnregister(observer);
              return true;
          }
          return false;
      };
      /**
       * Remove a callback from the Observable object
       * @param callback - the callback to remove
       * @param scope - optional scope. If used only the callbacks with this scope will be removed
       * @returns false if it doesn't belong to this Observable
       */
      Observable.prototype.removeCallback = function (callback, scope) {
          for (var index = 0; index < this._observers.length; index++) {
              if (this._observers[index].callback === callback &&
                  (!scope || scope === this._observers[index].scope)) {
                  this._deferUnregister(this._observers[index]);
                  return true;
              }
          }
          return false;
      };
      /**
       * Notify all Observers by calling their respective callback with the given data
       * Will return true if all observers were executed, false if an observer set skipNextObservers to true, then prevent the subsequent ones to execute
       * @param eventData - defines the data to send to all observers
       * @param mask - defines the mask of the current notification (observers with incompatible mask (ie mask & observer.mask === 0) will not be notified)
       * @param target - defines the original target of the state
       * @param currentTarget - defines the current target of the state
       * @returns false if the complete observer chain was not processed (because one observer set the skipNextObservers to true)
       */
      Observable.prototype.notifyObservers = function (eventData, mask, target, currentTarget) {
          var e_2, _a;
          if (mask === void 0) { mask = -1; }
          if (!this._observers.length) {
              return true;
          }
          var state = this._eventState;
          state.mask = mask;
          state.target = target;
          state.currentTarget = currentTarget;
          state.skipNextObservers = false;
          state.lastReturnValue = eventData;
          try {
              for (var _b = __values(this._observers), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var obs = _c.value;
                  if (obs._willBeUnregistered) {
                      continue;
                  }
                  if (obs.mask & mask) {
                      if (obs.scope) {
                          state.lastReturnValue = obs.callback.apply(obs.scope, [
                              eventData,
                              state
                          ]);
                      }
                      else {
                          state.lastReturnValue = obs.callback(eventData, state);
                      }
                      if (obs.unregisterOnNextCall) {
                          this._deferUnregister(obs);
                      }
                  }
                  if (state.skipNextObservers) {
                      return false;
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
          return true;
      };
      /**
       * Calling this will execute each callback, expecting it to be a promise or return a value.
       * If at any point in the chain one function fails, the promise will fail and the execution will not continue.
       * This is useful when a chain of events (sometimes async events) is needed to initialize a certain object
       * and it is crucial that all callbacks will be executed.
       * The order of the callbacks is kept, callbacks are not executed parallel.
       *
       * @param eventData - The data to be sent to each callback
       * @param mask - is used to filter observers defaults to -1
       * @param target - defines the callback target (see EventState)
       * @param currentTarget - defines he current object in the bubbling phase
       * @returns will return a Promise than resolves when all callbacks executed successfully.
       */
      Observable.prototype.notifyObserversWithPromise = function (eventData, mask, target, currentTarget) {
          var _this = this;
          if (mask === void 0) { mask = -1; }
          // create an empty promise
          var p = Promise.resolve(eventData);
          // no observers? return this promise.
          if (!this._observers.length) {
              return p;
          }
          var state = this._eventState;
          state.mask = mask;
          state.target = target;
          state.currentTarget = currentTarget;
          state.skipNextObservers = false;
          // execute one callback after another (not using Promise.all, the order is important)
          this._observers.forEach(function (obs) {
              if (state.skipNextObservers) {
                  return;
              }
              if (obs._willBeUnregistered) {
                  return;
              }
              if (obs.mask & mask) {
                  if (obs.scope) {
                      p = p.then(function (lastReturnedValue) {
                          state.lastReturnValue = lastReturnedValue;
                          return obs.callback.apply(obs.scope, [eventData, state]);
                      });
                  }
                  else {
                      p = p.then(function (lastReturnedValue) {
                          state.lastReturnValue = lastReturnedValue;
                          return obs.callback(eventData, state);
                      });
                  }
                  if (obs.unregisterOnNextCall) {
                      _this._deferUnregister(obs);
                  }
              }
          });
          // return the eventData
          return p.then(function () {
              return eventData;
          });
      };
      /**
       * Notify a specific observer
       * @param observer - defines the observer to notify
       * @param eventData - defines the data to be sent to each callback
       * @param mask - is used to filter observers defaults to -1
       */
      Observable.prototype.notifyObserver = function (observer, eventData, mask) {
          if (mask === void 0) { mask = -1; }
          var state = this._eventState;
          state.mask = mask;
          state.skipNextObservers = false;
          observer.callback(eventData, state);
      };
      /**
       * Gets a boolean indicating if the observable has at least one observer
       * @returns true is the Observable has at least one Observer registered
       */
      Observable.prototype.hasObservers = function () {
          return this._observers.length > 0;
      };
      /**
       * Clear the list of observers
       */
      Observable.prototype.clear = function () {
          this._observers = new Array();
          this._onObserverAdded = null;
      };
      /**
       * Clone the current observable
       * @returns a new observable
       */
      Observable.prototype.clone = function () {
          var result = new Observable();
          result._observers = this._observers.slice(0);
          return result;
      };
      /**
       * Does this observable handles observer registered with a given mask
       * @param mask - defines the mask to be tested
       * @returns whether or not one observer registered with the given mask is handeled
       */
      Observable.prototype.hasSpecificMask = function (mask) {
          var e_3, _a;
          if (mask === void 0) { mask = -1; }
          try {
              for (var _b = __values(this._observers), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var obs = _c.value;
                  if (obs.mask & mask || obs.mask === mask) {
                      return true;
                  }
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_3) throw e_3.error; }
          }
          return false;
      };
      Observable.prototype._deferUnregister = function (observer) {
          var _this = this;
          observer.unregisterOnNextCall = false;
          observer._willBeUnregistered = true;
          void executeTask(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
              return [2 /*return*/, this._remove(observer)];
          }); }); });
      };
      // This should only be called when not iterating over _observers to avoid callback skipping.
      // Removes an observer from the _observer Array.
      Observable.prototype._remove = function (observer) {
          if (!observer) {
              return false;
          }
          var index = this._observers.indexOf(observer);
          if (index !== -1) {
              this._observers.splice(index, 1);
              return true;
          }
          return false;
      };
      return Observable;
  }());

  var modulePromise;
  /**
   * teleport player to a destination
   * @param destination - "coordX,coordY", "magic", "crowd"
   * @public
   */
  function teleportTo(destination) {
      // error(`teleportTo(destination) was deprecated. Please use:
      // import {requestTeleport} from '@decentraland/UserActionModule'
      // executeTask(async () => {
      //   await requestTeleport(destination)
      // })`)
      callModuleRpc('requestTeleport', [destination]);
  }
  function ensureModule() {
      if (typeof modulePromise === 'undefined' && typeof dcl !== 'undefined') {
          modulePromise = dcl.loadModule('@decentraland/UserActionModule', {});
      }
      return typeof modulePromise !== 'undefined' && typeof dcl !== 'undefined';
  }
  function callModuleRpc(methodName, args) {
      if (ensureModule()) {
          modulePromise.then(function ($) {
              void dcl.callRpc($.rpcHandle, methodName, args);
          });
      }
  }

  /**
   * @public
   */
  var UUIDEvent = /** @class */ (function () {
      function UUIDEvent(uuid, payload) {
          this.uuid = uuid;
          this.payload = payload;
      }
      UUIDEvent = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [String, Object])
      ], UUIDEvent);
      return UUIDEvent;
  }());
  /**
   * @public
   */
  var RaycastResponse = /** @class */ (function () {
      function RaycastResponse(payload) {
          this.payload = payload;
      }
      RaycastResponse = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [Object])
      ], RaycastResponse);
      return RaycastResponse;
  }());
  /**
   * @public
   */
  var PointerEvent = /** @class */ (function () {
      function PointerEvent(payload) {
          this.payload = payload;
      }
      PointerEvent = __decorate([
          EventConstructor(),
          __metadata("design:paramtypes", [Object])
      ], PointerEvent);
      return PointerEvent;
  }());
  var internalDcl;
  /**
   * @internal
   * This function generates a callback that is passed to the Observable
   * constructor to subscribe to the events of the DecentralandInterface
   */
  function createSubscriber(eventName) {
      return function () {
          if (internalDcl) {
              internalDcl.subscribe(eventName);
          }
      };
  }
  /**
   * This event is triggered when you change your camera between 1st and 3rd person
   * @public
   */
  var onCameraModeChangedObservable = new Observable(createSubscriber('cameraModeChanged'));
  /**
   * This event is triggered when you change your camera between 1st and 3rd person
   * @public
   */
  var onIdleStateChangedObservable = new Observable(createSubscriber('idleStateChanged'));
  /**
   * These events are triggered after your character enters the scene.
   * @public
   */
  var onEnterSceneObservable = new Observable(createSubscriber('onEnterScene'));
  /** @public @deprecated Use onEnterSceneObservable instead. */
  var onEnterScene = onEnterSceneObservable;
  /**
   * These events are triggered after your character leaves the scene.
   * @public
   */
  var onLeaveSceneObservable = new Observable(createSubscriber('onLeaveScene'));
  /** @public @deprecated Use onLeaveSceneObservable instead. */
  var onLeaveScene = onLeaveSceneObservable;
  /**
   * This event is triggered after all the resources of the scene were loaded (models, textures, etc...)
   * @public
   */
  var onSceneReadyObservable = new Observable(createSubscriber('sceneStart'));
  /**
   * @public
   */
  var onPlayerExpressionObservable = new Observable(createSubscriber('playerExpression'));
  /**
   * @public
   */
  var onPointerLockedStateChange = new Observable(createSubscriber('onPointerLock'));
  /**
   * @public
   */
  var onVideoEvent = new Observable(createSubscriber('videoEvent'));
  /**
   * @public
   */
  var onProfileChanged = new Observable(createSubscriber('profileChanged'));
  /**
   * @public
   */
  var onPlayerConnectedObservable = new Observable(createSubscriber('playerConnected'));
  /**
   * @public
   */
  var onPlayerDisconnectedObservable = new Observable(createSubscriber('playerDisconnected'));
  /**
   * @public
   */
  var onRealmChangedObservable = new Observable(createSubscriber('onRealmChanged'));
  /**
   * @public
   */
  var onPlayerClickedObservable = new Observable(createSubscriber('playerClicked'));
  /**
   * @internal
   * This function adds _one_ listener to the onEvent event of dcl interface.
   * Leveraging a switch to route events to the Observable handlers.
   */
  function _initEventObservables(dcl) {
      // store internal reference to dcl, it is going to be used to subscribe to the events
      internalDcl = dcl;
      if (internalDcl) {
          internalDcl.onEvent(function (event) {
              switch (event.type) {
                  case 'onEnterScene': {
                      onEnterSceneObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'onLeaveScene': {
                      onLeaveSceneObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'cameraModeChanged': {
                      onCameraModeChangedObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'idleStateChanged': {
                      onIdleStateChangedObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'sceneStart': {
                      onSceneReadyObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'playerExpression': {
                      onPlayerExpressionObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'videoEvent': {
                      var videoData = event.data;
                      var component = DisposableComponent.engine.disposableComponents[videoData.componentId];
                      if (component) {
                          component.update(videoData);
                      }
                      onVideoEvent.notifyObservers(videoData);
                      return;
                  }
                  case 'profileChanged': {
                      onProfileChanged.notifyObservers(event.data);
                      return;
                  }
                  case 'onPointerLock': {
                      onPointerLockedStateChange.notifyObservers(event.data);
                      return;
                  }
                  case 'playerConnected': {
                      onPlayerConnectedObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'playerDisconnected': {
                      onPlayerDisconnectedObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'onRealmChanged': {
                      onRealmChangedObservable.notifyObservers(event.data);
                      return;
                  }
                  case 'playerClicked': {
                      onPlayerClickedObservable.notifyObservers(event.data);
                      return;
                  }
              }
          });
      }
  }

  // This number is defined in the protocol ECS.SetEntityParent.3
  var ROOT_ENTITY_ID = '0';
  var DecentralandSynchronizationSystem = /** @class */ (function () {
      function DecentralandSynchronizationSystem(dcl) {
          this.dcl = dcl;
          this.cachedComponents = {};
      }
      DecentralandSynchronizationSystem.prototype.activate = function (engine) {
          var _this = this;
          this.engine = engine;
          engine.eventManager.addListener(ComponentAdded, this, this.componentAdded);
          engine.eventManager.addListener(ComponentRemoved, this, this.componentRemoved);
          engine.eventManager.addListener(DisposableComponentCreated, this, this.disposableComponentCreated);
          engine.eventManager.addListener(DisposableComponentRemoved, this, this.disposableComponentRemoved);
          engine.eventManager.addListener(DisposableComponentUpdated, this, this.disposableComponentUpdated);
          engine.eventManager.addListener(ParentChanged, this, this.parentChanged);
          var rootId = engine.rootEntity.uuid;
          this.dcl.addEntity(rootId);
          // TODO(agus): send disposableComponents if exist
          this.dcl.onUpdate(function (dt) {
              engine.update(dt);
              _this.presentEntities();
          });
          this.dcl.onEvent(function (event) {
              var data = event.data;
              switch (event.type) {
                  case 'uuidEvent':
                      engine.eventManager.fireEvent(new UUIDEvent(data.uuid, data.payload));
                      break;
                  case 'raycastResponse':
                      if (data.queryType === 'HitFirst') {
                          engine.eventManager.fireEvent(new RaycastResponse(data));
                      }
                      else if (data.queryType === 'HitAll') {
                          engine.eventManager.fireEvent(new RaycastResponse(data));
                      }
                      break;
                  case 'actionButtonEvent':
                      engine.eventManager.fireEvent(new PointerEvent(data.payload));
                      break;
              }
          });
      };
      /**
       * system.onAddEntity is called by the engine when a entity is added to the
       * engine.
       */
      DecentralandSynchronizationSystem.prototype.onAddEntity = function (entity) {
          if (entity && entity.isAddedToEngine()) {
              var entityId = entity.uuid;
              var parent = entity.getParent();
              this.dcl.addEntity(entityId);
              if (parent) {
                  // If the entity has a parent, we send the the enparenting signal
                  // otherwise the engine will know the entity is set as a child of
                  // engine.rootEntity by default
                  this.dcl.setParent(entityId, parent.uuid);
              }
              // This creates a cache dictionary to avoid send redundant information to
              // the engine in order to avoid unnecessary work in the main thread.
              this.cachedComponents[entityId] = {};
              // this iterator sends the current components of te engine at the moment
              // of addition
              for (var componentName in entity.components) {
                  var component = entity.components[componentName];
                  var classId = getComponentClassId(component);
                  if (classId !== null) {
                      if (isDisposableComponent(component)) {
                          // Send the attach component signal
                          this.dcl.attachEntityComponent(entity.uuid, componentName, getComponentId(component));
                      }
                      else {
                          var componentJson = JSON.stringify(component);
                          // Send the updated component
                          this.dcl.updateEntityComponent(entityId, componentName, classId, componentJson);
                          // Update the cached copy of the sent component
                          this.cachedComponents[entityId][componentName] = componentJson;
                      }
                  }
              }
          }
      };
      /**
       * system.onRemoveEntity is called by the engine when a entity gets removed
       * from the engine.
       */
      DecentralandSynchronizationSystem.prototype.onRemoveEntity = function (entity) {
          if (entity.isAddedToEngine()) {
              var entityId = entity.uuid;
              // Send the removeEntity signal
              this.dcl.removeEntity(entityId);
              // Remove the caches from local memory
              delete this.cachedComponents[entityId];
          }
      };
      /**
       * This method is called at the end of every update cycle.
       * It finds and sends updates in components of the engine entities.
       */
      DecentralandSynchronizationSystem.prototype.presentEntities = function () {
          for (var i in this.engine.entities) {
              var entity = this.engine.entities[i];
              for (var componentName in entity.components) {
                  var component = entity.components[componentName];
                  var classId = getComponentClassId(component);
                  if (classId !== null && !isDisposableComponent(component)) {
                      var jsonRepresentation = this.getJsonIfDirty(entity.uuid, componentName, component);
                      if (jsonRepresentation) {
                          // Send the updated component
                          this.dcl.updateEntityComponent(entity.uuid, componentName, classId, jsonRepresentation);
                          this.clearDirty(entity.uuid, componentName, component, jsonRepresentation);
                      }
                  }
              }
          }
          for (var id in this.engine.disposableComponents) {
              var component = this.engine.disposableComponents[id];
              if (component instanceof ObservableComponent && component.dirty) {
                  this.dcl.componentUpdated(id, JSON.stringify(component));
                  component.dirty = false;
              }
          }
      };
      /**
       * This method is called after a component is added to an entity. The event
       * (param 1) contains the necessary information to notify the engine about the
       * component that was added and the entity.
       */
      DecentralandSynchronizationSystem.prototype.componentAdded = function (event) {
          if (event.entity.isAddedToEngine()) {
              var component = event.entity.components[event.componentName];
              if (isDisposableComponent(component)) {
                  this.dcl.attachEntityComponent(event.entity.uuid, event.componentName, getComponentId(component));
              }
              else if (event.classId !== null) {
                  var componentJson = JSON.stringify(component);
                  // Send the updated component
                  this.dcl.updateEntityComponent(event.entity.uuid, event.componentName, event.classId, componentJson);
                  // Update the cached copy of the sent component
                  this.cachedComponents[event.entity.uuid][event.componentName] =
                      componentJson;
              }
          }
      };
      /**
       * This method is called when a component is removed from an entity.
       */
      DecentralandSynchronizationSystem.prototype.componentRemoved = function (event) {
          if (event.entity.isAddedToEngine()) {
              this.dcl.removeEntityComponent(event.entity.uuid, event.componentName);
              // Remove the cached component so we can send it again when re-adding
              delete this.cachedComponents[event.entity.uuid][event.componentName];
          }
      };
      /**
       * This method is called after a disposableComponent is created.
       * It instantiates the component in the engine, the event that updates the
       * created component is fired immediatly after.
       */
      DecentralandSynchronizationSystem.prototype.disposableComponentCreated = function (event) {
          this.dcl.componentCreated(event.componentId, event.componentName, event.classId);
      };
      /**
       * This method is called after a disposableComponent is updated, once per
       * update cycle and once after creation.
       */
      DecentralandSynchronizationSystem.prototype.disposableComponentRemoved = function (event) {
          this.dcl.componentDisposed(event.componentId);
      };
      /**
       * This method is called right after a diposableComponent gets disposed. That
       * process is manual.
       *
       * TODO(menduz,dani): What happens if a disposableComponent gets disposed and
       * it remains attached to some entities?
       */
      DecentralandSynchronizationSystem.prototype.disposableComponentUpdated = function (event) {
          this.dcl.componentUpdated(event.componentId, JSON.stringify(event.component));
      };
      /**
       * This method is called when a parent changes in an entity.
       */
      DecentralandSynchronizationSystem.prototype.parentChanged = function (event) {
          this.dcl.setParent(event.entity.uuid, event.parent ? event.parent.uuid : ROOT_ENTITY_ID);
      };
      DecentralandSynchronizationSystem.prototype.getJsonIfDirty = function (entityId, componentName, component) {
          var jsonRepresentation = JSON.stringify(component);
          return (jsonRepresentation !== this.cachedComponents[entityId][componentName] &&
              jsonRepresentation);
      };
      DecentralandSynchronizationSystem.prototype.clearDirty = function (entityId, componentName, component, jsonRepresentation) {
          this.cachedComponents[entityId][componentName] = jsonRepresentation;
      };
      return DecentralandSynchronizationSystem;
  }());

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var dist = {};

  var types = {};

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RAD2DEG = exports.DEG2RAD = exports.Epsilon = exports.ToLinearSpace = exports.ToGammaSpace = exports.Space = exports.Orientation = void 0;
  (function (Orientation) {
      /**
       * Clockwise
       */
      Orientation[Orientation["CW"] = 0] = "CW";
      /** Counter clockwise */
      Orientation[Orientation["CCW"] = 1] = "CCW";
  })(exports.Orientation || (exports.Orientation = {}));
  (function (Space) {
      /** Local (object) space */
      Space[Space["LOCAL"] = 0] = "LOCAL";
      /** World space */
      Space[Space["WORLD"] = 1] = "WORLD";
      /** Bone space */
      Space[Space["BONE"] = 2] = "BONE";
  })(exports.Space || (exports.Space = {}));
  /**
   * Constant used to convert a value to gamma space
   * @public
   */
  exports.ToGammaSpace = 1 / 2.2;
  /**
   * Constant used to convert a value to linear space
   * @public
   */
  exports.ToLinearSpace = 2.2;
  /**
   * Constant used to define the minimal number value in Babylon.js
   * @public
   */
  exports.Epsilon = 0.000001;
  /**
   * Constant used to convert from Euler degrees to radians
   * @public
   */
  exports.DEG2RAD = Math.PI / 180;
  /**
   * Constant used to convert from radians to Euler degrees
   * @public
   */
  exports.RAD2DEG = 360 / (Math.PI * 2);

  }(types));

  var preallocatedVariables = {};

  var utils = {};

  Object.defineProperty(utils, "__esModule", { value: true });
  utils.buildArray = void 0;
  /**
   * @internal
   * Returns an array of the given size filled with element built from the given constructor and the paramters
   * @param size - the number of element to construct and put in the array
   * @param itemBuilder - a callback responsible for creating new instance of item. Called once per array entry.
   * @returns a new array filled with new objects
   * @internal
   */
  function buildArray(size, itemBuilder) {
      const a = [];
      for (let i = 0; i < size; ++i) {
          a.push(itemBuilder());
      }
      return a;
  }
  utils.buildArray = buildArray;

  var Vector3$1 = {};

  var Quaternion$1 = {};

  var Matrix$1 = {};

  var Vector4$1 = {};

  var Scalar$1 = {};

  Object.defineProperty(Scalar$1, "__esModule", { value: true });
  Scalar$1.Scalar = void 0;
  /**
   * Scalar computation library
   * @public
   */
  class Scalar {
      /**
       * Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
       * @param a - number
       * @param b - number
       * @param epsilon - (default = 1.401298E-45)
       * @returns true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
       */
      static WithinEpsilon(a, b, epsilon = 1.401298e-45) {
          const num = a - b;
          return -epsilon <= num && num <= epsilon;
      }
      /**
       * Returns a string : the upper case translation of the number i to hexadecimal.
       * @param i - number
       * @returns the upper case translation of the number i to hexadecimal.
       */
      static ToHex(i) {
          const str = i.toString(16);
          if (i <= 15) {
              return ('0' + str).toUpperCase();
          }
          return str.toUpperCase();
      }
      /**
       * Returns -1 if value is negative and +1 is value is positive.
       * @param _value - the value
       * @returns the value itself if it's equal to zero.
       */
      static Sign(value) {
          const _value = +value; // convert to a number
          if (_value === 0 || isNaN(_value)) {
              return _value;
          }
          return _value > 0 ? 1 : -1;
      }
      /**
       * Returns the value itself if it's between min and max.
       * Returns min if the value is lower than min.
       * Returns max if the value is greater than max.
       * @param value - the value to clmap
       * @param min - the min value to clamp to (default: 0)
       * @param max - the max value to clamp to (default: 1)
       * @returns the clamped value
       */
      static Clamp(value, min = 0, max = 1) {
          return Math.min(max, Math.max(min, value));
      }
      /**
       * the log2 of value.
       * @param value - the value to compute log2 of
       * @returns the log2 of value.
       */
      static Log2(value) {
          return Math.log(value) * Math.LOG2E;
      }
      /**
       * Loops the value, so that it is never larger than length and never smaller than 0.
       *
       * This is similar to the modulo operator but it works with floating point numbers.
       * For example, using 3.0 for t and 2.5 for length, the result would be 0.5.
       * With t = 5 and length = 2.5, the result would be 0.0.
       * Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator
       * @param value - the value
       * @param length - the length
       * @returns the looped value
       */
      static Repeat(value, length) {
          return value - Math.floor(value / length) * length;
      }
      /**
       * Normalize the value between 0.0 and 1.0 using min and max values
       * @param value - value to normalize
       * @param min - max to normalize between
       * @param max - min to normalize between
       * @returns the normalized value
       */
      static Normalize(value, min, max) {
          return (value - min) / (max - min);
      }
      /**
       * Denormalize the value from 0.0 and 1.0 using min and max values
       * @param normalized - value to denormalize
       * @param min - max to denormalize between
       * @param max - min to denormalize between
       * @returns the denormalized value
       */
      static Denormalize(normalized, min, max) {
          return normalized * (max - min) + min;
      }
      /**
       * Calculates the shortest difference between two given angles given in degrees.
       * @param current - current angle in degrees
       * @param target - target angle in degrees
       * @returns the delta
       */
      static DeltaAngle(current, target) {
          let num = Scalar.Repeat(target - current, 360.0);
          if (num > 180.0) {
              num -= 360.0;
          }
          return num;
      }
      /**
       * PingPongs the value t, so that it is never larger than length and never smaller than 0.
       * @param tx - value
       * @param length - length
       * @returns The returned value will move back and forth between 0 and length
       */
      static PingPong(tx, length) {
          const t = Scalar.Repeat(tx, length * 2.0);
          return length - Math.abs(t - length);
      }
      /**
       * Interpolates between min and max with smoothing at the limits.
       *
       * This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up
       * from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.
       * @param from - from
       * @param to - to
       * @param tx - value
       * @returns the smooth stepped value
       */
      static SmoothStep(from, to, tx) {
          let t = Scalar.Clamp(tx);
          t = -2.0 * t * t * t + 3.0 * t * t;
          return to * t + from * (1.0 - t);
      }
      /**
       * Moves a value current towards target.
       *
       * This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta.
       * Negative values of maxDelta pushes the value away from target.
       * @param current - current value
       * @param target - target value
       * @param maxDelta - max distance to move
       * @returns resulting value
       */
      static MoveTowards(current, target, maxDelta) {
          let result = 0;
          if (Math.abs(target - current) <= maxDelta) {
              result = target;
          }
          else {
              result = current + Scalar.Sign(target - current) * maxDelta;
          }
          return result;
      }
      /**
       * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
       *
       * Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta
       *  are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.
       * @param current - current value
       * @param target - target value
       * @param maxDelta - max distance to move
       * @returns resulting angle
       */
      static MoveTowardsAngle(current, target, maxDelta) {
          const num = Scalar.DeltaAngle(current, target);
          let result = 0;
          if (-maxDelta < num && num < maxDelta) {
              result = target;
          }
          else {
              result = Scalar.MoveTowards(current, current + num, maxDelta);
          }
          return result;
      }
      /**
       * Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar.
       * @param start - start value
       * @param end - target value
       * @param amount - amount to lerp between
       * @returns the lerped value
       */
      static Lerp(start, end, amount) {
          return start + (end - start) * amount;
      }
      /**
       * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
       * The parameter t is clamped to the range [0, 1]. Variables a and b are assumed to be in degrees.
       * @param start - start value
       * @param end - target value
       * @param amount - amount to lerp between
       * @returns the lerped value
       */
      static LerpAngle(start, end, amount) {
          let num = Scalar.Repeat(end - start, 360.0);
          if (num > 180.0) {
              num -= 360.0;
          }
          return start + num * Scalar.Clamp(amount);
      }
      /**
       * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
       * @param a - start value
       * @param b - target value
       * @param value - value between a and b
       * @returns the inverseLerp value
       */
      static InverseLerp(a, b, value) {
          let result = 0;
          if (a !== b) {
              result = Scalar.Clamp((value - a) / (b - a));
          }
          else {
              result = 0.0;
          }
          return result;
      }
      /**
       * Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".
       * {@link http://mathworld.wolfram.com/HermitePolynomial.html}
       * @param value1 - spline value
       * @param tangent1 - spline value
       * @param value2 - spline value
       * @param tangent2 - spline value
       * @param amount - input value
       * @returns hermite result
       */
      static Hermite(value1, tangent1, value2, tangent2, amount) {
          const squared = amount * amount;
          const cubed = amount * squared;
          const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
          const part2 = -2.0 * cubed + 3.0 * squared;
          const part3 = cubed - 2.0 * squared + amount;
          const part4 = cubed - squared;
          return value1 * part1 + value2 * part2 + tangent1 * part3 + tangent2 * part4;
      }
      /**
       * Returns a random float number between and min and max values
       * @param min - min value of random
       * @param max - max value of random
       * @returns random value
       */
      static RandomRange(min, max) {
          if (min === max) {
              return min;
          }
          return Math.random() * (max - min) + min;
      }
      /**
       * This function returns percentage of a number in a given range.
       *
       * RangeToPercent(40,20,60) will return 0.5 (50%)
       * RangeToPercent(34,0,100) will return 0.34 (34%)
       * @param num - to convert to percentage
       * @param min - min range
       * @param max - max range
       * @returns the percentage
       */
      static RangeToPercent(num, min, max) {
          return (num - min) / (max - min);
      }
      /**
       * This function returns number that corresponds to the percentage in a given range.
       *
       * PercentToRange(0.34,0,100) will return 34.
       * @param percent - to convert to number
       * @param min - min range
       * @param max - max range
       * @returns the number
       */
      static PercentToRange(percent, min, max) {
          return (max - min) * percent + min;
      }
      /**
       * Returns the angle converted to equivalent value between -Math.PI and Math.PI radians.
       * @param angle - The angle to normalize in radian.
       * @returns The converted angle.
       */
      static NormalizeRadians(angle) {
          // More precise but slower version kept for reference.
          // tslint:disable:no-commented-out-code
          /*
            // angle = angle % Tools.TwoPi;
            // angle = (angle + Tools.TwoPi) % Tools.TwoPi;
      
            //if (angle > Math.PI) {
            //	angle -= Tools.TwoPi;
            //}
             */
          return angle - Scalar.TwoPi * Math.floor((angle + Math.PI) / Scalar.TwoPi);
      }
  }
  Scalar$1.Scalar = Scalar;
  /**
   * Two pi constants convenient for computation.
   */
  Scalar.TwoPi = Math.PI * 2;

  Object.defineProperty(Vector4$1, "__esModule", { value: true });
  Vector4$1.Vector4 = void 0;
  const types_1$8 = types;
  const Scalar_1$6 = Scalar$1;
  const Vector3_1$7 = Vector3$1;
  /**
   * Vector4 class created for EulerAngle class conversion to Quaternion
   * @public
   */
  class Vector4 {
      /**
       * Creates a Vector4 object from the given floats.
       * @param x - x value of the vector
       * @param y - y value of the vector
       * @param z - z value of the vector
       * @param w - w value of the vector
       */
      constructor(
      /** x value of the vector */
      x, 
      /** y value of the vector */
      y, 
      /** z value of the vector */
      z, 
      /** w value of the vector */
      w) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
      }
      // Statics
      /**
       * Returns a new Vector4 as the result of the addition of the two given vectors.
       * @param vector1 - the first vector
       * @param vector2 - the second vector
       * @returns the resulting vector
       */
      static Add(vector1, vector2) {
          return new Vector4(vector1.x, vector1.y, vector1.z, vector1.w).addInPlace(vector2);
      }
      /**
       * Returns a new Vector4 set from the starting index of the given array.
       * @param array - the array to pull values from
       * @param offset - the offset into the array to start at
       * @returns the new vector
       */
      static FromArray(array, offset = 0) {
          return new Vector4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
      }
      /**
       * Updates the given vector "result" from the starting index of the given array.
       * @param array - the array to pull values from
       * @param offset - the offset into the array to start at
       * @param result - the vector to store the result in
       */
      static FromArrayToRef(array, offset, result) {
          result.x = array[offset];
          result.y = array[offset + 1];
          result.z = array[offset + 2];
          result.w = array[offset + 3];
      }
      /**
       * Updates the given vector "result" from the starting index of the given FloatArray.
       * @param array - the array to pull values from
       * @param offset - the offset into the array to start at
       * @param result - the vector to store the result in
       */
      static FromFloatArrayToRef(array, offset, result) {
          Vector4.FromArrayToRef(array, offset, result);
      }
      /**
       * Updates the given vector "result" coordinates from the given floats.
       * @param x - float to set from
       * @param y - float to set from
       * @param z - float to set from
       * @param w - float to set from
       * @param result - the vector to the floats in
       */
      static FromFloatsToRef(x, y, z, w, result) {
          result.x = x;
          result.y = y;
          result.z = z;
          result.w = w;
      }
      /**
       * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
       * @returns the new vector
       */
      static Zero() {
          return new Vector4(0.0, 0.0, 0.0, 0.0);
      }
      /**
       * Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)
       * @returns the new vector
       */
      static One() {
          return new Vector4(1.0, 1.0, 1.0, 1.0);
      }
      /**
       * Returns a new normalized Vector4 from the given one.
       * @param vector - the vector to normalize
       * @returns the vector
       */
      static Normalize(vector) {
          const result = Vector4.Zero();
          Vector4.NormalizeToRef(vector, result);
          return result;
      }
      /**
       * Updates the given vector "result" from the normalization of the given one.
       * @param vector - the vector to normalize
       * @param result - the vector to store the result in
       */
      static NormalizeToRef(vector, result) {
          result.copyFrom(vector);
          result.normalize();
      }
      /**
       * Returns a vector with the minimum values from the left and right vectors
       * @param left - left vector to minimize
       * @param right - right vector to minimize
       * @returns a new vector with the minimum of the left and right vector values
       */
      static Minimize(left, right) {
          const min = new Vector4(left.x, left.y, left.z, left.w);
          min.minimizeInPlace(right);
          return min;
      }
      /**
       * Returns a vector with the maximum values from the left and right vectors
       * @param left - left vector to maximize
       * @param right - right vector to maximize
       * @returns a new vector with the maximum of the left and right vector values
       */
      static Maximize(left, right) {
          const max = new Vector4(left.x, left.y, left.z, left.w);
          max.maximizeInPlace(right);
          return max;
      }
      /**
       * Returns the distance (float) between the vectors "value1" and "value2".
       * @param value1 - value to calulate the distance between
       * @param value2 - value to calulate the distance between
       * @returns the distance between the two vectors
       */
      static Distance(value1, value2) {
          return Math.sqrt(Vector4.DistanceSquared(value1, value2));
      }
      /**
       * Returns the squared distance (float) between the vectors "value1" and "value2".
       * @param value1 - value to calulate the distance between
       * @param value2 - value to calulate the distance between
       * @returns the distance between the two vectors squared
       */
      static DistanceSquared(value1, value2) {
          const x = value1.x - value2.x;
          const y = value1.y - value2.y;
          const z = value1.z - value2.z;
          const w = value1.w - value2.w;
          return x * x + y * y + z * z + w * w;
      }
      /**
       * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
       * @param value1 - value to calulate the center between
       * @param value2 - value to calulate the center between
       * @returns the center between the two vectors
       */
      static Center(value1, value2) {
          const center = Vector4.Add(value1, value2);
          center.scaleInPlace(0.5);
          return center;
      }
      /**
       * Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
       * This methods computes transformed normalized direction vectors only.
       * @param vector - the vector to transform
       * @param transformation - the transformation matrix to apply
       * @returns the new vector
       */
      static TransformNormal(vector, transformation) {
          const result = Vector4.Zero();
          Vector4.TransformNormalToRef(vector, transformation, result);
          return result;
      }
      /**
       * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
       * This methods computes transformed normalized direction vectors only.
       * @param vector - the vector to transform
       * @param transformation - the transformation matrix to apply
       * @param result - the vector to store the result in
       */
      static TransformNormalToRef(vector, transformation, result) {
          const m = transformation.m;
          const x = vector.x * m[0] + vector.y * m[4] + vector.z * m[8];
          const y = vector.x * m[1] + vector.y * m[5] + vector.z * m[9];
          const z = vector.x * m[2] + vector.y * m[6] + vector.z * m[10];
          result.x = x;
          result.y = y;
          result.z = z;
          result.w = vector.w;
      }
      /**
       * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
       * This methods computes transformed normalized direction vectors only.
       * @param x - value to transform
       * @param y - value to transform
       * @param z - value to transform
       * @param w - value to transform
       * @param transformation - the transformation matrix to apply
       * @param result - the vector to store the results in
       */
      static TransformNormalFromFloatsToRef(x, y, z, w, transformation, result) {
          const m = transformation.m;
          result.x = x * m[0] + y * m[4] + z * m[8];
          result.y = x * m[1] + y * m[5] + z * m[9];
          result.z = x * m[2] + y * m[6] + z * m[10];
          result.w = w;
      }
      /**
       * Returns the string with the Vector4 coordinates.
       * @returns a string containing all the vector values
       */
      toString() {
          return ('{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}');
      }
      /**
       * Returns the string "Vector4".
       * @returns "Vector4"
       */
      getClassName() {
          return 'Vector4';
      }
      /**
       * Returns the Vector4 hash code.
       * @returns a unique hash code
       */
      getHashCode() {
          let hash = this.x || 0;
          hash = (hash * 397) ^ (this.y || 0);
          hash = (hash * 397) ^ (this.z || 0);
          hash = (hash * 397) ^ (this.w || 0);
          return hash;
      }
      // Operators
      /**
       * Returns a new array populated with 4 elements : the Vector4 coordinates.
       * @returns the resulting array
       */
      asArray() {
          const result = new Array();
          this.toArray(result, 0);
          return result;
      }
      /**
       * Populates the given array from the given index with the Vector4 coordinates.
       * @param array - array to populate
       * @param index - index of the array to start at (default: 0)
       * @returns the Vector4.
       */
      toArray(array, index = 0) {
          array[index] = this.x;
          array[index + 1] = this.y;
          array[index + 2] = this.z;
          array[index + 3] = this.w;
          return this;
      }
      /**
       * Adds the given vector to the current Vector4.
       * @param otherVector - the vector to add
       * @returns the updated Vector4.
       */
      addInPlace(otherVector) {
          this.x += otherVector.x;
          this.y += otherVector.y;
          this.z += otherVector.z;
          this.w += otherVector.w;
          return this;
      }
      /**
       * Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.
       * @param otherVector - the vector to add
       * @returns the resulting vector
       */
      add(otherVector) {
          return new Vector4(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z, this.w + otherVector.w);
      }
      /**
       * Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.
       * @param otherVector - the vector to add
       * @param result - the vector to store the result
       * @returns the current Vector4.
       */
      addToRef(otherVector, result) {
          result.x = this.x + otherVector.x;
          result.y = this.y + otherVector.y;
          result.z = this.z + otherVector.z;
          result.w = this.w + otherVector.w;
          return this;
      }
      /**
       * Subtract in place the given vector from the current Vector4.
       * @param otherVector - the vector to subtract
       * @returns the updated Vector4.
       */
      subtractInPlace(otherVector) {
          this.x -= otherVector.x;
          this.y -= otherVector.y;
          this.z -= otherVector.z;
          this.w -= otherVector.w;
          return this;
      }
      /**
       * Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.
       * @param otherVector - the vector to add
       * @returns the new vector with the result
       */
      subtract(otherVector) {
          return new Vector4(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z, this.w - otherVector.w);
      }
      /**
       * Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.
       * @param otherVector - the vector to subtract
       * @param result - the vector to store the result
       * @returns the current Vector4.
       */
      subtractToRef(otherVector, result) {
          result.x = this.x - otherVector.x;
          result.y = this.y - otherVector.y;
          result.z = this.z - otherVector.z;
          result.w = this.w - otherVector.w;
          return this;
      }
      /**
       * Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.
       */
      /**
       * Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.
       * @param x - value to subtract
       * @param y - value to subtract
       * @param z - value to subtract
       * @param w - value to subtract
       * @returns new vector containing the result
       */
      subtractFromFloats(x, y, z, w) {
          return new Vector4(this.x - x, this.y - y, this.z - z, this.w - w);
      }
      /**
       * Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.
       * @param x - value to subtract
       * @param y - value to subtract
       * @param z - value to subtract
       * @param w - value to subtract
       * @param result - the vector to store the result in
       * @returns the current Vector4.
       */
      subtractFromFloatsToRef(x, y, z, w, result) {
          result.x = this.x - x;
          result.y = this.y - y;
          result.z = this.z - z;
          result.w = this.w - w;
          return this;
      }
      /**
       * Returns a new Vector4 set with the current Vector4 negated coordinates.
       * @returns a new vector with the negated values
       */
      negate() {
          return new Vector4(-this.x, -this.y, -this.z, -this.w);
      }
      /**
       * Multiplies the current Vector4 coordinates by scale (float).
       * @param scale - the number to scale with
       * @returns the updated Vector4.
       */
      scaleInPlace(scale) {
          this.x *= scale;
          this.y *= scale;
          this.z *= scale;
          this.w *= scale;
          return this;
      }
      /**
       * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
       * @param scale - the number to scale with
       * @returns a new vector with the result
       */
      scale(scale) {
          return new Vector4(this.x * scale, this.y * scale, this.z * scale, this.w * scale);
      }
      /**
       * Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).
       * @param scale - the number to scale with
       * @param result - a vector to store the result in
       * @returns the current Vector4.
       */
      scaleToRef(scale, result) {
          result.x = this.x * scale;
          result.y = this.y * scale;
          result.z = this.z * scale;
          result.w = this.w * scale;
          return this;
      }
      /**
       * Scale the current Vector4 values by a factor and add the result to a given Vector4
       * @param scale - defines the scale factor
       * @param result - defines the Vector4 object where to store the result
       * @returns the unmodified current Vector4
       */
      scaleAndAddToRef(scale, result) {
          result.x += this.x * scale;
          result.y += this.y * scale;
          result.z += this.z * scale;
          result.w += this.w * scale;
          return this;
      }
      /**
       * Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.
       * @param otherVector - the vector to compare against
       * @returns true if they are equal
       */
      equals(otherVector) {
          return (otherVector &&
              this.x === otherVector.x &&
              this.y === otherVector.y &&
              this.z === otherVector.z &&
              this.w === otherVector.w);
      }
      /**
       * Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.
       * @param otherVector - vector to compare against
       * @param epsilon - (Default: very small number)
       * @returns true if they are equal
       */
      equalsWithEpsilon(otherVector, epsilon = types_1$8.Epsilon) {
          return (otherVector &&
              Scalar_1$6.Scalar.WithinEpsilon(this.x, otherVector.x, epsilon) &&
              Scalar_1$6.Scalar.WithinEpsilon(this.y, otherVector.y, epsilon) &&
              Scalar_1$6.Scalar.WithinEpsilon(this.z, otherVector.z, epsilon) &&
              Scalar_1$6.Scalar.WithinEpsilon(this.w, otherVector.w, epsilon));
      }
      /**
       * Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.
       * @param x - x value to compare against
       * @param y - y value to compare against
       * @param z - z value to compare against
       * @param w - w value to compare against
       * @returns true if equal
       */
      equalsToFloats(x, y, z, w) {
          return this.x === x && this.y === y && this.z === z && this.w === w;
      }
      /**
       * Multiplies in place the current Vector4 by the given one.
       * @param otherVector - vector to multiple with
       * @returns the updated Vector4.
       */
      multiplyInPlace(otherVector) {
          this.x *= otherVector.x;
          this.y *= otherVector.y;
          this.z *= otherVector.z;
          this.w *= otherVector.w;
          return this;
      }
      /**
       * Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.
       * @param otherVector - vector to multiple with
       * @returns resulting new vector
       */
      multiply(otherVector) {
          return new Vector4(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z, this.w * otherVector.w);
      }
      /**
       * Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.
       * @param otherVector - vector to multiple with
       * @param result - vector to store the result
       * @returns the current Vector4.
       */
      multiplyToRef(otherVector, result) {
          result.x = this.x * otherVector.x;
          result.y = this.y * otherVector.y;
          result.z = this.z * otherVector.z;
          result.w = this.w * otherVector.w;
          return this;
      }
      /**
       * Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.
       * @param x - x value multiply with
       * @param y - y value multiply with
       * @param z - z value multiply with
       * @param w - w value multiply with
       * @returns resulting new vector
       */
      multiplyByFloats(x, y, z, w) {
          return new Vector4(this.x * x, this.y * y, this.z * z, this.w * w);
      }
      /**
       * Returns a new Vector4 set with the division result of the current Vector4 by the given one.
       * @param otherVector - vector to devide with
       * @returns resulting new vector
       */
      divide(otherVector) {
          return new Vector4(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z, this.w / otherVector.w);
      }
      /**
       * Updates the given vector "result" with the division result of the current Vector4 by the given one.
       * @param otherVector - vector to devide with
       * @param result - vector to store the result
       * @returns the current Vector4.
       */
      divideToRef(otherVector, result) {
          result.x = this.x / otherVector.x;
          result.y = this.y / otherVector.y;
          result.z = this.z / otherVector.z;
          result.w = this.w / otherVector.w;
          return this;
      }
      /**
       * Divides the current Vector3 coordinates by the given ones.
       * @param otherVector - vector to devide with
       * @returns the updated Vector3.
       */
      divideInPlace(otherVector) {
          return this.divideToRef(otherVector, this);
      }
      /**
       * Updates the Vector4 coordinates with the minimum values between its own and the given vector ones
       * @param other - defines the second operand
       * @returns the current updated Vector4
       */
      minimizeInPlace(other) {
          if (other.x < this.x) {
              this.x = other.x;
          }
          if (other.y < this.y) {
              this.y = other.y;
          }
          if (other.z < this.z) {
              this.z = other.z;
          }
          if (other.w < this.w) {
              this.w = other.w;
          }
          return this;
      }
      /**
       * Updates the Vector4 coordinates with the maximum values between its own and the given vector ones
       * @param other - defines the second operand
       * @returns the current updated Vector4
       */
      maximizeInPlace(other) {
          if (other.x > this.x) {
              this.x = other.x;
          }
          if (other.y > this.y) {
              this.y = other.y;
          }
          if (other.z > this.z) {
              this.z = other.z;
          }
          if (other.w > this.w) {
              this.w = other.w;
          }
          return this;
      }
      /**
       * Gets a new Vector4 from current Vector4 floored values
       * @returns a new Vector4
       */
      floor() {
          return new Vector4(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w));
      }
      /**
       * Gets a new Vector4 from current Vector3 floored values
       * @returns a new Vector4
       */
      fract() {
          return new Vector4(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z), this.w - Math.floor(this.w));
      }
      // Properties
      /**
       * Returns the Vector4 length (float).
       * @returns the length
       */
      length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
      }
      /**
       * Returns the Vector4 squared length (float).
       * @returns the length squared
       */
      lengthSquared() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
      }
      // Methods
      /**
       * Normalizes in place the Vector4.
       * @returns the updated Vector4.
       */
      normalize() {
          const len = this.length();
          if (len === 0) {
              return this;
          }
          return this.scaleInPlace(1.0 / len);
      }
      /**
       * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
       * @returns this converted to a new vector3
       */
      toVector3() {
          return new Vector3_1$7.Vector3(this.x, this.y, this.z);
      }
      /**
       * Returns a new Vector4 copied from the current one.
       * @returns the new cloned vector
       */
      clone() {
          return new Vector4(this.x, this.y, this.z, this.w);
      }
      /**
       * Updates the current Vector4 with the given one coordinates.
       * @param source - the source vector to copy from
       * @returns the updated Vector4.
       */
      copyFrom(source) {
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          this.w = source.w;
          return this;
      }
      /**
       * Updates the current Vector4 coordinates with the given floats.
       * @param x - float to copy from
       * @param y - float to copy from
       * @param z - float to copy from
       * @param w - float to copy from
       * @returns the updated Vector4.
       */
      copyFromFloats(x, y, z, w) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
          return this;
      }
      /**
       * Updates the current Vector4 coordinates with the given floats.
       * @param x - float to set from
       * @param y - float to set from
       * @param z - float to set from
       * @param w - float to set from
       * @returns the updated Vector4.
       */
      set(x, y, z, w) {
          return this.copyFromFloats(x, y, z, w);
      }
      /**
       * Copies the given float to the current Vector3 coordinates
       * @param v - defines the x, y, z and w coordinates of the operand
       * @returns the current updated Vector3
       */
      setAll(v) {
          this.x = this.y = this.z = this.w = v;
          return this;
      }
  }
  Vector4$1.Vector4 = Vector4;

  Object.defineProperty(Matrix$1, "__esModule", { value: true });
  Matrix$1.Matrix = void 0;
  const Vector3_1$6 = Vector3$1;
  const Quaternion_1$2 = Quaternion$1;
  const preallocatedVariables_1$3 = preallocatedVariables;
  const Vector4_1 = Vector4$1;
  /**
   * Class used to store matrix data (4x4)
   * @public
   */
  class Matrix {
      /**
       * Creates an empty matrix (filled with zeros)
       */
      constructor() {
          this._isIdentity = false;
          this._isIdentityDirty = true;
          this._isIdentity3x2 = true;
          this._isIdentity3x2Dirty = true;
          this._m = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ];
          this._updateIdentityStatus(false);
      }
      /**
       * Gets the internal data of the matrix
       */
      get m() {
          return this._m;
      }
      /**
       * Gets an identity matrix that must not be updated
       */
      static get IdentityReadOnly() {
          return Matrix._identityReadOnly;
      }
      // Statics
      /**
       * Creates a matrix from an array
       * @param array - defines the source array
       * @param offset - defines an offset in the source array
       * @returns a new Matrix set from the starting index of the given array
       */
      static FromArray(array, offset = 0) {
          const result = new Matrix();
          Matrix.FromArrayToRef(array, offset, result);
          return result;
      }
      /**
       * Copy the content of an array into a given matrix
       * @param array - defines the source array
       * @param offset - defines an offset in the source array
       * @param result - defines the target matrix
       */
      static FromArrayToRef(array, offset, result) {
          for (let index = 0; index < 16; index++) {
              result._m[index] = array[index + offset];
          }
          result._markAsUpdated();
      }
      /**
       * Stores an array into a matrix after having multiplied each component by a given factor
       * @param array - defines the source array
       * @param offset - defines the offset in the source array
       * @param scale - defines the scaling factor
       * @param result - defines the target matrix
       */
      static FromFloatArrayToRefScaled(array, offset, scale, result) {
          for (let index = 0; index < 16; index++) {
              result._m[index] = array[index + offset] * scale;
          }
          result._markAsUpdated();
      }
      /**
       * Stores a list of values (16) inside a given matrix
       * @param initialM11 - defines 1st value of 1st row
       * @param initialM12 - defines 2nd value of 1st row
       * @param initialM13 - defines 3rd value of 1st row
       * @param initialM14 - defines 4th value of 1st row
       * @param initialM21 - defines 1st value of 2nd row
       * @param initialM22 - defines 2nd value of 2nd row
       * @param initialM23 - defines 3rd value of 2nd row
       * @param initialM24 - defines 4th value of 2nd row
       * @param initialM31 - defines 1st value of 3rd row
       * @param initialM32 - defines 2nd value of 3rd row
       * @param initialM33 - defines 3rd value of 3rd row
       * @param initialM34 - defines 4th value of 3rd row
       * @param initialM41 - defines 1st value of 4th row
       * @param initialM42 - defines 2nd value of 4th row
       * @param initialM43 - defines 3rd value of 4th row
       * @param initialM44 - defines 4th value of 4th row
       * @param result - defines the target matrix
       */
      static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) {
          const m = result._m;
          m[0] = initialM11;
          m[1] = initialM12;
          m[2] = initialM13;
          m[3] = initialM14;
          m[4] = initialM21;
          m[5] = initialM22;
          m[6] = initialM23;
          m[7] = initialM24;
          m[8] = initialM31;
          m[9] = initialM32;
          m[10] = initialM33;
          m[11] = initialM34;
          m[12] = initialM41;
          m[13] = initialM42;
          m[14] = initialM43;
          m[15] = initialM44;
          result._markAsUpdated();
      }
      /**
       * Creates new matrix from a list of values (16)
       * @param initialM11 - defines 1st value of 1st row
       * @param initialM12 - defines 2nd value of 1st row
       * @param initialM13 - defines 3rd value of 1st row
       * @param initialM14 - defines 4th value of 1st row
       * @param initialM21 - defines 1st value of 2nd row
       * @param initialM22 - defines 2nd value of 2nd row
       * @param initialM23 - defines 3rd value of 2nd row
       * @param initialM24 - defines 4th value of 2nd row
       * @param initialM31 - defines 1st value of 3rd row
       * @param initialM32 - defines 2nd value of 3rd row
       * @param initialM33 - defines 3rd value of 3rd row
       * @param initialM34 - defines 4th value of 3rd row
       * @param initialM41 - defines 1st value of 4th row
       * @param initialM42 - defines 2nd value of 4th row
       * @param initialM43 - defines 3rd value of 4th row
       * @param initialM44 - defines 4th value of 4th row
       * @returns the new matrix
       */
      static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) {
          const result = new Matrix();
          const m = result._m;
          m[0] = initialM11;
          m[1] = initialM12;
          m[2] = initialM13;
          m[3] = initialM14;
          m[4] = initialM21;
          m[5] = initialM22;
          m[6] = initialM23;
          m[7] = initialM24;
          m[8] = initialM31;
          m[9] = initialM32;
          m[10] = initialM33;
          m[11] = initialM34;
          m[12] = initialM41;
          m[13] = initialM42;
          m[14] = initialM43;
          m[15] = initialM44;
          result._markAsUpdated();
          return result;
      }
      /**
       * Creates a new matrix composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
       * @param scale - defines the scale vector3
       * @param rotation - defines the rotation quaternion
       * @param translation - defines the translation vector3
       * @returns a new matrix
       */
      static Compose(scale, rotation, translation) {
          const result = new Matrix();
          Matrix.ComposeToRef(scale, rotation, translation, result);
          return result;
      }
      /**
       * Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
       * @param scale - defines the scale vector3
       * @param rotation - defines the rotation quaternion
       * @param translation - defines the translation vector3
       * @param result - defines the target matrix
       */
      static ComposeToRef(scale, rotation, translation, result) {
          Matrix.ScalingToRef(scale.x, scale.y, scale.z, preallocatedVariables_1$3.MathTmp.Matrix[1]);
          rotation.toRotationMatrix(preallocatedVariables_1$3.MathTmp.Matrix[0]);
          preallocatedVariables_1$3.MathTmp.Matrix[1].multiplyToRef(preallocatedVariables_1$3.MathTmp.Matrix[0], result);
          result.setTranslation(translation);
      }
      /**
       * Creates a new identity matrix
       * @returns a new identity matrix
       */
      static Identity() {
          const identity = Matrix.FromValues(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
          identity._updateIdentityStatus(true);
          return identity;
      }
      /**
       * Creates a new identity matrix and stores the result in a given matrix
       * @param result - defines the target matrix
       */
      static IdentityToRef(result) {
          Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, result);
          result._updateIdentityStatus(true);
      }
      /**
       * Creates a new zero matrix
       * @returns a new zero matrix
       */
      static Zero() {
          const zero = Matrix.FromValues(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
          zero._updateIdentityStatus(false);
          return zero;
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the X axis
       * @param angle - defines the angle (in radians) to use
       * @returns the new matrix
       */
      static RotationX(angle) {
          const result = new Matrix();
          Matrix.RotationXToRef(angle, result);
          return result;
      }
      /**
       * Creates a new matrix as the invert of a given matrix
       * @param source - defines the source matrix
       * @returns the new matrix
       */
      static Invert(source) {
          const result = new Matrix();
          source.invertToRef(result);
          return result;
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the X axis and stores it in a given matrix
       * @param angle - defines the angle (in radians) to use
       * @param result - defines the target matrix
       */
      static RotationXToRef(angle, result) {
          const s = Math.sin(angle);
          const c = Math.cos(angle);
          Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, result);
          result._updateIdentityStatus(c === 1 && s === 0);
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the Y axis
       * @param angle - defines the angle (in radians) to use
       * @returns the new matrix
       */
      static RotationY(angle) {
          const result = new Matrix();
          Matrix.RotationYToRef(angle, result);
          return result;
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the Y axis and stores it in a given matrix
       * @param angle - defines the angle (in radians) to use
       * @param result - defines the target matrix
       */
      static RotationYToRef(angle, result) {
          const s = Math.sin(angle);
          const c = Math.cos(angle);
          Matrix.FromValuesToRef(c, 0.0, -s, 0.0, 0.0, 1.0, 0.0, 0.0, s, 0.0, c, 0.0, 0.0, 0.0, 0.0, 1.0, result);
          result._updateIdentityStatus(c === 1 && s === 0);
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the Z axis
       * @param angle - defines the angle (in radians) to use
       * @returns the new matrix
       */
      static RotationZ(angle) {
          const result = new Matrix();
          Matrix.RotationZToRef(angle, result);
          return result;
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the Z axis and stores it in a given matrix
       * @param angle - defines the angle (in radians) to use
       * @param result - defines the target matrix
       */
      static RotationZToRef(angle, result) {
          const s = Math.sin(angle);
          const c = Math.cos(angle);
          Matrix.FromValuesToRef(c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, result);
          result._updateIdentityStatus(c === 1 && s === 0);
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the given axis
       * @param axis - defines the axis to use
       * @param angle - defines the angle (in radians) to use
       * @returns the new matrix
       */
      static RotationAxis(axis, angle) {
          const result = new Matrix();
          Matrix.RotationAxisToRef(axis, angle, result);
          return result;
      }
      /**
       * Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix
       * @param axis - defines the axis to use
       * @param angle - defines the angle (in radians) to use
       * @param result - defines the target matrix
       */
      static RotationAxisToRef(axis, angle, result) {
          const s = Math.sin(-angle);
          const c = Math.cos(-angle);
          const c1 = 1 - c;
          axis.normalize();
          const m = result._m;
          m[0] = axis.x * axis.x * c1 + c;
          m[1] = axis.x * axis.y * c1 - axis.z * s;
          m[2] = axis.x * axis.z * c1 + axis.y * s;
          m[3] = 0.0;
          m[4] = axis.y * axis.x * c1 + axis.z * s;
          m[5] = axis.y * axis.y * c1 + c;
          m[6] = axis.y * axis.z * c1 - axis.x * s;
          m[7] = 0.0;
          m[8] = axis.z * axis.x * c1 - axis.y * s;
          m[9] = axis.z * axis.y * c1 + axis.x * s;
          m[10] = axis.z * axis.z * c1 + c;
          m[11] = 0.0;
          m[12] = 0.0;
          m[13] = 0.0;
          m[14] = 0.0;
          m[15] = 1.0;
          result._markAsUpdated();
      }
      /**
       * Creates a rotation matrix
       * @param yaw - defines the yaw angle in radians (Y axis)
       * @param pitch - defines the pitch angle in radians (X axis)
       * @param roll - defines the roll angle in radians (X axis)
       * @returns the new rotation matrix
       */
      static RotationYawPitchRoll(yaw, pitch, roll) {
          const result = new Matrix();
          Matrix.RotationYawPitchRollToRef(yaw, pitch, roll, result);
          return result;
      }
      /**
       * Creates a rotation matrix and stores it in a given matrix
       * @param yaw - defines the yaw angle in radians (Y axis)
       * @param pitch - defines the pitch angle in radians (X axis)
       * @param roll - defines the roll angle in radians (X axis)
       * @param result - defines the target matrix
       */
      static RotationYawPitchRollToRef(yaw, pitch, roll, result) {
          Quaternion_1$2.Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, preallocatedVariables_1$3.MathTmp.Quaternion[0]);
          preallocatedVariables_1$3.MathTmp.Quaternion[0].toRotationMatrix(result);
      }
      /**
       * Creates a scaling matrix
       * @param x - defines the scale factor on X axis
       * @param y - defines the scale factor on Y axis
       * @param z - defines the scale factor on Z axis
       * @returns the new matrix
       */
      static Scaling(x, y, z) {
          const result = new Matrix();
          Matrix.ScalingToRef(x, y, z, result);
          return result;
      }
      /**
       * Creates a scaling matrix and stores it in a given matrix
       * @param x - defines the scale factor on X axis
       * @param y - defines the scale factor on Y axis
       * @param z - defines the scale factor on Z axis
       * @param result - defines the target matrix
       */
      static ScalingToRef(x, y, z, result) {
          Matrix.FromValuesToRef(x, 0.0, 0.0, 0.0, 0.0, y, 0.0, 0.0, 0.0, 0.0, z, 0.0, 0.0, 0.0, 0.0, 1.0, result);
          result._updateIdentityStatus(x === 1 && y === 1 && z === 1);
      }
      /**
       * Creates a translation matrix
       * @param x - defines the translation on X axis
       * @param y - defines the translation on Y axis
       * @param z - defines the translationon Z axis
       * @returns the new matrix
       */
      static Translation(x, y, z) {
          const result = new Matrix();
          Matrix.TranslationToRef(x, y, z, result);
          return result;
      }
      /**
       * Creates a translation matrix and stores it in a given matrix
       * @param x - defines the translation on X axis
       * @param y - defines the translation on Y axis
       * @param z - defines the translationon Z axis
       * @param result - defines the target matrix
       */
      static TranslationToRef(x, y, z, result) {
          Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x, y, z, 1.0, result);
          result._updateIdentityStatus(x === 0 && y === 0 && z === 0);
      }
      /**
       * Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
       * @param startValue - defines the start value
       * @param endValue - defines the end value
       * @param gradient - defines the gradient factor
       * @returns the new matrix
       */
      static Lerp(startValue, endValue, gradient) {
          const result = new Matrix();
          Matrix.LerpToRef(startValue, endValue, gradient, result);
          return result;
      }
      /**
       * Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
       * @param startValue - defines the start value
       * @param endValue - defines the end value
       * @param gradient - defines the gradient factor
       * @param result - defines the Matrix object where to store data
       */
      static LerpToRef(startValue, endValue, gradient, result) {
          for (let index = 0; index < 16; index++) {
              result._m[index] =
                  startValue._m[index] * (1.0 - gradient) + endValue._m[index] * gradient;
          }
          result._markAsUpdated();
      }
      /**
       * Builds a new matrix whose values are computed by:
       * * decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
       * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
       * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
       * @param startValue - defines the first matrix
       * @param endValue - defines the second matrix
       * @param gradient - defines the gradient between the two matrices
       * @returns the new matrix
       */
      static DecomposeLerp(startValue, endValue, gradient) {
          const result = new Matrix();
          Matrix.DecomposeLerpToRef(startValue, endValue, gradient, result);
          return result;
      }
      /**
       * Update a matrix to values which are computed by:
       * * decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
       * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
       * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
       * @param startValue - defines the first matrix
       * @param endValue - defines the second matrix
       * @param gradient - defines the gradient between the two matrices
       * @param result - defines the target matrix
       */
      static DecomposeLerpToRef(startValue, endValue, gradient, result) {
          const startScale = preallocatedVariables_1$3.MathTmp.Vector3[0];
          const startRotation = preallocatedVariables_1$3.MathTmp.Quaternion[0];
          const startTranslation = preallocatedVariables_1$3.MathTmp.Vector3[1];
          startValue.decompose(startScale, startRotation, startTranslation);
          const endScale = preallocatedVariables_1$3.MathTmp.Vector3[2];
          const endRotation = preallocatedVariables_1$3.MathTmp.Quaternion[1];
          const endTranslation = preallocatedVariables_1$3.MathTmp.Vector3[3];
          endValue.decompose(endScale, endRotation, endTranslation);
          const resultScale = preallocatedVariables_1$3.MathTmp.Vector3[4];
          Vector3_1$6.Vector3.LerpToRef(startScale, endScale, gradient, resultScale);
          const resultRotation = preallocatedVariables_1$3.MathTmp.Quaternion[2];
          Quaternion_1$2.Quaternion.SlerpToRef(startRotation, endRotation, gradient, resultRotation);
          const resultTranslation = preallocatedVariables_1$3.MathTmp.Vector3[5];
          Vector3_1$6.Vector3.LerpToRef(startTranslation, endTranslation, gradient, resultTranslation);
          Matrix.ComposeToRef(resultScale, resultRotation, resultTranslation, result);
      }
      /**
       * Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up"
       * This function works in left handed mode
       * @param eye - defines the final position of the entity
       * @param target - defines where the entity should look at
       * @param up - defines the up vector for the entity
       * @returns the new matrix
       */
      static LookAtLH(eye, target, up) {
          const result = new Matrix();
          Matrix.LookAtLHToRef(eye, target, up, result);
          return result;
      }
      /**
       * Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up".
       * This function works in left handed mode
       * @param eye - defines the final position of the entity
       * @param target - defines where the entity should look at
       * @param up - defines the up vector for the entity
       * @param result - defines the target matrix
       */
      static LookAtLHToRef(eye, target, up, result) {
          const xAxis = preallocatedVariables_1$3.MathTmp.Vector3[0];
          const yAxis = preallocatedVariables_1$3.MathTmp.Vector3[1];
          const zAxis = preallocatedVariables_1$3.MathTmp.Vector3[2];
          // Z axis
          target.subtractToRef(eye, zAxis);
          zAxis.normalize();
          // X axis
          Vector3_1$6.Vector3.CrossToRef(up, zAxis, xAxis);
          const xSquareLength = xAxis.lengthSquared();
          if (xSquareLength === 0) {
              xAxis.x = 1.0;
          }
          else {
              xAxis.normalizeFromLength(Math.sqrt(xSquareLength));
          }
          // Y axis
          Vector3_1$6.Vector3.CrossToRef(zAxis, xAxis, yAxis);
          yAxis.normalize();
          // Eye angles
          const ex = -Vector3_1$6.Vector3.Dot(xAxis, eye);
          const ey = -Vector3_1$6.Vector3.Dot(yAxis, eye);
          const ez = -Vector3_1$6.Vector3.Dot(zAxis, eye);
          Matrix.FromValuesToRef(xAxis.x, yAxis.x, zAxis.x, 0.0, xAxis.y, yAxis.y, zAxis.y, 0.0, xAxis.z, yAxis.z, zAxis.z, 0.0, ex, ey, ez, 1.0, result);
      }
      /**
       * Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up"
       * This function works in right handed mode
       * @param eye - defines the final position of the entity
       * @param target - defines where the entity should look at
       * @param up - defines the up vector for the entity
       * @returns the new matrix
       */
      static LookAtRH(eye, target, up) {
          const result = new Matrix();
          Matrix.LookAtRHToRef(eye, target, up, result);
          return result;
      }
      /**
       * Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up".
       * This function works in right handed mode
       * @param eye - defines the final position of the entity
       * @param target - defines where the entity should look at
       * @param up - defines the up vector for the entity
       * @param result - defines the target matrix
       */
      static LookAtRHToRef(eye, target, up, result) {
          const xAxis = preallocatedVariables_1$3.MathTmp.Vector3[0];
          const yAxis = preallocatedVariables_1$3.MathTmp.Vector3[1];
          const zAxis = preallocatedVariables_1$3.MathTmp.Vector3[2];
          // Z axis
          eye.subtractToRef(target, zAxis);
          zAxis.normalize();
          // X axis
          Vector3_1$6.Vector3.CrossToRef(up, zAxis, xAxis);
          const xSquareLength = xAxis.lengthSquared();
          if (xSquareLength === 0) {
              xAxis.x = 1.0;
          }
          else {
              xAxis.normalizeFromLength(Math.sqrt(xSquareLength));
          }
          // Y axis
          Vector3_1$6.Vector3.CrossToRef(zAxis, xAxis, yAxis);
          yAxis.normalize();
          // Eye angles
          const ex = -Vector3_1$6.Vector3.Dot(xAxis, eye);
          const ey = -Vector3_1$6.Vector3.Dot(yAxis, eye);
          const ez = -Vector3_1$6.Vector3.Dot(zAxis, eye);
          Matrix.FromValuesToRef(xAxis.x, yAxis.x, zAxis.x, 0.0, xAxis.y, yAxis.y, zAxis.y, 0.0, xAxis.z, yAxis.z, zAxis.z, 0.0, ex, ey, ez, 1.0, result);
      }
      /**
       * Create a left-handed orthographic projection matrix
       * @param width - defines the viewport width
       * @param height - defines the viewport height
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @returns a new matrix as a left-handed orthographic projection matrix
       */
      static OrthoLH(width, height, znear, zfar) {
          const matrix = new Matrix();
          Matrix.OrthoLHToRef(width, height, znear, zfar, matrix);
          return matrix;
      }
      /**
       * Store a left-handed orthographic projection to a given matrix
       * @param width - defines the viewport width
       * @param height - defines the viewport height
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @param result - defines the target matrix
       */
      static OrthoLHToRef(width, height, znear, zfar, result) {
          const n = znear;
          const f = zfar;
          const a = 2.0 / width;
          const b = 2.0 / height;
          const c = 2.0 / (f - n);
          const d = -(f + n) / (f - n);
          Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 0.0, 0.0, 0.0, d, 1.0, result);
          result._updateIdentityStatus(a === 1 && b === 1 && c === 1 && d === 0);
      }
      /**
       * Create a left-handed orthographic projection matrix
       * @param left - defines the viewport left coordinate
       * @param right - defines the viewport right coordinate
       * @param bottom - defines the viewport bottom coordinate
       * @param top - defines the viewport top coordinate
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @returns a new matrix as a left-handed orthographic projection matrix
       */
      static OrthoOffCenterLH(left, right, bottom, top, znear, zfar) {
          const matrix = new Matrix();
          Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, matrix);
          return matrix;
      }
      /**
       * Stores a left-handed orthographic projection into a given matrix
       * @param left - defines the viewport left coordinate
       * @param right - defines the viewport right coordinate
       * @param bottom - defines the viewport bottom coordinate
       * @param top - defines the viewport top coordinate
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @param result - defines the target matrix
       */
      static OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result) {
          const n = znear;
          const f = zfar;
          const a = 2.0 / (right - left);
          const b = 2.0 / (top - bottom);
          const c = 2.0 / (f - n);
          const d = -(f + n) / (f - n);
          const i0 = (left + right) / (left - right);
          const i1 = (top + bottom) / (bottom - top);
          Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 0.0, i0, i1, d, 1.0, result);
          result._markAsUpdated();
      }
      /**
       * Creates a right-handed orthographic projection matrix
       * @param left - defines the viewport left coordinate
       * @param right - defines the viewport right coordinate
       * @param bottom - defines the viewport bottom coordinate
       * @param top - defines the viewport top coordinate
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @returns a new matrix as a right-handed orthographic projection matrix
       */
      static OrthoOffCenterRH(left, right, bottom, top, znear, zfar) {
          const matrix = new Matrix();
          Matrix.OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, matrix);
          return matrix;
      }
      /**
       * Stores a right-handed orthographic projection into a given matrix
       * @param left - defines the viewport left coordinate
       * @param right - defines the viewport right coordinate
       * @param bottom - defines the viewport bottom coordinate
       * @param top - defines the viewport top coordinate
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @param result - defines the target matrix
       */
      static OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, result) {
          Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result);
          result._m[10] *= -1; // No need to call _markAsUpdated as previous function already called it and let _isIdentityDirty to true
      }
      /**
       * Creates a left-handed perspective projection matrix
       * @param width - defines the viewport width
       * @param height - defines the viewport height
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @returns a new matrix as a left-handed perspective projection matrix
       */
      static PerspectiveLH(width, height, znear, zfar) {
          const matrix = new Matrix();
          const n = znear;
          const f = zfar;
          const a = (2.0 * n) / width;
          const b = (2.0 * n) / height;
          const c = (f + n) / (f - n);
          const d = (-2.0 * f * n) / (f - n);
          Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 1.0, 0.0, 0.0, d, 0.0, matrix);
          matrix._updateIdentityStatus(false);
          return matrix;
      }
      /**
       * Creates a left-handed perspective projection matrix
       * @param fov - defines the horizontal field of view
       * @param aspect - defines the aspect ratio
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @returns a new matrix as a left-handed perspective projection matrix
       */
      static PerspectiveFovLH(fov, aspect, znear, zfar) {
          const matrix = new Matrix();
          Matrix.PerspectiveFovLHToRef(fov, aspect, znear, zfar, matrix);
          return matrix;
      }
      /**
       * Stores a left-handed perspective projection into a given matrix
       * @param fov - defines the horizontal field of view
       * @param aspect - defines the aspect ratio
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @param result - defines the target matrix
       * @param isVerticalFovFixed - defines it the fov is vertically fixed (default) or horizontally
       */
      static PerspectiveFovLHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed = true) {
          const n = znear;
          const f = zfar;
          const t = 1.0 / Math.tan(fov * 0.5);
          const a = isVerticalFovFixed ? t / aspect : t;
          const b = isVerticalFovFixed ? t : t * aspect;
          const c = (f + n) / (f - n);
          const d = (-2.0 * f * n) / (f - n);
          Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 1.0, 0.0, 0.0, d, 0.0, result);
          result._updateIdentityStatus(false);
      }
      /**
       * Creates a right-handed perspective projection matrix
       * @param fov - defines the horizontal field of view
       * @param aspect - defines the aspect ratio
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @returns a new matrix as a right-handed perspective projection matrix
       */
      static PerspectiveFovRH(fov, aspect, znear, zfar) {
          const matrix = new Matrix();
          Matrix.PerspectiveFovRHToRef(fov, aspect, znear, zfar, matrix);
          return matrix;
      }
      /**
       * Stores a right-handed perspective projection into a given matrix
       * @param fov - defines the horizontal field of view
       * @param aspect - defines the aspect ratio
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @param result - defines the target matrix
       * @param isVerticalFovFixed - defines it the fov is vertically fixed (default) or horizontally
       */
      static PerspectiveFovRHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed = true) {
          /* alternatively this could be expressed as:
          //    m = PerspectiveFovLHToRef
          //    m[10] *= -1.0;
          //    m[11] *= -1.0;
          */
          const n = znear;
          const f = zfar;
          const t = 1.0 / Math.tan(fov * 0.5);
          const a = isVerticalFovFixed ? t / aspect : t;
          const b = isVerticalFovFixed ? t : t * aspect;
          const c = -(f + n) / (f - n);
          const d = (-2 * f * n) / (f - n);
          Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, -1.0, 0.0, 0.0, d, 0.0, result);
          result._updateIdentityStatus(false);
      }
      /**
       * Stores a perspective projection for WebVR info a given matrix
       * @param fov - defines the field of view
       * @param znear - defines the near clip plane
       * @param zfar - defines the far clip plane
       * @param result - defines the target matrix
       * @param rightHanded - defines if the matrix must be in right-handed mode (false by default)
       */
      static PerspectiveFovWebVRToRef(fov, znear, zfar, result, rightHanded = false) {
          const rightHandedFactor = rightHanded ? -1 : 1;
          const upTan = Math.tan((fov.upDegrees * Math.PI) / 180.0);
          const downTan = Math.tan((fov.downDegrees * Math.PI) / 180.0);
          const leftTan = Math.tan((fov.leftDegrees * Math.PI) / 180.0);
          const rightTan = Math.tan((fov.rightDegrees * Math.PI) / 180.0);
          const xScale = 2.0 / (leftTan + rightTan);
          const yScale = 2.0 / (upTan + downTan);
          const m = result._m;
          m[0] = xScale;
          m[1] = m[2] = m[3] = m[4] = 0.0;
          m[5] = yScale;
          m[6] = m[7] = 0.0;
          m[8] = (leftTan - rightTan) * xScale * 0.5;
          m[9] = -((upTan - downTan) * yScale * 0.5);
          m[10] = -zfar / (znear - zfar);
          m[11] = 1.0 * rightHandedFactor;
          m[12] = m[13] = m[15] = 0.0;
          m[14] = -(2.0 * zfar * znear) / (zfar - znear);
          result._markAsUpdated();
      }
      /**
       * Extracts a 2x2 matrix from a given matrix and store the result in a FloatArray
       * @param matrix - defines the matrix to use
       * @returns a new FloatArray array with 4 elements : the 2x2 matrix extracted from the given matrix
       */
      static GetAsMatrix2x2(matrix) {
          return [matrix._m[0], matrix._m[1], matrix._m[4], matrix._m[5]];
      }
      /**
       * Extracts a 3x3 matrix from a given matrix and store the result in a FloatArray
       * @param matrix - defines the matrix to use
       * @returns a new FloatArray array with 9 elements : the 3x3 matrix extracted from the given matrix
       */
      static GetAsMatrix3x3(matrix) {
          return [
              matrix._m[0],
              matrix._m[1],
              matrix._m[2],
              matrix._m[4],
              matrix._m[5],
              matrix._m[6],
              matrix._m[8],
              matrix._m[9],
              matrix._m[10]
          ];
      }
      /**
       * Compute the transpose of a given matrix
       * @param matrix - defines the matrix to transpose
       * @returns the new matrix
       */
      static Transpose(matrix) {
          const result = new Matrix();
          Matrix.TransposeToRef(matrix, result);
          return result;
      }
      /**
       * Compute the transpose of a matrix and store it in a target matrix
       * @param matrix - defines the matrix to transpose
       * @param result - defines the target matrix
       */
      static TransposeToRef(matrix, result) {
          const rm = result._m;
          const mm = matrix._m;
          rm[0] = mm[0];
          rm[1] = mm[4];
          rm[2] = mm[8];
          rm[3] = mm[12];
          rm[4] = mm[1];
          rm[5] = mm[5];
          rm[6] = mm[9];
          rm[7] = mm[13];
          rm[8] = mm[2];
          rm[9] = mm[6];
          rm[10] = mm[10];
          rm[11] = mm[14];
          rm[12] = mm[3];
          rm[13] = mm[7];
          rm[14] = mm[11];
          rm[15] = mm[15];
          // identity-ness does not change when transposing
          result._updateIdentityStatus(matrix._isIdentity, matrix._isIdentityDirty);
      }
      /**
       * Computes a reflection matrix from a plane
       * @param plane - defines the reflection plane
       * @returns a new matrix
       */
      static Reflection(plane) {
          const matrix = new Matrix();
          Matrix.ReflectionToRef(plane, matrix);
          return matrix;
      }
      /**
       * Computes a reflection matrix from a plane
       * @param plane - defines the reflection plane
       * @param result - defines the target matrix
       */
      static ReflectionToRef(plane, result) {
          plane.normalize();
          const x = plane.normal.x;
          const y = plane.normal.y;
          const z = plane.normal.z;
          const temp = -2 * x;
          const temp2 = -2 * y;
          const temp3 = -2 * z;
          Matrix.FromValuesToRef(temp * x + 1, temp2 * x, temp3 * x, 0.0, temp * y, temp2 * y + 1, temp3 * y, 0.0, temp * z, temp2 * z, temp3 * z + 1, 0.0, temp * plane.d, temp2 * plane.d, temp3 * plane.d, 1.0, result);
      }
      /**
       * Sets the given matrix as a rotation matrix composed from the 3 left handed axes
       * @param xaxis - defines the value of the 1st axis
       * @param yaxis - defines the value of the 2nd axis
       * @param zaxis - defines the value of the 3rd axis
       * @param result - defines the target matrix
       */
      static FromXYZAxesToRef(xaxis, yaxis, zaxis, result) {
          Matrix.FromValuesToRef(xaxis.x, xaxis.y, xaxis.z, 0.0, yaxis.x, yaxis.y, yaxis.z, 0.0, zaxis.x, zaxis.y, zaxis.z, 0.0, 0.0, 0.0, 0.0, 1.0, result);
      }
      /**
       * Creates a rotation matrix from a quaternion and stores it in a target matrix
       * @param quat - defines the quaternion to use
       * @param result - defines the target matrix
       */
      static FromQuaternionToRef(quat, result) {
          const xx = quat.x * quat.x;
          const yy = quat.y * quat.y;
          const zz = quat.z * quat.z;
          const xy = quat.x * quat.y;
          const zw = quat.z * quat.w;
          const zx = quat.z * quat.x;
          const yw = quat.y * quat.w;
          const yz = quat.y * quat.z;
          const xw = quat.x * quat.w;
          result._m[0] = 1.0 - 2.0 * (yy + zz);
          result._m[1] = 2.0 * (xy + zw);
          result._m[2] = 2.0 * (zx - yw);
          result._m[3] = 0.0;
          result._m[4] = 2.0 * (xy - zw);
          result._m[5] = 1.0 - 2.0 * (zz + xx);
          result._m[6] = 2.0 * (yz + xw);
          result._m[7] = 0.0;
          result._m[8] = 2.0 * (zx + yw);
          result._m[9] = 2.0 * (yz - xw);
          result._m[10] = 1.0 - 2.0 * (yy + xx);
          result._m[11] = 0.0;
          result._m[12] = 0.0;
          result._m[13] = 0.0;
          result._m[14] = 0.0;
          result._m[15] = 1.0;
          result._markAsUpdated();
      }
      /** @internal */
      _markAsUpdated() {
          this.updateFlag = Matrix._updateFlagSeed++;
          this._isIdentity = false;
          this._isIdentity3x2 = false;
          this._isIdentityDirty = true;
          this._isIdentity3x2Dirty = true;
      }
      // Properties
      /**
       * Check if the current matrix is identity
       * @returns true is the matrix is the identity matrix
       */
      isIdentity() {
          if (this._isIdentityDirty) {
              this._isIdentityDirty = false;
              const m = this._m;
              this._isIdentity =
                  m[0] === 1.0 &&
                      m[1] === 0.0 &&
                      m[2] === 0.0 &&
                      m[3] === 0.0 &&
                      m[4] === 0.0 &&
                      m[5] === 1.0 &&
                      m[6] === 0.0 &&
                      m[7] === 0.0 &&
                      m[8] === 0.0 &&
                      m[9] === 0.0 &&
                      m[10] === 1.0 &&
                      m[11] === 0.0 &&
                      m[12] === 0.0 &&
                      m[13] === 0.0 &&
                      m[14] === 0.0 &&
                      m[15] === 1.0;
          }
          return this._isIdentity;
      }
      /**
       * Check if the current matrix is identity as a texture matrix (3x2 store in 4x4)
       * @returns true is the matrix is the identity matrix
       */
      isIdentityAs3x2() {
          if (this._isIdentity3x2Dirty) {
              this._isIdentity3x2Dirty = false;
              if (this._m[0] !== 1.0 || this._m[5] !== 1.0 || this._m[15] !== 1.0) {
                  this._isIdentity3x2 = false;
              }
              else if (this._m[1] !== 0.0 ||
                  this._m[2] !== 0.0 ||
                  this._m[3] !== 0.0 ||
                  this._m[4] !== 0.0 ||
                  this._m[6] !== 0.0 ||
                  this._m[7] !== 0.0 ||
                  this._m[8] !== 0.0 ||
                  this._m[9] !== 0.0 ||
                  this._m[10] !== 0.0 ||
                  this._m[11] !== 0.0 ||
                  this._m[12] !== 0.0 ||
                  this._m[13] !== 0.0 ||
                  this._m[14] !== 0.0) {
                  this._isIdentity3x2 = false;
              }
              else {
                  this._isIdentity3x2 = true;
              }
          }
          return this._isIdentity3x2;
      }
      /**
       * Gets the determinant of the matrix
       * @returns the matrix determinant
       */
      determinant() {
          if (this._isIdentity === true) {
              return 1;
          }
          const m = this._m;
          // tslint:disable-next-line:one-variable-per-declaration
          const m00 = m[0], m01 = m[1], m02 = m[2], m03 = m[3];
          // tslint:disable-next-line:one-variable-per-declaration
          const m10 = m[4], m11 = m[5], m12 = m[6], m13 = m[7];
          // tslint:disable-next-line:one-variable-per-declaration
          const m20 = m[8], m21 = m[9], m22 = m[10], m23 = m[11];
          // tslint:disable-next-line:one-variable-per-declaration
          const m30 = m[12], m31 = m[13], m32 = m[14], m33 = m[15];
          /*
          // https://en.wikipedia.org/wiki/Laplace_expansion
          // to compute the deterrminant of a 4x4 Matrix we compute the cofactors of any row or column,
          // then we multiply each Cofactor by its corresponding matrix value and sum them all to get the determinant
          // Cofactor(i, j) = sign(i,j) * det(Minor(i, j))
          // where
          //  - sign(i,j) = (i+j) % 2 === 0 ? 1 : -1
          //  - Minor(i, j) is the 3x3 matrix we get by removing row i and column j from current Matrix
          //
          // Here we do that for the 1st row.
          */
          // tslint:disable:variable-name
          const det_22_33 = m22 * m33 - m32 * m23;
          const det_21_33 = m21 * m33 - m31 * m23;
          const det_21_32 = m21 * m32 - m31 * m22;
          const det_20_33 = m20 * m33 - m30 * m23;
          const det_20_32 = m20 * m32 - m22 * m30;
          const det_20_31 = m20 * m31 - m30 * m21;
          const cofact_00 = +(m11 * det_22_33 - m12 * det_21_33 + m13 * det_21_32);
          const cofact_01 = -(m10 * det_22_33 - m12 * det_20_33 + m13 * det_20_32);
          const cofact_02 = +(m10 * det_21_33 - m11 * det_20_33 + m13 * det_20_31);
          const cofact_03 = -(m10 * det_21_32 - m11 * det_20_32 + m12 * det_20_31);
          // tslint:enable:variable-name
          return m00 * cofact_00 + m01 * cofact_01 + m02 * cofact_02 + m03 * cofact_03;
      }
      // Methods
      /**
       * Returns the matrix as a FloatArray
       * @returns the matrix underlying array
       */
      toArray() {
          return this._m;
      }
      /**
       * Returns the matrix as a FloatArray
       * @returns the matrix underlying array.
       */
      asArray() {
          return this._m;
      }
      /**
       * Inverts the current matrix in place
       * @returns the current inverted matrix
       */
      invert() {
          this.invertToRef(this);
          return this;
      }
      /**
       * Sets all the matrix elements to zero
       * @returns the current matrix
       */
      reset() {
          Matrix.FromValuesToRef(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, this);
          this._updateIdentityStatus(false);
          return this;
      }
      /**
       * Adds the current matrix with a second one
       * @param other - defines the matrix to add
       * @returns a new matrix as the addition of the current matrix and the given one
       */
      add(other) {
          const result = new Matrix();
          this.addToRef(other, result);
          return result;
      }
      /**
       * Sets the given matrix "result" to the addition of the current matrix and the given one
       * @param other - defines the matrix to add
       * @param result - defines the target matrix
       * @returns the current matrix
       */
      addToRef(other, result) {
          for (let index = 0; index < 16; index++) {
              result._m[index] = this._m[index] + other._m[index];
          }
          result._markAsUpdated();
          return this;
      }
      /**
       * Adds in place the given matrix to the current matrix
       * @param other - defines the second operand
       * @returns the current updated matrix
       */
      addToSelf(other) {
          for (let index = 0; index < 16; index++) {
              this._m[index] += other._m[index];
          }
          this._markAsUpdated();
          return this;
      }
      /**
       * Sets the given matrix to the current inverted Matrix
       * @param other - defines the target matrix
       * @returns the unmodified current matrix
       */
      invertToRef(other) {
          if (this._isIdentity === true) {
              Matrix.IdentityToRef(other);
              return this;
          }
          // the inverse of a Matrix is the transpose of cofactor matrix divided by the determinant
          const m = this._m;
          // tslint:disable:one-variable-per-declaration
          const m00 = m[0], m01 = m[1], m02 = m[2], m03 = m[3];
          const m10 = m[4], m11 = m[5], m12 = m[6], m13 = m[7];
          const m20 = m[8], m21 = m[9], m22 = m[10], m23 = m[11];
          const m30 = m[12], m31 = m[13], m32 = m[14], m33 = m[15];
          // tslint:enable:one-variable-per-declaration
          // tslint:disable:variable-name
          const det_22_33 = m22 * m33 - m32 * m23;
          const det_21_33 = m21 * m33 - m31 * m23;
          const det_21_32 = m21 * m32 - m31 * m22;
          const det_20_33 = m20 * m33 - m30 * m23;
          const det_20_32 = m20 * m32 - m22 * m30;
          const det_20_31 = m20 * m31 - m30 * m21;
          const cofact_00 = +(m11 * det_22_33 - m12 * det_21_33 + m13 * det_21_32);
          const cofact_01 = -(m10 * det_22_33 - m12 * det_20_33 + m13 * det_20_32);
          const cofact_02 = +(m10 * det_21_33 - m11 * det_20_33 + m13 * det_20_31);
          const cofact_03 = -(m10 * det_21_32 - m11 * det_20_32 + m12 * det_20_31);
          const det = m00 * cofact_00 + m01 * cofact_01 + m02 * cofact_02 + m03 * cofact_03;
          if (det === 0) {
              // not invertible
              other.copyFrom(this);
              return this;
          }
          const detInv = 1 / det;
          const det_12_33 = m12 * m33 - m32 * m13;
          const det_11_33 = m11 * m33 - m31 * m13;
          const det_11_32 = m11 * m32 - m31 * m12;
          const det_10_33 = m10 * m33 - m30 * m13;
          const det_10_32 = m10 * m32 - m30 * m12;
          const det_10_31 = m10 * m31 - m30 * m11;
          const det_12_23 = m12 * m23 - m22 * m13;
          const det_11_23 = m11 * m23 - m21 * m13;
          const det_11_22 = m11 * m22 - m21 * m12;
          const det_10_23 = m10 * m23 - m20 * m13;
          const det_10_22 = m10 * m22 - m20 * m12;
          const det_10_21 = m10 * m21 - m20 * m11;
          const cofact_10 = -(m01 * det_22_33 - m02 * det_21_33 + m03 * det_21_32);
          const cofact_11 = +(m00 * det_22_33 - m02 * det_20_33 + m03 * det_20_32);
          const cofact_12 = -(m00 * det_21_33 - m01 * det_20_33 + m03 * det_20_31);
          const cofact_13 = +(m00 * det_21_32 - m01 * det_20_32 + m02 * det_20_31);
          const cofact_20 = +(m01 * det_12_33 - m02 * det_11_33 + m03 * det_11_32);
          const cofact_21 = -(m00 * det_12_33 - m02 * det_10_33 + m03 * det_10_32);
          const cofact_22 = +(m00 * det_11_33 - m01 * det_10_33 + m03 * det_10_31);
          const cofact_23 = -(m00 * det_11_32 - m01 * det_10_32 + m02 * det_10_31);
          const cofact_30 = -(m01 * det_12_23 - m02 * det_11_23 + m03 * det_11_22);
          const cofact_31 = +(m00 * det_12_23 - m02 * det_10_23 + m03 * det_10_22);
          const cofact_32 = -(m00 * det_11_23 - m01 * det_10_23 + m03 * det_10_21);
          const cofact_33 = +(m00 * det_11_22 - m01 * det_10_22 + m02 * det_10_21);
          Matrix.FromValuesToRef(cofact_00 * detInv, cofact_10 * detInv, cofact_20 * detInv, cofact_30 * detInv, cofact_01 * detInv, cofact_11 * detInv, cofact_21 * detInv, cofact_31 * detInv, cofact_02 * detInv, cofact_12 * detInv, cofact_22 * detInv, cofact_32 * detInv, cofact_03 * detInv, cofact_13 * detInv, cofact_23 * detInv, cofact_33 * detInv, other);
          // tslint:enable:variable-name
          return this;
      }
      /**
       * add a value at the specified position in the current Matrix
       * @param index - the index of the value within the matrix. between 0 and 15.
       * @param value - the value to be added
       * @returns the current updated matrix
       */
      addAtIndex(index, value) {
          this._m[index] += value;
          this._markAsUpdated();
          return this;
      }
      /**
       * mutiply the specified position in the current Matrix by a value
       * @param index - the index of the value within the matrix. between 0 and 15.
       * @param value - the value to be added
       * @returns the current updated matrix
       */
      multiplyAtIndex(index, value) {
          this._m[index] *= value;
          this._markAsUpdated();
          return this;
      }
      /**
       * Inserts the translation vector (using 3 floats) in the current matrix
       * @param x - defines the 1st component of the translation
       * @param y - defines the 2nd component of the translation
       * @param z - defines the 3rd component of the translation
       * @returns the current updated matrix
       */
      setTranslationFromFloats(x, y, z) {
          this._m[12] = x;
          this._m[13] = y;
          this._m[14] = z;
          this._markAsUpdated();
          return this;
      }
      /**
       * Inserts the translation vector in the current matrix
       * @param vector3 - defines the translation to insert
       * @returns the current updated matrix
       */
      setTranslation(vector3) {
          return this.setTranslationFromFloats(vector3.x, vector3.y, vector3.z);
      }
      /**
       * Gets the translation value of the current matrix
       * @returns a new Vector3 as the extracted translation from the matrix
       */
      getTranslation() {
          return new Vector3_1$6.Vector3(this._m[12], this._m[13], this._m[14]);
      }
      /**
       * Fill a Vector3 with the extracted translation from the matrix
       * @param result - defines the Vector3 where to store the translation
       * @returns the current matrix
       */
      getTranslationToRef(result) {
          result.x = this._m[12];
          result.y = this._m[13];
          result.z = this._m[14];
          return this;
      }
      /**
       * Remove rotation and scaling part from the matrix
       * @returns the updated matrix
       */
      removeRotationAndScaling() {
          const m = this.m;
          Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, m[12], m[13], m[14], m[15], this);
          this._updateIdentityStatus(m[12] === 0 && m[13] === 0 && m[14] === 0 && m[15] === 1);
          return this;
      }
      /**
       * Multiply two matrices
       * @param other - defines the second operand
       * @returns a new matrix set with the multiplication result of the current Matrix and the given one
       */
      multiply(other) {
          const result = new Matrix();
          this.multiplyToRef(other, result);
          return result;
      }
      /**
       * Copy the current matrix from the given one
       * @param other - defines the source matrix
       * @returns the current updated matrix
       */
      copyFrom(other) {
          other.copyToArray(this._m);
          const o = other;
          this._updateIdentityStatus(o._isIdentity, o._isIdentityDirty, o._isIdentity3x2, o._isIdentity3x2Dirty);
          return this;
      }
      /**
       * Populates the given array from the starting index with the current matrix values
       * @param array - defines the target array
       * @param offset - defines the offset in the target array where to start storing values
       * @returns the current matrix
       */
      copyToArray(array, offset = 0) {
          for (let index = 0; index < 16; index++) {
              array[offset + index] = this._m[index];
          }
          return this;
      }
      /**
       * Sets the given matrix "result" with the multiplication result of the current Matrix and the given one
       * @param other - defines the second operand
       * @param result - defines the matrix where to store the multiplication
       * @returns the current matrix
       */
      multiplyToRef(other, result) {
          if (this._isIdentity) {
              result.copyFrom(other);
              return this;
          }
          if (other._isIdentity) {
              result.copyFrom(this);
              return this;
          }
          this.multiplyToArray(other, result._m, 0);
          result._markAsUpdated();
          return this;
      }
      /**
       * Sets the FloatArray "result" from the given index "offset" with the multiplication of the current matrix and the given one
       * @param other - defines the second operand
       * @param result - defines the array where to store the multiplication
       * @param offset - defines the offset in the target array where to start storing values
       * @returns the current matrix
       */
      multiplyToArray(other, result, offset) {
          const m = this._m;
          const otherM = other.m;
          // tslint:disable:one-variable-per-declaration
          const tm0 = m[0], tm1 = m[1], tm2 = m[2], tm3 = m[3];
          const tm4 = m[4], tm5 = m[5], tm6 = m[6], tm7 = m[7];
          const tm8 = m[8], tm9 = m[9], tm10 = m[10], tm11 = m[11];
          const tm12 = m[12], tm13 = m[13], tm14 = m[14], tm15 = m[15];
          const om0 = otherM[0], om1 = otherM[1], om2 = otherM[2], om3 = otherM[3];
          const om4 = otherM[4], om5 = otherM[5], om6 = otherM[6], om7 = otherM[7];
          const om8 = otherM[8], om9 = otherM[9], om10 = otherM[10], om11 = otherM[11];
          const om12 = otherM[12], om13 = otherM[13], om14 = otherM[14], om15 = otherM[15];
          // tslint:enable:one-variable-per-declaration
          result[offset] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12;
          result[offset + 1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13;
          result[offset + 2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14;
          result[offset + 3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15;
          result[offset + 4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12;
          result[offset + 5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13;
          result[offset + 6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14;
          result[offset + 7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15;
          result[offset + 8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12;
          result[offset + 9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13;
          result[offset + 10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14;
          result[offset + 11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15;
          result[offset + 12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12;
          result[offset + 13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13;
          result[offset + 14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14;
          result[offset + 15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15;
          return this;
      }
      /**
       * Check equality between this matrix and a second one
       * @param value - defines the second matrix to compare
       * @returns true is the current matrix and the given one values are strictly equal
       */
      equals(value) {
          const other = value;
          if (!other) {
              return false;
          }
          if (this._isIdentity || other._isIdentity) {
              if (!this._isIdentityDirty && !other._isIdentityDirty) {
                  return this._isIdentity && other._isIdentity;
              }
          }
          const m = this.m;
          const om = other.m;
          return (m[0] === om[0] &&
              m[1] === om[1] &&
              m[2] === om[2] &&
              m[3] === om[3] &&
              m[4] === om[4] &&
              m[5] === om[5] &&
              m[6] === om[6] &&
              m[7] === om[7] &&
              m[8] === om[8] &&
              m[9] === om[9] &&
              m[10] === om[10] &&
              m[11] === om[11] &&
              m[12] === om[12] &&
              m[13] === om[13] &&
              m[14] === om[14] &&
              m[15] === om[15]);
      }
      /**
       * Clone the current matrix
       * @returns a new matrix from the current matrix
       */
      clone() {
          const matrix = new Matrix();
          matrix.copyFrom(this);
          return matrix;
      }
      /**
       * Returns the name of the current matrix class
       * @returns the string "Matrix"
       */
      getClassName() {
          return 'Matrix';
      }
      /**
       * Gets the hash code of the current matrix
       * @returns the hash code
       */
      getHashCode() {
          let hash = this._m[0] || 0;
          for (let i = 1; i < 16; i++) {
              hash = (hash * 397) ^ (this._m[i] || 0);
          }
          return hash;
      }
      /**
       * Decomposes the current Matrix into a translation, rotation and scaling components
       * @param scale - defines the scale vector3 given as a reference to update
       * @param rotation - defines the rotation quaternion given as a reference to update
       * @param translation - defines the translation vector3 given as a reference to update
       * @returns true if operation was successful
       */
      decompose(scale, rotation, translation) {
          if (this._isIdentity) {
              if (translation) {
                  translation.setAll(0);
              }
              if (scale) {
                  scale.setAll(1);
              }
              if (rotation) {
                  rotation.copyFromFloats(0, 0, 0, 1);
              }
              return true;
          }
          const m = this._m;
          if (translation) {
              translation.copyFromFloats(m[12], m[13], m[14]);
          }
          const usedScale = scale || preallocatedVariables_1$3.MathTmp.Vector3[0];
          usedScale.x = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
          usedScale.y = Math.sqrt(m[4] * m[4] + m[5] * m[5] + m[6] * m[6]);
          usedScale.z = Math.sqrt(m[8] * m[8] + m[9] * m[9] + m[10] * m[10]);
          if (this.determinant() <= 0) {
              usedScale.y *= -1;
          }
          if (usedScale.x === 0 || usedScale.y === 0 || usedScale.z === 0) {
              if (rotation) {
                  rotation.copyFromFloats(0.0, 0.0, 0.0, 1.0);
              }
              return false;
          }
          if (rotation) {
              // tslint:disable-next-line:one-variable-per-declaration
              const sx = 1 / usedScale.x, sy = 1 / usedScale.y, sz = 1 / usedScale.z;
              Matrix.FromValuesToRef(m[0] * sx, m[1] * sx, m[2] * sx, 0.0, m[4] * sy, m[5] * sy, m[6] * sy, 0.0, m[8] * sz, m[9] * sz, m[10] * sz, 0.0, 0.0, 0.0, 0.0, 1.0, preallocatedVariables_1$3.MathTmp.Matrix[0]);
              Quaternion_1$2.Quaternion.FromRotationMatrixToRef(preallocatedVariables_1$3.MathTmp.Matrix[0], rotation);
          }
          return true;
      }
      /**
       * Gets specific row of the matrix
       * @param index - defines the number of the row to get
       * @returns the index-th row of the current matrix as a new Vector4
       */
      getRow(index) {
          if (index < 0 || index > 3) {
              return null;
          }
          const i = index * 4;
          return new Vector4_1.Vector4(this._m[i + 0], this._m[i + 1], this._m[i + 2], this._m[i + 3]);
      }
      /**
       * Sets the index-th row of the current matrix to the vector4 values
       * @param index - defines the number of the row to set
       * @param row - defines the target vector4
       * @returns the updated current matrix
       */
      setRow(index, row) {
          return this.setRowFromFloats(index, row.x, row.y, row.z, row.w);
      }
      /**
       * Compute the transpose of the matrix
       * @returns the new transposed matrix
       */
      transpose() {
          return Matrix.Transpose(this);
      }
      /**
       * Compute the transpose of the matrix and store it in a given matrix
       * @param result - defines the target matrix
       * @returns the current matrix
       */
      transposeToRef(result) {
          Matrix.TransposeToRef(this, result);
          return this;
      }
      /**
       * Sets the index-th row of the current matrix with the given 4 x float values
       * @param index - defines the row index
       * @param x - defines the x component to set
       * @param y - defines the y component to set
       * @param z - defines the z component to set
       * @param w - defines the w component to set
       * @returns the updated current matrix
       */
      setRowFromFloats(index, x, y, z, w) {
          if (index < 0 || index > 3) {
              return this;
          }
          const i = index * 4;
          this._m[i + 0] = x;
          this._m[i + 1] = y;
          this._m[i + 2] = z;
          this._m[i + 3] = w;
          this._markAsUpdated();
          return this;
      }
      /**
       * Compute a new matrix set with the current matrix values multiplied by scale (float)
       * @param scale - defines the scale factor
       * @returns a new matrix
       */
      scale(scale) {
          const result = new Matrix();
          this.scaleToRef(scale, result);
          return result;
      }
      /**
       * Scale the current matrix values by a factor to a given result matrix
       * @param scale - defines the scale factor
       * @param result - defines the matrix to store the result
       * @returns the current matrix
       */
      scaleToRef(scale, result) {
          for (let index = 0; index < 16; index++) {
              result._m[index] = this._m[index] * scale;
          }
          result._markAsUpdated();
          return this;
      }
      /**
       * Scale the current matrix values by a factor and add the result to a given matrix
       * @param scale - defines the scale factor
       * @param result - defines the Matrix to store the result
       * @returns the current matrix
       */
      scaleAndAddToRef(scale, result) {
          for (let index = 0; index < 16; index++) {
              result._m[index] += this._m[index] * scale;
          }
          result._markAsUpdated();
          return this;
      }
      /**
       * Writes to the given matrix a normal matrix, computed from this one (using values from identity matrix for fourth row and column).
       * @param ref - matrix to store the result
       */
      toNormalMatrix(ref) {
          const tmp = preallocatedVariables_1$3.MathTmp.Matrix[0];
          this.invertToRef(tmp);
          tmp.transposeToRef(ref);
          const m = ref._m;
          Matrix.FromValuesToRef(m[0], m[1], m[2], 0.0, m[4], m[5], m[6], 0.0, m[8], m[9], m[10], 0.0, 0.0, 0.0, 0.0, 1.0, ref);
      }
      /**
       * Gets only rotation part of the current matrix
       * @returns a new matrix sets to the extracted rotation matrix from the current one
       */
      getRotationMatrix() {
          const result = new Matrix();
          this.getRotationMatrixToRef(result);
          return result;
      }
      /**
       * Extracts the rotation matrix from the current one and sets it as the given "result"
       * @param result - defines the target matrix to store data to
       * @returns the current matrix
       */
      getRotationMatrixToRef(result) {
          const scale = preallocatedVariables_1$3.MathTmp.Vector3[0];
          if (!this.decompose(scale)) {
              Matrix.IdentityToRef(result);
              return this;
          }
          const m = this._m;
          // tslint:disable-next-line:one-variable-per-declaration
          const sx = 1 / scale.x, sy = 1 / scale.y, sz = 1 / scale.z;
          Matrix.FromValuesToRef(m[0] * sx, m[1] * sx, m[2] * sx, 0.0, m[4] * sy, m[5] * sy, m[6] * sy, 0.0, m[8] * sz, m[9] * sz, m[10] * sz, 0.0, 0.0, 0.0, 0.0, 1.0, result);
          return this;
      }
      /**
       * Toggles model matrix from being right handed to left handed in place and vice versa
       */
      toggleModelMatrixHandInPlace() {
          const m = this._m;
          m[2] *= -1;
          m[6] *= -1;
          m[8] *= -1;
          m[9] *= -1;
          m[14] *= -1;
          this._markAsUpdated();
      }
      /**
       * Toggles projection matrix from being right handed to left handed in place and vice versa
       */
      toggleProjectionMatrixHandInPlace() {
          const m = this._m;
          m[8] *= -1;
          m[9] *= -1;
          m[10] *= -1;
          m[11] *= -1;
          this._markAsUpdated();
      }
      /** @internal */
      _updateIdentityStatus(isIdentity, isIdentityDirty = false, isIdentity3x2 = false, isIdentity3x2Dirty = true) {
          this.updateFlag = Matrix._updateFlagSeed++;
          this._isIdentity = isIdentity;
          this._isIdentity3x2 = isIdentity || isIdentity3x2;
          this._isIdentityDirty = this._isIdentity ? false : isIdentityDirty;
          this._isIdentity3x2Dirty = this._isIdentity3x2 ? false : isIdentity3x2Dirty;
      }
  }
  Matrix$1.Matrix = Matrix;
  Matrix._updateFlagSeed = 0;
  Matrix._identityReadOnly = Matrix.Identity();

  Object.defineProperty(Quaternion$1, "__esModule", { value: true });
  Quaternion$1.Quaternion = void 0;
  const Matrix_1$2 = Matrix$1;
  const Vector3_1$5 = Vector3$1;
  const preallocatedVariables_1$2 = preallocatedVariables;
  const types_1$7 = types;
  const Scalar_1$5 = Scalar$1;
  /**
   * Class used to store quaternion data
   * {@link https://en.wikipedia.org/wiki/Quaternion }
   * {@link http://doc.babylonjs.com/features/position,_rotation,_scaling }
   * @public
   */
  class Quaternion {
      /**
       * Creates a new Quaternion from the given floats
       * @param x - defines the first component (0 by default)
       * @param y - defines the second component (0 by default)
       * @param z - defines the third component (0 by default)
       * @param w - defines the fourth component (1.0 by default)
       */
      constructor(
      /** defines the first component (0 by default) */
      x = 0.0, 
      /** defines the second component (0 by default) */
      y = 0.0, 
      /** defines the third component (0 by default) */
      z = 0.0, 
      /** defines the fourth component (1.0 by default) */
      w = 1.0) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
      }
      // Statics
      /**
       * Creates a new quaternion from a rotation matrix
       * @param matrix - defines the source matrix
       * @returns a new quaternion created from the given rotation matrix values
       */
      static FromRotationMatrix(matrix) {
          const result = new Quaternion();
          Quaternion.FromRotationMatrixToRef(matrix, result);
          return result;
      }
      /**
       * Updates the given quaternion with the given rotation matrix values
       * @param matrix - defines the source matrix
       * @param result - defines the target quaternion
       */
      static FromRotationMatrixToRef(matrix, result) {
          const data = matrix.m;
          // tslint:disable:one-variable-per-declaration
          const m11 = data[0], m12 = data[4], m13 = data[8];
          const m21 = data[1], m22 = data[5], m23 = data[9];
          const m31 = data[2], m32 = data[6], m33 = data[10];
          // tslint:enable:one-variable-per-declaration
          const trace = m11 + m22 + m33;
          let s;
          if (trace > 0) {
              s = 0.5 / Math.sqrt(trace + 1.0);
              result.w = 0.25 / s;
              result.x = (m32 - m23) * s;
              result.y = (m13 - m31) * s;
              result.z = (m21 - m12) * s;
          }
          else if (m11 > m22 && m11 > m33) {
              s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
              result.w = (m32 - m23) / s;
              result.x = 0.25 * s;
              result.y = (m12 + m21) / s;
              result.z = (m13 + m31) / s;
          }
          else if (m22 > m33) {
              s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
              result.w = (m13 - m31) / s;
              result.x = (m12 + m21) / s;
              result.y = 0.25 * s;
              result.z = (m23 + m32) / s;
          }
          else {
              s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
              result.w = (m21 - m12) / s;
              result.x = (m13 + m31) / s;
              result.y = (m23 + m32) / s;
              result.z = 0.25 * s;
          }
      }
      /**
       * Returns the dot product (float) between the quaternions "left" and "right"
       * @param left - defines the left operand
       * @param right - defines the right operand
       * @returns the dot product
       */
      static Dot(left, right) {
          return (left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w);
      }
      /**
       * Checks if the two quaternions are close to each other
       * @param quat0 - defines the first quaternion to check
       * @param quat1 - defines the second quaternion to check
       * @returns true if the two quaternions are close to each other
       */
      static AreClose(quat0, quat1) {
          const dot = Quaternion.Dot(quat0, quat1);
          return dot >= 0;
      }
      /**
       * Creates an empty quaternion
       * @returns a new quaternion set to (0.0, 0.0, 0.0)
       */
      static Zero() {
          return new Quaternion(0.0, 0.0, 0.0, 0.0);
      }
      /**
       * Inverse a given quaternion
       * @param q - defines the source quaternion
       * @returns a new quaternion as the inverted current quaternion
       */
      static Inverse(q) {
          return new Quaternion(-q.x, -q.y, -q.z, q.w);
      }
      /**
       * Gets a boolean indicating if the given quaternion is identity
       * @param quaternion - defines the quaternion to check
       * @returns true if the quaternion is identity
       */
      static IsIdentity(quaternion) {
          return (quaternion &&
              quaternion.x === 0 &&
              quaternion.y === 0 &&
              quaternion.z === 0 &&
              quaternion.w === 1);
      }
      /**
       * Creates a quaternion from a rotation around an axis
       * @param axis - defines the axis to use
       * @param angle - defines the angle to use (in Euler degrees)
       * @returns a new quaternion created from the given axis (Vector3) and angle in radians (float)
       */
      static RotationAxis(axis, angle) {
          const angleRad = angle * types_1$7.DEG2RAD;
          return Quaternion.RotationAxisToRef(axis, angleRad, new Quaternion());
      }
      /**
       * Creates a rotation around an axis and stores it into the given quaternion
       * @param axis - defines the axis to use
       * @param angle - defines the angle to use (in Euler degrees)
       * @param result - defines the target quaternion
       * @returns the target quaternion
       */
      static RotationAxisToRef(axis, angle, result) {
          const angleRad = angle * types_1$7.DEG2RAD;
          const sin = Math.sin(angleRad / 2);
          axis.normalize();
          result.w = Math.cos(angleRad / 2);
          result.x = axis.x * sin;
          result.y = axis.y * sin;
          result.z = axis.z * sin;
          return result;
      }
      /**
       * Creates a new quaternion from data stored into an array
       * @param array - defines the data source
       * @param offset - defines the offset in the source array where the data starts
       * @returns a new quaternion
       */
      static FromArray(array, offset = 0) {
          return new Quaternion(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
      }
      /**
       * Creates a new quaternion from a set of euler angles and stores it in the target quaternion
       */
      static FromEulerAnglesRef(x, y, z, result) {
          return Quaternion.RotationYawPitchRollToRef(y * types_1$7.DEG2RAD, x * types_1$7.DEG2RAD, z * types_1$7.DEG2RAD, result);
      }
      /**
       * Creates a new quaternion from the given Euler float angles (y, x, z)
       * @param yaw - defines the rotation around Y axis
       * @param pitch - defines the rotation around X axis
       * @param roll - defines the rotation around Z axis
       * @returns the new quaternion
       */
      static RotationYawPitchRoll(yaw, pitch, roll) {
          const q = new Quaternion();
          Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, q);
          return q;
      }
      /**
       * Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
       * @param yaw - defines the rotation around Y axis
       * @param pitch - defines the rotation around X axis
       * @param roll - defines the rotation around Z axis
       * @param result - defines the target quaternion
       */
      static RotationYawPitchRollToRef(yaw, pitch, roll, result) {
          // Implemented unity-based calculations from: https://stackoverflow.com/a/56055813
          const halfPitch = pitch * 0.5;
          const halfYaw = yaw * 0.5;
          const halfRoll = roll * 0.5;
          const c1 = Math.cos(halfPitch);
          const c2 = Math.cos(halfYaw);
          const c3 = Math.cos(halfRoll);
          const s1 = Math.sin(halfPitch);
          const s2 = Math.sin(halfYaw);
          const s3 = Math.sin(halfRoll);
          result.x = c2 * s1 * c3 + s2 * c1 * s3;
          result.y = s2 * c1 * c3 - c2 * s1 * s3;
          result.z = c2 * c1 * s3 - s2 * s1 * c3;
          result.w = c2 * c1 * c3 + s2 * s1 * s3;
      }
      /**
       * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation
       * @param alpha - defines the rotation around first axis
       * @param beta - defines the rotation around second axis
       * @param gamma - defines the rotation around third axis
       * @returns the new quaternion
       */
      static RotationAlphaBetaGamma(alpha, beta, gamma) {
          const result = new Quaternion();
          Quaternion.RotationAlphaBetaGammaToRef(alpha, beta, gamma, result);
          return result;
      }
      /**
       * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion
       * @param alpha - defines the rotation around first axis
       * @param beta - defines the rotation around second axis
       * @param gamma - defines the rotation around third axis
       * @param result - defines the target quaternion
       */
      static RotationAlphaBetaGammaToRef(alpha, beta, gamma, result) {
          // Produces a quaternion from Euler angles in the z-x-z orientation
          const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
          const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
          const halfBeta = beta * 0.5;
          result.x = Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta);
          result.y = Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta);
          result.z = Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta);
          result.w = Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta);
      }
      /**
       * Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)
       * @param axis1 - defines the first axis
       * @param axis2 - defines the second axis
       * @param axis3 - defines the third axis
       * @returns the new quaternion
       */
      static RotationQuaternionFromAxis(axis1, axis2, axis3) {
          const quat = new Quaternion(0.0, 0.0, 0.0, 0.0);
          Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
          return quat;
      }
      /**
       * Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion
       * @param axis1 - defines the first axis
       * @param axis2 - defines the second axis
       * @param axis3 - defines the third axis
       * @param ref - defines the target quaternion
       */
      static RotationQuaternionFromAxisToRef(axis1, axis2, axis3, ref) {
          const rotMat = preallocatedVariables_1$2.MathTmp.Matrix[0];
          Matrix_1$2.Matrix.FromXYZAxesToRef(axis1.normalize(), axis2.normalize(), axis3.normalize(), rotMat);
          Quaternion.FromRotationMatrixToRef(rotMat, ref);
      }
      /**
       * Interpolates between two quaternions
       * @param left - defines first quaternion
       * @param right - defines second quaternion
       * @param amount - defines the gradient to use
       * @returns the new interpolated quaternion
       */
      static Slerp(left, right, amount) {
          const result = Quaternion.Identity;
          Quaternion.SlerpToRef(left, right, amount, result);
          return result;
      }
      /**
       * Interpolates between two quaternions and stores it into a target quaternion
       * @param left - defines first quaternion
       * @param right - defines second quaternion
       * @param amount - defines the gradient to use
       * @param result - defines the target quaternion
       */
      static SlerpToRef(left, right, amount, result) {
          let num2;
          let num3;
          let num4 = left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w;
          let flag = false;
          if (num4 < 0) {
              flag = true;
              num4 = -num4;
          }
          if (num4 > 0.999999) {
              num3 = 1 - amount;
              num2 = flag ? -amount : amount;
          }
          else {
              const num5 = Math.acos(num4);
              const num6 = 1.0 / Math.sin(num5);
              num3 = Math.sin((1.0 - amount) * num5) * num6;
              num2 = flag
                  ? -Math.sin(amount * num5) * num6
                  : Math.sin(amount * num5) * num6;
          }
          result.x = num3 * left.x + num2 * right.x;
          result.y = num3 * left.y + num2 * right.y;
          result.z = num3 * left.z + num2 * right.z;
          result.w = num3 * left.w + num2 * right.w;
      }
      /**
       * Interpolate between two quaternions using Hermite interpolation
       * @param value1 - defines first quaternion
       * @param tangent1 - defines the incoming tangent
       * @param value2 - defines second quaternion
       * @param tangent2 - defines the outgoing tangent
       * @param amount - defines the target quaternion
       * @returns the new interpolated quaternion
       */
      static Hermite(value1, tangent1, value2, tangent2, amount) {
          const squared = amount * amount;
          const cubed = amount * squared;
          const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
          const part2 = -2.0 * cubed + 3.0 * squared;
          const part3 = cubed - 2.0 * squared + amount;
          const part4 = cubed - squared;
          const x = value1.x * part1 +
              value2.x * part2 +
              tangent1.x * part3 +
              tangent2.x * part4;
          const y = value1.y * part1 +
              value2.y * part2 +
              tangent1.y * part3 +
              tangent2.y * part4;
          const z = value1.z * part1 +
              value2.z * part2 +
              tangent1.z * part3 +
              tangent2.z * part4;
          const w = value1.w * part1 +
              value2.w * part2 +
              tangent1.w * part3 +
              tangent2.w * part4;
          return new Quaternion(x, y, z, w);
      }
      /**
       * Creates an identity quaternion
       * @returns - the identity quaternion
       */
      static get Identity() {
          return new Quaternion(0.0, 0.0, 0.0, 1.0);
      }
      /**
       * Returns the angle in degrees between two rotations a and b.
       * @param quat1 - defines the first quaternion
       * @param quat2 - defines the second quaternion
       */
      static Angle(quat1, quat2) {
          const dot = Quaternion.Dot(quat1, quat2);
          return Math.acos(Math.min(Math.abs(dot), 1)) * 2 * types_1$7.RAD2DEG;
      }
      /**
       * Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
       * @param x - the rotation on the x axis in euler degrees
       * @param y - the rotation on the y axis in euler degrees
       * @param z - the rotation on the z axis in euler degrees
       */
      static Euler(x, y, z) {
          return Quaternion.RotationYawPitchRoll(y * types_1$7.DEG2RAD, x * types_1$7.DEG2RAD, z * types_1$7.DEG2RAD);
      }
      /**
       * Creates a rotation with the specified forward and upwards directions.
       * @param forward - the direction to look in
       * @param up - the vector that defines in which direction up is
       */
      static LookRotation(forward, up = preallocatedVariables_1$2.MathTmp.staticUp) {
          const forwardNew = Vector3_1$5.Vector3.Normalize(forward);
          const right = Vector3_1$5.Vector3.Normalize(Vector3_1$5.Vector3.Cross(up, forwardNew));
          const upNew = Vector3_1$5.Vector3.Cross(forwardNew, right);
          const m00 = right.x;
          const m01 = right.y;
          const m02 = right.z;
          const m10 = upNew.x;
          const m11 = upNew.y;
          const m12 = upNew.z;
          const m20 = forwardNew.x;
          const m21 = forwardNew.y;
          const m22 = forwardNew.z;
          const num8 = m00 + m11 + m22;
          const quaternion = new Quaternion();
          if (num8 > 0) {
              let num = Math.sqrt(num8 + 1);
              quaternion.w = num * 0.5;
              num = 0.5 / num;
              quaternion.x = (m12 - m21) * num;
              quaternion.y = (m20 - m02) * num;
              quaternion.z = (m01 - m10) * num;
              return quaternion;
          }
          if (m00 >= m11 && m00 >= m22) {
              const num7 = Math.sqrt(1 + m00 - m11 - m22);
              const num4 = 0.5 / num7;
              quaternion.x = 0.5 * num7;
              quaternion.y = (m01 + m10) * num4;
              quaternion.z = (m02 + m20) * num4;
              quaternion.w = (m12 - m21) * num4;
              return quaternion;
          }
          if (m11 > m22) {
              const num6 = Math.sqrt(1 + m11 - m00 - m22);
              const num3 = 0.5 / num6;
              quaternion.x = (m10 + m01) * num3;
              quaternion.y = 0.5 * num6;
              quaternion.z = (m21 + m12) * num3;
              quaternion.w = (m20 - m02) * num3;
              return quaternion;
          }
          const num5 = Math.sqrt(1 + m22 - m00 - m11);
          const num2 = 0.5 / num5;
          quaternion.x = (m20 + m02) * num2;
          quaternion.y = (m21 + m12) * num2;
          quaternion.z = 0.5 * num5;
          quaternion.w = (m01 - m10) * num2;
          return quaternion;
      }
      /**
       * The from quaternion is rotated towards to by an angular step of maxDegreesDelta.
       * @param from - defines the first quaternion
       * @param to - defines the second quaternion
       * @param maxDegreesDelta - the interval step
       */
      static RotateTowards(from, to, maxDegreesDelta) {
          const num = Quaternion.Angle(from, to);
          if (num === 0) {
              return to;
          }
          const t = Math.min(1, maxDegreesDelta / num);
          return Quaternion.Slerp(from, to, t);
      }
      /**
       * Creates a rotation which rotates from fromDirection to toDirection.
       * @param from - defines the first direction Vector
       * @param to - defines the target direction Vector
       */
      static FromToRotation(from, to, up = preallocatedVariables_1$2.MathTmp.staticUp) {
          // Unity-based calculations implemented from https://forum.unity.com/threads/quaternion-lookrotation-around-an-axis.608470/#post-4069888
          const v0 = from.normalize();
          const v1 = to.normalize();
          const a = Vector3_1$5.Vector3.Cross(v0, v1);
          const w = Math.sqrt(v0.lengthSquared() * v1.lengthSquared()) + Vector3_1$5.Vector3.Dot(v0, v1);
          if (a.lengthSquared() < 0.0001) {
              // the vectors are parallel, check w to find direction
              // if w is 0 then values are opposite, and we sould rotate 180 degrees around the supplied axis
              // otherwise the vectors in the same direction and no rotation should occur
              return Math.abs(w) < 0.0001
                  ? new Quaternion(up.x, up.y, up.z, 0).normalized
                  : Quaternion.Identity;
          }
          else {
              return new Quaternion(a.x, a.y, a.z, w).normalized;
          }
      }
      /**
       * Converts this quaternion to one with the same orientation but with a magnitude of 1.
       */
      get normalized() {
          return this.normalize();
      }
      /**
       * Creates a rotation which rotates from fromDirection to toDirection.
       * @param from - defines the first Vector
       * @param to - defines the second Vector
       * @param up - defines the direction
       */
      setFromToRotation(from, to, up = preallocatedVariables_1$2.MathTmp.staticUp) {
          const result = Quaternion.FromToRotation(from, to, up);
          this.x = result.x;
          this.y = result.y;
          this.z = result.z;
          this.w = result.w;
      }
      set eulerAngles(euler) {
          this.setEuler(euler.x, euler.y, euler.z);
      }
      /**
       * Gets or sets the euler angle representation of the rotation.
       * Implemented unity-based calculations from: https://stackoverflow.com/a/56055813
       */
      get eulerAngles() {
          const out = new Vector3_1$5.Vector3();
          // if the input quaternion is normalized, this is exactly one. Otherwise, this acts as a correction factor for the quaternion's not-normalizedness
          const unit = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
          // this will have a magnitude of 0.5 or greater if and only if this is a singularity case
          const test = this.x * this.w - this.y * this.z;
          if (test > 0.4995 * unit) {
              // singularity at north pole
              out.x = Math.PI / 2;
              out.y = 2 * Math.atan2(this.y, this.x);
              out.z = 0;
          }
          else if (test < -0.4995 * unit) {
              // singularity at south pole
              out.x = -Math.PI / 2;
              out.y = -2 * Math.atan2(this.y, this.x);
              out.z = 0;
          }
          else {
              // no singularity - this is the majority of cases
              out.x = Math.asin(2 * (this.w * this.x - this.y * this.z));
              out.y = Math.atan2(2 * this.w * this.y + 2 * this.z * this.x, 1 - 2 * (this.x * this.x + this.y * this.y));
              out.z = Math.atan2(2 * this.w * this.z + 2 * this.x * this.y, 1 - 2 * (this.z * this.z + this.x * this.x));
          }
          out.x *= types_1$7.RAD2DEG;
          out.y *= types_1$7.RAD2DEG;
          out.z *= types_1$7.RAD2DEG;
          // ensure the degree values are between 0 and 360
          out.x = Scalar_1$5.Scalar.Repeat(out.x, 360);
          out.y = Scalar_1$5.Scalar.Repeat(out.y, 360);
          out.z = Scalar_1$5.Scalar.Repeat(out.z, 360);
          return out;
      }
      /**
       * Gets a string representation for the current quaternion
       * @returns a string with the Quaternion coordinates
       */
      toString() {
          return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
      }
      /**
       * Gets length of current quaternion
       * @returns the quaternion length (float)
       */
      get length() {
          return Math.sqrt(this.lengthSquared);
      }
      /**
       * Gets length of current quaternion
       * @returns the quaternion length (float)
       */
      get lengthSquared() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
      }
      /**
       * Gets the class name of the quaternion
       * @returns the string "Quaternion"
       */
      getClassName() {
          return 'Quaternion';
      }
      /**
       * Gets a hash code for this quaternion
       * @returns the quaternion hash code
       */
      getHashCode() {
          let hash = this.x || 0;
          hash = (hash * 397) ^ (this.y || 0);
          hash = (hash * 397) ^ (this.z || 0);
          hash = (hash * 397) ^ (this.w || 0);
          return hash;
      }
      /**
       * Copy the quaternion to an array
       * @returns a new array populated with 4 elements from the quaternion coordinates
       */
      asArray() {
          return [this.x, this.y, this.z, this.w];
      }
      /**
       * Check if two quaternions are equals
       * @param otherQuaternion - defines the second operand
       * @returns true if the current quaternion and the given one coordinates are strictly equals
       */
      equals(otherQuaternion) {
          return (otherQuaternion &&
              this.x === otherQuaternion.x &&
              this.y === otherQuaternion.y &&
              this.z === otherQuaternion.z &&
              this.w === otherQuaternion.w);
      }
      /**
       * Clone the current quaternion
       * @returns a new quaternion copied from the current one
       */
      clone() {
          return new Quaternion(this.x, this.y, this.z, this.w);
      }
      /**
       * Copy a quaternion to the current one
       * @param other - defines the other quaternion
       * @returns the updated current quaternion
       */
      copyFrom(other) {
          this.x = other.x;
          this.y = other.y;
          this.z = other.z;
          this.w = other.w;
          return this;
      }
      /**
       * Updates the current quaternion with the given float coordinates
       * @param x - defines the x coordinate
       * @param y - defines the y coordinate
       * @param z - defines the z coordinate
       * @param w - defines the w coordinate
       * @returns the updated current quaternion
       */
      copyFromFloats(x, y, z, w) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
          return this;
      }
      /**
       * Updates the current quaternion from the given float coordinates
       * @param x - defines the x coordinate
       * @param y - defines the y coordinate
       * @param z - defines the z coordinate
       * @param w - defines the w coordinate
       * @returns the updated current quaternion
       */
      set(x, y, z, w) {
          return this.copyFromFloats(x, y, z, w);
      }
      /**
       * Updates the current quaternion from the given euler angles
       * @returns the updated current quaternion
       */
      setEuler(x, y, z) {
          Quaternion.RotationYawPitchRollToRef(y * types_1$7.DEG2RAD, x * types_1$7.DEG2RAD, z * types_1$7.DEG2RAD, this);
          return this;
      }
      /**
       * @internal
       * Adds two quaternions
       * @param other - defines the second operand
       * @returns a new quaternion as the addition result of the given one and the current quaternion
       */
      add(other) {
          return new Quaternion(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
      }
      /**
       * @internal
       * Add a quaternion to the current one
       * @param other - defines the quaternion to add
       * @returns the current quaternion
       */
      addInPlace(other) {
          this.x += other.x;
          this.y += other.y;
          this.z += other.z;
          this.w += other.w;
          return this;
      }
      /**
       * Subtract two quaternions
       * @param other - defines the second operand
       * @returns a new quaternion as the subtraction result of the given one from the current one
       */
      subtract(other) {
          return new Quaternion(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
      }
      /**
       * Multiplies the current quaternion by a scale factor
       * @param value - defines the scale factor
       * @returns a new quaternion set by multiplying the current quaternion coordinates by the float "scale"
       */
      scale(value) {
          return new Quaternion(this.x * value, this.y * value, this.z * value, this.w * value);
      }
      /**
       * Scale the current quaternion values by a factor and stores the result to a given quaternion
       * @param scale - defines the scale factor
       * @param result - defines the Quaternion object where to store the result
       * @returns the unmodified current quaternion
       */
      scaleToRef(scale, result) {
          result.x = this.x * scale;
          result.y = this.y * scale;
          result.z = this.z * scale;
          result.w = this.w * scale;
          return this;
      }
      /**
       * Multiplies in place the current quaternion by a scale factor
       * @param value - defines the scale factor
       * @returns the current modified quaternion
       */
      scaleInPlace(value) {
          this.x *= value;
          this.y *= value;
          this.z *= value;
          this.w *= value;
          return this;
      }
      /**
       * Scale the current quaternion values by a factor and add the result to a given quaternion
       * @param scale - defines the scale factor
       * @param result - defines the Quaternion object where to store the result
       * @returns the unmodified current quaternion
       */
      scaleAndAddToRef(scale, result) {
          result.x += this.x * scale;
          result.y += this.y * scale;
          result.z += this.z * scale;
          result.w += this.w * scale;
          return this;
      }
      /**
       * Multiplies two quaternions
       * @param q1 - defines the second operand
       * @returns a new quaternion set as the multiplication result of the current one with the given one "q1"
       */
      multiply(q1) {
          const result = new Quaternion(0, 0, 0, 1.0);
          this.multiplyToRef(q1, result);
          return result;
      }
      /**
       * Sets the given "result" as the the multiplication result of the current one with the given one "q1"
       * @param q1 - defines the second operand
       * @param result - defines the target quaternion
       * @returns the current quaternion
       */
      multiplyToRef(q1, result) {
          const x = this.x * q1.w + this.y * q1.z - this.z * q1.y + this.w * q1.x;
          const y = -this.x * q1.z + this.y * q1.w + this.z * q1.x + this.w * q1.y;
          const z = this.x * q1.y - this.y * q1.x + this.z * q1.w + this.w * q1.z;
          const w = -this.x * q1.x - this.y * q1.y - this.z * q1.z + this.w * q1.w;
          result.copyFromFloats(x, y, z, w);
          return this;
      }
      /**
       * Updates the current quaternion with the multiplication of itself with the given one "q1"
       * @param q1 - defines the second operand
       * @returns the currentupdated quaternion
       */
      multiplyInPlace(q1) {
          this.multiplyToRef(q1, this);
          return this;
      }
      /**
       * Conjugates (1-q) the current quaternion and stores the result in the given quaternion
       * @param ref - defines the target quaternion
       * @returns the current quaternion
       */
      conjugateToRef(ref) {
          ref.copyFromFloats(-this.x, -this.y, -this.z, this.w);
          return this;
      }
      /**
       * Conjugates in place (1-q) the current quaternion
       * @returns the current updated quaternion
       */
      conjugateInPlace() {
          this.x *= -1;
          this.y *= -1;
          this.z *= -1;
          return this;
      }
      /**
       * Conjugates in place (1-q) the current quaternion
       * @returns a new quaternion
       */
      conjugate() {
          const result = new Quaternion(-this.x, -this.y, -this.z, this.w);
          return result;
      }
      /**
       * Normalize in place the current quaternion
       * @returns the current updated quaternion
       */
      normalize() {
          const length = 1.0 / this.length;
          this.x *= length;
          this.y *= length;
          this.z *= length;
          this.w *= length;
          return this;
      }
      angleAxis(degress, axis) {
          if (axis.lengthSquared() === 0) {
              return Quaternion.Identity;
          }
          const result = Quaternion.Identity;
          let radians = degress * types_1$7.DEG2RAD;
          radians *= 0.5;
          let a2 = axis.normalize();
          a2 = axis.scaleInPlace(Math.sin(radians));
          result.x = a2.x;
          result.y = a2.y;
          result.z = a2.z;
          result.w = Math.cos(radians);
          return result.normalize();
      }
      /**
       * Updates the given rotation matrix with the current quaternion values
       * @param result - defines the target matrix
       * @returns the current unchanged quaternion
       */
      toRotationMatrix(result) {
          Matrix_1$2.Matrix.FromQuaternionToRef(this, result);
          return this;
      }
      /**
       * Updates the current quaternion from the given rotation matrix values
       * @param matrix - defines the source matrix
       * @returns the current updated quaternion
       */
      fromRotationMatrix(matrix) {
          Quaternion.FromRotationMatrixToRef(matrix, this);
          return this;
      }
  }
  Quaternion$1.Quaternion = Quaternion;

  Object.defineProperty(Vector3$1, "__esModule", { value: true });
  Vector3$1.Vector3 = void 0;
  const preallocatedVariables_1$1 = preallocatedVariables;
  const types_1$6 = types;
  const Quaternion_1$1 = Quaternion$1;
  const Scalar_1$4 = Scalar$1;
  /**
   * Classed used to store (x,y,z) vector representation
   * A Vector3 is the main object used in 3D geometry
   * It can represent etiher the coordinates of a point the space, either a direction
   * Reminder: Babylon.js uses a left handed forward facing system
   * @public
   */
  class Vector3 {
      /**
       * Creates a new Vector3 object from the given x, y, z (floats) coordinates.
       * @param x - defines the first coordinates (on X axis)
       * @param y - defines the second coordinates (on Y axis)
       * @param z - defines the third coordinates (on Z axis)
       */
      constructor(
      /**
       * Defines the first coordinates (on X axis)
       */
      x = 0, 
      /**
       * Defines the second coordinates (on Y axis)
       */
      y = 0, 
      /**
       * Defines the third coordinates (on Z axis)
       */
      z = 0) {
          this.x = x;
          this.y = y;
          this.z = z;
      }
      /**
       * Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same
       */
      get isNonUniform() {
          const absX = Math.abs(this.x);
          const absY = Math.abs(this.y);
          if (absX !== absY) {
              return true;
          }
          const absZ = Math.abs(this.z);
          if (absX !== absZ) {
              return true;
          }
          if (absY !== absZ) {
              return true;
          }
          return false;
      }
      // Statics
      /**
       * Returns a new Vector3 as the result of the addition of the two given vectors.
       * @param vector1 - the first vector
       * @param vector2 - the second vector
       * @returns the resulting vector
       */
      static Add(vector1, vector2) {
          return new Vector3(vector1.x, vector1.y, vector1.z).addInPlace(vector2);
      }
      /**
       * Get the clip factor between two vectors
       * @param vector0 - defines the first operand
       * @param vector1 - defines the second operand
       * @param axis - defines the axis to use
       * @param size - defines the size along the axis
       * @returns the clip factor
       */
      static GetClipFactor(vector0, vector1, axis, size) {
          const d0 = Vector3.Dot(vector0, axis) - size;
          const d1 = Vector3.Dot(vector1, axis) - size;
          const s = d0 / (d0 - d1);
          return s;
      }
      /**
       * Get angle between two vectors
       * @param vector0 - angle between vector0 and vector1
       * @param vector1 - angle between vector0 and vector1
       * @param normal - direction of the normal
       * @returns the angle between vector0 and vector1
       */
      static GetAngleBetweenVectors(vector0, vector1, normal) {
          const v0 = vector0.normalizeToRef(preallocatedVariables_1$1.MathTmp.Vector3[1]);
          const v1 = vector1.normalizeToRef(preallocatedVariables_1$1.MathTmp.Vector3[2]);
          const dot = Vector3.Dot(v0, v1);
          const n = preallocatedVariables_1$1.MathTmp.Vector3[3];
          Vector3.CrossToRef(v0, v1, n);
          if (Vector3.Dot(n, normal) > 0) {
              return Math.acos(dot);
          }
          return -Math.acos(dot);
      }
      /**
       * Returns a new Vector3 set from the index "offset" of the given array
       * @param array - defines the source array
       * @param offset - defines the offset in the source array
       * @returns the new Vector3
       */
      static FromArray(array, offset = 0) {
          return new Vector3(array[offset], array[offset + 1], array[offset + 2]);
      }
      /**
       * Returns a new Vector3 set from the index "offset" of the given FloatArray
       * This function is deprecated.  Use FromArray instead
       * @param array - defines the source array
       * @param offset - defines the offset in the source array
       * @returns the new Vector3
       */
      static FromFloatArray(array, offset) {
          return Vector3.FromArray(array, offset);
      }
      /**
       * Sets the given vector "result" with the element values from the index "offset" of the given array
       * @param array - defines the source array
       * @param offset - defines the offset in the source array
       * @param result - defines the Vector3 where to store the result
       */
      static FromArrayToRef(array, offset, result) {
          result.x = array[offset];
          result.y = array[offset + 1];
          result.z = array[offset + 2];
      }
      /**
       * Sets the given vector "result" with the element values from the index "offset" of the given FloatArray
       * This function is deprecated.  Use FromArrayToRef instead.
       * @param array - defines the source array
       * @param offset - defines the offset in the source array
       * @param result - defines the Vector3 where to store the result
       */
      static FromFloatArrayToRef(array, offset, result) {
          return Vector3.FromArrayToRef(array, offset, result);
      }
      /**
       * Sets the given vector "result" with the given floats.
       * @param x - defines the x coordinate of the source
       * @param y - defines the y coordinate of the source
       * @param z - defines the z coordinate of the source
       * @param result - defines the Vector3 where to store the result
       */
      static FromFloatsToRef(x, y, z, result) {
          result.copyFromFloats(x, y, z);
      }
      /**
       * Returns a new Vector3 set to (0.0, 0.0, 0.0)
       * @returns a new empty Vector3
       */
      static Zero() {
          return new Vector3(0.0, 0.0, 0.0);
      }
      /**
       * Returns a new Vector3 set to (1.0, 1.0, 1.0)
       * @returns a new unit Vector3
       */
      static One() {
          return new Vector3(1.0, 1.0, 1.0);
      }
      /**
       * Returns a new Vector3 set to (0.0, 1.0, 0.0)
       * @returns a new up Vector3
       */
      static Up() {
          return new Vector3(0.0, 1.0, 0.0);
      }
      /**
       * Returns a new Vector3 set to (0.0, -1.0, 0.0)
       * @returns a new down Vector3
       */
      static Down() {
          return new Vector3(0.0, -1.0, 0.0);
      }
      /**
       * Returns a new Vector3 set to (0.0, 0.0, 1.0)
       * @returns a new forward Vector3
       */
      static Forward() {
          return new Vector3(0.0, 0.0, 1.0);
      }
      /**
       * Returns a new Vector3 set to (0.0, 0.0, -1.0)
       * @returns a new forward Vector3
       */
      static Backward() {
          return new Vector3(0.0, 0.0, -1.0);
      }
      /**
       * Returns a new Vector3 set to (1.0, 0.0, 0.0)
       * @returns a new right Vector3
       */
      static Right() {
          return new Vector3(1.0, 0.0, 0.0);
      }
      /**
       * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
       * @returns a new left Vector3
       */
      static Left() {
          return new Vector3(-1.0, 0.0, 0.0);
      }
      /**
       * Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
       * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
       * @param vector - defines the Vector3 to transform
       * @param transformation - defines the transformation matrix
       * @returns the transformed Vector3
       */
      static TransformCoordinates(vector, transformation) {
          const result = Vector3.Zero();
          Vector3.TransformCoordinatesToRef(vector, transformation, result);
          return result;
      }
      /**
       * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
       * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
       * @param vector - defines the Vector3 to transform
       * @param transformation - defines the transformation matrix
       * @param result - defines the Vector3 where to store the result
       */
      static TransformCoordinatesToRef(vector, transformation, result) {
          return Vector3.TransformCoordinatesFromFloatsToRef(vector.x, vector.y, vector.z, transformation, result);
      }
      /**
       * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
       * This method computes tranformed coordinates only, not transformed direction vectors
       * @param x - define the x coordinate of the source vector
       * @param y - define the y coordinate of the source vector
       * @param z - define the z coordinate of the source vector
       * @param transformation - defines the transformation matrix
       * @param result - defines the Vector3 where to store the result
       */
      static TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) {
          const m = transformation.m;
          const rx = x * m[0] + y * m[4] + z * m[8] + m[12];
          const ry = x * m[1] + y * m[5] + z * m[9] + m[13];
          const rz = x * m[2] + y * m[6] + z * m[10] + m[14];
          const rw = 1 / (x * m[3] + y * m[7] + z * m[11] + m[15]);
          result.x = rx * rw;
          result.y = ry * rw;
          result.z = rz * rw;
      }
      /**
       * Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
       * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
       * @param vector - defines the Vector3 to transform
       * @param transformation - defines the transformation matrix
       * @returns the new Vector3
       */
      static TransformNormal(vector, transformation) {
          const result = Vector3.Zero();
          Vector3.TransformNormalToRef(vector, transformation, result);
          return result;
      }
      /**
       * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
       * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
       * @param vector - defines the Vector3 to transform
       * @param transformation - defines the transformation matrix
       * @param result - defines the Vector3 where to store the result
       */
      static TransformNormalToRef(vector, transformation, result) {
          this.TransformNormalFromFloatsToRef(vector.x, vector.y, vector.z, transformation, result);
      }
      /**
       * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
       * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
       * @param x - define the x coordinate of the source vector
       * @param y - define the y coordinate of the source vector
       * @param z - define the z coordinate of the source vector
       * @param transformation - defines the transformation matrix
       * @param result - defines the Vector3 where to store the result
       */
      static TransformNormalFromFloatsToRef(x, y, z, transformation, result) {
          const m = transformation.m;
          result.x = x * m[0] + y * m[4] + z * m[8];
          result.y = x * m[1] + y * m[5] + z * m[9];
          result.z = x * m[2] + y * m[6] + z * m[10];
      }
      /**
       * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
       * @param value1 - defines the first control point
       * @param value2 - defines the second control point
       * @param value3 - defines the third control point
       * @param value4 - defines the fourth control point
       * @param amount - defines the amount on the spline to use
       * @returns the new Vector3
       */
      static CatmullRom(value1, value2, value3, value4, amount) {
          const squared = amount * amount;
          const cubed = amount * squared;
          const x = 0.5 *
              (2.0 * value2.x +
                  (-value1.x + value3.x) * amount +
                  (2.0 * value1.x - 5.0 * value2.x + 4.0 * value3.x - value4.x) *
                      squared +
                  (-value1.x + 3.0 * value2.x - 3.0 * value3.x + value4.x) * cubed);
          const y = 0.5 *
              (2.0 * value2.y +
                  (-value1.y + value3.y) * amount +
                  (2.0 * value1.y - 5.0 * value2.y + 4.0 * value3.y - value4.y) *
                      squared +
                  (-value1.y + 3.0 * value2.y - 3.0 * value3.y + value4.y) * cubed);
          const z = 0.5 *
              (2.0 * value2.z +
                  (-value1.z + value3.z) * amount +
                  (2.0 * value1.z - 5.0 * value2.z + 4.0 * value3.z - value4.z) *
                      squared +
                  (-value1.z + 3.0 * value2.z - 3.0 * value3.z + value4.z) * cubed);
          return new Vector3(x, y, z);
      }
      /**
       * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
       * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
       * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
       * @param value - defines the current value
       * @param min - defines the lower range value
       * @param max - defines the upper range value
       * @returns the new Vector3
       */
      static Clamp(value, min, max) {
          const v = new Vector3();
          Vector3.ClampToRef(value, min, max, v);
          return v;
      }
      /**
       * Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
       * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
       * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
       * @param value - defines the current value
       * @param min - defines the lower range value
       * @param max - defines the upper range value
       * @param result - defines the Vector3 where to store the result
       */
      static ClampToRef(value, min, max, result) {
          let x = value.x;
          x = x > max.x ? max.x : x;
          x = x < min.x ? min.x : x;
          let y = value.y;
          y = y > max.y ? max.y : y;
          y = y < min.y ? min.y : y;
          let z = value.z;
          z = z > max.z ? max.z : z;
          z = z < min.z ? min.z : z;
          result.copyFromFloats(x, y, z);
      }
      /**
       * Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
       * @param value1 - defines the first control point
       * @param tangent1 - defines the first tangent vector
       * @param value2 - defines the second control point
       * @param tangent2 - defines the second tangent vector
       * @param amount - defines the amount on the interpolation spline (between 0 and 1)
       * @returns the new Vector3
       */
      static Hermite(value1, tangent1, value2, tangent2, amount) {
          const squared = amount * amount;
          const cubed = amount * squared;
          const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
          const part2 = -2.0 * cubed + 3.0 * squared;
          const part3 = cubed - 2.0 * squared + amount;
          const part4 = cubed - squared;
          const x = value1.x * part1 +
              value2.x * part2 +
              tangent1.x * part3 +
              tangent2.x * part4;
          const y = value1.y * part1 +
              value2.y * part2 +
              tangent1.y * part3 +
              tangent2.y * part4;
          const z = value1.z * part1 +
              value2.z * part2 +
              tangent1.z * part3 +
              tangent2.z * part4;
          return new Vector3(x, y, z);
      }
      /**
       * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
       * @param start - defines the start value
       * @param end - defines the end value
       * @param amount - max defines amount between both (between 0 and 1)
       * @returns the new Vector3
       */
      static Lerp(start, end, amount) {
          const result = new Vector3(0, 0, 0);
          Vector3.LerpToRef(start, end, amount, result);
          return result;
      }
      /**
       * Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
       * @param start - defines the start value
       * @param end - defines the end value
       * @param amount - max defines amount between both (between 0 and 1)
       * @param result - defines the Vector3 where to store the result
       */
      static LerpToRef(start, end, amount, result) {
          result.x = start.x + (end.x - start.x) * amount;
          result.y = start.y + (end.y - start.y) * amount;
          result.z = start.z + (end.z - start.z) * amount;
      }
      /**
       * Returns the dot product (float) between the vectors "left" and "right"
       * @param left - defines the left operand
       * @param right - defines the right operand
       * @returns the dot product
       */
      static Dot(left, right) {
          return left.x * right.x + left.y * right.y + left.z * right.z;
      }
      /**
       * Returns a new Vector3 as the cross product of the vectors "left" and "right"
       * The cross product is then orthogonal to both "left" and "right"
       * @param left - defines the left operand
       * @param right - defines the right operand
       * @returns the cross product
       */
      static Cross(left, right) {
          const result = Vector3.Zero();
          Vector3.CrossToRef(left, right, result);
          return result;
      }
      /**
       * Sets the given vector "result" with the cross product of "left" and "right"
       * The cross product is then orthogonal to both "left" and "right"
       * @param left - defines the left operand
       * @param right - defines the right operand
       * @param result - defines the Vector3 where to store the result
       */
      static CrossToRef(left, right, result) {
          const x = left.y * right.z - left.z * right.y;
          const y = left.z * right.x - left.x * right.z;
          const z = left.x * right.y - left.y * right.x;
          result.copyFromFloats(x, y, z);
      }
      /**
       * Returns a new Vector3 as the normalization of the given vector
       * @param vector - defines the Vector3 to normalize
       * @returns the new Vector3
       */
      static Normalize(vector) {
          const result = Vector3.Zero();
          Vector3.NormalizeToRef(vector, result);
          return result;
      }
      /**
       * Sets the given vector "result" with the normalization of the given first vector
       * @param vector - defines the Vector3 to normalize
       * @param result - defines the Vector3 where to store the result
       */
      static NormalizeToRef(vector, result) {
          vector.normalizeToRef(result);
      }
      /**
       * Gets the minimal coordinate values between two Vector3
       * @param left - defines the first operand
       * @param right - defines the second operand
       * @returns the new Vector3
       */
      static Minimize(left, right) {
          const min = new Vector3(left.x, left.y, left.z);
          min.minimizeInPlace(right);
          return min;
      }
      /**
       * Gets the maximal coordinate values between two Vector3
       * @param left - defines the first operand
       * @param right - defines the second operand
       * @returns the new Vector3
       */
      static Maximize(left, right) {
          const max = new Vector3(left.x, left.y, left.z);
          max.maximizeInPlace(right);
          return max;
      }
      /**
       * Returns the distance between the vectors "value1" and "value2"
       * @param value1 - defines the first operand
       * @param value2 - defines the second operand
       * @returns the distance
       */
      static Distance(value1, value2) {
          return Math.sqrt(Vector3.DistanceSquared(value1, value2));
      }
      /**
       * Returns the squared distance between the vectors "value1" and "value2"
       * @param value1 - defines the first operand
       * @param value2 - defines the second operand
       * @returns the squared distance
       */
      static DistanceSquared(value1, value2) {
          const x = value1.x - value2.x;
          const y = value1.y - value2.y;
          const z = value1.z - value2.z;
          return x * x + y * y + z * z;
      }
      /**
       * Returns a new Vector3 located at the center between "value1" and "value2"
       * @param value1 - defines the first operand
       * @param value2 - defines the second operand
       * @returns the new Vector3
       */
      static Center(value1, value2) {
          const center = Vector3.Add(value1, value2);
          center.scaleInPlace(0.5);
          return center;
      }
      /**
       * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
       * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
       * to something in order to rotate it from its local system to the given target system
       * Note: axis1, axis2 and axis3 are normalized during this operation
       * @param axis1 - defines the first axis
       * @param axis2 - defines the second axis
       * @param axis3 - defines the third axis
       * @returns a new Vector3
       */
      static RotationFromAxis(axis1, axis2, axis3) {
          const rotation = Vector3.Zero();
          Vector3.RotationFromAxisToRef(axis1, axis2, axis3, rotation);
          return rotation;
      }
      /**
       * The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
       * @param axis1 - defines the first axis
       * @param axis2 - defines the second axis
       * @param axis3 - defines the third axis
       * @param ref - defines the Vector3 where to store the result
       */
      static RotationFromAxisToRef(axis1, axis2, axis3, ref) {
          const quat = preallocatedVariables_1$1.MathTmp.Quaternion[0];
          Quaternion_1$1.Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
          ref.copyFrom(quat.eulerAngles);
      }
      /**
       * Creates a string representation of the Vector3
       * @returns a string with the Vector3 coordinates.
       */
      toString() {
          return `(${this.x}, ${this.y}, ${this.z})`;
      }
      /**
       * Gets the class name
       * @returns the string "Vector3"
       */
      getClassName() {
          return 'Vector3';
      }
      /**
       * Creates the Vector3 hash code
       * @returns a number which tends to be unique between Vector3 instances
       */
      getHashCode() {
          let hash = this.x || 0;
          hash = (hash * 397) ^ (this.y || 0);
          hash = (hash * 397) ^ (this.z || 0);
          return hash;
      }
      // Operators
      /**
       * Creates an array containing three elements : the coordinates of the Vector3
       * @returns a new array of numbers
       */
      asArray() {
          const result = [];
          this.toArray(result, 0);
          return result;
      }
      /**
       * Populates the given array or FloatArray from the given index with the successive coordinates of the Vector3
       * @param array - defines the destination array
       * @param index - defines the offset in the destination array
       * @returns the current Vector3
       */
      toArray(array, index = 0) {
          array[index] = this.x;
          array[index + 1] = this.y;
          array[index + 2] = this.z;
          return this;
      }
      /**
       * Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
       * @returns a new Quaternion object, computed from the Vector3 coordinates
       */
      toQuaternion() {
          return Quaternion_1$1.Quaternion.Identity.setEuler(this.y, this.x, this.z);
      }
      /**
       * Adds the given vector to the current Vector3
       * @param otherVector - defines the second operand
       * @returns the current updated Vector3
       */
      addInPlace(otherVector) {
          return this.addInPlaceFromFloats(otherVector.x, otherVector.y, otherVector.z);
      }
      /**
       * Adds the given coordinates to the current Vector3
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the current updated Vector3
       */
      addInPlaceFromFloats(x, y, z) {
          this.x += x;
          this.y += y;
          this.z += z;
          return this;
      }
      /**
       * Gets a new Vector3, result of the addition the current Vector3 and the given vector
       * @param otherVector - defines the second operand
       * @returns the resulting Vector3
       */
      add(otherVector) {
          return new Vector3(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
      }
      /**
       * Adds the current Vector3 to the given one and stores the result in the vector "result"
       * @param otherVector - defines the second operand
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      addToRef(otherVector, result) {
          return result.copyFromFloats(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
      }
      /**
       * Subtract the given vector from the current Vector3
       * @param otherVector - defines the second operand
       * @returns the current updated Vector3
       */
      subtractInPlace(otherVector) {
          this.x -= otherVector.x;
          this.y -= otherVector.y;
          this.z -= otherVector.z;
          return this;
      }
      /**
       * Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
       * @param otherVector - defines the second operand
       * @returns the resulting Vector3
       */
      subtract(otherVector) {
          return new Vector3(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z);
      }
      /**
       * Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
       * @param otherVector - defines the second operand
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      subtractToRef(otherVector, result) {
          return this.subtractFromFloatsToRef(otherVector.x, otherVector.y, otherVector.z, result);
      }
      /**
       * Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the resulting Vector3
       */
      subtractFromFloats(x, y, z) {
          return new Vector3(this.x - x, this.y - y, this.z - z);
      }
      /**
       * Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      subtractFromFloatsToRef(x, y, z, result) {
          return result.copyFromFloats(this.x - x, this.y - y, this.z - z);
      }
      /**
       * Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective
       * @param matrix - The transformation matrix
       */
      applyMatrix4(matrix) {
          this.applyMatrix4ToRef(matrix, this);
      }
      /**
       * Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective and set the given vector "result" with this result
       * @param matrix - The transformation matrix
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      applyMatrix4ToRef(matrix, result) {
          const { x, y, z } = this;
          const { m } = matrix;
          const w = 1 / (m[3] * x + m[7] * y + m[11] * z + m[15]);
          result.x = (m[0] * x + m[4] * y + m[8] * z + m[12]) * w;
          result.y = (m[1] * x + m[5] * y + m[9] * z + m[13]) * w;
          result.z = (m[2] * x + m[6] * y + m[10] * z + m[14]) * w;
          return result;
      }
      /**
       * Rotates the current Vector3 based on the given quaternion
       * @param q - defines the Quaternion
       * @returns the current Vector3
       */
      rotate(q) {
          return this.rotateToRef(q, this);
      }
      /**
       * Rotates current Vector3 based on the given quaternion, but applies the rotation to target Vector3.
       * @param q - defines the Quaternion
       * @param result - defines the target Vector3
       * @returns the current Vector3
       */
      rotateToRef(q, result) {
          const { x, y, z } = this;
          const { x: qx, y: qy, z: qz, w: qw } = q;
          // calculate quat * vector
          const ix = qw * x + qy * z - qz * y;
          const iy = qw * y + qz * x - qx * z;
          const iz = qw * z + qx * y - qy * x;
          const iw = -qx * x - qy * y - qz * z;
          // calculate result * inverse quat
          result.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          result.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          result.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
          return result;
      }
      /**
       * Gets a new Vector3 set with the current Vector3 negated coordinates
       * @returns a new Vector3
       */
      negate() {
          return new Vector3(-this.x, -this.y, -this.z);
      }
      /**
       * Multiplies the Vector3 coordinates by the float "scale"
       * @param scale - defines the multiplier factor
       * @returns the current updated Vector3
       */
      scaleInPlace(scale) {
          this.x *= scale;
          this.y *= scale;
          this.z *= scale;
          return this;
      }
      /**
       * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
       * @param scale - defines the multiplier factor
       * @returns a new Vector3
       */
      scale(scale) {
          return new Vector3(this.x * scale, this.y * scale, this.z * scale);
      }
      /**
       * Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates
       * @param scale - defines the multiplier factor
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      scaleToRef(scale, result) {
          return result.copyFromFloats(this.x * scale, this.y * scale, this.z * scale);
      }
      /**
       * Scale the current Vector3 values by a factor and add the result to a given Vector3
       * @param scale - defines the scale factor
       * @param result - defines the Vector3 object where to store the result
       * @returns the unmodified current Vector3
       */
      scaleAndAddToRef(scale, result) {
          return result.addInPlaceFromFloats(this.x * scale, this.y * scale, this.z * scale);
      }
      /**
       * Returns true if the current Vector3 and the given vector coordinates are strictly equal
       * @param otherVector - defines the second operand
       * @returns true if both vectors are equals
       */
      equals(otherVector) {
          return (otherVector &&
              this.x === otherVector.x &&
              this.y === otherVector.y &&
              this.z === otherVector.z);
      }
      /**
       * Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
       * @param otherVector - defines the second operand
       * @param epsilon - defines the minimal distance to define values as equals
       * @returns true if both vectors are distant less than epsilon
       */
      equalsWithEpsilon(otherVector, epsilon = types_1$6.Epsilon) {
          return (otherVector &&
              Scalar_1$4.Scalar.WithinEpsilon(this.x, otherVector.x, epsilon) &&
              Scalar_1$4.Scalar.WithinEpsilon(this.y, otherVector.y, epsilon) &&
              Scalar_1$4.Scalar.WithinEpsilon(this.z, otherVector.z, epsilon));
      }
      /**
       * Returns true if the current Vector3 coordinates equals the given floats
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns true if both vectors are equals
       */
      equalsToFloats(x, y, z) {
          return this.x === x && this.y === y && this.z === z;
      }
      /**
       * Multiplies the current Vector3 coordinates by the given ones
       * @param otherVector - defines the second operand
       * @returns the current updated Vector3
       */
      multiplyInPlace(otherVector) {
          this.x *= otherVector.x;
          this.y *= otherVector.y;
          this.z *= otherVector.z;
          return this;
      }
      /**
       * Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
       * @param otherVector - defines the second operand
       * @returns the new Vector3
       */
      multiply(otherVector) {
          return this.multiplyByFloats(otherVector.x, otherVector.y, otherVector.z);
      }
      /**
       * Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
       * @param otherVector - defines the second operand
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      multiplyToRef(otherVector, result) {
          return result.copyFromFloats(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z);
      }
      /**
       * Returns a new Vector3 set with the result of the mulliplication of the current Vector3 coordinates by the given floats
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the new Vector3
       */
      multiplyByFloats(x, y, z) {
          return new Vector3(this.x * x, this.y * y, this.z * z);
      }
      /**
       * Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
       * @param otherVector - defines the second operand
       * @returns the new Vector3
       */
      divide(otherVector) {
          return new Vector3(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z);
      }
      /**
       * Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
       * @param otherVector - defines the second operand
       * @param result - defines the Vector3 object where to store the result
       * @returns the current Vector3
       */
      divideToRef(otherVector, result) {
          return result.copyFromFloats(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z);
      }
      /**
       * Divides the current Vector3 coordinates by the given ones.
       * @param otherVector - defines the second operand
       * @returns the current updated Vector3
       */
      divideInPlace(otherVector) {
          return this.divideToRef(otherVector, this);
      }
      /**
       * Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
       * @param other - defines the second operand
       * @returns the current updated Vector3
       */
      minimizeInPlace(other) {
          return this.minimizeInPlaceFromFloats(other.x, other.y, other.z);
      }
      /**
       * Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
       * @param other - defines the second operand
       * @returns the current updated Vector3
       */
      maximizeInPlace(other) {
          return this.maximizeInPlaceFromFloats(other.x, other.y, other.z);
      }
      /**
       * Updates the current Vector3 with the minimal coordinate values between its and the given coordinates
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the current updated Vector3
       */
      minimizeInPlaceFromFloats(x, y, z) {
          if (x < this.x) {
              this.x = x;
          }
          if (y < this.y) {
              this.y = y;
          }
          if (z < this.z) {
              this.z = z;
          }
          return this;
      }
      /**
       * Updates the current Vector3 with the maximal coordinate values between its and the given coordinates.
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the current updated Vector3
       */
      maximizeInPlaceFromFloats(x, y, z) {
          if (x > this.x) {
              this.x = x;
          }
          if (y > this.y) {
              this.y = y;
          }
          if (z > this.z) {
              this.z = z;
          }
          return this;
      }
      /**
       * Gets a new Vector3 from current Vector3 floored values
       * @returns a new Vector3
       */
      floor() {
          return new Vector3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
      }
      /**
       * Gets a new Vector3 from current Vector3 floored values
       * @returns a new Vector3
       */
      fract() {
          return new Vector3(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z));
      }
      // Properties
      /**
       * Gets the length of the Vector3
       * @returns the length of the Vecto3
       */
      length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
      /**
       * Gets the squared length of the Vector3
       * @returns squared length of the Vector3
       */
      lengthSquared() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
      }
      /**
       * Normalize the current Vector3.
       * Please note that this is an in place operation.
       * @returns the current updated Vector3
       */
      normalize() {
          return this.normalizeFromLength(this.length());
      }
      /**
       * Normalize the current Vector3 with the given input length.
       * Please note that this is an in place operation.
       * @param len - the length of the vector
       * @returns the current updated Vector3
       */
      normalizeFromLength(len) {
          if (len === 0 || len === 1.0) {
              return this;
          }
          return this.scaleInPlace(1.0 / len);
      }
      /**
       * Normalize the current Vector3 to a new vector
       * @returns the new Vector3
       */
      normalizeToNew() {
          const normalized = new Vector3(0, 0, 0);
          this.normalizeToRef(normalized);
          return normalized;
      }
      /**
       * Normalize the current Vector3 to the reference
       * @param reference - define the Vector3 to update
       * @returns the updated Vector3
       */
      normalizeToRef(reference) {
          const len = this.length();
          if (len === 0 || len === 1.0) {
              return reference.copyFromFloats(this.x, this.y, this.z);
          }
          return this.scaleToRef(1.0 / len, reference);
      }
      /**
       * Creates a new Vector3 copied from the current Vector3
       * @returns the new Vector3
       */
      clone() {
          return new Vector3(this.x, this.y, this.z);
      }
      /**
       * Copies the given vector coordinates to the current Vector3 ones
       * @param source - defines the source Vector3
       * @returns the current updated Vector3
       */
      copyFrom(source) {
          return this.copyFromFloats(source.x, source.y, source.z);
      }
      /**
       * Copies the given floats to the current Vector3 coordinates
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the current updated Vector3
       */
      copyFromFloats(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
          return this;
      }
      /**
       * Copies the given floats to the current Vector3 coordinates
       * @param x - defines the x coordinate of the operand
       * @param y - defines the y coordinate of the operand
       * @param z - defines the z coordinate of the operand
       * @returns the current updated Vector3
       */
      set(x, y, z) {
          return this.copyFromFloats(x, y, z);
      }
      /**
       * Copies the given float to the current Vector3 coordinates
       * @param v - defines the x, y and z coordinates of the operand
       * @returns the current updated Vector3
       */
      setAll(v) {
          this.x = this.y = this.z = v;
          return this;
      }
  }
  Vector3$1.Vector3 = Vector3;

  Object.defineProperty(preallocatedVariables, "__esModule", { value: true });
  preallocatedVariables.MathTmp = void 0;
  const utils_1 = utils;
  const Vector3_1$4 = Vector3$1;
  const Quaternion_1 = Quaternion$1;
  const Matrix_1$1 = Matrix$1;
  // Temporary pre-allocated objects for engine internal use
  // usage in any internal function :
  // var tmp = Tmp.Vector3[0];   <= gets access to the first pre-created Vector3
  // There's a Tmp array per object type : int, float, Vector2, Vector3, Vector4, Quaternion, Matrix
  /**
   * @public
   * Same as Tmp but not exported to keep it only for math functions to avoid conflicts
   */
  preallocatedVariables.MathTmp = {
      Vector3: (0, utils_1.buildArray)(6, Vector3_1$4.Vector3.Zero),
      Matrix: (0, utils_1.buildArray)(2, Matrix_1$1.Matrix.Identity),
      Quaternion: (0, utils_1.buildArray)(3, Quaternion_1.Quaternion.Zero),
      staticUp: Vector3_1$4.Vector3.Up(),
      tmpMatrix: Matrix_1$1.Matrix.Zero()
  };

  var Angle$1 = {};

  Object.defineProperty(Angle$1, "__esModule", { value: true });
  Angle$1.Angle = void 0;
  /**
   * Defines angle representation
   * @public
   */
  class Angle {
      /**
       * Creates an Angle object of "radians" radians (float).
       */
      constructor(radians) {
          this._radians = radians;
          if (this._radians < 0.0) {
              this._radians += 2.0 * Math.PI;
          }
      }
      /**
       * Gets a new Angle object valued with the angle value in radians between the two given vectors
       * @param a - defines first vector
       * @param b - defines second vector
       * @returns a new Angle
       */
      static BetweenTwoPoints(a, b) {
          const delta = b.subtract(a);
          const theta = Math.atan2(delta.y, delta.x);
          return new Angle(theta);
      }
      /**
       * Gets a new Angle object from the given float in radians
       * @param radians - defines the angle value in radians
       * @returns a new Angle
       */
      static FromRadians(radians) {
          return new Angle(radians);
      }
      /**
       * Gets a new Angle object from the given float in degrees
       * @param degrees - defines the angle value in degrees
       * @returns a new Angle
       */
      static FromDegrees(degrees) {
          return new Angle((degrees * Math.PI) / 180.0);
      }
      /**
       * Get value in degrees
       * @returns the Angle value in degrees (float)
       */
      degrees() {
          return (this._radians * 180.0) / Math.PI;
      }
      /**
       * Get value in radians
       * @returns the Angle value in radians (float)
       */
      radians() {
          return this._radians;
      }
  }
  Angle$1.Angle = Angle;

  var Arc2$1 = {};

  var Vector2$1 = {};

  Object.defineProperty(Vector2$1, "__esModule", { value: true });
  Vector2$1.Vector2 = void 0;
  const types_1$5 = types;
  const Scalar_1$3 = Scalar$1;
  /**
   * Class representing a vector containing 2 coordinates
   * @public
   */
  class Vector2 {
      /**
       * Creates a new Vector2 from the given x and y coordinates
       * @param x - defines the first coordinate
       * @param y - defines the second coordinate
       */
      constructor(
      /** defines the first coordinate */
      x = 0, 
      /** defines the second coordinate */
      y = 0) {
          this.x = x;
          this.y = y;
      }
      /**
       * Gets a new Vector2(0, 0)
       * @returns a new Vector2
       */
      static Zero() {
          return new Vector2(0, 0);
      }
      /**
       * Gets a new Vector2(1, 1)
       * @returns a new Vector2
       */
      static One() {
          return new Vector2(1, 1);
      }
      /**
       * Returns a new Vector2 as the result of the addition of the two given vectors.
       * @param vector1 - the first vector
       * @param vector2 - the second vector
       * @returns the resulting vector
       */
      static Add(vector1, vector2) {
          return new Vector2(vector1.x, vector1.y).addInPlace(vector2);
      }
      /**
       * Gets a new Vector2 set from the given index element of the given array
       * @param array - defines the data source
       * @param offset - defines the offset in the data source
       * @returns a new Vector2
       */
      static FromArray(array, offset = 0) {
          return new Vector2(array[offset], array[offset + 1]);
      }
      /**
       * Sets "result" from the given index element of the given array
       * @param array - defines the data source
       * @param offset - defines the offset in the data source
       * @param result - defines the target vector
       */
      static FromArrayToRef(array, offset, result) {
          result.x = array[offset];
          result.y = array[offset + 1];
      }
      /**
       * Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
       * @param value1 - defines 1st point of control
       * @param value2 - defines 2nd point of control
       * @param value3 - defines 3rd point of control
       * @param value4 - defines 4th point of control
       * @param amount - defines the interpolation factor
       * @returns a new Vector2
       */
      static CatmullRom(value1, value2, value3, value4, amount) {
          const squared = amount * amount;
          const cubed = amount * squared;
          const x = 0.5 *
              (2.0 * value2.x +
                  (-value1.x + value3.x) * amount +
                  (2.0 * value1.x - 5.0 * value2.x + 4.0 * value3.x - value4.x) *
                      squared +
                  (-value1.x + 3.0 * value2.x - 3.0 * value3.x + value4.x) * cubed);
          const y = 0.5 *
              (2.0 * value2.y +
                  (-value1.y + value3.y) * amount +
                  (2.0 * value1.y - 5.0 * value2.y + 4.0 * value3.y - value4.y) *
                      squared +
                  (-value1.y + 3.0 * value2.y - 3.0 * value3.y + value4.y) * cubed);
          return new Vector2(x, y);
      }
      /**
       * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
       * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
       * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
       * @param value - defines the value to clamp
       * @param min - defines the lower limit
       * @param max - defines the upper limit
       * @returns a new Vector2
       */
      static Clamp(value, min, max) {
          let x = value.x;
          x = x > max.x ? max.x : x;
          x = x < min.x ? min.x : x;
          let y = value.y;
          y = y > max.y ? max.y : y;
          y = y < min.y ? min.y : y;
          return new Vector2(x, y);
      }
      /**
       * Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2"
       * @param value1 - defines the 1st control point
       * @param tangent1 - defines the outgoing tangent
       * @param value2 - defines the 2nd control point
       * @param tangent2 - defines the incoming tangent
       * @param amount - defines the interpolation factor
       * @returns a new Vector2
       */
      static Hermite(value1, tangent1, value2, tangent2, amount) {
          const squared = amount * amount;
          const cubed = amount * squared;
          const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
          const part2 = -2.0 * cubed + 3.0 * squared;
          const part3 = cubed - 2.0 * squared + amount;
          const part4 = cubed - squared;
          const x = value1.x * part1 +
              value2.x * part2 +
              tangent1.x * part3 +
              tangent2.x * part4;
          const y = value1.y * part1 +
              value2.y * part2 +
              tangent1.y * part3 +
              tangent2.y * part4;
          return new Vector2(x, y);
      }
      /**
       * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
       * @param start - defines the start vector
       * @param end - defines the end vector
       * @param amount - defines the interpolation factor
       * @returns a new Vector2
       */
      static Lerp(start, end, amount) {
          const x = start.x + (end.x - start.x) * amount;
          const y = start.y + (end.y - start.y) * amount;
          return new Vector2(x, y);
      }
      /**
       * Gets the dot product of the vector "left" and the vector "right"
       * @param left - defines first vector
       * @param right - defines second vector
       * @returns the dot product (float)
       */
      static Dot(left, right) {
          return left.x * right.x + left.y * right.y;
      }
      /**
       * Returns a new Vector2 equal to the normalized given vector
       * @param vector - defines the vector to normalize
       * @returns a new Vector2
       */
      static Normalize(vector) {
          const newVector = new Vector2(vector.x, vector.y);
          newVector.normalize();
          return newVector;
      }
      /**
       * Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
       * @param left - defines 1st vector
       * @param right - defines 2nd vector
       * @returns a new Vector2
       */
      static Minimize(left, right) {
          const x = left.x < right.x ? left.x : right.x;
          const y = left.y < right.y ? left.y : right.y;
          return new Vector2(x, y);
      }
      /**
       * Gets a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors
       * @param left - defines 1st vector
       * @param right - defines 2nd vector
       * @returns a new Vector2
       */
      static Maximize(left, right) {
          const x = left.x > right.x ? left.x : right.x;
          const y = left.y > right.y ? left.y : right.y;
          return new Vector2(x, y);
      }
      /**
       * Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
       * @param vector - defines the vector to transform
       * @param transformation - defines the matrix to apply
       * @returns a new Vector2
       */
      static Transform(vector, transformation) {
          const r = Vector2.Zero();
          Vector2.TransformToRef(vector, transformation, r);
          return r;
      }
      /**
       * Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
       * @param vector - defines the vector to transform
       * @param transformation - defines the matrix to apply
       * @param result - defines the target vector
       */
      static TransformToRef(vector, transformation, result) {
          const m = transformation.m;
          const x = vector.x * m[0] + vector.y * m[4] + m[12];
          const y = vector.x * m[1] + vector.y * m[5] + m[13];
          result.x = x;
          result.y = y;
      }
      /**
       * Determines if a given vector is included in a triangle
       * @param p - defines the vector to test
       * @param p0 - defines 1st triangle point
       * @param p1 - defines 2nd triangle point
       * @param p2 - defines 3rd triangle point
       * @returns true if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"
       */
      static PointInTriangle(p, p0, p1, p2) {
          const a = (1 / 2) *
              (-p1.y * p2.x +
                  p0.y * (-p1.x + p2.x) +
                  p0.x * (p1.y - p2.y) +
                  p1.x * p2.y);
          const sign = a < 0 ? -1 : 1;
          const s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) *
              sign;
          const t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) *
              sign;
          return s > 0 && t > 0 && s + t < 2 * a * sign;
      }
      /**
       * Gets the distance between the vectors "value1" and "value2"
       * @param value1 - defines first vector
       * @param value2 - defines second vector
       * @returns the distance between vectors
       */
      static Distance(value1, value2) {
          return Math.sqrt(Vector2.DistanceSquared(value1, value2));
      }
      /**
       * Returns the squared distance between the vectors "value1" and "value2"
       * @param value1 - defines first vector
       * @param value2 - defines second vector
       * @returns the squared distance between vectors
       */
      static DistanceSquared(value1, value2) {
          const x = value1.x - value2.x;
          const y = value1.y - value2.y;
          return x * x + y * y;
      }
      /**
       * Gets a new Vector2 located at the center of the vectors "value1" and "value2"
       * @param value1 - defines first vector
       * @param value2 - defines second vector
       * @returns a new Vector2
       */
      static Center(value1, value2) {
          const center = Vector2.Add(value1, value2);
          center.scaleInPlace(0.5);
          return center;
      }
      /**
       * Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
       * @param p - defines the middle point
       * @param segA - defines one point of the segment
       * @param segB - defines the other point of the segment
       * @returns the shortest distance
       */
      static DistanceOfPointFromSegment(p, segA, segB) {
          const l2 = Vector2.DistanceSquared(segA, segB);
          if (l2 === 0.0) {
              return Vector2.Distance(p, segA);
          }
          const v = segB.subtract(segA);
          const t = Math.max(0, Math.min(1, Vector2.Dot(p.subtract(segA), v) / l2));
          const proj = segA.add(v.multiplyByFloats(t, t));
          return Vector2.Distance(p, proj);
      }
      /**
       * Gets a string with the Vector2 coordinates
       * @returns a string with the Vector2 coordinates
       */
      toString() {
          return '{X: ' + this.x + ' Y:' + this.y + '}';
      }
      /**
       * Gets class name
       * @returns the string "Vector2"
       */
      getClassName() {
          return 'Vector2';
      }
      /**
       * Gets current vector hash code
       * @returns the Vector2 hash code as a number
       */
      getHashCode() {
          let hash = this.x || 0;
          hash = (hash * 397) ^ (this.y || 0);
          return hash;
      }
      // Operators
      /**
       * Sets the Vector2 coordinates in the given array or FloatArray from the given index.
       * @param array - defines the source array
       * @param index - defines the offset in source array
       * @returns the current Vector2
       */
      toArray(array, index = 0) {
          array[index] = this.x;
          array[index + 1] = this.y;
          return this;
      }
      /**
       * Copy the current vector to an array
       * @returns a new array with 2 elements: the Vector2 coordinates.
       */
      asArray() {
          const result = new Array();
          this.toArray(result, 0);
          return result;
      }
      /**
       * Sets the Vector2 coordinates with the given Vector2 coordinates
       * @param source - defines the source Vector2
       * @returns the current updated Vector2
       */
      copyFrom(source) {
          this.x = source.x;
          this.y = source.y;
          return this;
      }
      /**
       * Sets the Vector2 coordinates with the given floats
       * @param x - defines the first coordinate
       * @param y - defines the second coordinate
       * @returns the current updated Vector2
       */
      copyFromFloats(x, y) {
          this.x = x;
          this.y = y;
          return this;
      }
      /**
       * Sets the Vector2 coordinates with the given floats
       * @param x - defines the first coordinate
       * @param y - defines the second coordinate
       * @returns the current updated Vector2
       */
      set(x, y) {
          return this.copyFromFloats(x, y);
      }
      /**
       * Add another vector with the current one
       * @param otherVector - defines the other vector
       * @returns a new Vector2 set with the addition of the current Vector2 and the given one coordinates
       */
      add(otherVector) {
          return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
      }
      /**
       * Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
       * @param otherVector - defines the other vector
       * @param result - defines the target vector
       * @returns the unmodified current Vector2
       */
      addToRef(otherVector, result) {
          result.x = this.x + otherVector.x;
          result.y = this.y + otherVector.y;
          return this;
      }
      /**
       * Set the Vector2 coordinates by adding the given Vector2 coordinates
       * @param otherVector - defines the other vector
       * @returns the current updated Vector2
       */
      addInPlace(otherVector) {
          this.x += otherVector.x;
          this.y += otherVector.y;
          return this;
      }
      /**
       * Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
       * @param otherVector - defines the other vector
       * @returns a new Vector2
       */
      addVector3(otherVector) {
          return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
      }
      /**
       * Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
       * @param otherVector - defines the other vector
       * @returns a new Vector2
       */
      subtract(otherVector) {
          return new Vector2(this.x - otherVector.x, this.y - otherVector.y);
      }
      /**
       * Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
       * @param otherVector - defines the other vector
       * @param result - defines the target vector
       * @returns the unmodified current Vector2
       */
      subtractToRef(otherVector, result) {
          result.x = this.x - otherVector.x;
          result.y = this.y - otherVector.y;
          return this;
      }
      /**
       * Sets the current Vector2 coordinates by subtracting from it the given one coordinates
       * @param otherVector - defines the other vector
       * @returns the current updated Vector2
       */
      subtractInPlace(otherVector) {
          this.x -= otherVector.x;
          this.y -= otherVector.y;
          return this;
      }
      /**
       * Multiplies in place the current Vector2 coordinates by the given ones
       * @param otherVector - defines the other vector
       * @returns the current updated Vector2
       */
      multiplyInPlace(otherVector) {
          this.x *= otherVector.x;
          this.y *= otherVector.y;
          return this;
      }
      /**
       * Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
       * @param otherVector - defines the other vector
       * @returns a new Vector2
       */
      multiply(otherVector) {
          return new Vector2(this.x * otherVector.x, this.y * otherVector.y);
      }
      /**
       * Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
       * @param otherVector - defines the other vector
       * @param result - defines the target vector
       * @returns the unmodified current Vector2
       */
      multiplyToRef(otherVector, result) {
          result.x = this.x * otherVector.x;
          result.y = this.y * otherVector.y;
          return this;
      }
      /**
       * Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
       * @param x - defines the first coordinate
       * @param y - defines the second coordinate
       * @returns a new Vector2
       */
      multiplyByFloats(x, y) {
          return new Vector2(this.x * x, this.y * y);
      }
      /**
       * Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
       * @param otherVector - defines the other vector
       * @returns a new Vector2
       */
      divide(otherVector) {
          return new Vector2(this.x / otherVector.x, this.y / otherVector.y);
      }
      /**
       * Sets the "result" coordinates with the Vector2 divided by the given one coordinates
       * @param otherVector - defines the other vector
       * @param result - defines the target vector
       * @returns the unmodified current Vector2
       */
      divideToRef(otherVector, result) {
          result.x = this.x / otherVector.x;
          result.y = this.y / otherVector.y;
          return this;
      }
      /**
       * Divides the current Vector2 coordinates by the given ones
       * @param otherVector - defines the other vector
       * @returns the current updated Vector2
       */
      divideInPlace(otherVector) {
          return this.divideToRef(otherVector, this);
      }
      /**
       * Gets a new Vector2 with current Vector2 negated coordinates
       * @returns a new Vector2
       */
      negate() {
          return new Vector2(-this.x, -this.y);
      }
      /**
       * Multiply the Vector2 coordinates by scale
       * @param scale - defines the scaling factor
       * @returns the current updated Vector2
       */
      scaleInPlace(scale) {
          this.x *= scale;
          this.y *= scale;
          return this;
      }
      /**
       * Returns a new Vector2 scaled by "scale" from the current Vector2
       * @param scale - defines the scaling factor
       * @returns a new Vector2
       */
      scale(scale) {
          const result = new Vector2(0, 0);
          this.scaleToRef(scale, result);
          return result;
      }
      /**
       * Scale the current Vector2 values by a factor to a given Vector2
       * @param scale - defines the scale factor
       * @param result - defines the Vector2 object where to store the result
       * @returns the unmodified current Vector2
       */
      scaleToRef(scale, result) {
          result.x = this.x * scale;
          result.y = this.y * scale;
          return this;
      }
      /**
       * Scale the current Vector2 values by a factor and add the result to a given Vector2
       * @param scale - defines the scale factor
       * @param result - defines the Vector2 object where to store the result
       * @returns the unmodified current Vector2
       */
      scaleAndAddToRef(scale, result) {
          result.x += this.x * scale;
          result.y += this.y * scale;
          return this;
      }
      /**
       * Gets a boolean if two vectors are equals
       * @param otherVector - defines the other vector
       * @returns true if the given vector coordinates strictly equal the current Vector2 ones
       */
      equals(otherVector) {
          return otherVector && this.x === otherVector.x && this.y === otherVector.y;
      }
      /**
       * Gets a boolean if two vectors are equals (using an epsilon value)
       * @param otherVector - defines the other vector
       * @param epsilon - defines the minimal distance to consider equality
       * @returns true if the given vector coordinates are close to the current ones by a distance of epsilon.
       */
      equalsWithEpsilon(otherVector, epsilon = types_1$5.Epsilon) {
          return (otherVector &&
              Scalar_1$3.Scalar.WithinEpsilon(this.x, otherVector.x, epsilon) &&
              Scalar_1$3.Scalar.WithinEpsilon(this.y, otherVector.y, epsilon));
      }
      /**
       * Gets a new Vector2 from current Vector2 floored values
       * @returns a new Vector2
       */
      floor() {
          return new Vector2(Math.floor(this.x), Math.floor(this.y));
      }
      /**
       * Gets a new Vector2 from current Vector2 floored values
       * @returns a new Vector2
       */
      fract() {
          return new Vector2(this.x - Math.floor(this.x), this.y - Math.floor(this.y));
      }
      // Properties
      /**
       * Gets the length of the vector
       * @returns the vector length (float)
       */
      length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      /**
       * Gets the vector squared length
       * @returns the vector squared length (float)
       */
      lengthSquared() {
          return this.x * this.x + this.y * this.y;
      }
      // Methods
      /**
       * Normalize the vector
       * @returns the current updated Vector2
       */
      normalize() {
          const len = this.length();
          if (len === 0) {
              return this;
          }
          const num = 1.0 / len;
          this.x *= num;
          this.y *= num;
          return this;
      }
      /**
       * Gets a new Vector2 copied from the Vector2
       * @returns a new Vector2
       */
      clone() {
          return new Vector2(this.x, this.y);
      }
  }
  Vector2$1.Vector2 = Vector2;

  Object.defineProperty(Arc2$1, "__esModule", { value: true });
  Arc2$1.Arc2 = void 0;
  const Angle_1 = Angle$1;
  const Vector2_1$1 = Vector2$1;
  const types_1$4 = types;
  /**
   * This represents an arc in a 2d space.
   * @public
   */
  class Arc2 {
      /**
       * Creates an Arc object from the three given points : start, middle and end.
       * @param startPoint - Defines the start point of the arc
       * @param midPoint - Defines the midlle point of the arc
       * @param endPoint - Defines the end point of the arc
       */
      constructor(
      /** Defines the start point of the arc */
      startPoint, 
      /** Defines the mid point of the arc */
      midPoint, 
      /** Defines the end point of the arc */
      endPoint) {
          this.startPoint = startPoint;
          this.midPoint = midPoint;
          this.endPoint = endPoint;
          const temp = Math.pow(midPoint.x, 2) + Math.pow(midPoint.y, 2);
          const startToMid = (Math.pow(startPoint.x, 2) + Math.pow(startPoint.y, 2) - temp) / 2;
          const midToEnd = (temp - Math.pow(endPoint.x, 2) - Math.pow(endPoint.y, 2)) / 2;
          const det = (startPoint.x - midPoint.x) * (midPoint.y - endPoint.y) -
              (midPoint.x - endPoint.x) * (startPoint.y - midPoint.y);
          this.centerPoint = new Vector2_1$1.Vector2((startToMid * (midPoint.y - endPoint.y) -
              midToEnd * (startPoint.y - midPoint.y)) /
              det, ((startPoint.x - midPoint.x) * midToEnd -
              (midPoint.x - endPoint.x) * startToMid) /
              det);
          this.radius = this.centerPoint.subtract(this.startPoint).length();
          this.startAngle = Angle_1.Angle.BetweenTwoPoints(this.centerPoint, this.startPoint);
          const a1 = this.startAngle.degrees();
          let a2 = Angle_1.Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees();
          let a3 = Angle_1.Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
          // angles correction
          if (a2 - a1 > +180.0) {
              a2 -= 360.0;
          }
          if (a2 - a1 < -180.0) {
              a2 += 360.0;
          }
          if (a3 - a2 > +180.0) {
              a3 -= 360.0;
          }
          if (a3 - a2 < -180.0) {
              a3 += 360.0;
          }
          this.orientation = a2 - a1 < 0 ? types_1$4.Orientation.CW : types_1$4.Orientation.CCW;
          this.angle = Angle_1.Angle.FromDegrees(this.orientation === types_1$4.Orientation.CW ? a1 - a3 : a3 - a1);
      }
  }
  Arc2$1.Arc2 = Arc2;

  var Axis$1 = {};

  Object.defineProperty(Axis$1, "__esModule", { value: true });
  Axis$1.Axis = void 0;
  const Vector3_1$3 = Vector3$1;
  /**
   * Defines the 3 main axes
   * @public
   */
  class Axis {
  }
  Axis$1.Axis = Axis;
  /** X axis */
  Axis.X = new Vector3_1$3.Vector3(1.0, 0.0, 0.0);
  /** Y axis */
  Axis.Y = new Vector3_1$3.Vector3(0.0, 1.0, 0.0);
  /** Z axis */
  Axis.Z = new Vector3_1$3.Vector3(0.0, 0.0, 1.0);

  var BezierCurve$1 = {};

  Object.defineProperty(BezierCurve$1, "__esModule", { value: true });
  BezierCurve$1.BezierCurve = void 0;
  /**
   * Class used to represent a Bezier curve
   * @public
   */
  class BezierCurve {
      /**
       * Returns the cubic Bezier interpolated value (float) at "t" (float) from the given x1, y1, x2, y2 floats
       * @param t - defines the time
       * @param x1 - defines the left coordinate on X axis
       * @param y1 - defines the left coordinate on Y axis
       * @param x2 - defines the right coordinate on X axis
       * @param y2 - defines the right coordinate on Y axis
       * @returns the interpolated value
       */
      static Interpolate(t, x1, y1, x2, y2) {
          // Extract X (which is equal to time here)
          const f0 = 1 - 3 * x2 + 3 * x1;
          const f1 = 3 * x2 - 6 * x1;
          const f2 = 3 * x1;
          let refinedT = t;
          for (let i = 0; i < 5; i++) {
              const refinedT2 = refinedT * refinedT;
              const refinedT3 = refinedT2 * refinedT;
              const x = f0 * refinedT3 + f1 * refinedT2 + f2 * refinedT;
              const slope = 1.0 / (3.0 * f0 * refinedT2 + 2.0 * f1 * refinedT + f2);
              refinedT -= (x - t) * slope;
              refinedT = Math.min(1, Math.max(0, refinedT));
          }
          // Resolve cubic bezier for the given x
          return (3 * Math.pow(1 - refinedT, 2) * refinedT * y1 +
              3 * (1 - refinedT) * Math.pow(refinedT, 2) * y2 +
              Math.pow(refinedT, 3));
      }
  }
  BezierCurve$1.BezierCurve = BezierCurve;

  var Color3$1 = {};

  var Color4$1 = {};

  Object.defineProperty(Color4$1, "__esModule", { value: true });
  Color4$1.Color4 = void 0;
  const Scalar_1$2 = Scalar$1;
  const types_1$3 = types;
  /**
   * Class used to hold a RBGA color
   * @public
   */
  class Color4 {
      /**
       * Creates a new Color4 object from red, green, blue values, all between 0 and 1
       * @param r - defines the red component (between 0 and 1, default is 0)
       * @param g - defines the green component (between 0 and 1, default is 0)
       * @param b - defines the blue component (between 0 and 1, default is 0)
       * @param a - defines the alpha component (between 0 and 1, default is 1)
       */
      constructor(
      /**
       * Defines the red component (between 0 and 1, default is 0)
       */
      r = 0, 
      /**
       * Defines the green component (between 0 and 1, default is 0)
       */
      g = 0, 
      /**
       * Defines the blue component (between 0 and 1, default is 0)
       */
      b = 0, 
      /**
       * Defines the alpha component (between 0 and 1, default is 1)
       */
      a = 1) {
          this.r = r;
          this.g = g;
          this.b = b;
          this.a = a;
      }
      // Statics
      /**
       * Creates a new Color4 from the string containing valid hexadecimal values
       * @param hex - defines a string containing valid hexadecimal values
       * @returns a new Color4 object
       */
      static FromHexString(hex) {
          if (hex.substring(0, 1) !== '#' || hex.length !== 9) {
              return new Color4(0.0, 0.0, 0.0, 0.0);
          }
          const r = parseInt(hex.substring(1, 3), 16);
          const g = parseInt(hex.substring(3, 5), 16);
          const b = parseInt(hex.substring(5, 7), 16);
          const a = parseInt(hex.substring(7, 9), 16);
          return Color4.FromInts(r, g, b, a);
      }
      /**
       * Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
       * @param left - defines the start value
       * @param right - defines the end value
       * @param amount - defines the gradient factor
       * @returns a new Color4 object
       */
      static Lerp(left, right, amount) {
          const result = new Color4(0.0, 0.0, 0.0, 0.0);
          Color4.LerpToRef(left, right, amount, result);
          return result;
      }
      /**
       * Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
       * @param left - defines the start value
       * @param right - defines the end value
       * @param amount - defines the gradient factor
       * @param result - defines the Color4 object where to store data
       */
      static LerpToRef(left, right, amount, result) {
          result.r = left.r + (right.r - left.r) * amount;
          result.g = left.g + (right.g - left.g) * amount;
          result.b = left.b + (right.b - left.b) * amount;
          result.a = left.a + (right.a - left.a) * amount;
      }
      /**
       * Returns a Color4 value containing a red color
       * @returns a new Color3 object
       */
      static Red() {
          return new Color4(1.0, 0, 0, 1.0);
      }
      /**
       * Returns a Color4 value containing a green color
       * @returns a new Color4 object
       */
      static Green() {
          return new Color4(0, 1.0, 0, 1.0);
      }
      /**
       * Returns a Color4 value containing a blue color
       * @returns a new Color4 object
       */
      static Blue() {
          return new Color4(0, 0, 1.0, 1.0);
      }
      /**
       * Returns a Color4 value containing a black color
       * @returns a new Color4 object
       */
      static Black() {
          return new Color4(0, 0, 0, 1);
      }
      /**
       * Returns a Color4 value containing a white color
       * @returns a new Color4 object
       */
      static White() {
          return new Color4(1, 1, 1, 1);
      }
      /**
       * Returns a Color4 value containing a purple color
       * @returns a new Color4 object
       */
      static Purple() {
          return new Color4(0.5, 0, 0.5, 1);
      }
      /**
       * Returns a Color4 value containing a magenta color
       * @returns a new Color4 object
       */
      static Magenta() {
          return new Color4(1, 0, 1, 1);
      }
      /**
       * Returns a Color4 value containing a yellow color
       * @returns a new Color4 object
       */
      static Yellow() {
          return new Color4(1, 1, 0, 1);
      }
      /**
       * Returns a Color4 value containing a gray color
       * @returns a new Color4 object
       */
      static Gray() {
          return new Color4(0.5, 0.5, 0.5, 1.0);
      }
      /**
       * Returns a Color4 value containing a teal color
       * @returns a new Color4 object
       */
      static Teal() {
          return new Color4(0, 1.0, 1.0, 1.0);
      }
      /**
       * Returns a Color4 value containing a transparent color
       * @returns a new Color4 object
       */
      static Clear() {
          return new Color4(0, 0, 0, 0);
      }
      /**
       * Creates a new Color4 from a Color3 and an alpha value
       * @param color3 - defines the source Color3 to read from
       * @param alpha - defines the alpha component (1.0 by default)
       * @returns a new Color4 object
       */
      static FromColor3(color3, alpha = 1.0) {
          return new Color4(color3.r, color3.g, color3.b, alpha);
      }
      /**
       * Creates a new Color4 from the starting index element of the given array
       * @param array - defines the source array to read from
       * @param offset - defines the offset in the source array
       * @returns a new Color4 object
       */
      static FromArray(array, offset = 0) {
          return new Color4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
      }
      /**
       * Creates a new Color3 from integer values (less than 256)
       * @param r - defines the red component to read from (value between 0 and 255)
       * @param g - defines the green component to read from (value between 0 and 255)
       * @param b - defines the blue component to read from (value between 0 and 255)
       * @param a - defines the alpha component to read from (value between 0 and 255)
       * @returns a new Color3 object
       */
      static FromInts(r, g, b, a) {
          return new Color4(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
      }
      /**
       * Check the content of a given array and convert it to an array containing RGBA data
       * If the original array was already containing count * 4 values then it is returned directly
       * @param colors - defines the array to check
       * @param count - defines the number of RGBA data to expect
       * @returns an array containing count * 4 values (RGBA)
       */
      static CheckColors4(colors, count) {
          // Check if color3 was used
          if (colors.length === count * 3) {
              const colors4 = [];
              for (let index = 0; index < colors.length; index += 3) {
                  const newIndex = (index / 3) * 4;
                  colors4[newIndex] = colors[index];
                  colors4[newIndex + 1] = colors[index + 1];
                  colors4[newIndex + 2] = colors[index + 2];
                  colors4[newIndex + 3] = 1.0;
              }
              return colors4;
          }
          return colors;
      }
      // Operators
      /**
       * Adds in place the given Color4 values to the current Color4 object
       * @param right - defines the second operand
       * @returns the current updated Color4 object
       */
      addInPlace(right) {
          this.r += right.r;
          this.g += right.g;
          this.b += right.b;
          this.a += right.a;
          return this;
      }
      /**
       * Creates a new array populated with 4 numeric elements : red, green, blue, alpha values
       * @returns the new array
       */
      asArray() {
          const result = new Array();
          this.toArray(result, 0);
          return result;
      }
      /**
       * Stores from the starting index in the given array the Color4 successive values
       * @param array - defines the array where to store the r,g,b components
       * @param index - defines an optional index in the target array to define where to start storing values
       * @returns the current Color4 object
       */
      toArray(array, index = 0) {
          array[index] = this.r;
          array[index + 1] = this.g;
          array[index + 2] = this.b;
          array[index + 3] = this.a;
          return this;
      }
      /**
       * Creates a new Color4 set with the added values of the current Color4 and of the given one
       * @param right - defines the second operand
       * @returns a new Color4 object
       */
      add(right) {
          return new Color4(this.r + right.r, this.g + right.g, this.b + right.b, this.a + right.a);
      }
      /**
       * Creates a new Color4 set with the subtracted values of the given one from the current Color4
       * @param right - defines the second operand
       * @returns a new Color4 object
       */
      subtract(right) {
          return new Color4(this.r - right.r, this.g - right.g, this.b - right.b, this.a - right.a);
      }
      /**
       * Subtracts the given ones from the current Color4 values and stores the results in "result"
       * @param right - defines the second operand
       * @param result - defines the Color4 object where to store the result
       * @returns the current Color4 object
       */
      subtractToRef(right, result) {
          result.r = this.r - right.r;
          result.g = this.g - right.g;
          result.b = this.b - right.b;
          result.a = this.a - right.a;
          return this;
      }
      /**
       * Creates a new Color4 with the current Color4 values multiplied by scale
       * @param scale - defines the scaling factor to apply
       * @returns a new Color4 object
       */
      scale(scale) {
          return new Color4(this.r * scale, this.g * scale, this.b * scale, this.a * scale);
      }
      /**
       * Multiplies the current Color4 values by scale and stores the result in "result"
       * @param scale - defines the scaling factor to apply
       * @param result - defines the Color4 object where to store the result
       * @returns the current unmodified Color4
       */
      scaleToRef(scale, result) {
          result.r = this.r * scale;
          result.g = this.g * scale;
          result.b = this.b * scale;
          result.a = this.a * scale;
          return this;
      }
      /**
       * Scale the current Color4 values by a factor and add the result to a given Color4
       * @param scale - defines the scale factor
       * @param result - defines the Color4 object where to store the result
       * @returns the unmodified current Color4
       */
      scaleAndAddToRef(scale, result) {
          result.r += this.r * scale;
          result.g += this.g * scale;
          result.b += this.b * scale;
          result.a += this.a * scale;
          return this;
      }
      /**
       * Clamps the rgb values by the min and max values and stores the result into "result"
       * @param min - defines minimum clamping value (default is 0)
       * @param max - defines maximum clamping value (default is 1)
       * @param result - defines color to store the result into.
       * @returns the cuurent Color4
       */
      clampToRef(min = 0, max = 1, result) {
          result.r = Scalar_1$2.Scalar.Clamp(this.r, min, max);
          result.g = Scalar_1$2.Scalar.Clamp(this.g, min, max);
          result.b = Scalar_1$2.Scalar.Clamp(this.b, min, max);
          result.a = Scalar_1$2.Scalar.Clamp(this.a, min, max);
          return this;
      }
      /**
       * Multipy an Color4 value by another and return a new Color4 object
       * @param color - defines the Color4 value to multiply by
       * @returns a new Color4 object
       */
      multiply(color) {
          return new Color4(this.r * color.r, this.g * color.g, this.b * color.b, this.a * color.a);
      }
      /**
       * Multipy a Color4 value by another and push the result in a reference value
       * @param color - defines the Color4 value to multiply by
       * @param result - defines the Color4 to fill the result in
       * @returns the result Color4
       */
      multiplyToRef(color, result) {
          result.r = this.r * color.r;
          result.g = this.g * color.g;
          result.b = this.b * color.b;
          result.a = this.a * color.a;
          return result;
      }
      /**
       * Creates a string with the Color4 current values
       * @returns the string representation of the Color4 object
       */
      toString() {
          return ('{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + ' A:' + this.a + '}');
      }
      /**
       * Returns the string "Color4"
       * @returns "Color4"
       */
      getClassName() {
          return 'Color4';
      }
      /**
       * Compute the Color4 hash code
       * @returns an unique number that can be used to hash Color4 objects
       */
      getHashCode() {
          let hash = this.r || 0;
          hash = (hash * 397) ^ (this.g || 0);
          hash = (hash * 397) ^ (this.b || 0);
          hash = (hash * 397) ^ (this.a || 0);
          return hash;
      }
      /**
       * Creates a new Color4 copied from the current one
       * @returns a new Color4 object
       */
      clone() {
          return new Color4(this.r, this.g, this.b, this.a);
      }
      /**
       * Copies the given Color4 values into the current one
       * @param source - defines the source Color4 object
       * @returns the current updated Color4 object
       */
      copyFrom(source) {
          this.r = source.r;
          this.g = source.g;
          this.b = source.b;
          this.a = source.a;
          return this;
      }
      /**
       * Copies the given float values into the current one
       * @param r - defines the red component to read from
       * @param g - defines the green component to read from
       * @param b - defines the blue component to read from
       * @param a - defines the alpha component to read from
       * @returns the current updated Color4 object
       */
      copyFromFloats(r, g, b, a) {
          this.r = r;
          this.g = g;
          this.b = b;
          this.a = a;
          return this;
      }
      /**
       * Copies the given float values into the current one
       * @param r - defines the red component to read from
       * @param g - defines the green component to read from
       * @param b - defines the blue component to read from
       * @param a - defines the alpha component to read from
       * @returns the current updated Color4 object
       */
      set(r, g, b, a) {
          return this.copyFromFloats(r, g, b, a);
      }
      /**
       * Compute the Color4 hexadecimal code as a string
       * @returns a string containing the hexadecimal representation of the Color4 object
       */
      toHexString() {
          const intR = (this.r * 255) | 0;
          const intG = (this.g * 255) | 0;
          const intB = (this.b * 255) | 0;
          const intA = (this.a * 255) | 0;
          return ('#' +
              Scalar_1$2.Scalar.ToHex(intR) +
              Scalar_1$2.Scalar.ToHex(intG) +
              Scalar_1$2.Scalar.ToHex(intB) +
              Scalar_1$2.Scalar.ToHex(intA));
      }
      /**
       * Computes a new Color4 converted from the current one to linear space
       * @returns a new Color4 object
       */
      toLinearSpace() {
          const convertedColor = new Color4();
          this.toLinearSpaceToRef(convertedColor);
          return convertedColor;
      }
      /**
       * Converts the Color4 values to linear space and stores the result in "convertedColor"
       * @param convertedColor - defines the Color4 object where to store the linear space version
       * @returns the unmodified Color4
       */
      toLinearSpaceToRef(convertedColor) {
          convertedColor.r = Math.pow(this.r, types_1$3.ToLinearSpace);
          convertedColor.g = Math.pow(this.g, types_1$3.ToLinearSpace);
          convertedColor.b = Math.pow(this.b, types_1$3.ToLinearSpace);
          convertedColor.a = this.a;
          return this;
      }
      /**
       * Computes a new Color4 converted from the current one to gamma space
       * @returns a new Color4 object
       */
      toGammaSpace() {
          const convertedColor = new Color4();
          this.toGammaSpaceToRef(convertedColor);
          return convertedColor;
      }
      /**
       * Converts the Color4 values to gamma space and stores the result in "convertedColor"
       * @param convertedColor - defines the Color4 object where to store the gamma space version
       * @returns the unmodified Color4
       */
      toGammaSpaceToRef(convertedColor) {
          convertedColor.r = Math.pow(this.r, types_1$3.ToGammaSpace);
          convertedColor.g = Math.pow(this.g, types_1$3.ToGammaSpace);
          convertedColor.b = Math.pow(this.b, types_1$3.ToGammaSpace);
          convertedColor.a = this.a;
          return this;
      }
  }
  Color4$1.Color4 = Color4;

  Object.defineProperty(Color3$1, "__esModule", { value: true });
  Color3$1.Color3 = void 0;
  const types_1$2 = types;
  const Color4_1 = Color4$1;
  const Scalar_1$1 = Scalar$1;
  /**
   * Class used to hold a RBG color
   * @public
   */
  class Color3 {
      /**
       * Creates a new Color3 object from red, green, blue values, all between 0 and 1
       * @param r - defines the red component (between 0 and 1, default is 0)
       * @param g - defines the green component (between 0 and 1, default is 0)
       * @param b - defines the blue component (between 0 and 1, default is 0)
       */
      constructor(
      /**
       * Defines the red component (between 0 and 1, default is 0)
       */
      r = 0, 
      /**
       * Defines the green component (between 0 and 1, default is 0)
       */
      g = 0, 
      /**
       * Defines the blue component (between 0 and 1, default is 0)
       */
      b = 0) {
          this.r = r;
          this.g = g;
          this.b = b;
      }
      // Statics
      /**
       * Creates a new Color3 from the string containing valid hexadecimal values
       * @param hex - defines a string containing valid hexadecimal values
       * @returns a new Color3 object
       */
      static FromHexString(hex) {
          if (hex.substring(0, 1) !== '#' || hex.length !== 7) {
              return new Color3(0, 0, 0);
          }
          const r = parseInt(hex.substring(1, 3), 16);
          const g = parseInt(hex.substring(3, 5), 16);
          const b = parseInt(hex.substring(5, 7), 16);
          return Color3.FromInts(r, g, b);
      }
      /**
       * Creates a new Vector3 from the starting index of the given array
       * @param array - defines the source array
       * @param offset - defines an offset in the source array
       * @returns a new Color3 object
       */
      static FromArray(array, offset = 0) {
          return new Color3(array[offset], array[offset + 1], array[offset + 2]);
      }
      /**
       * Creates a new Color3 from integer values (less than 256)
       * @param r - defines the red component to read from (value between 0 and 255)
       * @param g - defines the green component to read from (value between 0 and 255)
       * @param b - defines the blue component to read from (value between 0 and 255)
       * @returns a new Color3 object
       */
      static FromInts(r, g, b) {
          return new Color3(r / 255.0, g / 255.0, b / 255.0);
      }
      /**
       * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
       * @param start - defines the start Color3 value
       * @param end - defines the end Color3 value
       * @param amount - defines the gradient value between start and end
       * @returns a new Color3 object
       */
      static Lerp(start, end, amount) {
          const result = new Color3(0.0, 0.0, 0.0);
          Color3.LerpToRef(start, end, amount, result);
          return result;
      }
      /**
       * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
       * @param left - defines the start value
       * @param right - defines the end value
       * @param amount - defines the gradient factor
       * @param result - defines the Color3 object where to store the result
       */
      static LerpToRef(left, right, amount, result) {
          result.r = left.r + (right.r - left.r) * amount;
          result.g = left.g + (right.g - left.g) * amount;
          result.b = left.b + (right.b - left.b) * amount;
      }
      /**
       * Returns a Color3 value containing a red color
       * @returns a new Color3 object
       */
      static Red() {
          return new Color3(1, 0, 0);
      }
      /**
       * Returns a Color3 value containing a green color
       * @returns a new Color3 object
       */
      static Green() {
          return new Color3(0, 1, 0);
      }
      /**
       * Returns a Color3 value containing a blue color
       * @returns a new Color3 object
       */
      static Blue() {
          return new Color3(0, 0, 1);
      }
      /**
       * Returns a Color3 value containing a black color
       * @returns a new Color3 object
       */
      static Black() {
          return new Color3(0, 0, 0);
      }
      /**
       * Returns a Color3 value containing a white color
       * @returns a new Color3 object
       */
      static White() {
          return new Color3(1, 1, 1);
      }
      /**
       * Returns a Color3 value containing a purple color
       * @returns a new Color3 object
       */
      static Purple() {
          return new Color3(0.5, 0, 0.5);
      }
      /**
       * Returns a Color3 value containing a magenta color
       * @returns a new Color3 object
       */
      static Magenta() {
          return new Color3(1, 0, 1);
      }
      /**
       * Returns a Color3 value containing a yellow color
       * @returns a new Color3 object
       */
      static Yellow() {
          return new Color3(1, 1, 0);
      }
      /**
       * Returns a Color3 value containing a gray color
       * @returns a new Color3 object
       */
      static Gray() {
          return new Color3(0.5, 0.5, 0.5);
      }
      /**
       * Returns a Color3 value containing a teal color
       * @returns a new Color3 object
       */
      static Teal() {
          return new Color3(0, 1.0, 1.0);
      }
      /**
       * Returns a Color3 value containing a random color
       * @returns a new Color3 object
       */
      static Random() {
          return new Color3(Math.random(), Math.random(), Math.random());
      }
      /**
       * Creates a string with the Color3 current values
       * @returns the string representation of the Color3 object
       */
      toString() {
          return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + '}';
      }
      /**
       * Returns the string "Color3"
       * @returns "Color3"
       */
      getClassName() {
          return 'Color3';
      }
      /**
       * Compute the Color3 hash code
       * @returns an unique number that can be used to hash Color3 objects
       */
      getHashCode() {
          let hash = this.r || 0;
          hash = (hash * 397) ^ (this.g || 0);
          hash = (hash * 397) ^ (this.b || 0);
          return hash;
      }
      // Operators
      /**
       * Stores in the given array from the given starting index the red, green, blue values as successive elements
       * @param array - defines the array where to store the r,g,b components
       * @param index - defines an optional index in the target array to define where to start storing values
       * @returns the current Color3 object
       */
      toArray(array, index = 0) {
          array[index] = this.r;
          array[index + 1] = this.g;
          array[index + 2] = this.b;
          return this;
      }
      /**
       * Returns a new Color4 object from the current Color3 and the given alpha
       * @param alpha - defines the alpha component on the new Color4 object (default is 1)
       * @returns a new Color4 object
       */
      toColor4(alpha = 1) {
          return new Color4_1.Color4(this.r, this.g, this.b, alpha);
      }
      /**
       * Returns a new array populated with 3 numeric elements : red, green and blue values
       * @returns the new array
       */
      asArray() {
          const result = new Array();
          this.toArray(result, 0);
          return result;
      }
      /**
       * Returns the luminance value
       * @returns a float value
       */
      toLuminance() {
          return this.r * 0.3 + this.g * 0.59 + this.b * 0.11;
      }
      /**
       * Multiply each Color3 rgb values by the given Color3 rgb values in a new Color3 object
       * @param otherColor - defines the second operand
       * @returns the new Color3 object
       */
      multiply(otherColor) {
          return new Color3(this.r * otherColor.r, this.g * otherColor.g, this.b * otherColor.b);
      }
      /**
       * Multiply the rgb values of the Color3 and the given Color3 and stores the result in the object "result"
       * @param otherColor - defines the second operand
       * @param result - defines the Color3 object where to store the result
       * @returns the current Color3
       */
      multiplyToRef(otherColor, result) {
          result.r = this.r * otherColor.r;
          result.g = this.g * otherColor.g;
          result.b = this.b * otherColor.b;
          return this;
      }
      /**
       * Determines equality between Color3 objects
       * @param otherColor - defines the second operand
       * @returns true if the rgb values are equal to the given ones
       */
      equals(otherColor) {
          return (otherColor &&
              this.r === otherColor.r &&
              this.g === otherColor.g &&
              this.b === otherColor.b);
      }
      /**
       * Determines equality between the current Color3 object and a set of r,b,g values
       * @param r - defines the red component to check
       * @param g - defines the green component to check
       * @param b - defines the blue component to check
       * @returns true if the rgb values are equal to the given ones
       */
      equalsFloats(r, g, b) {
          return this.r === r && this.g === g && this.b === b;
      }
      /**
       * Multiplies in place each rgb value by scale
       * @param scale - defines the scaling factor
       * @returns the updated Color3
       */
      scale(scale) {
          return new Color3(this.r * scale, this.g * scale, this.b * scale);
      }
      /**
       * Multiplies the rgb values by scale and stores the result into "result"
       * @param scale - defines the scaling factor
       * @param result - defines the Color3 object where to store the result
       * @returns the unmodified current Color3
       */
      scaleToRef(scale, result) {
          result.r = this.r * scale;
          result.g = this.g * scale;
          result.b = this.b * scale;
          return this;
      }
      /**
       * Scale the current Color3 values by a factor and add the result to a given Color3
       * @param scale - defines the scale factor
       * @param result - defines color to store the result into
       * @returns the unmodified current Color3
       */
      scaleAndAddToRef(scale, result) {
          result.r += this.r * scale;
          result.g += this.g * scale;
          result.b += this.b * scale;
          return this;
      }
      /**
       * Clamps the rgb values by the min and max values and stores the result into "result"
       * @param min - defines minimum clamping value (default is 0)
       * @param max - defines maximum clamping value (default is 1)
       * @param result - defines color to store the result into
       * @returns the original Color3
       */
      clampToRef(min = 0, max = 1, result) {
          result.r = Scalar_1$1.Scalar.Clamp(this.r, min, max);
          result.g = Scalar_1$1.Scalar.Clamp(this.g, min, max);
          result.b = Scalar_1$1.Scalar.Clamp(this.b, min, max);
          return this;
      }
      /**
       * Creates a new Color3 set with the added values of the current Color3 and of the given one
       * @param otherColor - defines the second operand
       * @returns the new Color3
       */
      add(otherColor) {
          return new Color3(this.r + otherColor.r, this.g + otherColor.g, this.b + otherColor.b);
      }
      /**
       * Stores the result of the addition of the current Color3 and given one rgb values into "result"
       * @param otherColor - defines the second operand
       * @param result - defines Color3 object to store the result into
       * @returns the unmodified current Color3
       */
      addToRef(otherColor, result) {
          result.r = this.r + otherColor.r;
          result.g = this.g + otherColor.g;
          result.b = this.b + otherColor.b;
          return this;
      }
      /**
       * Returns a new Color3 set with the subtracted values of the given one from the current Color3
       * @param otherColor - defines the second operand
       * @returns the new Color3
       */
      subtract(otherColor) {
          return new Color3(this.r - otherColor.r, this.g - otherColor.g, this.b - otherColor.b);
      }
      /**
       * Stores the result of the subtraction of given one from the current Color3 rgb values into "result"
       * @param otherColor - defines the second operand
       * @param result - defines Color3 object to store the result into
       * @returns the unmodified current Color3
       */
      subtractToRef(otherColor, result) {
          result.r = this.r - otherColor.r;
          result.g = this.g - otherColor.g;
          result.b = this.b - otherColor.b;
          return this;
      }
      /**
       * Copy the current object
       * @returns a new Color3 copied the current one
       */
      clone() {
          return new Color3(this.r, this.g, this.b);
      }
      /**
       * Copies the rgb values from the source in the current Color3
       * @param source - defines the source Color3 object
       * @returns the updated Color3 object
       */
      copyFrom(source) {
          this.r = source.r;
          this.g = source.g;
          this.b = source.b;
          return this;
      }
      /**
       * Updates the Color3 rgb values from the given floats
       * @param r - defines the red component to read from
       * @param g - defines the green component to read from
       * @param b - defines the blue component to read from
       * @returns the current Color3 object
       */
      copyFromFloats(r, g, b) {
          this.r = r;
          this.g = g;
          this.b = b;
          return this;
      }
      /**
       * Updates the Color3 rgb values from the given floats
       * @param r - defines the red component to read from
       * @param g - defines the green component to read from
       * @param b - defines the blue component to read from
       * @returns the current Color3 object
       */
      set(r, g, b) {
          return this.copyFromFloats(r, g, b);
      }
      /**
       * Compute the Color3 hexadecimal code as a string
       * @returns a string containing the hexadecimal representation of the Color3 object
       */
      toHexString() {
          const intR = (this.r * 255) | 0;
          const intG = (this.g * 255) | 0;
          const intB = (this.b * 255) | 0;
          return '#' + Scalar_1$1.Scalar.ToHex(intR) + Scalar_1$1.Scalar.ToHex(intG) + Scalar_1$1.Scalar.ToHex(intB);
      }
      /**
       * Computes a new Color3 converted from the current one to linear space
       * @returns a new Color3 object
       */
      toLinearSpace() {
          const convertedColor = new Color3();
          this.toLinearSpaceToRef(convertedColor);
          return convertedColor;
      }
      /**
       * Converts the Color3 values to linear space and stores the result in "convertedColor"
       * @param convertedColor - defines the Color3 object where to store the linear space version
       * @returns the unmodified Color3
       */
      toLinearSpaceToRef(convertedColor) {
          convertedColor.r = Math.pow(this.r, types_1$2.ToLinearSpace);
          convertedColor.g = Math.pow(this.g, types_1$2.ToLinearSpace);
          convertedColor.b = Math.pow(this.b, types_1$2.ToLinearSpace);
          return this;
      }
      /**
       * Computes a new Color3 converted from the current one to gamma space
       * @returns a new Color3 object
       */
      toGammaSpace() {
          const convertedColor = new Color3();
          this.toGammaSpaceToRef(convertedColor);
          return convertedColor;
      }
      /**
       * Converts the Color3 values to gamma space and stores the result in "convertedColor"
       * @param convertedColor - defines the Color3 object where to store the gamma space version
       * @returns the unmodified Color3
       */
      toGammaSpaceToRef(convertedColor) {
          convertedColor.r = Math.pow(this.r, types_1$2.ToGammaSpace);
          convertedColor.g = Math.pow(this.g, types_1$2.ToGammaSpace);
          convertedColor.b = Math.pow(this.b, types_1$2.ToGammaSpace);
          return this;
      }
      /**
       * Serializes Color3
       */
      toJSON() {
          return {
              r: this.r,
              g: this.g,
              b: this.b
          };
      }
  }
  Color3$1.Color3 = Color3;

  var Curve3d = {};

  Object.defineProperty(Curve3d, "__esModule", { value: true });
  Curve3d.Curve3 = void 0;
  const Vector3_1$2 = Vector3$1;
  /**
   * A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
   * A Curve3 is designed from a series of successive Vector3.
   * {@link https://doc.babylonjs.com/how_to/how_to_use_curve3 }
   * @public
   */
  class Curve3 {
      /**
       * A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
       * A Curve3 is designed from a series of successive Vector3.
       * {@link http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object | Tutorial }
       * @param points - points which make up the curve
       */
      constructor(points) {
          this._length = 0.0;
          this._points = points;
          this._length = this._computeLength(points);
      }
      /**
       * Returns a Curve3 object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#quadratic-bezier-curve
       * @param v0 - (Vector3) the origin point of the Quadratic Bezier
       * @param v1 - (Vector3) the control point
       * @param v2 - (Vector3) the end point of the Quadratic Bezier
       * @param nbPoints - (integer) the wanted number of points in the curve
       * @returns the created Curve3
       */
      static CreateQuadraticBezier(v0, v1, v2, nbPoints) {
          // tslint:disable-next-line:no-parameter-reassignment
          nbPoints = nbPoints > 2 ? nbPoints : 3;
          const bez = new Array();
          const equation = (t, val0, val1, val2) => {
              const res = (1.0 - t) * (1.0 - t) * val0 + 2.0 * t * (1.0 - t) * val1 + t * t * val2;
              return res;
          };
          for (let i = 0; i <= nbPoints; i++) {
              bez.push(new Vector3_1$2.Vector3(equation(i / nbPoints, v0.x, v1.x, v2.x), equation(i / nbPoints, v0.y, v1.y, v2.y), equation(i / nbPoints, v0.z, v1.z, v2.z)));
          }
          return new Curve3(bez);
      }
      /**
       * Returns a Curve3 object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#cubic-bezier-curve
       * @param v0 - (Vector3) the origin point of the Cubic Bezier
       * @param v1 - (Vector3) the first control point
       * @param v2 - (Vector3) the second control point
       * @param v3 - (Vector3) the end point of the Cubic Bezier
       * @param nbPoints - (integer) the wanted number of points in the curve
       * @returns the created Curve3
       */
      static CreateCubicBezier(v0, v1, v2, v3, nbPoints) {
          // tslint:disable-next-line:no-parameter-reassignment
          nbPoints = nbPoints > 3 ? nbPoints : 4;
          const bez = new Array();
          const equation = (t, val0, val1, val2, val3) => {
              const res = (1.0 - t) * (1.0 - t) * (1.0 - t) * val0 +
                  3.0 * t * (1.0 - t) * (1.0 - t) * val1 +
                  3.0 * t * t * (1.0 - t) * val2 +
                  t * t * t * val3;
              return res;
          };
          for (let i = 0; i <= nbPoints; i++) {
              bez.push(new Vector3_1$2.Vector3(equation(i / nbPoints, v0.x, v1.x, v2.x, v3.x), equation(i / nbPoints, v0.y, v1.y, v2.y, v3.y), equation(i / nbPoints, v0.z, v1.z, v2.z, v3.z)));
          }
          return new Curve3(bez);
      }
      /**
       * Returns a Curve3 object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#hermite-spline
       * @param p1 - (Vector3) the origin point of the Hermite Spline
       * @param t1 - (Vector3) the tangent vector at the origin point
       * @param p2 - (Vector3) the end point of the Hermite Spline
       * @param t2 - (Vector3) the tangent vector at the end point
       * @param nbPoints - (integer) the wanted number of points in the curve
       * @returns the created Curve3
       */
      static CreateHermiteSpline(p1, t1, p2, t2, nbPoints) {
          const hermite = new Array();
          const step = 1.0 / nbPoints;
          for (let i = 0; i <= nbPoints; i++) {
              hermite.push(Vector3_1$2.Vector3.Hermite(p1, t1, p2, t2, i * step));
          }
          return new Curve3(hermite);
      }
      /**
       * Returns a Curve3 object along a CatmullRom Spline curve :
       * @param points - (array of Vector3) the points the spline must pass through. At least, four points required
       * @param nbPoints - (integer) the wanted number of points between each curve control points
       * @param closed - (boolean) optional with default false, when true forms a closed loop from the points
       * @returns the created Curve3
       */
      static CreateCatmullRomSpline(points, nbPoints, closed) {
          const catmullRom = new Array();
          const step = 1.0 / nbPoints;
          let amount = 0.0;
          if (closed) {
              const pointsCount = points.length;
              for (let i = 0; i < pointsCount; i++) {
                  amount = 0;
                  for (let c = 0; c < nbPoints; c++) {
                      catmullRom.push(Vector3_1$2.Vector3.CatmullRom(points[i % pointsCount], points[(i + 1) % pointsCount], points[(i + 2) % pointsCount], points[(i + 3) % pointsCount], amount));
                      amount += step;
                  }
              }
              catmullRom.push(catmullRom[0]);
          }
          else {
              const totalPoints = new Array();
              totalPoints.push(points[0].clone());
              Array.prototype.push.apply(totalPoints, points);
              totalPoints.push(points[points.length - 1].clone());
              let i = 0;
              for (i = 0; i < totalPoints.length - 3; i++) {
                  amount = 0;
                  for (let c = 0; c < nbPoints; c++) {
                      catmullRom.push(Vector3_1$2.Vector3.CatmullRom(totalPoints[i], totalPoints[i + 1], totalPoints[i + 2], totalPoints[i + 3], amount));
                      amount += step;
                  }
              }
              i--;
              catmullRom.push(Vector3_1$2.Vector3.CatmullRom(totalPoints[i], totalPoints[i + 1], totalPoints[i + 2], totalPoints[i + 3], amount));
          }
          return new Curve3(catmullRom);
      }
      /**
       * @returns the Curve3 stored array of successive Vector3
       */
      getPoints() {
          return this._points;
      }
      /**
       * @returns the computed length (float) of the curve.
       */
      length() {
          return this._length;
      }
      /**
       * Returns a new instance of Curve3 object : var curve = curveA.continue(curveB);
       * This new Curve3 is built by translating and sticking the curveB at the end of the curveA.
       * curveA and curveB keep unchanged.
       * @param curve - the curve to continue from this curve
       * @returns the newly constructed curve
       */
      continue(curve) {
          const lastPoint = this._points[this._points.length - 1];
          const continuedPoints = this._points.slice();
          const curvePoints = curve.getPoints();
          for (let i = 1; i < curvePoints.length; i++) {
              continuedPoints.push(curvePoints[i].subtract(curvePoints[0]).add(lastPoint));
          }
          const continuedCurve = new Curve3(continuedPoints);
          return continuedCurve;
      }
      _computeLength(path) {
          let l = 0;
          for (let i = 1; i < path.length; i++) {
              l += path[i].subtract(path[i - 1]).length();
          }
          return l;
      }
  }
  Curve3d.Curve3 = Curve3;

  var Furstum = {};

  var Plane$1 = {};

  Object.defineProperty(Plane$1, "__esModule", { value: true });
  Plane$1.Plane = void 0;
  const Vector3_1$1 = Vector3$1;
  const Matrix_1 = Matrix$1;
  const preallocatedVariables_1 = preallocatedVariables;
  /**
   * Represens a plane by the equation ax + by + cz + d = 0
   * @public
   */
  class Plane {
      /**
       * Creates a Plane object according to the given floats a, b, c, d and the plane equation : ax + by + cz + d = 0
       * @param a - a component of the plane
       * @param b - b component of the plane
       * @param c - c component of the plane
       * @param d - d component of the plane
       */
      constructor(a, b, c, d) {
          this.normal = new Vector3_1$1.Vector3(a, b, c);
          this.d = d;
      }
      // Statics
      /**
       * Creates a plane from an  array
       * @param array - the array to create a plane from
       * @returns a new Plane from the given array.
       */
      static FromArray(array) {
          return new Plane(array[0], array[1], array[2], array[3]);
      }
      /**
       * Creates a plane from three points
       * @param point1 - point used to create the plane
       * @param point2 - point used to create the plane
       * @param point3 - point used to create the plane
       * @returns a new Plane defined by the three given points.
       */
      static FromPoints(point1, point2, point3) {
          const result = new Plane(0.0, 0.0, 0.0, 0.0);
          result.copyFromPoints(point1, point2, point3);
          return result;
      }
      /**
       * Creates a plane from an origin point and a normal
       * @param origin - origin of the plane to be constructed
       * @param normal - normal of the plane to be constructed
       * @returns a new Plane the normal vector to this plane at the given origin point.
       * Note : the vector "normal" is updated because normalized.
       */
      static FromPositionAndNormal(origin, normal) {
          const result = new Plane(0.0, 0.0, 0.0, 0.0);
          normal.normalize();
          result.normal = normal;
          result.d = -(normal.x * origin.x +
              normal.y * origin.y +
              normal.z * origin.z);
          return result;
      }
      /**
       * Calculates the distance from a plane and a point
       * @param origin - origin of the plane to be constructed
       * @param normal - normal of the plane to be constructed
       * @param point - point to calculate distance to
       * @returns the signed distance between the plane defined by the normal vector at the "origin"" point and the given other point.
       */
      static SignedDistanceToPlaneFromPositionAndNormal(origin, normal, point) {
          const d = -(normal.x * origin.x + normal.y * origin.y + normal.z * origin.z);
          return Vector3_1$1.Vector3.Dot(point, normal) + d;
      }
      /**
       * @returns the plane coordinates as a new array of 4 elements [a, b, c, d].
       */
      asArray() {
          return [this.normal.x, this.normal.y, this.normal.z, this.d];
      }
      // Methods
      /**
       * @returns a new plane copied from the current Plane.
       */
      clone() {
          return new Plane(this.normal.x, this.normal.y, this.normal.z, this.d);
      }
      /**
       * @returns the string "Plane".
       */
      getClassName() {
          return 'Plane';
      }
      /**
       * @returns the Plane hash code.
       */
      getHashCode() {
          let hash = this.normal.getHashCode();
          hash = (hash * 397) ^ (this.d || 0);
          return hash;
      }
      /**
       * Normalize the current Plane in place.
       * @returns the updated Plane.
       */
      normalize() {
          const norm = Math.sqrt(this.normal.x * this.normal.x +
              this.normal.y * this.normal.y +
              this.normal.z * this.normal.z);
          let magnitude = 0.0;
          if (norm !== 0) {
              magnitude = 1.0 / norm;
          }
          this.normal.x *= magnitude;
          this.normal.y *= magnitude;
          this.normal.z *= magnitude;
          this.d *= magnitude;
          return this;
      }
      /**
       * Applies a transformation the plane and returns the result
       * @param transformation - the transformation matrix to be applied to the plane
       * @returns a new Plane as the result of the transformation of the current Plane by the given matrix.
       */
      transform(transformation) {
          const transposedMatrix = preallocatedVariables_1.MathTmp.Matrix[0];
          Matrix_1.Matrix.TransposeToRef(transformation, transposedMatrix);
          const m = transposedMatrix.m;
          const x = this.normal.x;
          const y = this.normal.y;
          const z = this.normal.z;
          const d = this.d;
          const normalX = x * m[0] + y * m[1] + z * m[2] + d * m[3];
          const normalY = x * m[4] + y * m[5] + z * m[6] + d * m[7];
          const normalZ = x * m[8] + y * m[9] + z * m[10] + d * m[11];
          const finalD = x * m[12] + y * m[13] + z * m[14] + d * m[15];
          return new Plane(normalX, normalY, normalZ, finalD);
      }
      /**
       * Calcualtte the dot product between the point and the plane normal
       * @param point - point to calculate the dot product with
       * @returns the dot product (float) of the point coordinates and the plane normal.
       */
      dotCoordinate(point) {
          return (this.normal.x * point.x +
              this.normal.y * point.y +
              this.normal.z * point.z +
              this.d);
      }
      /**
       * Updates the current Plane from the plane defined by the three given points.
       * @param point1 - one of the points used to contruct the plane
       * @param point2 - one of the points used to contruct the plane
       * @param point3 - one of the points used to contruct the plane
       * @returns the updated Plane.
       */
      copyFromPoints(point1, point2, point3) {
          const x1 = point2.x - point1.x;
          const y1 = point2.y - point1.y;
          const z1 = point2.z - point1.z;
          const x2 = point3.x - point1.x;
          const y2 = point3.y - point1.y;
          const z2 = point3.z - point1.z;
          const yz = y1 * z2 - z1 * y2;
          const xz = z1 * x2 - x1 * z2;
          const xy = x1 * y2 - y1 * x2;
          const pyth = Math.sqrt(yz * yz + xz * xz + xy * xy);
          let invPyth;
          if (pyth !== 0) {
              invPyth = 1.0 / pyth;
          }
          else {
              invPyth = 0.0;
          }
          this.normal.x = yz * invPyth;
          this.normal.y = xz * invPyth;
          this.normal.z = xy * invPyth;
          this.d = -(this.normal.x * point1.x +
              this.normal.y * point1.y +
              this.normal.z * point1.z);
          return this;
      }
      /**
       * Checks if the plane is facing a given direction
       * @param direction - the direction to check if the plane is facing
       * @param epsilon - value the dot product is compared against (returns true if dot &lt;= epsilon)
       * @returns True is the vector "direction"  is the same side than the plane normal.
       */
      isFrontFacingTo(direction, epsilon) {
          const dot = Vector3_1$1.Vector3.Dot(this.normal, direction);
          return dot <= epsilon;
      }
      /**
       * Calculates the distance to a point
       * @param point - point to calculate distance to
       * @returns the signed distance (float) from the given point to the Plane.
       */
      signedDistanceTo(point) {
          return Vector3_1$1.Vector3.Dot(point, this.normal) + this.d;
      }
  }
  Plane$1.Plane = Plane;

  Object.defineProperty(Furstum, "__esModule", { value: true });
  Furstum.Frustum = void 0;
  const Plane_1 = Plane$1;
  /**
   * Reprasents a camera frustum
   * @public
   */
  class Frustum {
      /**
       * Gets the planes representing the frustum
       * @param transform - matrix to be applied to the returned planes
       * @returns a new array of 6 Frustum planes computed by the given transformation matrix.
       */
      static GetPlanes(transform) {
          const frustumPlanes = [];
          for (let index = 0; index < 6; index++) {
              frustumPlanes.push(new Plane_1.Plane(0.0, 0.0, 0.0, 0.0));
          }
          Frustum.GetPlanesToRef(transform, frustumPlanes);
          return frustumPlanes;
      }
      /**
       * Gets the near frustum plane transformed by the transform matrix
       * @param transform - transformation matrix to be applied to the resulting frustum plane
       * @param frustumPlane - the resuling frustum plane
       */
      static GetNearPlaneToRef(transform, frustumPlane) {
          const m = transform.m;
          frustumPlane.normal.x = m[3] + m[2];
          frustumPlane.normal.y = m[7] + m[6];
          frustumPlane.normal.z = m[11] + m[10];
          frustumPlane.d = m[15] + m[14];
          frustumPlane.normalize();
      }
      /**
       * Gets the far frustum plane transformed by the transform matrix
       * @param transform - transformation matrix to be applied to the resulting frustum plane
       * @param frustumPlane - the resuling frustum plane
       */
      static GetFarPlaneToRef(transform, frustumPlane) {
          const m = transform.m;
          frustumPlane.normal.x = m[3] - m[2];
          frustumPlane.normal.y = m[7] - m[6];
          frustumPlane.normal.z = m[11] - m[10];
          frustumPlane.d = m[15] - m[14];
          frustumPlane.normalize();
      }
      /**
       * Gets the left frustum plane transformed by the transform matrix
       * @param transform - transformation matrix to be applied to the resulting frustum plane
       * @param frustumPlane - the resuling frustum plane
       */
      static GetLeftPlaneToRef(transform, frustumPlane) {
          const m = transform.m;
          frustumPlane.normal.x = m[3] + m[0];
          frustumPlane.normal.y = m[7] + m[4];
          frustumPlane.normal.z = m[11] + m[8];
          frustumPlane.d = m[15] + m[12];
          frustumPlane.normalize();
      }
      /**
       * Gets the right frustum plane transformed by the transform matrix
       * @param transform - transformation matrix to be applied to the resulting frustum plane
       * @param frustumPlane - the resuling frustum plane
       */
      static GetRightPlaneToRef(transform, frustumPlane) {
          const m = transform.m;
          frustumPlane.normal.x = m[3] - m[0];
          frustumPlane.normal.y = m[7] - m[4];
          frustumPlane.normal.z = m[11] - m[8];
          frustumPlane.d = m[15] - m[12];
          frustumPlane.normalize();
      }
      /**
       * Gets the top frustum plane transformed by the transform matrix
       * @param transform - transformation matrix to be applied to the resulting frustum plane
       * @param frustumPlane - the resuling frustum plane
       */
      static GetTopPlaneToRef(transform, frustumPlane) {
          const m = transform.m;
          frustumPlane.normal.x = m[3] - m[1];
          frustumPlane.normal.y = m[7] - m[5];
          frustumPlane.normal.z = m[11] - m[9];
          frustumPlane.d = m[15] - m[13];
          frustumPlane.normalize();
      }
      /**
       * Gets the bottom frustum plane transformed by the transform matrix
       * @param transform - transformation matrix to be applied to the resulting frustum plane
       * @param frustumPlane - the resuling frustum plane
       */
      static GetBottomPlaneToRef(transform, frustumPlane) {
          const m = transform.m;
          frustumPlane.normal.x = m[3] + m[1];
          frustumPlane.normal.y = m[7] + m[5];
          frustumPlane.normal.z = m[11] + m[9];
          frustumPlane.d = m[15] + m[13];
          frustumPlane.normalize();
      }
      /**
       * Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix.
       * @param transform - transformation matrix to be applied to the resulting frustum planes
       * @param frustumPlanes - the resuling frustum planes
       */
      static GetPlanesToRef(transform, frustumPlanes) {
          // Near
          Frustum.GetNearPlaneToRef(transform, frustumPlanes[0]);
          // Far
          Frustum.GetFarPlaneToRef(transform, frustumPlanes[1]);
          // Left
          Frustum.GetLeftPlaneToRef(transform, frustumPlanes[2]);
          // Right
          Frustum.GetRightPlaneToRef(transform, frustumPlanes[3]);
          // Top
          Frustum.GetTopPlaneToRef(transform, frustumPlanes[4]);
          // Bottom
          Frustum.GetBottomPlaneToRef(transform, frustumPlanes[5]);
      }
  }
  Furstum.Frustum = Frustum;

  var Path2d = {};

  Object.defineProperty(Path2d, "__esModule", { value: true });
  Path2d.Path2 = void 0;
  const Vector2_1 = Vector2$1;
  const Arc2_1 = Arc2$1;
  const types_1$1 = types;
  /**
   * Represents a 2D path made up of multiple 2D points
   * @public
   */
  class Path2 {
      /**
       * Creates a Path2 object from the starting 2D coordinates x and y.
       * @param x - the starting points x value
       * @param y - the starting points y value
       */
      constructor(x, y) {
          /**
           * If the path start and end point are the same
           */
          this.closed = false;
          this._points = new Array();
          this._length = 0.0;
          this._points.push(new Vector2_1.Vector2(x, y));
      }
      /**
       * Creates a new path starting from an x and y position
       * @param x - starting x value
       * @param y - starting y value
       * @returns a new Path2 starting at the coordinates (x, y).
       */
      static StartingAt(x, y) {
          return new Path2(x, y);
      }
      /**
       * Adds a new segment until the given coordinates (x, y) to the current Path2.
       * @param x - the added points x value
       * @param y - the added points y value
       * @returns the updated Path2.
       */
      addLineTo(x, y) {
          if (this.closed) {
              return this;
          }
          const newPoint = new Vector2_1.Vector2(x, y);
          const previousPoint = this._points[this._points.length - 1];
          this._points.push(newPoint);
          this._length += newPoint.subtract(previousPoint).length();
          return this;
      }
      /**
       * Adds _numberOfSegments_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2.
       * @param midX - middle point x value
       * @param midY - middle point y value
       * @param endX - end point x value
       * @param endY - end point y value
       * @param numberOfSegments - (default: 36)
       * @returns the updated Path2.
       */
      addArcTo(midX, midY, endX, endY, numberOfSegments = 36) {
          if (this.closed) {
              return this;
          }
          const startPoint = this._points[this._points.length - 1];
          const midPoint = new Vector2_1.Vector2(midX, midY);
          const endPoint = new Vector2_1.Vector2(endX, endY);
          const arc = new Arc2_1.Arc2(startPoint, midPoint, endPoint);
          let increment = arc.angle.radians() / numberOfSegments;
          if (arc.orientation === types_1$1.Orientation.CW) {
              increment *= -1;
          }
          let currentAngle = arc.startAngle.radians() + increment;
          for (let i = 0; i < numberOfSegments; i++) {
              const x = Math.cos(currentAngle) * arc.radius + arc.centerPoint.x;
              const y = Math.sin(currentAngle) * arc.radius + arc.centerPoint.y;
              this.addLineTo(x, y);
              currentAngle += increment;
          }
          return this;
      }
      /**
       * Closes the Path2.
       * @returns the Path2.
       */
      close() {
          this.closed = true;
          return this;
      }
      /**
       * Gets the sum of the distance between each sequential point in the path
       * @returns the Path2 total length (float).
       */
      length() {
          let result = this._length;
          if (!this.closed) {
              const lastPoint = this._points[this._points.length - 1];
              const firstPoint = this._points[0];
              result += firstPoint.subtract(lastPoint).length();
          }
          return result;
      }
      /**
       * Gets the points which construct the path
       * @returns the Path2 internal array of points.
       */
      getPoints() {
          return this._points;
      }
      /**
       * Retreives the point at the distance aways from the starting point
       * @param normalizedLengthPosition - the length along the path to retreive the point from
       * @returns a new Vector2 located at a percentage of the Path2 total length on this path.
       */
      getPointAtLengthPosition(normalizedLengthPosition) {
          if (normalizedLengthPosition < 0 || normalizedLengthPosition > 1) {
              return Vector2_1.Vector2.Zero();
          }
          const lengthPosition = normalizedLengthPosition * this.length();
          let previousOffset = 0;
          for (let i = 0; i < this._points.length; i++) {
              const j = (i + 1) % this._points.length;
              const a = this._points[i];
              const b = this._points[j];
              const bToA = b.subtract(a);
              const nextOffset = bToA.length() + previousOffset;
              if (lengthPosition >= previousOffset && lengthPosition <= nextOffset) {
                  const dir = bToA.normalize();
                  const localOffset = lengthPosition - previousOffset;
                  return new Vector2_1.Vector2(a.x + dir.x * localOffset, a.y + dir.y * localOffset);
              }
              previousOffset = nextOffset;
          }
          return Vector2_1.Vector2.Zero();
      }
  }
  Path2d.Path2 = Path2;

  var Path3d = {};

  Object.defineProperty(Path3d, "__esModule", { value: true });
  Path3d.Path3D = void 0;
  const Vector3_1 = Vector3$1;
  const types_1 = types;
  const Scalar_1 = Scalar$1;
  /**
   * Represents a 3D path made up of multiple 3D points
   * @public
   */
  class Path3D {
      /**
       * new Path3D(path, normal, raw)
       * Creates a Path3D. A Path3D is a logical math object, so not a mesh.
       * please read the description in the tutorial :  http://doc.babylonjs.com/tutorials/How_to_use_Path3D
       * @param path - an array of Vector3, the curve axis of the Path3D
       * @param normal - (options) Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.
       * @param raw - (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.
       */
      constructor(
      /**
       * an array of Vector3, the curve axis of the Path3D
       */
      path, firstNormal = null, raw) {
          this.path = path;
          this._curve = new Array();
          this._distances = new Array();
          this._tangents = new Array();
          this._normals = new Array();
          this._binormals = new Array();
          for (let p = 0; p < path.length; p++) {
              this._curve[p] = path[p].clone(); // hard copy
          }
          this._raw = raw || false;
          this._compute(firstNormal);
      }
      /**
       * Returns the Path3D array of successive Vector3 designing its curve.
       * @returns the Path3D array of successive Vector3 designing its curve.
       */
      getCurve() {
          return this._curve;
      }
      /**
       * Returns an array populated with tangent vectors on each Path3D curve point.
       * @returns an array populated with tangent vectors on each Path3D curve point.
       */
      getTangents() {
          return this._tangents;
      }
      /**
       * Returns an array populated with normal vectors on each Path3D curve point.
       * @returns an array populated with normal vectors on each Path3D curve point.
       */
      getNormals() {
          return this._normals;
      }
      /**
       * Returns an array populated with binormal vectors on each Path3D curve point.
       * @returns an array populated with binormal vectors on each Path3D curve point.
       */
      getBinormals() {
          return this._binormals;
      }
      /**
       * Returns an array populated with distances (float) of the i-th point from the first curve point.
       * @returns an array populated with distances (float) of the i-th point from the first curve point.
       */
      getDistances() {
          return this._distances;
      }
      /**
       * Forces the Path3D tangent, normal, binormal and distance recomputation.
       * @param path - path which all values are copied into the curves points
       * @param firstNormal - which should be projected onto the curve
       * @returns the same object updated.
       */
      update(path, firstNormal = null) {
          for (let p = 0; p < path.length; p++) {
              this._curve[p].x = path[p].x;
              this._curve[p].y = path[p].y;
              this._curve[p].z = path[p].z;
          }
          this._compute(firstNormal);
          return this;
      }
      // private function compute() : computes tangents, normals and binormals
      _compute(firstNormal) {
          const l = this._curve.length;
          // first and last tangents
          this._tangents[0] = this._getFirstNonNullVector(0);
          if (!this._raw) {
              this._tangents[0].normalize();
          }
          this._tangents[l - 1] = this._curve[l - 1].subtract(this._curve[l - 2]);
          if (!this._raw) {
              this._tangents[l - 1].normalize();
          }
          // normals and binormals at first point : arbitrary vector with _normalVector()
          const tg0 = this._tangents[0];
          const pp0 = this._normalVector(this._curve[0], tg0, firstNormal);
          this._normals[0] = pp0;
          if (!this._raw) {
              this._normals[0].normalize();
          }
          this._binormals[0] = Vector3_1.Vector3.Cross(tg0, this._normals[0]);
          if (!this._raw) {
              this._binormals[0].normalize();
          }
          this._distances[0] = 0.0;
          // normals and binormals : next points
          let prev; // previous vector (segment)
          let cur; // current vector (segment)
          let curTang; // current tangent
          // previous normal
          let prevBinor; // previous binormal
          for (let i = 1; i < l; i++) {
              // tangents
              prev = this._getLastNonNullVector(i);
              if (i < l - 1) {
                  cur = this._getFirstNonNullVector(i);
                  this._tangents[i] = prev.add(cur);
                  this._tangents[i].normalize();
              }
              this._distances[i] = this._distances[i - 1] + prev.length();
              // normals and binormals
              // http://www.cs.cmu.edu/afs/andrew/scs/cs/15-462/web/old/asst2camera.html
              curTang = this._tangents[i];
              prevBinor = this._binormals[i - 1];
              this._normals[i] = Vector3_1.Vector3.Cross(prevBinor, curTang);
              if (!this._raw) {
                  this._normals[i].normalize();
              }
              this._binormals[i] = Vector3_1.Vector3.Cross(curTang, this._normals[i]);
              if (!this._raw) {
                  this._binormals[i].normalize();
              }
          }
      }
      // returns the first non null vector from index : curve[index + N].subtract(curve[index])
      _getFirstNonNullVector(index) {
          let i = 1;
          let nNVector = this._curve[index + i].subtract(this._curve[index]);
          while (nNVector.length() === 0 && index + i + 1 < this._curve.length) {
              i++;
              nNVector = this._curve[index + i].subtract(this._curve[index]);
          }
          return nNVector;
      }
      // returns the last non null vector from index : curve[index].subtract(curve[index - N])
      _getLastNonNullVector(index) {
          let i = 1;
          let nLVector = this._curve[index].subtract(this._curve[index - i]);
          while (nLVector.length() === 0 && index > i + 1) {
              i++;
              nLVector = this._curve[index].subtract(this._curve[index - i]);
          }
          return nLVector;
      }
      // private function normalVector(v0, vt, va) :
      // returns an arbitrary point in the plane defined by the point v0 and the vector vt orthogonal to this plane
      // if va is passed, it returns the va projection on the plane orthogonal to vt at the point v0
      _normalVector(v0, vt, va) {
          let normal0;
          let tgl = vt.length();
          if (tgl === 0.0) {
              tgl = 1.0;
          }
          if (va === undefined || va === null) {
              let point;
              if (!Scalar_1.Scalar.WithinEpsilon(Math.abs(vt.y) / tgl, 1.0, types_1.Epsilon)) {
                  // search for a point in the plane
                  point = new Vector3_1.Vector3(0.0, -1.0, 0.0);
              }
              else if (!Scalar_1.Scalar.WithinEpsilon(Math.abs(vt.x) / tgl, 1.0, types_1.Epsilon)) {
                  point = new Vector3_1.Vector3(1.0, 0.0, 0.0);
              }
              else if (!Scalar_1.Scalar.WithinEpsilon(Math.abs(vt.z) / tgl, 1.0, types_1.Epsilon)) {
                  point = new Vector3_1.Vector3(0.0, 0.0, 1.0);
              }
              else {
                  point = Vector3_1.Vector3.Zero();
              }
              normal0 = Vector3_1.Vector3.Cross(vt, point);
          }
          else {
              normal0 = Vector3_1.Vector3.Cross(vt, va);
              Vector3_1.Vector3.CrossToRef(normal0, vt, normal0);
          }
          normal0.normalize();
          return normal0;
      }
  }
  Path3d.Path3D = Path3D;

  var Size$1 = {};

  Object.defineProperty(Size$1, "__esModule", { value: true });
  Size$1.Size = void 0;
  /**
   * Size containing widht and height
   * @public
   */
  class Size {
      /**
       * Creates a Size object from the given width and height (floats).
       * @param width - width of the new size
       * @param height - height of the new size
       */
      constructor(width, height) {
          this.width = width;
          this.height = height;
      }
      /**
       * The surface of the Size : width * height (float).
       */
      get surface() {
          return this.width * this.height;
      }
      /**
       * Create a new size of zero
       * @returns a new Size set to (0.0, 0.0)
       */
      static Zero() {
          return new Size(0.0, 0.0);
      }
      /**
       * Creates a new Size set at the linear interpolation "amount" between "start" and "end"
       * @param start - starting size to lerp between
       * @param end - end size to lerp between
       * @param amount - amount to lerp between the start and end values
       * @returns a new Size set at the linear interpolation "amount" between "start" and "end"
       */
      static Lerp(start, end, amount) {
          const w = start.width + (end.width - start.width) * amount;
          const h = start.height + (end.height - start.height) * amount;
          return new Size(w, h);
      }
      /**
       * Returns a string with the Size width and height
       * @returns a string with the Size width and height
       */
      toString() {
          return `{W: ${this.width}, H: ${this.height}}`;
      }
      /**
       * "Size"
       * @returns the string "Size"
       */
      getClassName() {
          return 'Size';
      }
      /**
       * Returns the Size hash code.
       * @returns a hash code for a unique width and height
       */
      getHashCode() {
          let hash = this.width || 0;
          hash = (hash * 397) ^ (this.height || 0);
          return hash;
      }
      /**
       * Updates the current size from the given one.
       * @param src - the given size
       */
      copyFrom(src) {
          this.width = src.width;
          this.height = src.height;
      }
      /**
       * Updates in place the current Size from the given floats.
       * @param width - width of the new size
       * @param height - height of the new size
       * @returns the updated Size.
       */
      copyFromFloats(width, height) {
          this.width = width;
          this.height = height;
          return this;
      }
      /**
       * Updates in place the current Size from the given floats.
       * @param width - width to set
       * @param height - height to set
       * @returns the updated Size.
       */
      set(width, height) {
          return this.copyFromFloats(width, height);
      }
      /**
       * Multiplies the width and height by numbers
       * @param w - factor to multiple the width by
       * @param h - factor to multiple the height by
       * @returns a new Size set with the multiplication result of the current Size and the given floats.
       */
      multiplyByFloats(w, h) {
          return new Size(this.width * w, this.height * h);
      }
      /**
       * Clones the size
       * @returns a new Size copied from the given one.
       */
      clone() {
          return new Size(this.width, this.height);
      }
      /**
       * True if the current Size and the given one width and height are strictly equal.
       * @param other - the other size to compare against
       * @returns True if the current Size and the given one width and height are strictly equal.
       */
      equals(other) {
          if (!other) {
              return false;
          }
          return this.width === other.width && this.height === other.height;
      }
      /**
       * Sums the width and height of two sizes
       * @param otherSize - size to add to this size
       * @returns a new Size set as the addition result of the current Size and the given one.
       */
      add(otherSize) {
          const r = new Size(this.width + otherSize.width, this.height + otherSize.height);
          return r;
      }
      /**
       * Subtracts the width and height of two
       * @param otherSize - size to subtract to this size
       * @returns a new Size set as the subtraction result of  the given one from the current Size.
       */
      subtract(otherSize) {
          const r = new Size(this.width - otherSize.width, this.height - otherSize.height);
          return r;
      }
  }
  Size$1.Size = Size;

  (function (exports) {
  var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(types, exports);
  __exportStar(preallocatedVariables, exports);
  __exportStar(Angle$1, exports);
  __exportStar(Arc2$1, exports);
  __exportStar(Axis$1, exports);
  __exportStar(BezierCurve$1, exports);
  __exportStar(Color3$1, exports);
  __exportStar(Color4$1, exports);
  __exportStar(Curve3d, exports);
  __exportStar(Furstum, exports);
  __exportStar(Matrix$1, exports);
  __exportStar(Path2d, exports);
  __exportStar(Path3d, exports);
  __exportStar(Plane$1, exports);
  __exportStar(Quaternion$1, exports);
  __exportStar(Scalar$1, exports);
  __exportStar(Size$1, exports);
  __exportStar(Vector2$1, exports);
  __exportStar(Vector3$1, exports);
  __exportStar(Vector4$1, exports);
  __exportStar(dist, exports);

  }(dist));

  var defaultParams = {
      looping: true,
      speed: 1.0,
      weight: 1.0,
      layer: 0
  };
  /**
   * @public
   */
  var AnimationState = /** @class */ (function (_super) {
      __extends(AnimationState, _super);
      function AnimationState(clip, params) {
          if (params === void 0) { params = defaultParams; }
          var _this = _super.call(this) || this;
          // @internal
          _this.isAnimationClip = true;
          /**
           * Does the animation loop?, default: true
           */
          _this.looping = defaultParams.looping;
          /**
           * Weight of the animation, values from 0 to 1, used to blend several animations. default: 1
           */
          _this.weight = defaultParams.weight;
          /**
           * Is the animation playing? default: true
           */
          _this.playing = false;
          /**
           * Does any anyone asked to reset the animation? default: false
           */
          _this.shouldReset = false;
          /**
           * The animation speed
           */
          _this.speed = defaultParams.speed;
          // @internal
          _this.name = newId('AnimClip');
          /**
           * Layering allows you to have two or more levels of animation on an object's parameters at the same time
           */
          _this.layer = defaultParams.layer;
          _this.clip = clip;
          _this.setParams(__assign({}, params));
          return _this;
      }
      /**
       * Sets the clip parameters
       */
      AnimationState.prototype.setParams = function (params) {
          this.looping = params.looping !== undefined ? params.looping : this.looping;
          this.speed = params.speed || this.speed;
          this.weight = params.weight || this.weight;
          this.layer = params.layer || this.layer;
          return this;
      };
      AnimationState.prototype.toJSON = function () {
          var ret = JSON.parse(JSON.stringify(_super.prototype.toJSON.call(this)));
          if (this.shouldReset) {
              this.shouldReset = false;
          }
          return ret;
      };
      /**
       * Starts the animation
       */
      AnimationState.prototype.play = function (reset) {
          var _a;
          if (reset === void 0) { reset = false; }
          (_a = this.owner) === null || _a === void 0 ? void 0 : _a.play(this, reset);
      };
      /**
       * Pauses the animation
       */
      AnimationState.prototype.pause = function () {
          var _a;
          (_a = this.owner) === null || _a === void 0 ? void 0 : _a.pause(this);
      };
      /**
       * Resets the animation state to the frame 0
       */
      AnimationState.prototype.reset = function () {
          this.shouldReset = true;
      };
      /**
       * Resets and pauses the animation
       */
      AnimationState.prototype.stop = function () {
          var _a;
          (_a = this.owner) === null || _a === void 0 ? void 0 : _a.stop(this);
      };
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], AnimationState.prototype, "clip", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AnimationState.prototype, "looping", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AnimationState.prototype, "weight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AnimationState.prototype, "playing", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AnimationState.prototype, "shouldReset", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AnimationState.prototype, "speed", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], AnimationState.prototype, "name", void 0);
      return AnimationState;
  }(ObservableComponent));

  /** @public */
  exports.InputEventType = void 0;
  (function (InputEventType) {
      InputEventType[InputEventType["DOWN"] = 0] = "DOWN";
      InputEventType[InputEventType["UP"] = 1] = "UP";
  })(exports.InputEventType || (exports.InputEventType = {}));
  /** @public */
  exports.CameraMode = void 0;
  (function (CameraMode) {
      CameraMode[CameraMode["FirstPerson"] = 0] = "FirstPerson";
      CameraMode[CameraMode["ThirdPerson"] = 1] = "ThirdPerson";
      // @internal
      CameraMode[CameraMode["BuildingToolGodMode"] = 2] = "BuildingToolGodMode";
  })(exports.CameraMode || (exports.CameraMode = {}));
  // @internal
  var AVATAR_OBSERVABLE = 'AVATAR_OBSERVABLE';
  /** @public */
  exports.LandRole = void 0;
  (function (LandRole) {
      LandRole["OWNER"] = "owner";
      LandRole["OPERATOR"] = "operator";
  })(exports.LandRole || (exports.LandRole = {}));

  /**
   * @public
   */
  exports.ActionButton = void 0;
  (function (ActionButton) {
      ActionButton["POINTER"] = "POINTER";
      ActionButton["PRIMARY"] = "PRIMARY";
      ActionButton["SECONDARY"] = "SECONDARY";
      ActionButton["ANY"] = "ANY";
      ActionButton["FORWARD"] = "FORWARD";
      ActionButton["BACKWARD"] = "BACKWARD";
      ActionButton["RIGHT"] = "RIGHT";
      ActionButton["LEFT"] = "LEFT";
      ActionButton["JUMP"] = "JUMP";
      ActionButton["WALK"] = "WALK";
      ActionButton["ACTION_3"] = "ACTION_3";
      ActionButton["ACTION_4"] = "ACTION_4";
      ActionButton["ACTION_5"] = "ACTION_5";
      ActionButton["ACTION_6"] = "ACTION_6";
  })(exports.ActionButton || (exports.ActionButton = {}));
  /**
   * @public
   */
  var PointerEventComponent = /** @class */ (function () {
      function PointerEventComponent(callback) {
          this.callback = callback;
          if (!callback || !('apply' in callback) || !('call' in callback)) {
              throw new Error('Callback is not a function');
          }
          Input.ensureInstance();
      }
      return PointerEventComponent;
  }());
  /**
   * @public
   */
  var GlobalPointerDown = /** @class */ (function (_super) {
      __extends(GlobalPointerDown, _super);
      function GlobalPointerDown() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      GlobalPointerDown = __decorate([
          Component('pointerDown')
      ], GlobalPointerDown);
      return GlobalPointerDown;
  }(PointerEventComponent));
  /**
   * @public
   */
  var GlobalPointerUp = /** @class */ (function (_super) {
      __extends(GlobalPointerUp, _super);
      function GlobalPointerUp() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      GlobalPointerUp = __decorate([
          Component('pointerUp')
      ], GlobalPointerUp);
      return GlobalPointerUp;
  }(PointerEventComponent));
  /**
   * @public
   */
  var Subscription = /** @class */ (function () {
      function Subscription(fn, useRaycast) {
          this.fn = fn;
          this.useRaycast = useRaycast;
      }
      return Subscription;
  }());
  /**
   * @public
   */
  var Input = /** @class */ (function () {
      function Input() {
          // @internal
          this.buttonIdMapping = [
              exports.ActionButton.POINTER,
              exports.ActionButton.PRIMARY,
              exports.ActionButton.SECONDARY,
              exports.ActionButton.ANY,
              exports.ActionButton.FORWARD,
              exports.ActionButton.BACKWARD,
              exports.ActionButton.RIGHT,
              exports.ActionButton.LEFT,
              exports.ActionButton.JUMP,
              exports.ActionButton.WALK,
              exports.ActionButton.ACTION_3,
              exports.ActionButton.ACTION_4,
              exports.ActionButton.ACTION_5,
              exports.ActionButton.ACTION_6
          ];
          // @internal
          this.subscriptions = this.buttonIdMapping.reduce(function (acc, k) {
              var _a;
              return (__assign(__assign({}, acc), (_a = {}, _a[k] = { BUTTON_DOWN: [], BUTTON_UP: [] }, _a)));
          }, {});
          this.internalState = this.buttonIdMapping.reduce(function (acc, k) {
              var _a;
              return (__assign(__assign({}, acc), (_a = {}, _a[k] = { BUTTON_DOWN: false }, _a)));
          }, {});
      }
      Object.defineProperty(Input, "instance", {
          get: function () {
              Input.ensureInstance();
              return Input._instance;
          },
          enumerable: false,
          configurable: true
      });
      Input.ensureInstance = function () {
          if (!Input._instance) {
              Input._instance = new Input();
          }
      };
      /**
       * Allows to know if a button is pressed
       *
       * Returns true if the button is pressed
       * @param buttonId - The id of the button.
       */
      Input.prototype.isButtonPressed = function (buttonId) {
          return this.internalState[buttonId];
      };
      /**
       * Subscribes to an input event and triggers the provided callback.
       *
       * Returns a function that can be called to remove the subscription.
       * @param eventName - The name of the event (see InputEventKind).
       * @param buttonId - The id of the button.
       * @param useRaycast - Enables getting raycast information.
       * @param fn - A callback function to be called when the event is triggered.
       */
      Input.prototype.subscribe = function (eventName, buttonId, useRaycast, fn) {
          var _this = this;
          this.subscriptions[buttonId][eventName].push(new Subscription(fn, useRaycast));
          return function () {
              _this.unsubscribe(eventName, buttonId, fn);
          };
      };
      /**
       * Removes an existing input event subscription.
       * @param eventName - The name of the event (see InputEventKind).
       * @param buttonId - The id of the button.
       * @param fn - The callback function used when subscribing to the event.
       */
      Input.prototype.unsubscribe = function (eventName, buttonId, fn) {
          var index = this.getSubscriptionId(eventName, buttonId, fn);
          if (index > -1) {
              return this.subscriptions[buttonId][eventName].splice(index, 1);
          }
          return false;
      };
      Input.prototype.handlePointerEvent = function (data) {
          var button = this.getPointerById(data.buttonId);
          if (!button) {
              return;
          }
          var eventResult = __assign(__assign({}, data), { button: button, direction: new dist.Vector3().copyFrom(data.direction), origin: new dist.Vector3().copyFrom(data.origin), hit: undefined });
          var hit = data.hit
              ? __assign(__assign({}, data.hit), { hitPoint: new dist.Vector3().copyFrom(data.hit.hitPoint), normal: new dist.Vector3().copyFrom(data.hit.normal), worldNormal: new dist.Vector3().copyFrom(data.hit.worldNormal) }) : undefined;
          if (data.type === exports.InputEventType.DOWN) {
              this.internalState[button].BUTTON_DOWN = true;
              for (var i = 0; i < this.subscriptions[button]['BUTTON_DOWN'].length; i++) {
                  var subscription = this.subscriptions[button]['BUTTON_DOWN'][i];
                  // remove hit information when raycast is disabled
                  if (subscription.useRaycast) {
                      eventResult.hit = hit;
                  }
                  else {
                      eventResult.hit = undefined;
                  }
                  subscription.fn(eventResult);
              }
              if (hit && hit.entityId && DisposableComponent.engine) {
                  var entity = DisposableComponent.engine.entities[hit.entityId];
                  var handler = entity && entity.getComponentOrNull(GlobalPointerDown);
                  if (handler) {
                      eventResult.hit = hit;
                      handler.callback(eventResult);
                  }
              }
          }
          else {
              this.internalState[button].BUTTON_DOWN = false;
              for (var i = 0; i < this.subscriptions[button]['BUTTON_UP'].length; i++) {
                  var subscription = this.subscriptions[button]['BUTTON_UP'][i];
                  // remove hit information when raycast is disabled
                  if (subscription.useRaycast) {
                      eventResult.hit = hit;
                  }
                  else {
                      eventResult.hit = undefined;
                  }
                  subscription.fn(eventResult);
              }
              if (hit && hit.entityId && DisposableComponent.engine) {
                  var entity = DisposableComponent.engine.entities[hit.entityId];
                  var handler = entity && entity.getComponentOrNull(GlobalPointerUp);
                  if (handler) {
                      eventResult.hit = hit;
                      handler.callback(eventResult);
                  }
              }
          }
      };
      Input.prototype.getSubscriptionId = function (eventName, buttonId, fn) {
          for (var i = 0; i < this.subscriptions[buttonId][eventName].length; i++) {
              if (this.subscriptions[buttonId][eventName][i].fn === fn) {
                  return i;
              }
          }
          return -1;
      };
      Input.prototype.getPointerById = function (id) {
          if (id < 0 || id >= this.buttonIdMapping.length) {
              return null;
          }
          var actionButton = this.buttonIdMapping[id];
          if (actionButton === exports.ActionButton.ANY) {
              return null;
          }
          return actionButton;
      };
      return Input;
  }());

  /**
   * @public
   */
  exports.CLASS_ID = void 0;
  (function (CLASS_ID) {
      CLASS_ID[CLASS_ID["TRANSFORM"] = 1] = "TRANSFORM";
      CLASS_ID[CLASS_ID["UUID_CALLBACK"] = 8] = "UUID_CALLBACK";
      CLASS_ID[CLASS_ID["BOX_SHAPE"] = 16] = "BOX_SHAPE";
      CLASS_ID[CLASS_ID["SPHERE_SHAPE"] = 17] = "SPHERE_SHAPE";
      CLASS_ID[CLASS_ID["PLANE_SHAPE"] = 18] = "PLANE_SHAPE";
      CLASS_ID[CLASS_ID["CONE_SHAPE"] = 19] = "CONE_SHAPE";
      CLASS_ID[CLASS_ID["CYLINDER_SHAPE"] = 20] = "CYLINDER_SHAPE";
      CLASS_ID[CLASS_ID["TEXT_SHAPE"] = 21] = "TEXT_SHAPE";
      CLASS_ID[CLASS_ID["NFT_SHAPE"] = 22] = "NFT_SHAPE";
      CLASS_ID[CLASS_ID["UI_WORLD_SPACE_SHAPE"] = 23] = "UI_WORLD_SPACE_SHAPE";
      CLASS_ID[CLASS_ID["UI_SCREEN_SPACE_SHAPE"] = 24] = "UI_SCREEN_SPACE_SHAPE";
      CLASS_ID[CLASS_ID["UI_CONTAINER_RECT"] = 25] = "UI_CONTAINER_RECT";
      CLASS_ID[CLASS_ID["UI_CONTAINER_STACK"] = 26] = "UI_CONTAINER_STACK";
      CLASS_ID[CLASS_ID["UI_TEXT_SHAPE"] = 27] = "UI_TEXT_SHAPE";
      CLASS_ID[CLASS_ID["UI_INPUT_TEXT_SHAPE"] = 28] = "UI_INPUT_TEXT_SHAPE";
      CLASS_ID[CLASS_ID["UI_IMAGE_SHAPE"] = 29] = "UI_IMAGE_SHAPE";
      CLASS_ID[CLASS_ID["UI_SLIDER_SHAPE"] = 30] = "UI_SLIDER_SHAPE";
      CLASS_ID[CLASS_ID["CIRCLE_SHAPE"] = 31] = "CIRCLE_SHAPE";
      CLASS_ID[CLASS_ID["BILLBOARD"] = 32] = "BILLBOARD";
      CLASS_ID[CLASS_ID["ANIMATION"] = 33] = "ANIMATION";
      CLASS_ID[CLASS_ID["FONT"] = 34] = "FONT";
      CLASS_ID[CLASS_ID["UI_FULLSCREEN_SHAPE"] = 40] = "UI_FULLSCREEN_SHAPE";
      CLASS_ID[CLASS_ID["UI_BUTTON_SHAPE"] = 41] = "UI_BUTTON_SHAPE";
      CLASS_ID[CLASS_ID["GLTF_SHAPE"] = 54] = "GLTF_SHAPE";
      CLASS_ID[CLASS_ID["OBJ_SHAPE"] = 55] = "OBJ_SHAPE";
      CLASS_ID[CLASS_ID["AVATAR_SHAPE"] = 56] = "AVATAR_SHAPE";
      CLASS_ID[CLASS_ID["BASIC_MATERIAL"] = 64] = "BASIC_MATERIAL";
      CLASS_ID[CLASS_ID["PBR_MATERIAL"] = 65] = "PBR_MATERIAL";
      CLASS_ID[CLASS_ID["HIGHLIGHT_ENTITY"] = 66] = "HIGHLIGHT_ENTITY";
      /** @deprecated Sound has been deprecataed */
      CLASS_ID[CLASS_ID["SOUND"] = 67] = "SOUND";
      CLASS_ID[CLASS_ID["TEXTURE"] = 68] = "TEXTURE";
      CLASS_ID[CLASS_ID["VIDEO_CLIP"] = 70] = "VIDEO_CLIP";
      CLASS_ID[CLASS_ID["VIDEO_TEXTURE"] = 71] = "VIDEO_TEXTURE";
      CLASS_ID[CLASS_ID["AVATAR_TEXTURE"] = 72] = "AVATAR_TEXTURE";
      CLASS_ID[CLASS_ID["VIDEO_REALTIME_TEXTURE"] = 73] = "VIDEO_REALTIME_TEXTURE";
      CLASS_ID[CLASS_ID["VIDEO_REALTIME_STREAM"] = 74] = "VIDEO_REALTIME_STREAM";    
      CLASS_ID[CLASS_ID["AUDIO_CLIP"] = 200] = "AUDIO_CLIP";
      CLASS_ID[CLASS_ID["AUDIO_SOURCE"] = 201] = "AUDIO_SOURCE";
      CLASS_ID[CLASS_ID["AUDIO_STREAM"] = 202] = "AUDIO_STREAM";
      CLASS_ID[CLASS_ID["GIZMOS"] = 203] = "GIZMOS";
      CLASS_ID[CLASS_ID["SMART_ITEM"] = 204] = "SMART_ITEM";
      CLASS_ID[CLASS_ID["AVATAR_MODIFIER_AREA"] = 205] = "AVATAR_MODIFIER_AREA";
      CLASS_ID[CLASS_ID["AVATAR_ATTACH"] = 206] = "AVATAR_ATTACH";
      CLASS_ID[CLASS_ID["CAMERA_MODE_AREA"] = 207] = "CAMERA_MODE_AREA";
      // For state sync only
      CLASS_ID[CLASS_ID["NAME"] = 300] = "NAME";
      CLASS_ID[CLASS_ID["LOCKED_ON_EDIT"] = 301] = "LOCKED_ON_EDIT";
      CLASS_ID[CLASS_ID["VISIBLE_ON_EDIT"] = 302] = "VISIBLE_ON_EDIT";
  })(exports.CLASS_ID || (exports.CLASS_ID = {}));
  /** @public */
  exports.AvatarModifiers = void 0;
  (function (AvatarModifiers) {
      AvatarModifiers["HIDE_AVATARS"] = "HIDE_AVATARS";
      AvatarModifiers["DISABLE_PASSPORTS"] = "DISABLE_PASSPORTS";
  })(exports.AvatarModifiers || (exports.AvatarModifiers = {}));
  /**
   * Define an area where avatars can be modified in some way
   * @public
   */
  var AvatarModifierArea = /** @class */ (function (_super) {
      __extends(AvatarModifierArea, _super);
      function AvatarModifierArea(args) {
          var _this = _super.call(this) || this;
          _this.area = args.area;
          _this.modifiers = args.modifiers;
          _this.excludeIds = args.excludeIds;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], AvatarModifierArea.prototype, "area", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Array)
      ], AvatarModifierArea.prototype, "modifiers", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Array)
      ], AvatarModifierArea.prototype, "excludeIds", void 0);
      AvatarModifierArea = __decorate([
          Component('engine.avatarModifierArea', exports.CLASS_ID.AVATAR_MODIFIER_AREA),
          __metadata("design:paramtypes", [Object])
      ], AvatarModifierArea);
      return AvatarModifierArea;
  }(ObservableComponent));
  /**
   * @public
   */
  var Transform = /** @class */ (function (_super) {
      __extends(Transform, _super);
      function Transform(args) {
          if (args === void 0) { args = {}; }
          var _this = _super.call(this) || this;
          _this.position = args.position || dist.Vector3.Zero();
          _this.rotation = args.rotation || dist.Quaternion.Identity;
          _this.scale = args.scale || new dist.Vector3(1, 1, 1);
          return _this;
      }
      Object.defineProperty(Transform.prototype, "eulerAngles", {
          /**
           * @public
           * The rotation as Euler angles in degrees.
           */
          get: function () {
              return this.rotation.eulerAngles;
          },
          enumerable: false,
          configurable: true
      });
      /**
       * @public
       * Rotates the transform so the forward vector points at target's current position.
       */
      Transform.prototype.lookAt = function (target, worldUp) {
          if (worldUp === void 0) { worldUp = dist.MathTmp.staticUp; }
          var result = new dist.Matrix();
          dist.Matrix.LookAtLHToRef(this.position, target, worldUp, result);
          result.invert();
          dist.Quaternion.FromRotationMatrixToRef(result, this.rotation);
          return this;
      };
      /**
       * @public
       * Applies a rotation of euler angles around the x, y and z axis.
       */
      Transform.prototype.rotate = function (axis, angle) {
          this.rotation.multiplyInPlace(this.rotation.angleAxis(angle, axis));
          return this;
      };
      /**
       * @public
       * Moves the transform in the direction and distance of translation.
       */
      Transform.prototype.translate = function (vec) {
          this.position.addInPlace(vec);
          return this;
      };
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Vector3)
      ], Transform.prototype, "position", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Quaternion)
      ], Transform.prototype, "rotation", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Vector3)
      ], Transform.prototype, "scale", void 0);
      Transform = __decorate([
          Component('engine.transform', exports.CLASS_ID.TRANSFORM),
          __metadata("design:paramtypes", [Object])
      ], Transform);
      return Transform;
  }(ObservableComponent));
  /** @public */
  exports.AttachToAvatarAnchorPointId = void 0;
  (function (AttachToAvatarAnchorPointId) {
      AttachToAvatarAnchorPointId[AttachToAvatarAnchorPointId["Position"] = 0] = "Position";
      AttachToAvatarAnchorPointId[AttachToAvatarAnchorPointId["NameTag"] = 1] = "NameTag";
      /** @internal */
      AttachToAvatarAnchorPointId[AttachToAvatarAnchorPointId["LeftHand"] = 2] = "LeftHand";
      /** @internal */
      AttachToAvatarAnchorPointId[AttachToAvatarAnchorPointId["RightHand"] = 3] = "RightHand";
  })(exports.AttachToAvatarAnchorPointId || (exports.AttachToAvatarAnchorPointId = {}));
  /**
   * @public
   */
  var AttachToAvatar = /** @class */ (function (_super) {
      __extends(AttachToAvatar, _super);
      function AttachToAvatar(args) {
          if (args === void 0) { args = {}; }
          var _this = _super.call(this) || this;
          _this.avatarId = args.avatarId || '';
          _this.anchorPointId =
              args.anchorPointId || exports.AttachToAvatarAnchorPointId.Position;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AttachToAvatar.prototype, "avatarId", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AttachToAvatar.prototype, "anchorPointId", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AttachToAvatar.prototype, "avatarSceneId", void 0);
      AttachToAvatar = __decorate([
          Component('engine.transform', exports.CLASS_ID.AVATAR_ATTACH),
          __metadata("design:paramtypes", [Object])
      ], AttachToAvatar);
      return AttachToAvatar;
  }(ObservableComponent));
  /**
   * Billboard defines a behavior that makes the entity face the camera in any moment.
   * @public
   */
  var Billboard = /** @class */ (function (_super) {
      __extends(Billboard, _super);
      function Billboard(x, y, z) {
          if (x === void 0) { x = true; }
          if (y === void 0) { y = true; }
          if (z === void 0) { z = true; }
          var _this = _super.call(this) || this;
          _this.x = true;
          _this.y = true;
          _this.z = true;
          _this.x = x;
          _this.y = y;
          _this.z = z;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Billboard.prototype, "x", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Billboard.prototype, "y", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Billboard.prototype, "z", void 0);
      Billboard = __decorate([
          Component('engine.billboard', exports.CLASS_ID.BILLBOARD),
          __metadata("design:paramtypes", [Boolean, Boolean, Boolean])
      ], Billboard);
      return Billboard;
  }(ObservableComponent));
  /**
   * @public
   */
  var Shape = /** @class */ (function (_super) {
      __extends(Shape, _super);
      function Shape() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Set to true to turn on the collider for the entity.
           */
          _this.withCollisions = true;
          /**
           * Set to true to turn on the PointerEvents blocking for the entity.
           */
          _this.isPointerBlocker = true;
          /**
           * Defines if the entity and its children should be rendered
           */
          _this.visible = true;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Shape.prototype, "withCollisions", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Shape.prototype, "isPointerBlocker", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Shape.prototype, "visible", void 0);
      return Shape;
  }(ObservableComponent));
  /**
   * @public
   */
  var BoxShape = /** @class */ (function (_super) {
      __extends(BoxShape, _super);
      function BoxShape() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Array)
      ], BoxShape.prototype, "uvs", void 0);
      BoxShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.BOX_SHAPE)
      ], BoxShape);
      return BoxShape;
  }(Shape));
  /**
   * @public
   */
  var SphereShape = /** @class */ (function (_super) {
      __extends(SphereShape, _super);
      function SphereShape() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      SphereShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.SPHERE_SHAPE)
      ], SphereShape);
      return SphereShape;
  }(Shape));
  /**
   * @public
   */
  var CircleShape = /** @class */ (function (_super) {
      __extends(CircleShape, _super);
      function CircleShape() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CircleShape.prototype, "segments", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CircleShape.prototype, "arc", void 0);
      CircleShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.CIRCLE_SHAPE)
      ], CircleShape);
      return CircleShape;
  }(Shape));
  /**
   * @public
   */
  var PlaneShape = /** @class */ (function (_super) {
      __extends(PlaneShape, _super);
      function PlaneShape() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Sets the horizontal length of the plane. Defaults to 1.
           */
          _this.width = 1;
          /**
           * Sets the vertical length of the plane. Defaults to 1.
           */
          _this.height = 1;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], PlaneShape.prototype, "width", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], PlaneShape.prototype, "height", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Array)
      ], PlaneShape.prototype, "uvs", void 0);
      PlaneShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.PLANE_SHAPE)
      ], PlaneShape);
      return PlaneShape;
  }(Shape));
  /**
   * @public
   */
  var ConeShape = /** @class */ (function (_super) {
      __extends(ConeShape, _super);
      function ConeShape() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * The radius of the top of a truncated cone. Defaults to 0.
           */
          _this.radiusTop = 0;
          /**
           * The radius of the base of the cone. Defaults to 1.
           */
          _this.radiusBottom = 1;
          /**
           * Sets the number of rings along the cone height (positive integer). Defaults to 1.
           */
          _this.segmentsHeight = 1;
          /**
           * Sets the number of cone sides (positive integer). Defaults to 36.
           */
          _this.segmentsRadial = 36;
          /**
           * Adds two extra faces per subdivision to enclose the cone around its height axis.
           * Defaults to false.
           */
          _this.openEnded = false;
          /**
           * Sets the radius of the top and bottom caps at once.
           *
           * Properties `radiusTop` and `radiusBottom` are prioritized over this one.
           */
          _this.radius = null;
          /**
           * Sets the ratio (max 1) to apply to the circumference to slice the cone. Defaults to 360.
           */
          _this.arc = 360;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], ConeShape.prototype, "radiusTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], ConeShape.prototype, "radiusBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], ConeShape.prototype, "segmentsHeight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], ConeShape.prototype, "segmentsRadial", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], ConeShape.prototype, "openEnded", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], ConeShape.prototype, "radius", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], ConeShape.prototype, "arc", void 0);
      ConeShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.CONE_SHAPE)
      ], ConeShape);
      return ConeShape;
  }(Shape));
  /**
   * @public
   */
  var CylinderShape = /** @class */ (function (_super) {
      __extends(CylinderShape, _super);
      function CylinderShape() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * The radius of the top of the cylinder. Defaults to 0.
           */
          _this.radiusTop = 1;
          /**
           * The radius of the base of the cylinder. Defaults to 1.
           */
          _this.radiusBottom = 1;
          /**
           * Sets the number of rings along the cylinder height (positive integer). Defaults to 1.
           */
          _this.segmentsHeight = 1;
          /**
           * Sets the number of cylinder sides (positive integer). Defaults to 36.
           */
          _this.segmentsRadial = 36;
          /**
           * Adds two extra faces per subdivision to enclose the cylinder around its height axis.
           * Defaults to false.
           */
          _this.openEnded = false;
          /**
           * Sets the radius of the top and bottom caps at once.
           *
           * Properties `radiusTop` and `radiusBottom` are prioritized over this one.
           */
          _this.radius = null;
          /**
           * Sets the ratio (max 1) to apply to the circumference to slice the cylinder. Defaults to 360.
           */
          _this.arc = 360;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CylinderShape.prototype, "radiusTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CylinderShape.prototype, "radiusBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CylinderShape.prototype, "segmentsHeight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CylinderShape.prototype, "segmentsRadial", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], CylinderShape.prototype, "openEnded", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], CylinderShape.prototype, "radius", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CylinderShape.prototype, "arc", void 0);
      CylinderShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.CYLINDER_SHAPE)
      ], CylinderShape);
      return CylinderShape;
  }(Shape));
  /**
   * @public
   */
  var GLTFShape = /** @class */ (function (_super) {
      __extends(GLTFShape, _super);
      function GLTFShape(src) {
          var _this = _super.call(this) || this;
          _this.src = src;
          return _this;
      }
      __decorate([
          Shape.readonly,
          __metadata("design:type", String)
      ], GLTFShape.prototype, "src", void 0);
      GLTFShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.GLTF_SHAPE),
          __metadata("design:paramtypes", [String])
      ], GLTFShape);
      return GLTFShape;
  }(Shape));
  /** @public */
  exports.PictureFrameStyle = void 0;
  (function (PictureFrameStyle) {
      PictureFrameStyle[PictureFrameStyle["Classic"] = 0] = "Classic";
      PictureFrameStyle[PictureFrameStyle["Baroque_Ornament"] = 1] = "Baroque_Ornament";
      PictureFrameStyle[PictureFrameStyle["Diamond_Ornament"] = 2] = "Diamond_Ornament";
      PictureFrameStyle[PictureFrameStyle["Minimal_Wide"] = 3] = "Minimal_Wide";
      PictureFrameStyle[PictureFrameStyle["Minimal_Grey"] = 4] = "Minimal_Grey";
      PictureFrameStyle[PictureFrameStyle["Blocky"] = 5] = "Blocky";
      PictureFrameStyle[PictureFrameStyle["Gold_Edges"] = 6] = "Gold_Edges";
      PictureFrameStyle[PictureFrameStyle["Gold_Carved"] = 7] = "Gold_Carved";
      PictureFrameStyle[PictureFrameStyle["Gold_Wide"] = 8] = "Gold_Wide";
      PictureFrameStyle[PictureFrameStyle["Gold_Rounded"] = 9] = "Gold_Rounded";
      PictureFrameStyle[PictureFrameStyle["Metal_Medium"] = 10] = "Metal_Medium";
      PictureFrameStyle[PictureFrameStyle["Metal_Wide"] = 11] = "Metal_Wide";
      PictureFrameStyle[PictureFrameStyle["Metal_Slim"] = 12] = "Metal_Slim";
      PictureFrameStyle[PictureFrameStyle["Metal_Rounded"] = 13] = "Metal_Rounded";
      PictureFrameStyle[PictureFrameStyle["Pins"] = 14] = "Pins";
      PictureFrameStyle[PictureFrameStyle["Minimal_Black"] = 15] = "Minimal_Black";
      PictureFrameStyle[PictureFrameStyle["Minimal_White"] = 16] = "Minimal_White";
      PictureFrameStyle[PictureFrameStyle["Tape"] = 17] = "Tape";
      PictureFrameStyle[PictureFrameStyle["Wood_Slim"] = 18] = "Wood_Slim";
      PictureFrameStyle[PictureFrameStyle["Wood_Wide"] = 19] = "Wood_Wide";
      PictureFrameStyle[PictureFrameStyle["Wood_Twigs"] = 20] = "Wood_Twigs";
      PictureFrameStyle[PictureFrameStyle["Canvas"] = 21] = "Canvas";
      PictureFrameStyle[PictureFrameStyle["None"] = 22] = "None";
  })(exports.PictureFrameStyle || (exports.PictureFrameStyle = {}));
  /**
   * @public
   */
  var NFTShape = /** @class */ (function (_super) {
      __extends(NFTShape, _super);
      function NFTShape(src, args) {
          if (args === void 0) { args = {}; }
          var _this = _super.call(this) || this;
          _this.src = src;
          var color = new dist.Color3(0.6404918, 0.611472, 0.8584906);
          var style = exports.PictureFrameStyle.Classic;
          // check if args is color (backwards compatibility)
          if ('r' in args) {
              color = args;
          }
          else if (args !== null) {
              if (args.color)
                  color = args.color;
              if (args.style)
                  style = args.style;
          }
          _this.color = color;
          _this.style = style;
          return _this;
      }
      __decorate([
          Shape.readonly,
          __metadata("design:type", String)
      ], NFTShape.prototype, "src", void 0);
      __decorate([
          Shape.readonly,
          __metadata("design:type", Number)
      ], NFTShape.prototype, "style", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color3)
      ], NFTShape.prototype, "color", void 0);
      NFTShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.NFT_SHAPE),
          __metadata("design:paramtypes", [String, Object])
      ], NFTShape);
      return NFTShape;
  }(Shape));
  /**
   * @public
   */
  var Texture = /** @class */ (function (_super) {
      __extends(Texture, _super);
      function Texture(src, opts) {
          var _this = _super.call(this) || this;
          var base64Test = new RegExp('data:[a-z-]+/[a-z-]+;base64');
          if (src.length > 2048 || base64Test.test(src)) {
              log('⚠️🚨 Base64 textures will be deprecated in version 7 of decentraland-ecs');
          }
          _this.src = src;
          if (opts) {
              for (var i in opts) {
                  var that = _this;
                  that[i] = opts[i];
              }
          }
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], Texture.prototype, "src", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Number)
      ], Texture.prototype, "samplingMode", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Number)
      ], Texture.prototype, "wrap", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Boolean)
      ], Texture.prototype, "hasAlpha", void 0);
      Texture = __decorate([
          DisposableComponent('engine.texture', exports.CLASS_ID.TEXTURE),
          __metadata("design:paramtypes", [String, Object])
      ], Texture);
      return Texture;
  }(ObservableComponent));
  /**
   * @public
   */
  var Animator = /** @class */ (function (_super) {
      __extends(Animator, _super);
      function Animator() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.states = [];
          return _this;
      }
      /**
       * Adds an AnimationState to the animation lists.
       */
      Animator.prototype.addClip = function (clip) {
          var _this = this;
          this.states.push(clip);
          clip.onChange(function () {
              _this.dirty = true;
          });
          clip.owner = this;
          return this;
      };
      /**
       * Gets the animation clip instance for the specified clip name.
       * If the clip doesn't exist a new one will be created.
       */
      Animator.prototype.getClip = function (clipName) {
          for (var i = 0; i < this.states.length; i++) {
              var clip = this.states[i];
              if (clip.clip === clipName) {
                  return clip;
              }
          }
          var newClip = new AnimationState(clipName);
          this.addClip(newClip);
          return newClip;
      };
      /**
       * Resets and pauses the animation state, if the clip is null it will stop all animations on this animator
       */
      Animator.prototype.stop = function (clip) {
          if (clip) {
              clip.playing = false;
              clip.shouldReset = true;
          }
          else {
              for (var i = 0; i < this.states.length; i++) {
                  var animationState = this.states[i];
                  this.stop(animationState);
              }
          }
      };
      /**
       * Starts the animation
       */
      Animator.prototype.play = function (clip, reset) {
          if (reset === void 0) { reset = false; }
          for (var i = 0; i < this.states.length; i++) {
              var animationState = this.states[i];
              if (animationState.layer === clip.layer && clip !== animationState) {
                  this.pause(animationState);
              }
          }
          if (reset)
              clip.shouldReset = true;
          clip.playing = true;
          clip.dirty = true;
          clip.data.nonce = Math.random();
      };
      /**
       * Pauses the animation state, if the clip is null it will pause all animations on this animator
       */
      Animator.prototype.pause = function (clip) {
          if (clip) {
              clip.playing = false;
          }
          else {
              for (var i = 0; i < this.states.length; i++) {
                  var animationState = this.states[i];
                  this.pause(animationState);
              }
          }
      };
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Array)
      ], Animator.prototype, "states", void 0);
      Animator = __decorate([
          Component('engine.animator', exports.CLASS_ID.ANIMATION)
      ], Animator);
      return Animator;
  }(Shape));
  /**
   * @public
   */
  var OBJShape = /** @class */ (function (_super) {
      __extends(OBJShape, _super);
      function OBJShape(src) {
          var _this = _super.call(this) || this;
          _this.src = src;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OBJShape.prototype, "src", void 0);
      OBJShape = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.OBJ_SHAPE),
          __metadata("design:paramtypes", [String])
      ], OBJShape);
      return OBJShape;
  }(Shape));
  /**
   * @public
   */
  var Font = /** @class */ (function (_super) {
      __extends(Font, _super);
      function Font(src) {
          if (src === void 0) { src = ''; }
          var _this = _super.call(this) || this;
          _this.src = src;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], Font.prototype, "src", void 0);
      Font = __decorate([
          DisposableComponent('engine.font', exports.CLASS_ID.FONT),
          __metadata("design:paramtypes", [String])
      ], Font);
      return Font;
  }(ObservableComponent));
  /**
   * @public
   */
  exports.Fonts = void 0;
  (function (Fonts) {
      /** @deprecated SanFrancisco has been deprecated. Use SansSerif instead.*/
      Fonts["SanFrancisco"] = "builtin:SF-UI-Text-Regular SDF";
      /** @deprecated SanFrancisco_Heavy has been deprecated. Use SansSerif_Heavy instead.*/
      Fonts["SanFrancisco_Heavy"] = "builtin:SF-UI-Text-Heavy SDF";
      /** @deprecated SanFrancisco_Semibold has been deprecated. Use SansSerif_SemiBold instead.*/
      Fonts["SanFrancisco_Semibold"] = "builtin:SF-UI-Text-Semibold SDF";
      Fonts["LiberationSans"] = "builtin:LiberationSans SDF";
      Fonts["SansSerif"] = "SansSerif";
      Fonts["SansSerif_Heavy"] = "SansSerif_Heavy";
      Fonts["SansSerif_Bold"] = "SansSerif_Bold";
      Fonts["SansSerif_SemiBold"] = "SansSerif_SemiBold";
  })(exports.Fonts || (exports.Fonts = {}));
  /**
   * @public
   */
  var TextShape = /** @class */ (function (_super) {
      __extends(TextShape, _super);
      function TextShape(value) {
          var _this = _super.call(this) || this;
          _this.outlineWidth = 0;
          _this.outlineColor = new dist.Color3(1, 1, 1);
          _this.color = new dist.Color3(1, 1, 1);
          _this.fontSize = 10;
          _this.opacity = 1.0;
          _this.value = '';
          _this.lineSpacing = '0px';
          _this.lineCount = 0;
          _this.textWrapping = false;
          _this.shadowBlur = 0;
          _this.shadowOffsetX = 0;
          _this.shadowOffsetY = 0;
          _this.shadowColor = new dist.Color3(1, 1, 1);
          _this.hTextAlign = 'center';
          _this.vTextAlign = 'center';
          _this.width = 1;
          _this.height = 1;
          _this.paddingTop = 0;
          _this.paddingRight = 0;
          _this.paddingBottom = 0;
          _this.paddingLeft = 0;
          _this.billboard = false;
          _this.visible = true;
          if (value) {
              _this.value = value;
          }
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "outlineWidth", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color3)
      ], TextShape.prototype, "outlineColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color3)
      ], TextShape.prototype, "color", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "fontSize", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Font)
      ], TextShape.prototype, "font", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "opacity", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], TextShape.prototype, "value", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], TextShape.prototype, "lineSpacing", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "lineCount", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], TextShape.prototype, "textWrapping", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "shadowBlur", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "shadowOffsetX", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "shadowOffsetY", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color3)
      ], TextShape.prototype, "shadowColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], TextShape.prototype, "hTextAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], TextShape.prototype, "vTextAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "width", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "height", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "paddingTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "paddingRight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "paddingBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], TextShape.prototype, "paddingLeft", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], TextShape.prototype, "billboard", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], TextShape.prototype, "visible", void 0);
      TextShape = __decorate([
          Component('engine.text', exports.CLASS_ID.TEXT_SHAPE),
          __metadata("design:paramtypes", [String])
      ], TextShape);
      return TextShape;
  }(ObservableComponent));
  /**
   * @public
   */
  exports.TransparencyMode = void 0;
  (function (TransparencyMode) {
      TransparencyMode[TransparencyMode["OPAQUE"] = 0] = "OPAQUE";
      TransparencyMode[TransparencyMode["ALPHA_TEST"] = 1] = "ALPHA_TEST";
      TransparencyMode[TransparencyMode["ALPHA_BLEND"] = 2] = "ALPHA_BLEND";
      TransparencyMode[TransparencyMode["ALPHA_TEST_AND_BLEND"] = 3] = "ALPHA_TEST_AND_BLEND";
      TransparencyMode[TransparencyMode["AUTO"] = 4] = "AUTO";
  })(exports.TransparencyMode || (exports.TransparencyMode = {}));
  /**
   * @public
   */
  var Material = /** @class */ (function (_super) {
      __extends(Material, _super);
      function Material() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Cutoff level for ALPHATEST mode. Range is between 0 and 1.
           * Defaults to 0.5
           */
          _this.alphaTest = 0.5;
          /**
           * Allow the material to cast shadows over other objects
           */
          _this.castShadows = true;
          /**
           * Sets the transparency mode of the material.
           * Defaults to -1.
           *
           * | Value | Type                                           |
           * | ----- | ---------------------------------------------- |
           * | 0     | OPAQUE  (default)                              |
           * | 1     | ALPHATEST                                      |
           * | 2     | ALPHABLEND                                     |
           * | 3     | ALPHATESTANDBLEND                              |
           * | 4     | AUTO (ALPHABLEND if alpha OPAQUE otherwise     |
           */
          _this.transparencyMode = exports.TransparencyMode.AUTO;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "alphaTest", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], Material.prototype, "albedoColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color3
          /**
           * Specifies the metallic scalar of the metallic/roughness workflow.
           * Can also be used to scale the metalness values of the metallic texture.
           * Defaults to  0.5.
           */
          )
      ], Material.prototype, "emissiveColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "metallic", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "roughness", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color3
          /**
           * Intensity of the direct lights e.g. the four lights available in scene.
           * This impacts both the direct diffuse and specular highlights.
           * Defaults to 1.
           */
          )
      ], Material.prototype, "reflectivityColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "directIntensity", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "microSurface", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "emissiveIntensity", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "specularIntensity", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Object)
      ], Material.prototype, "albedoTexture", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Object)
      ], Material.prototype, "alphaTexture", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Object)
      ], Material.prototype, "emissiveTexture", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Object)
      ], Material.prototype, "bumpTexture", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Material.prototype, "castShadows", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], Material.prototype, "transparencyMode", void 0);
      Material = __decorate([
          DisposableComponent('engine.material', exports.CLASS_ID.PBR_MATERIAL)
      ], Material);
      return Material;
  }(ObservableComponent));
  /**
   * @public
   */
  var BasicMaterial = /** @class */ (function (_super) {
      __extends(BasicMaterial, _super);
      function BasicMaterial() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * A number between 0 and 1.
           * Any pixel with an alpha lower than this value will be shown as transparent.
           */
          _this.alphaTest = 0.5;
          /**
           * Allow the material to cast shadows over other objects
           */
          _this.castShadows = true;
          return _this;
      }
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Object)
      ], BasicMaterial.prototype, "texture", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], BasicMaterial.prototype, "alphaTest", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], BasicMaterial.prototype, "castShadows", void 0);
      BasicMaterial = __decorate([
          DisposableComponent('engine.material', exports.CLASS_ID.BASIC_MATERIAL)
      ], BasicMaterial);
      return BasicMaterial;
  }(ObservableComponent));
  /**
   * @public
   */
  var OnUUIDEvent = /** @class */ (function (_super) {
      __extends(OnUUIDEvent, _super);
      function OnUUIDEvent(callback) {
          var _this = _super.call(this) || this;
          // @internal
          _this.uuid = newId('UUID');
          if (!callback || !('apply' in callback) || !('call' in callback)) {
              throw new Error('Callback is not a function');
          }
          _this.callback = callback;
          return _this;
      }
      OnUUIDEvent.uuidEvent = function (target, propertyKey) {
          if (delete target[propertyKey]) {
              var componentSymbol_1 = propertyKey + '_' + Math.random();
              target[componentSymbol_1] = undefined;
              Object.defineProperty(target, componentSymbol_1, __assign(__assign({}, Object.getOwnPropertyDescriptor(target, componentSymbol_1)), { enumerable: false }));
              Object.defineProperty(target, propertyKey.toString(), {
                  get: function () {
                      return this[componentSymbol_1];
                  },
                  set: function (value) {
                      var oldValue = this[componentSymbol_1];
                      if (value) {
                          if (value instanceof OnUUIDEvent) {
                              this.data[propertyKey] = value.uuid;
                          }
                          else {
                              throw new Error('value is not an OnUUIDEvent');
                          }
                      }
                      else {
                          this.data[propertyKey] = null;
                      }
                      this[componentSymbol_1] = value;
                      if (value !== oldValue) {
                          this.dirty = true;
                          for (var i = 0; i < this.subscriptions.length; i++) {
                              this.subscriptions[i](propertyKey, value, oldValue);
                          }
                      }
                  },
                  enumerable: true
              });
          }
      };
      OnUUIDEvent.prototype.toJSON = function () {
          return { uuid: this.uuid, type: this.type };
      };
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Function)
      ], OnUUIDEvent.prototype, "callback", void 0);
      return OnUUIDEvent;
  }(ObservableComponent));
  /**
   * @public
   */
  var OnPointerUUIDEvent = /** @class */ (function (_super) {
      __extends(OnPointerUUIDEvent, _super);
      function OnPointerUUIDEvent() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.button = exports.ActionButton.ANY;
          _this.hoverText = 'Interact';
          _this.distance = 10;
          _this.showFeedback = true;
          return _this;
      }
      OnPointerUUIDEvent.prototype.toJSON = function () {
          return {
              uuid: this.uuid,
              type: this.type,
              button: this.button,
              hoverText: this.hoverText,
              distance: this.distance,
              showFeedback: this.showFeedback
          };
      };
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], OnPointerUUIDEvent.prototype, "button", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], OnPointerUUIDEvent.prototype, "hoverText", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], OnPointerUUIDEvent.prototype, "distance", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], OnPointerUUIDEvent.prototype, "showFeedback", void 0);
      return OnPointerUUIDEvent;
  }(OnUUIDEvent));
  /**
   * @internal
   */
  var OnPointerLock = /** @class */ (function (_super) {
      __extends(OnPointerLock, _super);
      function OnPointerLock() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = 'onPointerLock';
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnPointerLock.prototype, "type", void 0);
      OnPointerLock = __decorate([
          Component('engine.onPointerLock', exports.CLASS_ID.UUID_CALLBACK)
      ], OnPointerLock);
      return OnPointerLock;
  }(OnUUIDEvent));
  /**
   * @public
   */
  var OnAnimationEnd = /** @class */ (function (_super) {
      __extends(OnAnimationEnd, _super);
      function OnAnimationEnd() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = 'onAnimationEnd';
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnAnimationEnd.prototype, "type", void 0);
      OnAnimationEnd = __decorate([
          Component('engine.onAnimationEnd', exports.CLASS_ID.UUID_CALLBACK)
      ], OnAnimationEnd);
      return OnAnimationEnd;
  }(OnUUIDEvent));
  /**
   * @internal
   */
  var SmartItem = /** @class */ (function (_super) {
      __extends(SmartItem, _super);
      function SmartItem() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      SmartItem = __decorate([
          Component('engine.smartItem', exports.CLASS_ID.SMART_ITEM)
      ], SmartItem);
      return SmartItem;
  }(ObservableComponent));
  /**
   * @public
   */
  var VideoClip = /** @class */ (function (_super) {
      __extends(VideoClip, _super);
      function VideoClip(url) {
          var _this = _super.call(this) || this;
          _this.url = url;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], VideoClip.prototype, "url", void 0);
      VideoClip = __decorate([
          DisposableComponent('engine.VideoClip', exports.CLASS_ID.VIDEO_CLIP),
          __metadata("design:paramtypes", [String])
      ], VideoClip);
      return VideoClip;
  }(ObservableComponent));
  /** @public */
  exports.VideoStatus = void 0;
  (function (VideoStatus) {
      VideoStatus[VideoStatus["NONE"] = 0] = "NONE";
      VideoStatus[VideoStatus["ERROR"] = 1] = "ERROR";
      VideoStatus[VideoStatus["LOADING"] = 2] = "LOADING";
      VideoStatus[VideoStatus["READY"] = 3] = "READY";
      VideoStatus[VideoStatus["PLAYING"] = 4] = "PLAYING";
      VideoStatus[VideoStatus["BUFFERING"] = 5] = "BUFFERING";
  })(exports.VideoStatus || (exports.VideoStatus = {}));
  /**
   * @public
   */
 var VideoRealtimeStream = /** @class */ (function (_super) {
    __extends(VideoRealtimeStream, _super);
    function VideoRealtimeStream(url, streamId, provider) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.streamId = streamId;
        _this.provider = provider;
        return _this;
    }
    __decorate([
        ObservableComponent.readonly,
        __metadata("design:type", String)
    ], VideoRealtimeStream.prototype, "url", void 0);
     __decorate([
         ObservableComponent.readonly,
         __metadata("design:type", String)
     ], VideoRealtimeStream.prototype, "streamId", void 0);
     __decorate([
         ObservableComponent.readonly,
         __metadata("design:type", String)
     ], VideoRealtimeStream.prototype, "provider", void 0);
    VideoRealtimeStream = __decorate([
        DisposableComponent('engine.VideoRealtimeStream', exports.CLASS_ID.VIDEO_REALTIME_STREAM),
        __metadata("design:paramtypes", [String])
    ], VideoRealtimeStream);
    return VideoRealtimeStream;
}(ObservableComponent));
  /**
   * @public
   */
   var VideoRealtimeTexture = /** @class */ (function (_super) {
    __extends(VideoRealtimeTexture, _super);
    function VideoRealtimeTexture(videoClip, opts) {
        var _this = _super.call(this) || this;
        _this.volume = 1;
        _this.playbackRate = 1;
        _this.loop = false;
        _this.seek = -1;
        _this._position = -1;
        _this._videoLength = -1;
        _this._status = exports.VideoStatus.NONE;
        /**
         * Is this VideoRealtimeTexture playing?
         */
        _this.playing = false;
        if (!(videoClip instanceof VideoRealtimeStream)) {
            throw new Error("Trying to create Stream with an invalid VideoRealtimeStream");
        }
        _this.videoClipId = getComponentId(videoClip);
        if (opts) {
            for (var i in opts) {
                var that = _this;
                that[i] = opts[i];
            }
        }
        return _this;
    }
    VideoRealtimeTexture.prototype.play = function () {
        this.playing = true;
    };
    VideoRealtimeTexture.prototype.pause = function () {
        this.playing = false;
    };
    VideoRealtimeTexture.prototype.reset = function () {
        this.seekTime(0);
        this.pause();
    };
    VideoRealtimeTexture.prototype.seekTime = function (seconds) {
        this.seek = seconds;
        this.dirty = true;
        this.data.nonce = Math.random();
    };
    VideoRealtimeTexture.prototype.toJSON = function () {
        if (this.seek >= 0) {
            // the seek value was changed/used
            var ret = JSON.parse(JSON.stringify(_super.prototype.toJSON.call(this)));
            this.seek = -1;
            return ret;
        }
        return _super.prototype.toJSON.call(this);
    };
    VideoRealtimeTexture.prototype.update = function (videoEvent) {
        if (videoEvent.videoClipId === this.videoClipId) {
            this._status = videoEvent.videoStatus || exports.VideoStatus.NONE;
            this._videoLength = videoEvent.totalVideoLength;
            this._position = videoEvent.currentOffset;
        }
    };
    Object.defineProperty(VideoRealtimeTexture.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoRealtimeTexture.prototype, "videoLength", {
        get: function () {
            return this._videoLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoRealtimeTexture.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        ObservableComponent.readonly,
        __metadata("design:type", String)
    ], VideoRealtimeTexture.prototype, "videoClipId", void 0);
    __decorate([
        ObservableComponent.readonly,
        __metadata("design:type", Number)
    ], VideoRealtimeTexture.prototype, "samplingMode", void 0);
    __decorate([
        ObservableComponent.readonly,
        __metadata("design:type", Number)
    ], VideoRealtimeTexture.prototype, "wrap", void 0);
    __decorate([
        ObservableComponent.field,
        __metadata("design:type", Number)
    ], VideoRealtimeTexture.prototype, "volume", void 0);
    __decorate([
        ObservableComponent.field,
        __metadata("design:type", Number)
    ], VideoRealtimeTexture.prototype, "playbackRate", void 0);
    __decorate([
        ObservableComponent.field,
        __metadata("design:type", Boolean)
    ], VideoRealtimeTexture.prototype, "loop", void 0);
    __decorate([
        ObservableComponent.field,
        __metadata("design:type", Number)
    ], VideoRealtimeTexture.prototype, "seek", void 0);
    __decorate([
        ObservableComponent.field,
        __metadata("design:type", Boolean)
    ], VideoRealtimeTexture.prototype, "playing", void 0);
    VideoRealtimeTexture = __decorate([
        DisposableComponent('engine.VideoRealtimeTexture', exports.CLASS_ID.VIDEO_REALTIME_TEXTURE),
        __metadata("design:paramtypes", [VideoRealtimeStream, Object])
    ], VideoRealtimeTexture);
    return VideoRealtimeTexture;
  }(ObservableComponent));
  /**
   * @public
   */
  var VideoTexture = /** @class */ (function (_super) {
      __extends(VideoTexture, _super);
      function VideoTexture(videoClip, opts) {
          var _this = _super.call(this) || this;
          _this.volume = 1;
          _this.playbackRate = 1;
          _this.loop = false;
          _this.seek = -1;
          _this._position = -1;
          _this._videoLength = -1;
          _this._status = exports.VideoStatus.NONE;
          /**
           * Is this VideoTexture playing?
           */
          _this.playing = false;
          if (!(videoClip instanceof VideoClip)) {
              throw new Error("Trying to create VideoTexture(VideoClip) with an invalid VideoClip");
          }
          _this.videoClipId = getComponentId(videoClip);
          if (opts) {
              for (var i in opts) {
                  var that = _this;
                  that[i] = opts[i];
              }
          }
          return _this;
      }
      VideoTexture.prototype.play = function () {
          this.playing = true;
      };
      VideoTexture.prototype.pause = function () {
          this.playing = false;
      };
      VideoTexture.prototype.reset = function () {
          this.seekTime(0);
          this.pause();
      };
      VideoTexture.prototype.seekTime = function (seconds) {
          this.seek = seconds;
          this.dirty = true;
          this.data.nonce = Math.random();
      };
      VideoTexture.prototype.toJSON = function () {
          if (this.seek >= 0) {
              // the seek value was changed/used
              var ret = JSON.parse(JSON.stringify(_super.prototype.toJSON.call(this)));
              this.seek = -1;
              return ret;
          }
          return _super.prototype.toJSON.call(this);
      };
      VideoTexture.prototype.update = function (videoEvent) {
          if (videoEvent.videoClipId === this.videoClipId) {
              this._status = videoEvent.videoStatus || exports.VideoStatus.NONE;
              this._videoLength = videoEvent.totalVideoLength;
              this._position = videoEvent.currentOffset;
          }
      };
      Object.defineProperty(VideoTexture.prototype, "position", {
          get: function () {
              return this._position;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(VideoTexture.prototype, "videoLength", {
          get: function () {
              return this._videoLength;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(VideoTexture.prototype, "status", {
          get: function () {
              return this._status;
          },
          enumerable: false,
          configurable: true
      });
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], VideoTexture.prototype, "videoClipId", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Number)
      ], VideoTexture.prototype, "samplingMode", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Number)
      ], VideoTexture.prototype, "wrap", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], VideoTexture.prototype, "volume", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], VideoTexture.prototype, "playbackRate", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], VideoTexture.prototype, "loop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], VideoTexture.prototype, "seek", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], VideoTexture.prototype, "playing", void 0);
      VideoTexture = __decorate([
          DisposableComponent('engine.VideoTexture', exports.CLASS_ID.VIDEO_TEXTURE),
          __metadata("design:paramtypes", [VideoClip, Object])
      ], VideoTexture);
      return VideoTexture;
  }(ObservableComponent));
  /**
   * @public
   */
  var CameraModeArea = /** @class */ (function (_super) {
      __extends(CameraModeArea, _super);
      function CameraModeArea(args) {
          var _this = _super.call(this) || this;
          _this.area = args.area;
          _this.cameraMode = args.cameraMode;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], CameraModeArea.prototype, "area", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], CameraModeArea.prototype, "cameraMode", void 0);
      CameraModeArea = __decorate([
          Component('engine.cameraModeArea', exports.CLASS_ID.CAMERA_MODE_AREA),
          __metadata("design:paramtypes", [Object])
      ], CameraModeArea);
      return CameraModeArea;
  }(ObservableComponent));
  /**
   * @public
   */
  var AvatarTexture = /** @class */ (function (_super) {
      __extends(AvatarTexture, _super);
      function AvatarTexture(userId, opts) {
          var _this = _super.call(this) || this;
          _this.userId = userId;
          if (opts) {
              for (var i in opts) {
                  var that = _this;
                  that[i] = opts[i];
              }
          }
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], AvatarTexture.prototype, "userId", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Number)
      ], AvatarTexture.prototype, "samplingMode", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Number)
      ], AvatarTexture.prototype, "wrap", void 0);
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", Boolean)
      ], AvatarTexture.prototype, "hasAlpha", void 0);
      AvatarTexture = __decorate([
          DisposableComponent('engine.texture', exports.CLASS_ID.AVATAR_TEXTURE),
          __metadata("design:paramtypes", [String, Object])
      ], AvatarTexture);
      return AvatarTexture;
  }(ObservableComponent));

  /**
   * @public
   */
  var Camera = /** @class */ (function () {
      function Camera() {
          var _this = this;
          /** Camera position, relative to the parcel. */
          this.position = new dist.Vector3();
          /** Camera rotation */
          this.rotation = new dist.Quaternion();
          /** Feet position, relative to the parcel.  */
          this.feetPosition = new dist.Vector3();
          /** Camera position, absolute. */
          this.worldPosition = new dist.Vector3();
          // @internal
          this.lastEventPosition = { x: 0, y: 0, z: 0 };
          // @internal
          this.lastEventWorldPosition = { x: 0, y: 0, z: 0 };
          // @internal
          this.lastEventRotation = { x: 0, y: 0, z: 0, w: 1.0 };
          // @internal
          this._playerHeight = 1.6;
          // @internal
          this._cameraMode = exports.CameraMode.ThirdPerson;
          if (typeof dcl !== 'undefined') {
              dcl.subscribe('positionChanged');
              dcl.subscribe('rotationChanged');
              dcl.subscribe('cameraModeChanged');
              dcl.onEvent(function (event) {
                  switch (event.type) {
                      case 'positionChanged':
                          _this.positionChanged(event.data);
                          break;
                      case 'rotationChanged':
                          _this.rotationChanged(event.data);
                          break;
                      case 'cameraModeChanged':
                          _this.cameraModeChanged(event.data);
                          break;
                  }
              });
          }
          Object.defineProperty(this.position, 'x', {
              get: function () { return _this.lastEventPosition.x; }
          });
          Object.defineProperty(this.position, 'y', {
              get: function () { return _this.lastEventPosition.y; }
          });
          Object.defineProperty(this.position, 'z', {
              get: function () { return _this.lastEventPosition.z; }
          });
          Object.defineProperty(this.worldPosition, 'x', {
              get: function () { return _this.lastEventWorldPosition.x; }
          });
          Object.defineProperty(this.worldPosition, 'y', {
              get: function () { return _this.lastEventWorldPosition.y; }
          });
          Object.defineProperty(this.worldPosition, 'z', {
              get: function () { return _this.lastEventWorldPosition.z; }
          });
          Object.defineProperty(this.feetPosition, 'x', {
              get: function () { return _this.lastEventPosition.x; }
          });
          Object.defineProperty(this.feetPosition, 'y', {
              get: function () { return _this.lastEventPosition.y - _this.playerHeight; }
          });
          Object.defineProperty(this.feetPosition, 'z', {
              get: function () { return _this.lastEventPosition.z; }
          });
          Object.defineProperty(this.rotation, 'x', {
              get: function () { return _this.lastEventRotation.x; }
          });
          Object.defineProperty(this.rotation, 'y', {
              get: function () { return _this.lastEventRotation.y; }
          });
          Object.defineProperty(this.rotation, 'z', {
              get: function () { return _this.lastEventRotation.z; }
          });
          Object.defineProperty(this.rotation, 'w', {
              get: function () { return _this.lastEventRotation.w; }
          });
      }
      Object.defineProperty(Camera, "instance", {
          get: function () {
              if (!Camera._instance) {
                  Camera._instance = new Camera();
              }
              return Camera._instance;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Camera.prototype, "playerHeight", {
          /** Player height. */
          get: function () {
              return this._playerHeight;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(Camera.prototype, "cameraMode", {
          /** @deprecated Use onCameraModeChangedObservable Observable instead. */
          get: function () {
              return this._cameraMode;
          },
          enumerable: false,
          configurable: true
      });
      // @internal
      Camera.prototype.positionChanged = function (e) {
          this.lastEventPosition = e.position;
          this.lastEventWorldPosition = e.cameraPosition;
          this._playerHeight = e.playerHeight;
      };
      // @internal
      Camera.prototype.rotationChanged = function (e) {
          this.lastEventRotation = e.quaternion;
      };
      // @internal
      Camera.prototype.cameraModeChanged = function (e) {
          this._cameraMode = e.cameraMode;
      };
      return Camera;
  }());

  /**
   * @internal
   */
  var QueryPrefix;
  (function (QueryPrefix) {
      QueryPrefix["HitFirst"] = "rqhf";
      QueryPrefix["HitAll"] = "rqha";
  })(QueryPrefix || (QueryPrefix = {}));
  /**
   * @public
   */
  var PhysicsCast = /** @class */ (function () {
      function PhysicsCast() {
          this.queries = {};
      }
      Object.defineProperty(PhysicsCast, "instance", {
          get: function () {
              PhysicsCast.ensureInstance();
              return PhysicsCast._instance;
          },
          enumerable: false,
          configurable: true
      });
      PhysicsCast.ensureInstance = function () {
          if (!PhysicsCast._instance) {
              PhysicsCast._instance = new PhysicsCast();
          }
      };
      PhysicsCast.prototype.getRayFromCamera = function (distance) {
          var rotation = Camera.instance.rotation;
          var rotationMat = dist.Matrix.Identity();
          rotation.toRotationMatrix(rotationMat);
          var direction = dist.Vector3.TransformCoordinates(dist.Vector3.Forward(), rotationMat);
          var ray = {
              origin: Camera.instance.position,
              direction: direction,
              distance: distance
          };
          return ray;
      };
      PhysicsCast.prototype.getRayFromPositions = function (from, to) {
          var direction = to.subtract(from);
          var length = direction.length();
          var ray = {
              origin: from,
              direction: direction.normalize(),
              distance: length
          };
          return ray;
      };
      PhysicsCast.prototype.hitFirst = function (ray, hitCallback, id) {
          var queryId = typeof id === 'number' ? QueryPrefix.HitFirst + id : uuid();
          this.queries[queryId] = hitCallback;
          if (typeof dcl !== 'undefined') {
              dcl.query('raycast', { queryId: queryId, queryType: 'HitFirst', ray: ray });
          }
      };
      PhysicsCast.prototype.hitAll = function (ray, hitCallback, id) {
          var queryId = typeof id === 'number' ? QueryPrefix.HitAll + id : uuid();
          this.queries[queryId] = hitCallback;
          if (typeof dcl !== 'undefined') {
              dcl.query('raycast', { queryId: queryId, queryType: 'HitAll', ray: ray });
          }
      };
      PhysicsCast.prototype.hitFirstAvatar = function (_ray, _hitCallback) {
          log('not implemented yet');
      };
      PhysicsCast.prototype.hitAllAvatars = function (_ray, _hitCallback) {
          log('not implemented yet');
      };
      PhysicsCast.prototype.handleRaycastHitFirstResponse = function (response) {
          this.queries[response.payload.queryId](response.payload.payload);
          delete this.queries[response.payload.queryId];
      };
      PhysicsCast.prototype.handleRaycastHitAllResponse = function (response) {
          this.queries[response.payload.queryId](response.payload.payload);
          delete this.queries[response.payload.queryId];
      };
      return PhysicsCast;
  }());

  /**
   * @public
   */
  var RaycastEventSystem = /** @class */ (function () {
      function RaycastEventSystem() {
      }
      RaycastEventSystem.prototype.activate = function (engine) {
          engine.eventManager.addListener(RaycastResponse, this, function (event) {
              if (event.payload.queryType === 'HitFirst') {
                  PhysicsCast.instance.handleRaycastHitFirstResponse(event);
              }
              else if (event.payload.queryType === 'HitAll') {
                  PhysicsCast.instance.handleRaycastHitAllResponse(event);
              }
          });
          if (typeof dcl !== 'undefined') {
              dcl.subscribe('raycastResponse');
          }
      };
      RaycastEventSystem.prototype.deactivate = function () {
          if (typeof dcl !== 'undefined') {
              dcl.unsubscribe('raycastResponse');
          }
      };
      return RaycastEventSystem;
  }());
  /**
   * @public
   */
  var PointerEventSystem = /** @class */ (function () {
      function PointerEventSystem() {
      }
      PointerEventSystem.prototype.activate = function (engine) {
          engine.eventManager.addListener(PointerEvent, this, function (event) {
              Input.instance.handlePointerEvent(event.payload);
          });
          if (typeof dcl !== 'undefined') {
              dcl.subscribe('pointerUp');
              dcl.subscribe('pointerDown');
              dcl.subscribe('actionButtonEvent');
          }
      };
      PointerEventSystem.prototype.deactivate = function () {
          if (typeof dcl !== 'undefined') {
              dcl.unsubscribe('pointerUp');
              dcl.unsubscribe('pointerDown');
              dcl.unsubscribe('actionButtonEvent');
          }
      };
      return PointerEventSystem;
  }());
  /**
   * @public
   */
  var UUIDEventSystem = /** @class */ (function () {
      function UUIDEventSystem() {
          this.handlerMap = {};
      }
      UUIDEventSystem.prototype.activate = function (engine) {
          engine.eventManager.addListener(UUIDEvent, this, this.handleEvent);
          engine.eventManager.addListener(ComponentAdded, this, this.componentAdded);
          engine.eventManager.addListener(ComponentRemoved, this, this.componentRemoved);
          if (typeof dcl !== 'undefined') {
              dcl.subscribe('uuidEvent');
          }
      };
      UUIDEventSystem.prototype.deactivate = function () {
          if (typeof dcl !== 'undefined') {
              dcl.unsubscribe('uuidEvent');
          }
      };
      UUIDEventSystem.prototype.onAddEntity = function (entity) {
          for (var componentName in entity.components) {
              var component = entity.components[componentName];
              if (component instanceof OnUUIDEvent) {
                  this.handlerMap[component.uuid] = component;
              }
          }
      };
      UUIDEventSystem.prototype.onRemoveEntity = function (entity) {
          for (var componentName in entity.components) {
              var component = entity.components[componentName];
              if (component instanceof OnUUIDEvent) {
                  delete this.handlerMap[component.uuid];
              }
          }
      };
      UUIDEventSystem.prototype.componentAdded = function (event) {
          if (event.entity.isAddedToEngine()) {
              var component = event.entity.components[event.componentName];
              if (component instanceof OnUUIDEvent) {
                  this.handlerMap[component.uuid] = component;
              }
          }
      };
      UUIDEventSystem.prototype.componentRemoved = function (event) {
          if (event.entity.isAddedToEngine()) {
              if (event.component instanceof OnUUIDEvent) {
                  delete this.handlerMap[event.component.uuid];
              }
          }
      };
      UUIDEventSystem.prototype.handleEvent = function (event) {
          if (event.uuid in this.handlerMap) {
              var handler = this.handlerMap[event.uuid];
              if (handler) {
                  if (handler.callback && 'call' in handler.callback) {
                      handler.callback(event.payload);
                  }
              }
          }
      };
      return UUIDEventSystem;
  }());
  /** @internal */
  var raycastEventSystem = new RaycastEventSystem();
  /** @internal */
  var pointerEventSystem = new PointerEventSystem();
  /** @internal */
  var uuidEventSystem = new UUIDEventSystem();

  /**
   * @public
   */
  var AudioClip = /** @class */ (function (_super) {
      __extends(AudioClip, _super);
      function AudioClip(url) {
          var _this = _super.call(this) || this;
          /**
           * Is this clip looping by default?
           */
          _this.loop = false;
          /**
           * Clip's master volume. This volume affects all the AudioSources.
           * Valid ranges from 0 to 1
           */
          _this.volume = 1;
          _this.url = url;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], AudioClip.prototype, "url", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AudioClip.prototype, "loop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AudioClip.prototype, "loadingCompleteEventId", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AudioClip.prototype, "volume", void 0);
      AudioClip = __decorate([
          DisposableComponent('engine.AudioClip', exports.CLASS_ID.AUDIO_CLIP),
          __metadata("design:paramtypes", [String])
      ], AudioClip);
      return AudioClip;
  }(ObservableComponent));
  /**
   * @public
   */
  var AudioSource = /** @class */ (function (_super) {
      __extends(AudioSource, _super);
      function AudioSource(audioClip) {
          var _this = _super.call(this) || this;
          _this.audioClip = audioClip;
          /**
           * Is this clip looping by default?
           */
          _this.loop = false;
          /**
           * Clip's master volume. This volume affects all the AudioSources.
           * Valid ranges from 0 to 1
           */
          _this.volume = 1;
          /**
           * Is this AudioSource playing?
           */
          _this.playing = false;
          /**
           * Pitch, default: 1.0, range from 0.0 to MaxFloat
           */
          _this.pitch = 1.0;
          /**
           * Timestamp of when the playOnce was executed to see if we need to start over the audio
           */
          _this.playedAtTimestamp = Date.now();
          if (!(audioClip instanceof AudioClip)) {
              throw new Error("Trying to create AudioSource(AudioClip) with an invalid AudioClip");
          }
          _this.audioClipId = getComponentId(audioClip);
          return _this;
      }
      /**
       * Disables the looping and plays the current source once.
       * If the sound was playing, it stops and starts over.
       */
      AudioSource.prototype.playOnce = function () {
          this.playing = true;
          this.dirty = true;
          this.playedAtTimestamp = Date.now();
          this.data.nonce = Math.random();
          return this;
      };
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], AudioSource.prototype, "audioClipId", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AudioSource.prototype, "loop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AudioSource.prototype, "volume", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AudioSource.prototype, "playing", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AudioSource.prototype, "pitch", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AudioSource.prototype, "playedAtTimestamp", void 0);
      AudioSource = __decorate([
          Component('engine.AudioSource', exports.CLASS_ID.AUDIO_SOURCE),
          __metadata("design:paramtypes", [AudioClip])
      ], AudioSource);
      return AudioSource;
  }(ObservableComponent));
  /**
   * @public
   */
  var AudioStream = /** @class */ (function (_super) {
      __extends(AudioStream, _super);
      function AudioStream(url) {
          var _this = _super.call(this) || this;
          _this.playing = false;
          _this.volume = 1;
          _this.url = url;
          _this.playing = true;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], AudioStream.prototype, "url", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AudioStream.prototype, "playing", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AudioStream.prototype, "volume", void 0);
      AudioStream = __decorate([
          Component('engine.AudioStream', exports.CLASS_ID.AUDIO_STREAM),
          __metadata("design:paramtypes", [String])
      ], AudioStream);
      return AudioStream;
  }(ObservableComponent));

  /**
   * Gizmo identifiers
   * @public
   */
  exports.Gizmo = void 0;
  (function (Gizmo) {
      Gizmo["MOVE"] = "MOVE";
      Gizmo["ROTATE"] = "ROTATE";
      Gizmo["SCALE"] = "SCALE";
      Gizmo["NONE"] = "NONE";
  })(exports.Gizmo || (exports.Gizmo = {}));
  /**
   * This event is triggered after the user finalizes dragging a gizmo.
   * @public
   */
  var OnGizmoEvent = /** @class */ (function (_super) {
      __extends(OnGizmoEvent, _super);
      function OnGizmoEvent() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = 'gizmoEvent';
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnGizmoEvent.prototype, "type", void 0);
      OnGizmoEvent = __decorate([
          Component('engine.gizmoEvent', exports.CLASS_ID.UUID_CALLBACK)
      ], OnGizmoEvent);
      return OnGizmoEvent;
  }(OnUUIDEvent));
  /**
   * Enables gizmos in the entity. Gizmos only work in EDITOR, PREVIEW or DEBUG modes.
   * @public
   */
  var Gizmos = /** @class */ (function (_super) {
      __extends(Gizmos, _super);
      function Gizmos() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Enable position gizmo
           */
          _this.position = true;
          /**
           * Enable rotation gizmo
           */
          _this.rotation = true;
          /**
           * Enable scale gizmo
           */
          _this.scale = true;
          /**
           * Cycle through gizmos using click.
           */
          _this.cycle = true;
          /**
           * Align the gizmos to match the local reference system
           */
          _this.localReference = false;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Gizmos.prototype, "position", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Gizmos.prototype, "rotation", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Gizmos.prototype, "scale", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Gizmos.prototype, "cycle", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], Gizmos.prototype, "selectedGizmo", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], Gizmos.prototype, "localReference", void 0);
      Gizmos = __decorate([
          Component('engine.gizmos', exports.CLASS_ID.GIZMOS)
      ], Gizmos);
      return Gizmos;
  }(ObservableComponent));

  /**
   * @public
   */
  var OnFocus = /** @class */ (function (_super) {
      __extends(OnFocus, _super);
      function OnFocus(callback) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'onFocus';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnFocus.prototype, "type", void 0);
      OnFocus = __decorate([
          Component('engine.onFocus', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function])
      ], OnFocus);
      return OnFocus;
  }(OnUUIDEvent));
  /**
   * @public
   */
  var OnTextSubmit = /** @class */ (function (_super) {
      __extends(OnTextSubmit, _super);
      function OnTextSubmit(callback) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'onTextSubmit';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnTextSubmit.prototype, "type", void 0);
      OnTextSubmit = __decorate([
          Component('engine.onTextSubmit', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function])
      ], OnTextSubmit);
      return OnTextSubmit;
  }(OnUUIDEvent));
  /**
   * @public
   */
  var OnBlur = /** @class */ (function (_super) {
      __extends(OnBlur, _super);
      function OnBlur(callback) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'onBlur';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnBlur.prototype, "type", void 0);
      OnBlur = __decorate([
          Component('engine.onBlur', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function])
      ], OnBlur);
      return OnBlur;
  }(OnUUIDEvent));
  /**
   * @public
   */
  var OnEnter = /** @class */ (function (_super) {
      __extends(OnEnter, _super);
      function OnEnter(callback) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'onEnter';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnEnter.prototype, "type", void 0);
      OnEnter = __decorate([
          Component('engine.onEnter', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function])
      ], OnEnter);
      return OnEnter;
  }(OnUUIDEvent));
  /**
   * @public
   */
  var OnChanged = /** @class */ (function (_super) {
      __extends(OnChanged, _super);
      function OnChanged(callback) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'onChange';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnChanged.prototype, "type", void 0);
      OnChanged = __decorate([
          Component('engine.onChange', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function])
      ], OnChanged);
      return OnChanged;
  }(OnUUIDEvent));
  /**
   * @public @deprecated use `OnPointerDown` instead
   */
  var OnClick = /** @class */ (function (_super) {
      __extends(OnClick, _super);
      function OnClick(callback, options) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'onClick';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          if (options) {
              _this.showFeedback = !(options.showFeedback === false);
              if (options.button) {
                  _this.button = options.button;
              }
              if (options.hoverText) {
                  _this.hoverText = options.hoverText;
              }
              if (options.distance) {
                  _this.distance = options.distance;
              }
          }
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnClick.prototype, "type", void 0);
      OnClick = __decorate([
          Component('engine.onClick', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function, Object])
      ], OnClick);
      return OnClick;
  }(OnPointerUUIDEvent));
  /**
   * @public
   */
  var OnPointerDown = /** @class */ (function (_super) {
      __extends(OnPointerDown, _super);
      function OnPointerDown(callback, options) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'pointerDown';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          if (options) {
              _this.showFeedback = !(options.showFeedback === false);
              if (options.button) {
                  _this.button = options.button;
              }
              if (options.hoverText) {
                  _this.hoverText = options.hoverText;
              }
              if (options.distance) {
                  _this.distance = options.distance;
              }
          }
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnPointerDown.prototype, "type", void 0);
      OnPointerDown = __decorate([
          Component('engine.pointerDown', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function, Object])
      ], OnPointerDown);
      return OnPointerDown;
  }(OnPointerUUIDEvent));
  /**
   * @public
   */
  var OnPointerUp = /** @class */ (function (_super) {
      __extends(OnPointerUp, _super);
      function OnPointerUp(callback, options) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'pointerUp';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          if (options) {
              _this.showFeedback = !(options.showFeedback === false);
              if (options.button) {
                  _this.button = options.button;
              }
              if (options.hoverText) {
                  _this.hoverText = options.hoverText;
              }
              if (options.distance) {
                  _this.distance = options.distance;
              }
          }
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnPointerUp.prototype, "type", void 0);
      OnPointerUp = __decorate([
          Component('engine.pointerUp', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function, Object])
      ], OnPointerUp);
      return OnPointerUp;
  }(OnPointerUUIDEvent));
  /**
   * @public
   */
  var OnPointerHoverEnter = /** @class */ (function (_super) {
      __extends(OnPointerHoverEnter, _super);
      function OnPointerHoverEnter(callback, options) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'pointerHoverEnter';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          if (options) {
              if (options.distance) {
                  _this.distance = options.distance;
              }
          }
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnPointerHoverEnter.prototype, "type", void 0);
      OnPointerHoverEnter = __decorate([
          Component('engine.pointerHoverEnter', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function, Object])
      ], OnPointerHoverEnter);
      return OnPointerHoverEnter;
  }(OnPointerUUIDEvent));
  /**
   * @public
   */
  var OnPointerHoverExit = /** @class */ (function (_super) {
      __extends(OnPointerHoverExit, _super);
      function OnPointerHoverExit(callback) {
          var _this = _super.call(this, callback) || this;
          _this.type = 'pointerHoverExit';
          // This injection is necessary ONLY in events that are ALWAYS turned on and are
          // not assignable to entities. Like events for the UI elements
          // TODO(Brian): This will be removed when UI gets back to the entity parenting.
          uuidEventSystem.handlerMap[_this.uuid] = _this;
          // Changed default distance value for this component because in most cases we probably
          // don't want for the hover exit event to be limited by a distance, and it default value was too small.
          _this.distance = 160;
          return _this;
      }
      __decorate([
          ObservableComponent.readonly,
          __metadata("design:type", String)
      ], OnPointerHoverExit.prototype, "type", void 0);
      OnPointerHoverExit = __decorate([
          Component('engine.pointerHoverExit', exports.CLASS_ID.UUID_CALLBACK),
          __metadata("design:paramtypes", [Function])
      ], OnPointerHoverExit);
      return OnPointerHoverExit;
  }(OnPointerUUIDEvent));

  /**
   * @public
   */
  var UIShape = /** @class */ (function (_super) {
      __extends(UIShape, _super);
      function UIShape(parent) {
          var _this = _super.call(this) || this;
          /**
           * Defines if the entity and its children should be rendered
           */
          _this.name = null;
          _this.visible = true;
          _this.opacity = 1;
          _this.hAlign = 'center';
          _this.vAlign = 'center';
          _this.width = '100px';
          _this.height = '50px';
          _this.positionX = '0px';
          _this.positionY = '0px';
          _this.isPointerBlocker = true;
          if (parent) {
              _this._parent = parent;
              _this.data.parentComponent = getComponentId(parent);
          }
          return _this;
      }
      Object.defineProperty(UIShape.prototype, "parent", {
          get: function () {
              return this._parent;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(UIShape.prototype, "parentComponent", {
          // @internal
          get: function () {
              return this.data.parentComponent;
          },
          enumerable: false,
          configurable: true
      });
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], UIShape.prototype, "name", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIShape.prototype, "visible", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIShape.prototype, "opacity", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIShape.prototype, "hAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIShape.prototype, "vAlign", void 0);
      __decorate([
          ObservableComponent.uiValue,
          __metadata("design:type", Object)
      ], UIShape.prototype, "width", void 0);
      __decorate([
          ObservableComponent.uiValue,
          __metadata("design:type", Object)
      ], UIShape.prototype, "height", void 0);
      __decorate([
          ObservableComponent.uiValue,
          __metadata("design:type", Object)
      ], UIShape.prototype, "positionX", void 0);
      __decorate([
          ObservableComponent.uiValue,
          __metadata("design:type", Object)
      ], UIShape.prototype, "positionY", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIShape.prototype, "isPointerBlocker", void 0);
      return UIShape;
  }(ObservableComponent));
  /**
   * @internal
   * NOTE(Brian): this should be deprecated
   */
  var UIFullScreen = /** @class */ (function (_super) {
      __extends(UIFullScreen, _super);
      function UIFullScreen() {
          return _super.call(this, null) || this;
      }
      UIFullScreen = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_FULLSCREEN_SHAPE),
          __metadata("design:paramtypes", [])
      ], UIFullScreen);
      return UIFullScreen;
  }(UIShape));
  /**
   * @internal
   * NOTE(Brian): this should be deprecated
   */
  var UIWorldSpace = /** @class */ (function (_super) {
      __extends(UIWorldSpace, _super);
      function UIWorldSpace() {
          return _super.call(this, null) || this;
      }
      UIWorldSpace = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_WORLD_SPACE_SHAPE),
          __metadata("design:paramtypes", [])
      ], UIWorldSpace);
      return UIWorldSpace;
  }(UIShape));
  /**
   * @public
   */
  var UICanvas = /** @class */ (function (_super) {
      __extends(UICanvas, _super);
      function UICanvas() {
          return _super.call(this, null) || this;
      }
      UICanvas = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_SCREEN_SPACE_SHAPE),
          __metadata("design:paramtypes", [])
      ], UICanvas);
      return UICanvas;
  }(UIShape));
  /**
   * @public
   */
  var UIContainerRect = /** @class */ (function (_super) {
      __extends(UIContainerRect, _super);
      function UIContainerRect() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.thickness = 0;
          _this.color = dist.Color4.Clear();
          _this.alignmentUsesSize = true;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIContainerRect.prototype, "thickness", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIContainerRect.prototype, "color", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIContainerRect.prototype, "alignmentUsesSize", void 0);
      UIContainerRect = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_CONTAINER_RECT)
      ], UIContainerRect);
      return UIContainerRect;
  }(UIShape));
  /**
   * @public
   */
  exports.UIStackOrientation = void 0;
  (function (UIStackOrientation) {
      UIStackOrientation[UIStackOrientation["VERTICAL"] = 0] = "VERTICAL";
      UIStackOrientation[UIStackOrientation["HORIZONTAL"] = 1] = "HORIZONTAL";
  })(exports.UIStackOrientation || (exports.UIStackOrientation = {}));
  /**
   * @public
   */
  var UIContainerStack = /** @class */ (function (_super) {
      __extends(UIContainerStack, _super);
      function UIContainerStack() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.adaptWidth = true;
          _this.adaptHeight = true;
          _this.color = dist.Color4.Clear();
          _this.stackOrientation = exports.UIStackOrientation.VERTICAL;
          _this.spacing = 0;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIContainerStack.prototype, "adaptWidth", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIContainerStack.prototype, "adaptHeight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIContainerStack.prototype, "color", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIContainerStack.prototype, "stackOrientation", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIContainerStack.prototype, "spacing", void 0);
      UIContainerStack = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_CONTAINER_STACK)
      ], UIContainerStack);
      return UIContainerStack;
  }(UIShape));
  /**
   * @public
   */
  var UIButton = /** @class */ (function (_super) {
      __extends(UIButton, _super);
      function UIButton() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.fontSize = 10;
          _this.fontWeight = 'normal';
          _this.thickness = 0;
          _this.cornerRadius = 0;
          _this.color = dist.Color4.White();
          _this.background = dist.Color4.White();
          _this.paddingTop = 0;
          _this.paddingRight = 0;
          _this.paddingBottom = 0;
          _this.paddingLeft = 0;
          _this.shadowBlur = 0;
          _this.shadowOffsetX = 0;
          _this.shadowOffsetY = 0;
          _this.shadowColor = dist.Color4.Black();
          _this.text = 'button';
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "fontSize", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIButton.prototype, "fontWeight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "thickness", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "cornerRadius", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIButton.prototype, "color", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIButton.prototype, "background", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "paddingTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "paddingRight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "paddingBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "paddingLeft", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "shadowBlur", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "shadowOffsetX", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIButton.prototype, "shadowOffsetY", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIButton.prototype, "shadowColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIButton.prototype, "text", void 0);
      UIButton = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_BUTTON_SHAPE)
      ], UIButton);
      return UIButton;
  }(UIShape));
  /**
   * @public
   */
  var UIText = /** @class */ (function (_super) {
      __extends(UIText, _super);
      function UIText() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.outlineWidth = 0;
          _this.outlineColor = dist.Color4.White();
          _this.color = dist.Color4.White();
          _this.fontSize = 10;
          _this.fontAutoSize = false;
          _this.value = '';
          _this.lineSpacing = 0;
          _this.lineCount = 0;
          _this.adaptWidth = false;
          _this.adaptHeight = false;
          _this.textWrapping = false;
          _this.shadowBlur = 0;
          _this.shadowOffsetX = 0;
          _this.shadowOffsetY = 0;
          _this.shadowColor = dist.Color4.Black();
          _this.hTextAlign = 'left';
          _this.vTextAlign = 'bottom';
          _this.paddingTop = 0;
          _this.paddingRight = 0;
          _this.paddingBottom = 0;
          _this.paddingLeft = 0;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "outlineWidth", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIText.prototype, "outlineColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIText.prototype, "color", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "fontSize", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIText.prototype, "fontAutoSize", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Font)
      ], UIText.prototype, "font", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIText.prototype, "value", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "lineSpacing", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "lineCount", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIText.prototype, "adaptWidth", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIText.prototype, "adaptHeight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIText.prototype, "textWrapping", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "shadowBlur", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "shadowOffsetX", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "shadowOffsetY", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIText.prototype, "shadowColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIText.prototype, "hTextAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIText.prototype, "vTextAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "paddingTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "paddingRight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "paddingBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIText.prototype, "paddingLeft", void 0);
      UIText = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_TEXT_SHAPE)
      ], UIText);
      return UIText;
  }(UIShape));
  /**
   * @public
   */
  var UIInputText = /** @class */ (function (_super) {
      __extends(UIInputText, _super);
      function UIInputText(parent) {
          var _this = _super.call(this, parent) || this;
          _this.outlineWidth = 0;
          _this.outlineColor = dist.Color4.Black();
          _this.color = dist.Color4.Clear();
          _this.fontSize = 10;
          _this.value = '';
          _this.placeholder = '';
          _this.margin = 10;
          _this.hTextAlign = 'left';
          _this.vTextAlign = 'bottom';
          _this.focusedBackground = dist.Color4.Black();
          _this.textWrapping = false;
          _this.shadowBlur = 0;
          _this.shadowOffsetX = 0;
          _this.shadowOffsetY = 0;
          _this.shadowColor = dist.Color4.White();
          _this.paddingTop = 0;
          _this.paddingRight = 0;
          _this.paddingBottom = 0;
          _this.paddingLeft = 0;
          _this.onTextSubmit = null;
          _this.onChanged = null;
          _this.onFocus = null;
          _this.onBlur = null;
          _this.onTextChanged = new OnChanged(function (e) {
              var _a = e.value, value = _a.value, isSubmit = _a.isSubmit;
              // NOTE: here we want to keep the same `dirty` state as before changing `this.value`
              // because changing `this.value` will set the component as `dirty` and send a message to the renderer with it value
              // and that message is unnecesary (if the only thing that have changed is `this.value`) since that new value has come from the renderer itself
              var isDirty = _this.dirty;
              _this.value = value;
              _this.dirty = isDirty;
              if (isSubmit && _this.onTextSubmit) {
                  var onSubmitValue = { text: value };
                  _this.onTextSubmit.callback(onSubmitValue);
              }
              else if (!isSubmit && _this.onChanged) {
                  var onChangeValue = {
                      value: value,
                      pointerId: e.pointerId
                  };
                  _this.onChanged.callback(onChangeValue);
              }
          });
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "outlineWidth", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIInputText.prototype, "outlineColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIInputText.prototype, "color", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "fontSize", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Font)
      ], UIInputText.prototype, "font", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIInputText.prototype, "value", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIInputText.prototype, "placeholder", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "margin", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIInputText.prototype, "hTextAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], UIInputText.prototype, "vTextAlign", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIInputText.prototype, "focusedBackground", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIInputText.prototype, "textWrapping", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "shadowBlur", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "shadowOffsetX", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "shadowOffsetY", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIInputText.prototype, "shadowColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "paddingTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "paddingRight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "paddingBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIInputText.prototype, "paddingLeft", void 0);
      __decorate([
          OnUUIDEvent.uuidEvent,
          __metadata("design:type", OnChanged)
      ], UIInputText.prototype, "onTextChanged", void 0);
      __decorate([
          OnUUIDEvent.uuidEvent,
          __metadata("design:type", Object)
      ], UIInputText.prototype, "onFocus", void 0);
      __decorate([
          OnUUIDEvent.uuidEvent,
          __metadata("design:type", Object)
      ], UIInputText.prototype, "onBlur", void 0);
      UIInputText = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_INPUT_TEXT_SHAPE),
          __metadata("design:paramtypes", [Object])
      ], UIInputText);
      return UIInputText;
  }(UIShape));
  /**
   * @public
   */
  var UIImage = /** @class */ (function (_super) {
      __extends(UIImage, _super);
      function UIImage(parent, source) {
          var _this = _super.call(this, parent) || this;
          _this.sourceLeft = 0;
          _this.sourceTop = 0;
          _this.sourceWidth = 1;
          _this.sourceHeight = 1;
          _this.paddingTop = 0;
          _this.paddingRight = 0;
          _this.paddingBottom = 0;
          _this.paddingLeft = 0;
          _this.sizeInPixels = true;
          _this.onClick = null;
          _this.source = source;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "sourceLeft", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "sourceTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "sourceWidth", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "sourceHeight", void 0);
      __decorate([
          ObservableComponent.component,
          __metadata("design:type", Object)
      ], UIImage.prototype, "source", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "paddingTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "paddingRight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "paddingBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIImage.prototype, "paddingLeft", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIImage.prototype, "sizeInPixels", void 0);
      __decorate([
          OnUUIDEvent.uuidEvent,
          __metadata("design:type", Object)
      ], UIImage.prototype, "onClick", void 0);
      UIImage = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_IMAGE_SHAPE),
          __metadata("design:paramtypes", [UIShape, Object])
      ], UIImage);
      return UIImage;
  }(UIShape));
  /**
   * @public
   */
  var UIScrollRect = /** @class */ (function (_super) {
      __extends(UIScrollRect, _super);
      function UIScrollRect() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.valueX = 0;
          _this.valueY = 0;
          _this.backgroundColor = dist.Color4.Clear();
          _this.isHorizontal = false;
          _this.isVertical = false;
          _this.paddingTop = 0;
          _this.paddingRight = 0;
          _this.paddingBottom = 0;
          _this.paddingLeft = 0;
          _this.onChanged = null;
          return _this;
      }
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIScrollRect.prototype, "valueX", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIScrollRect.prototype, "valueY", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", dist.Color4)
      ], UIScrollRect.prototype, "backgroundColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIScrollRect.prototype, "isHorizontal", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], UIScrollRect.prototype, "isVertical", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIScrollRect.prototype, "paddingTop", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIScrollRect.prototype, "paddingRight", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIScrollRect.prototype, "paddingBottom", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], UIScrollRect.prototype, "paddingLeft", void 0);
      __decorate([
          OnUUIDEvent.uuidEvent,
          __metadata("design:type", Object)
      ], UIScrollRect.prototype, "onChanged", void 0);
      UIScrollRect = __decorate([
          DisposableComponent('engine.shape', exports.CLASS_ID.UI_SLIDER_SHAPE)
      ], UIScrollRect);
      return UIScrollRect;
  }(UIShape));

  /**
   * @public
   */
  var AvatarShape = /** @class */ (function (_super) {
      __extends(AvatarShape, _super);
      function AvatarShape() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.useDummyModel = false;
          _this.talking = false;
          return _this;
      }
      AvatarShape_1 = AvatarShape;
      AvatarShape.Dummy = function () {
          var avatarShape = new AvatarShape_1();
          avatarShape.useDummyModel = true;
          return avatarShape;
      };
      var AvatarShape_1;
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AvatarShape.prototype, "id", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AvatarShape.prototype, "name", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AvatarShape.prototype, "expressionTriggerId", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Number)
      ], AvatarShape.prototype, "expressionTriggerTimestamp", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", String)
      ], AvatarShape.prototype, "bodyShape", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Array)
      ], AvatarShape.prototype, "wearables", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Array)
      ], AvatarShape.prototype, "emotes", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], AvatarShape.prototype, "skinColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], AvatarShape.prototype, "hairColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Object)
      ], AvatarShape.prototype, "eyeColor", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AvatarShape.prototype, "useDummyModel", void 0);
      __decorate([
          ObservableComponent.field,
          __metadata("design:type", Boolean)
      ], AvatarShape.prototype, "talking", void 0);
      AvatarShape = AvatarShape_1 = __decorate([
          Component('engine.avatarShape', exports.CLASS_ID.AVATAR_SHAPE)
      ], AvatarShape);
      return AvatarShape;
  }(ObservableComponent));

  var communicationsController = null;
  var communicationsControllerPromise = null;
  var _messageObserver = null;
  /**
   * @internal
   */
  function getMessageObserver() {
      if (!_messageObserver) {
          _messageObserver = new Observable();
      }
      return _messageObserver;
  }
  function ensureCommunicationsController() {
      if (!communicationsControllerPromise) {
          communicationsControllerPromise = dcl.loadModule('@decentraland/CommunicationsController', {});
          void communicationsControllerPromise.then(function ($) {
              communicationsController = $;
          });
          var observer_1 = getMessageObserver();
          dcl.subscribe('comms');
          dcl.onEvent(function (event) {
              if (event.type === 'comms') {
                  observer_1.notifyObservers(event.data);
              }
          });
      }
      return communicationsControllerPromise;
  }
  /**
   * @public
   */
  var MessageBus = /** @class */ (function () {
      function MessageBus() {
          var _this = this;
          this.messageQueue = [];
          this.connected = false;
          this.flushing = false;
          void ensureCommunicationsController().then(function () {
              _this.connected = true;
              _this.flush();
          });
      }
      MessageBus.prototype.on = function (message, callback) {
          return getMessageObserver().add(function (e) {
              try {
                  var m = JSON.parse(e.message);
                  if (m.message === message) {
                      callback(m.payload, e.sender);
                  }
              }
              catch (e) {
                  dcl.error('Error parsing comms message ' + (e.message || ''), e);
              }
          });
      };
      // @internal
      MessageBus.prototype.sendRaw = function (message) {
          this.messageQueue.push(message);
          if (this.connected) {
              this.flush();
          }
      };
      MessageBus.prototype.emit = function (message, payload) {
          var messageToSend = JSON.stringify({ message: message, payload: payload });
          this.sendRaw(messageToSend);
          getMessageObserver().notifyObservers({
              message: messageToSend,
              sender: 'self'
          });
      };
      MessageBus.prototype.flush = function () {
          var _this = this;
          if (this.messageQueue.length === 0)
              return;
          if (!this.connected)
              return;
          if (!communicationsController)
              return;
          if (this.flushing)
              return;
          var message = this.messageQueue.shift();
          this.flushing = true;
          dcl.callRpc(communicationsController.rpcHandle, 'send', [message]).then(function (_) {
              _this.flushing = false;
              _this.flush();
          }, function (e) {
              _this.flushing = false;
              error('Error flushing MessageBus', e);
          });
      };
      return MessageBus;
  }());

  // CORE DEPENDENCIES
  var entity = new Entity('scene');
  entity.uuid = '0';
  // Initialize engine
  /** @public */
  var engine = new Engine(entity);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  DisposableComponent.engine = engine;
  // Initialize Decentraland interface
  if (typeof dcl !== 'undefined') {
      engine.addSystem(new DecentralandSynchronizationSystem(dcl), Infinity);
      _initEventObservables(dcl);
  }
  // Initialize UUID Events system
  engine.addSystem(uuidEventSystem);
  // Initialize Pointer Events System
  engine.addSystem(pointerEventSystem);
  // Initialize Raycast Events System
  engine.addSystem(raycastEventSystem);

  exports.AVATAR_OBSERVABLE = AVATAR_OBSERVABLE;
  exports.Angle = dist.Angle;
  exports.AnimationState = AnimationState;
  exports.Animator = Animator;
  exports.Arc2 = dist.Arc2;
  exports.AttachToAvatar = AttachToAvatar;
  exports.Attachable = Attachable;
  exports.AudioClip = AudioClip;
  exports.AudioSource = AudioSource;
  exports.AudioStream = AudioStream;
  exports.AvatarModifierArea = AvatarModifierArea;
  exports.AvatarShape = AvatarShape;
  exports.AvatarTexture = AvatarTexture;
  exports.Axis = dist.Axis;
  exports.BasicMaterial = BasicMaterial;
  exports.BezierCurve = dist.BezierCurve;
  exports.Billboard = Billboard;
  exports.BoxShape = BoxShape;
  exports.Camera = Camera;
  exports.CameraModeArea = CameraModeArea;
  exports.CircleShape = CircleShape;
  exports.Color3 = dist.Color3;
  exports.Color4 = dist.Color4;
  exports.Component = Component;
  exports.ComponentAdded = ComponentAdded;
  exports.ComponentGroup = ComponentGroup;
  exports.ComponentRemoved = ComponentRemoved;
  exports.ConeShape = ConeShape;
  exports.Curve3 = dist.Curve3;
  exports.CylinderShape = CylinderShape;
  exports.DEG2RAD = dist.DEG2RAD;
  exports.DisposableComponent = DisposableComponent;
  exports.DisposableComponentCreated = DisposableComponentCreated;
  exports.DisposableComponentRemoved = DisposableComponentRemoved;
  exports.DisposableComponentUpdated = DisposableComponentUpdated;
  exports.Engine = Engine;
  exports.Entity = Entity;
  exports.Epsilon = dist.Epsilon;
  exports.EventConstructor = EventConstructor;
  exports.EventManager = EventManager;
  exports.Font = Font;
  exports.Frustum = dist.Frustum;
  exports.GLTFShape = GLTFShape;
  exports.Gizmos = Gizmos;
  exports.GlobalPointerDown = GlobalPointerDown;
  exports.GlobalPointerUp = GlobalPointerUp;
  exports.Input = Input;
  exports.Material = Material;
  exports.Matrix = dist.Matrix;
  exports.MessageBus = MessageBus;
  exports.MultiObserver = MultiObserver;
  exports.NFTShape = NFTShape;
  exports.OBJShape = OBJShape;
  exports.Observable = Observable;
  exports.ObservableComponent = ObservableComponent;
  exports.Observer = Observer;
  exports.ObserverEventState = ObserverEventState;
  exports.OnAnimationEnd = OnAnimationEnd;
  exports.OnBlur = OnBlur;
  exports.OnChanged = OnChanged;
  exports.OnClick = OnClick;
  exports.OnEnter = OnEnter;
  exports.OnFocus = OnFocus;
  exports.OnGizmoEvent = OnGizmoEvent;
  exports.OnPointerDown = OnPointerDown;
  exports.OnPointerHoverEnter = OnPointerHoverEnter;
  exports.OnPointerHoverExit = OnPointerHoverExit;
  exports.OnPointerLock = OnPointerLock;
  exports.OnPointerUUIDEvent = OnPointerUUIDEvent;
  exports.OnPointerUp = OnPointerUp;
  exports.OnTextSubmit = OnTextSubmit;
  exports.OnUUIDEvent = OnUUIDEvent;
  exports.Orientation = dist.Orientation;
  exports.ParentChanged = ParentChanged;
  exports.Path2 = dist.Path2;
  exports.Path3D = dist.Path3D;
  exports.PhysicsCast = PhysicsCast;
  exports.Plane = dist.Plane;
  exports.PlaneShape = PlaneShape;
  exports.PointerEvent = PointerEvent;
  exports.PointerEventComponent = PointerEventComponent;
  exports.PointerEventSystem = PointerEventSystem;
  exports.Quaternion = dist.Quaternion;
  exports.RAD2DEG = dist.RAD2DEG;
  exports.RaycastEventSystem = RaycastEventSystem;
  exports.RaycastResponse = RaycastResponse;
  exports.Scalar = dist.Scalar;
  exports.Shape = Shape;
  exports.Size = dist.Size;
  exports.SmartItem = SmartItem;
  exports.Space = dist.Space;
  exports.SphereShape = SphereShape;
  exports.Subscription = Subscription;
  exports.TextShape = TextShape;
  exports.Texture = Texture;
  exports.ToGammaSpace = dist.ToGammaSpace;
  exports.ToLinearSpace = dist.ToLinearSpace;
  exports.Transform = Transform;
  exports.UIButton = UIButton;
  exports.UICanvas = UICanvas;
  exports.UIContainerRect = UIContainerRect;
  exports.UIContainerStack = UIContainerStack;
  exports.UIFullScreen = UIFullScreen;
  exports.UIImage = UIImage;
  exports.UIInputText = UIInputText;
  exports.UIScrollRect = UIScrollRect;
  exports.UIShape = UIShape;
  exports.UIText = UIText;
  exports.UIValue = UIValue;
  exports.UIWorldSpace = UIWorldSpace;
  exports.UUIDEvent = UUIDEvent;
  exports.UUIDEventSystem = UUIDEventSystem;
  exports.Vector2 = dist.Vector2;
  exports.Vector3 = dist.Vector3;
  exports.Vector4 = dist.Vector4;
  exports.VideoClip = VideoClip;
  exports.VideoTexture = VideoTexture;
  exports.VideoRealtimeTexture = VideoRealtimeTexture;
  exports.VideoRealtimeStream = VideoRealtimeStream;
  exports._initEventObservables = _initEventObservables;
  exports.buildArray = buildArray$1;
  exports.engine = engine;
  exports.error = error;
  exports.executeTask = executeTask;
  exports.getComponentClassId = getComponentClassId;
  exports.getComponentId = getComponentId;
  exports.getComponentName = getComponentName;
  exports.getMessageObserver = getMessageObserver;
  exports.isDisposableComponent = isDisposableComponent;
  exports.log = log;
  exports.newId = newId;
  exports.onCameraModeChangedObservable = onCameraModeChangedObservable;
  exports.onEnterScene = onEnterScene;
  exports.onEnterSceneObservable = onEnterSceneObservable;
  exports.onIdleStateChangedObservable = onIdleStateChangedObservable;
  exports.onLeaveScene = onLeaveScene;
  exports.onLeaveSceneObservable = onLeaveSceneObservable;
  exports.onPlayerClickedObservable = onPlayerClickedObservable;
  exports.onPlayerConnectedObservable = onPlayerConnectedObservable;
  exports.onPlayerDisconnectedObservable = onPlayerDisconnectedObservable;
  exports.onPlayerExpressionObservable = onPlayerExpressionObservable;
  exports.onPointerLockedStateChange = onPointerLockedStateChange;
  exports.onProfileChanged = onProfileChanged;
  exports.onRealmChangedObservable = onRealmChangedObservable;
  exports.onSceneReadyObservable = onSceneReadyObservable;
  exports.onVideoEvent = onVideoEvent;
  exports.openExternalURL = openExternalURL;
  exports.openNFTDialog = openNFTDialog;
  exports.pointerEventSystem = pointerEventSystem;
  exports.raycastEventSystem = raycastEventSystem;
  exports.teleportTo = teleportTo;
  exports.uuid = uuid;
  exports.uuidEventSystem = uuidEventSystem;

  Object.defineProperty(exports, '__esModule', { value: true });

}(this.self = this.self || {}));