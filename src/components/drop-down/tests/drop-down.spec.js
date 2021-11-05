import { shallow } from 'enzyme';
import DropDown from '..';

describe('displays props in a drop down format', () => {
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <DropDown {...props} />,
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      films: [
        {
          title: 'A New Hope',
          id: '4',
          openingCrawl: 'It is a period of civil war.',
          characters: [],
        },
        {
          title: 'The Empire Strikes Back',
          id: '5',
          openingCrawl: 'It is a dark time for the Rebellion.',
          characters: [],
        },
        {
          title: 'Return of the Jedi',
          id: '6',
          openingCrawl: 'Luke Skywalker has returned to his home planet of Tatooine',
          characters: [],
        },
        {
          title: 'The Phantom Menace',
          id: '1',
          openingCrawl: 'Turmoil has engulfed the Galactic Republic.',
          characters: [],
        },
      ],
      fetchCharacterInfo: jest.fn(),
      setId: jest.fn(),
      id: undefined,
    };
    mountedComponent = undefined;
  });

  it('returns a drop down', () => {
    expect(wrapper().find('.drop-down').length).toBe(1);
  });

  it('returns the film title per line', () => {
    wrapper().find('Button').props().onClick();
    expect(wrapper().find('.ghost').at(0).props().text).toBe(props.films[0].title);
  });

  it('clicking a film title calls functions correctly', () => {
    wrapper().find('Button').props().onClick();
    wrapper().find('.ghost').at(0).props()
      .onClick();
    expect(props.fetchCharacterInfo).toBeCalledWith([]);
    expect(props.setId).toBeCalledWith('4');
    expect(wrapper().find('Button').props().text).toBe('A New Hope');
    expect(wrapper().find('Button').length).toBe(1);
  });

  it('shows loading spinner if array is empty', () => {
    props.films = [];
    wrapper().find('Button').props().onClick();
    expect(wrapper().find('LoadingSpinner').length).toBe(1);
  });
});
