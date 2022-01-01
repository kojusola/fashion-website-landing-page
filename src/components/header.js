import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import PropTypes from "prop-types"
import HeaderIcon from "../images/header-icon.svg"
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <Chakra.Box backgroundColor="#FFFBD6">
    <Chakra.Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="60px"
      py="9px"
      maxWidth="1394px"
      mx="auto"
    >
      <Chakra.Box height="auto">
        <Chakra.Text
          marginBottom="0px"
          fontFamily="Clash Display"
          fontWeight="300"
          fontSize="30px"
          lineHeight="70px"
          letterSpacing="0.25px"
          color="#1C1C1C"
        >
          2022 Drip
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box display="flex" alignItems="center">
        <Chakra.Text
          marginBottom="0px"
          fontFamily="Satoshi"
          fontWeight="400"
          fontSize="18px"
          lineHeight="24px"
          letterSpacing="0.25px"
          color="#1C1C1C"
          paddingRight="40px"
        >
          Collections
        </Chakra.Text>
        <Chakra.Text
          marginBottom="0px"
          fontFamily="Satoshi"
          fontWeight="400"
          fontSize="18px"
          lineHeight="24px"
          letterSpacing="0.25px"
          color="#1C1C1C"
          paddingRight="79px"
        >
          Promo
        </Chakra.Text>
        <HeaderIcon />
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
