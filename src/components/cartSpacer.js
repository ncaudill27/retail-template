import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing } from "../utils/helpers"

const setSpace = ({ theme, size }) => {
  return theme.spacing(size) + "px"
}

const Spacer = styled.span`
  display: block;
  content: "";
  margin-top: ${setSpace};
  padding-top: ${setSpace};
  border-top: 1px solid;
`

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
}

Spacer.defaultProps = {
  size: 1,
}

export default Spacer
