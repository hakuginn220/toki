import { compose, withState, withHandlers } from 'recompose'
import Textarea from '../components/organisms/textarea'

export default compose(
  withState('wait', 'updateWait', false),
  withState('error', 'updateError', ''),
  withState('response', 'updateResponse', ''),
  withHandlers({
    onSubmit: props => event => {
      props.updateWait(true)

      setTimeout(() => {
        if (Math.floor(Math.random() * 2)) {
          props.updateWait(false)
          props.updateError('')
          props.updateResponse('success')
        } else {
          props.updateWait(false)
          props.updateError('error')
          props.updateResponse('')
        }
      }, 1000)

      event.preventDefault()
    }
  })
)(Textarea)
