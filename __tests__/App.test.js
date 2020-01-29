import App from '../src/components/App.jsx';
import {render} from 'enzyme';

describe('App.jsx', () => {

  // Jest
  test('it should exist', () => {
    expect(new App()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new App()).toBeInstanceOf(App);
  });

  test('it should have state', () => {
    const newAppState = new App();
    const currentAppState = {
      id: null,
      average: null,
      location: null,
      cleanliness: null,
      service: null,
      value: null,
      certOfExcellence: null,
      coePopup: false,
      greenLeaders: null,
      greenLeadersHover: false,
      greenLeadersPopupHover: false,
      aboutCopy: null,
      amenityIcon0: null,
      amenityCopy0: null,
      amenityIcon1: null,
      amenityCopy1: null,
      amenityIcon2: null,
      amenityCopy2: null,
      amenityIcon3: null,
      amenityCopy3: null,
      amenityIcon4: null,
      amenityCopy4: null,
      amenityIcon5: null,
      amenityCopy5: null,
      amenityIcon6: null,
      amenityCopy6: null,
      amenityIcon7: null,
      amenityCopy7: null,
      amenityIcon8: null,
      amenityCopy8: null,
      amenityIcon9: null,
      amenityCopy9: null,
      amenityIcon10: null,
      amenityCopy10: null,
      amenityIcon11: null,
      amenityCopy11: null,
      amenityIcon12: null,
      amenityCopy12: null,
      amenityIcon13: null,
      amenityCopy13: null,
      amenityIcon14: null,
      amenityCopy14: null,
      amenityIcon15: null,
      amenityCopy15: null,
      roomFeatureIcon0: null,
      roomFeatureCopy0: null,
      roomFeatureIcon1: null,
      roomFeatureCopy1: null,
      roomFeatureIcon2: null,
      roomFeatureCopy2: null,
      roomFeatureIcon3: null,
      roomFeatureCopy3: null,
      roomFeatureIcon4: null,
      roomFeatureCopy4: null,
      roomFeatureIcon5: null,
      roomFeatureCopy5: null,
      roomFeatureIcon6: null,
      roomFeatureCopy6: null,
      roomFeatureIcon7: null,
      roomFeatureCopy7: null,
      roomTypeIcon0: null,
      roomTypeCopy0: null,
      roomTypeIcon1: null,
      roomTypeCopy1: null,
      roomTypeIcon2: null,
      roomTypeCopy2: null,
      roomTypeIcon3: null,
      roomTypeCopy3: null,
      hotelClass: null,
      hotelStyle: null,
      isSpecialOffered: null,
      special: null
    };

    expect(newAppState.state).toEqual(currentAppState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<App />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have one child', () => {
    const wrapper = render(<App />);
    expect(wrapper['0'].children).toHaveLength(1);
  });
});