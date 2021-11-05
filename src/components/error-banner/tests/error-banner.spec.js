import { shallow } from 'enzyme';
import ErrorBanner from '..';

describe('displays error message', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <ErrorBanner {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
    };
    mountedComponent = undefined;
  });

  it('returns a component that displays an error message', () => {
    expect(wrapper().find('.error-msg').length).toBe(1);
  });
});
