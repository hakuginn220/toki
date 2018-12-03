import Login, { IProps } from '@/components/templates/login'
import { addAccount, changeVerifier, openAuthorize } from '@/modules/accounts'
import { IRootState } from '@/store'
import twitter from '@/utils/twitter'
import { shell } from 'electron'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'

interface IStateProps {
  verifier: IProps['verifier']
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  IProps,
  IRootState
> = state => ({
  verifier: state.accounts.verifier
})

interface IDispatchProps {
  onChangeVerifier: IProps['onChangeVerifier']
  onOAuth: IProps['onOAuth']
  onAuthorize: IProps['onAuthorize']
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IProps> = (
  dispatch,
  state
) => ({
  onChangeVerifier(event) {
    event.preventDefault()
    dispatch(changeVerifier({ verifier: event.target.value }))
  },
  onOAuth(event) {
    event.preventDefault()
    twitter.getAccessToken(state.verifier).then(token => {
      dispatch(addAccount({ user: token }))
    })
  },
  onAuthorize() {
    twitter.getAuthorizeURL().then(url => {
      shell.openExternal(url)
      dispatch(openAuthorize())
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
