import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';

import Month from 'components/Month';
import Day from 'components/Day';
import Movie from 'components/Movie';
import Reminder from 'components/Reminder';
import CreateReminder from 'components/CreateReminder';
import Nav from 'components/Nav';


describe('components', () => {
  describe('<Month/>', () => {
    it('renders', () => {
      const tree = renderer.create(<Month name="enero" year="2017" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("<Day/>", () => {
    it('renders', () => {
      const tree = renderer.create(
          <Day
            monthName="enero"
            monthId="1"
            eventId={345}
            dayId="12"
            reminderClick={ () => null }
          />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("<Movie/>", () => {
    it('renders', () => {
      const movie = {
        id: 339967,
        overview: "A woman discovers that severe catastrophic events are somehow connected to the mental breakdown from which she's suffering.",
        poster_path: "/4VOyofBd1pexblxtDZYtYIk7NI4.jpg",
        release_day: "23",
        title: "Colossal"
      }

      const tree = renderer.create(
          <Movie
            movie={fromJS(movie)}
          />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("<Reminder/>", () => {
    it('renders', () => {
      const reminder= {
        id: 456,
        text: "Reminder 45"
      }

      const tree = renderer.create(
          <Reminder
            reminder={fromJS(reminder)}
          />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("<CreateReminder/>", () => {
    it('renders', () => {

      const tree = renderer.create(
          <CreateReminder
            onReminderClick={ () => null }
            eventId={12}
            monthId="1"
          />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  // describe("<Nav/>", () => {
  //   it('renders', () => {
  //
  //     const tree = renderer.create(<Nav/>).toJSON();
  //
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});
