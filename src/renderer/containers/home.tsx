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
    const location = '/login'
    dispatch(changeLocation(location))
    props.history.push(location)
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
