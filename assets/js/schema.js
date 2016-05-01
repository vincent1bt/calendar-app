import { normalize, Schema, arrayOf } from 'normalizr';
import { fromJS } from 'immutable';

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

const jsonObject = {
  "months": [
    {
      "id": 1,
      "name": "January",
      "numberOfDays": "31",
      "firstDay": "Friday",
      "events": [
        {
          "id": 112,
          "movies": [
            {
              "id": 34234,
              "image_path": "/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
              "title": "Civil War",
              "overview": "good movie"
            }
          ],
          "reminders": [
            {
              "id": 324234234,
              "text": "cook"
            }
          ]
        },
        {
          "id": 109,
          "movies": [
            {
              "id": 20848,
              "image_path": "/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
              "title": "avengers 3",
              "overview": "good movie!!!"
            }
          ],
          "reminders": [
            {
              "id": 4234234,
              "text": "cook and sleep"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "February",
      "numberOfDays": "29",
      "firstDay": "Monday",
      "events": [
        {
          "id": 223,
          "movies": [
            {
              "id": 134,
              "image_path": "/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
              "title": "batman v superman",
              "overview": "meeh movie"
            }
          ],
          "reminders": [
            {
              "id": 234234,
              "text": "sleep"
            }
          ]
        }
      ]
    }
  ]
}

const responseObject = normalize(jsonObject, {
  months: arrayOf(monthSchema)
});

export default fromJS(responseObject);
