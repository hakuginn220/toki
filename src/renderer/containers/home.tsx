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
  onUserSelect: IProps['onUserSelect']
  onUserAdd: IProps['onUserAdd']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = (dispatch, props) => ({
  onUserSelect(id) {
    window.console.log(id)

    if (props.location.pathname !== '/') {
      props.history.push('/')
    }
  },
  onUserAdd() {
    props.history.push('/login')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
