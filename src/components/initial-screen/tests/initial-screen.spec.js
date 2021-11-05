import { shallow } from 'enzyme';
import LoadingScreen from '..';
import DropDown from '../../drop-down/connected';

describe('A screen that displays the banner header and drop down', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <LoadingScreen {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      setId: jest.fn(),
    };
    mountedComponent = undefined;
  });

  it('returns a component that displays the header', () => {
    expect(wrapper().find('BannerHeader').length).toBe(1);
  });

  it('returns a the drop down component', () => {
    expect(wrapper().find(DropDown).length).toBe(1);
  });

  it('call setId correctly', () => {
    wrapper().find(DropDown).props().setId('4');
    expect(props.setId).toBeCalledWith('4');
  });
});
