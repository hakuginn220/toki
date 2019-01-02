import Home, { IProps } from '@/components/templates/home'
import { IRootState } from '@/store'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface IStateProps {
  users: IProps['users']
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  RouteComponentProps,
  IRootState
> = state => ({
  users: state.accounts.users
})

interface IDispatchProps {
  onAddUser: IProps['onAddUser']
  onChangeUser: IProps['onChangeUser']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = (dispatch, props) => ({
  onAddUser() {
    props.history.push('/login')
  },
  onChangeUser(id) {
    window.console.log(id)
    props.history.push('/')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
