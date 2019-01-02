import Login, { IProps } from '@/components/templates/login'
import { changeVerifier, getAuthorize, getOAuth } from '@/modules/accounts'
import { IRootState } from '@/store'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface IStateProps {
  users: IProps['users']
  verifier: IProps['verifier']
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  RouteComponentProps,
  IRootState
> = state => ({
  users: state.accounts.users,
  verifier: state.accounts.verifier
})

interface IDispatchProps {
  onUserSelect: IProps['onUserSelect']
  onUserAdd: IProps['onUserAdd']
  onChangeVerifier: IProps['onChangeVerifier']
  onOAuth: IProps['onOAuth']
  onAuthorize: IProps['onAuthorize']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = (dispatch, props) => ({
  onUserSelect(id) {
    window.console.log(id)
    props.history.push('/')
  },
  onUserAdd() {
    if (props.location.pathname !== '/login') {
      props.history.push('/login')
    }
  },
  onChangeVerifier(event) {
    dispatch(changeVerifier(event.target.value))
  },
  onOAuth(event) {
    event.preventDefault()
    dispatch(getOAuth())
  },
  onAuthorize() {
    dispatch(getAuthorize())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
