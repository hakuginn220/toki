import OAuth, { IProps } from '@/components/organisms/oauth'
import { addAccount, changeVerifier } from '@/modules/accounts'
import { IRootState } from '@/store'
import twitter from '@/utils/twitter'
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
}

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IProps> = (
  dispatch,
  state
) => ({
  onChangeVerifier(event) {
    event.preventDefault()
    dispatch(changeVerifier(event.target.value))
  },
  onOAuth(event) {
    event.preventDefault()
    twitter.getAccessToken(state.verifier).then(token => {
      dispatch(addAccount(token))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuth)
