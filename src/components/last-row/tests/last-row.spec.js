import { shallow } from 'enzyme';
import LastRow from '..';

describe('displays the final row of the table', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <LastRow {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      charCount: '4',
      height: '520',
      feet: '5',
      inches: '10',
    };
    mountedComponent = undefined;
  });

  it('returns a row of individual cells', () => {
    expect(wrapper().find('.character-table-row').length).toBe(1);
  });

  it('returns the correct text', () => {
    expect(wrapper().find('.table-item').text()).toBe('Character Count: {4} | Total Height: 520 cm (5ft/10in)');
  });
});
