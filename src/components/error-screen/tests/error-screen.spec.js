import { shallow } from 'enzyme';
import ErrorScreen from '..';

describe('A screen that displays the banner header and error banner', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <ErrorScreen {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
    };
    mountedComponent = undefined;
  });

  it('returns a component that displays the header', () => {
    expect(wrapper().find('BannerHeader').length).toBe(1);
  });

  it('returns a component that displays the error banner', () => {
    expect(wrapper().find('.banner').length).toBe(1);
  });
});
