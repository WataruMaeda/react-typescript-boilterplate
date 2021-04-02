import { ClipLoader, BeatLoader } from 'react-spinners'

/**
 * types of spinners
 * https://www.davidhu.io/react-spinners/
 *
 * github
 * https://github.com/davidhu2000/react-spinners
 */

export interface ISpinner {
  type?: 'clip' | 'beat'
  color?: string
  size?: string | number
  isLoading?: boolean
}

const Spinner: React.FC<ISpinner> = ({
  type = 'clip',
  color = 'black',
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
