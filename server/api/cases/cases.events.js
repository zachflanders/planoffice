/**
 * Cases model events
 */

'use strict';

import {EventEmitter} from 'events';
import Cases from './cases.model';
var CasesEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CasesEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Cases.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CasesEvents.emit(event + ':' + doc._id, doc);
    CasesEvents.emit(event, doc);
  }
}

export default CasesEvents;
