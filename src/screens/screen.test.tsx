import {render} from '@testing-library/react-native';
import Feed from './Feed';

describe('<Feed/>', () => {
    it('check if show correctly user input name placeholder', () => {
     const { getByPlaceholderText } = render(<Feed />)
   
     const inputName = getByPlaceholderText('Nome')
   
     expect(inputName.props.placeholder).toBeTruthy()
    })
   
    it('check if user data has been loaded', () => {
     const { getByTestId } = render(<Feed />)
   
     const inputName = getByTestId('input-name')
   
     expect(inputName.props.value).toEqual('Artur')
    })
   })