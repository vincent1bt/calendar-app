import { normalize, schema } from 'normalizr';
import { fromJS } from 'immutable';
import { isEqual, isObject, isArray, mergeWith } from 'lodash';

const eventSchema = new schema.Entity("events");
const movieSchema = new schema.Entity("movies");
const reminderSchema = new schema.Entity("reminders");

const monthSchema = new schema.Entity("months",
  {
    events: [eventSchema]
  }
);

const listSchema = new schema.Entity("list",
  {
    months: [monthSchema]
  },
  {
    mergeStrategy: mergeIntoEntity
  }
);

eventSchema.define({
  movies: [movieSchema],
  reminders: [reminderSchema]
});

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

function mergeIntoEntity(entityA, entityB) {
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

function normalizer(jsonObject) {
  const responseObject = normalize(jsonObject, listSchema);

  console.log(responseObject, "responseObject--------------------------------------------");
  return responseObject;
}

export default normalizer;
