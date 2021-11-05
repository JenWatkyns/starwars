import { shallow } from 'enzyme';
import Button from '..';

describe('Button tests', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Button {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      text: 'hello',
      className: 'new-classname',
    };
    mountedComponent = undefined;
  });

  it('returns a button with correct classname', () => {
    expect(wrapper().find('.btn').length).toBe(1);
  });

  it('returns a button with correct added classname', () => {
    expect(wrapper().find('.new-classname').length).toBe(1);
  });

  it('renders text correctly', () => {
    expect(wrapper().find('.btn').text()).toBe(props.text);
  });

  it('fires onClick correctly', () => {
    wrapper().find('.btn').props().onClick();
    expect(props.onClick).toBeCalled();
  });
});
