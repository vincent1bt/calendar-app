import { normalize, Schema, arrayOf } from 'normalizr';
import { fromJS } from 'immutable';
import { isEqual, isObject, isArray, mergeWith } from 'lodash';

const monthSchema = new Schema("months");
const eventSchema = new Schema("events");
const movieSchema = new Schema("movies");
const reminderSchema = new Schema("reminders");

monthSchema.define({
  events: arrayOf(eventSchema)
});

eventSchema.define({
  movies: arrayOf(movieSchema),
  reminders: arrayOf(reminderSchema)
});

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var options = {
  mergeIntoEntity: function(entityA, entityB, entityKey) {
    var key;
    for (key in entityB) {
      if (!entityB.hasOwnProperty(key)) {
        continue;
      }

      if (!entityA.hasOwnProperty(key) || isEqual(entityA[key], entityB[key])) {
        entityA[key] = entityB[key];
        continue;
      }

      if (isObject(entityA[key]) && isObject(entityB[key])) {
        if(!isEqual(entityA[key], entityB[key])) {
          if (key === "movies") {
            mergeWith(entityA, entityB, customizer);
            continue;
          }
        }
      }
    }
  }
};

function normalizer(jsonObject) {
 const responseObject = normalize(jsonObject, {
   months: arrayOf(monthSchema)
 }, options);
 return responseObject;
}

export default normalizer;
