import {createShallow} from '@material-ui/core/test-utils';
import {AddButton} from '../components/addbutton.component';

describe('<AddButton />', () => {
  let shallow;

  beforeAll(() => {
    // This is Mocha; in Jest, use beforeAll
    shallow = createShallow();
  });

  it('should work', () => {
    const wrapper = shallow(<AddButton />);
  });
});
