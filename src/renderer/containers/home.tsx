import Home, { IProps } from '@/components/templates/home'
import { changeLocation } from '@/modules/routes'
import { connect, MapDispatchToProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface IDispatchProps {
  onMoveLogin: IProps['onMoveLogin']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = (dispatch, props) => ({
  onMoveLogin() {
    dispatch(changeLocation({ location: 'login' }))
    props.history.push('/login')
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
