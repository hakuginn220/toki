import Authorize from '@/components/organisms/authorize'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'

const mapStateToProps: MapStateToProps<{}, {}, {}> = state => state

const mapDispatchToProps: MapDispatchToProps<{}, {}> = dispatch => dispatch

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorize)
