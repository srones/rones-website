import PropTypes from 'prop-types'

const Component = ({ arg }) => {
  return (
    <div>
      <p>My arg: {arg}</p>
    </div>
  )
}

Component.defaultProps = {
    arg: "default"
}

Component.propTypes = {
    arg: PropTypes.string.isRequired,
}

export default Component