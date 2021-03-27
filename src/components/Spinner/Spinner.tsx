import { ClipLoader, BeatLoader } from 'react-spinners'

/**
 * types of spinners
 * https://www.davidhu.io/react-spinners/
 *
 * github
 * https://github.com/davidhu2000/react-spinners
 */

export interface SpinnerProps {
  type: 'clip' | 'beat'
  color: String
  size: String | Number
  isLoading: Boolean
}

const Spinner: React.FC<SpinnerProps> = ({
  type = 'clip',
  color = 'red',
  size = '1.5rem',
  isLoading = false,
  ...others
}) => {
  const props = { type, color, size, loading: isLoading, ...others }
  switch (type) {
    case 'clip':
      return <ClipLoader {...props} />
    case 'beat':
      return <BeatLoader {...props} />
    default:
      return <ClipLoader {...props} />
  }
}

export default Spinner
