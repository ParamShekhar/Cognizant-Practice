import React from 'react';
import { mount, shallow } from 'enzyme';
import CohortDetails from './CohortDetails';
import cohortData from './CohortData';

describe('Cohort Details Component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<CohortDetails cohort={cohortData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('displays the cohort name in an h3', () => {
    const wrapper = mount(<CohortDetails cohort={cohortData[0]} />);
    expect(wrapper.find('h3').text()).toBe(cohortData[0].name);
  });

  test('uses green color for ongoing cohorts', () => {
    const ongoing = { ...cohortData[0], status: 'ongoing' };
    const wrapper = mount(<CohortDetails cohort={ongoing} />);
    expect(wrapper.find('h3').prop('style').color).toBe('green');
  });

  test('uses blue color for non-ongoing cohorts', () => {
    const completed = { ...cohortData[0], status: 'completed' };
    const wrapper = mount(<CohortDetails cohort={completed} />);
    expect(wrapper.find('h3').prop('style').color).toBe('blue');
  });
});
