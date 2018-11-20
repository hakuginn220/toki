import OAuth from '@/components/organisms/oauth'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'

const mapStateToProps: MapStateToProps<{}, {}, {}> = state => state

const mapDispatchToProps: MapDispatchToProps<{}, {}> = dispatch => dispatch

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuth)
