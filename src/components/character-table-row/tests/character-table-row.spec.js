import { shallow } from 'enzyme';
import CharacterTableRow from '..';

describe('displays information in a row format', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <CharacterTableRow {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      name: 'Luke',
      gender: 'male',
      height: 221,
    };
    mountedComponent = undefined;
  });

  it('returns a row of individual cells', () => {
    expect(wrapper().find('.character-table-row').length).toBe(1);
  });

  it('returns the given prop for name in an individual cell', () => {
    expect(wrapper().find('.table-item').at(0).text()).toBe(props.name);
  });

  it('returns the given prop for gender in an individual cell', () => {
    expect(wrapper().find('.table-item').at(1).text()).toBe(props.gender);
  });

  it('returns the given prop for height in an individual cell', () => {
    expect(wrapper().find('.table-item').at(2).text()).toBe('221');
  });
});
