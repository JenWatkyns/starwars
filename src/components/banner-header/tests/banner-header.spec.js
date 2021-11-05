import { shallow } from 'enzyme';
import BannerHeader from '..';

describe('Banner Header tests', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <BannerHeader {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
    };
    mountedComponent = undefined;
  });

  it('returns an image as a header', () => {
    expect(wrapper().find('.logo-box').length).toBe(1);
  });
});
