import Login, { IProps } from '@/components/templates/login'
import { changeVerifier, getAuthorize, getOAuth } from '@/modules/accounts'
import { IRootState } from '@/store'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface IStateProps {
  verifier: IProps['verifier']
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  RouteComponentProps,
  IRootState
> = state => ({
  verifier: state.accounts.verifier
})

interface IDispatchProps {
  onChangeVerifier: IProps['onChangeVerifier']
  onOAuth: IProps['onOAuth']
  onAuthorize: IProps['onAuthorize']
  onMoveHome: IProps['onMoveHome']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = (dispatch, props) => ({
  onChangeVerifier(event) {
    dispatch(changeVerifier(event.target.value))
  },
  onOAuth(event) {
    event.preventDefault()
    dispatch(getOAuth())
  },
  onAuthorize() {
    dispatch(getAuthorize())
  },
  onMoveHome() {
    props.history.push('/')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
