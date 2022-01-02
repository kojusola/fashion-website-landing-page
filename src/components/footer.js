import * as React from "react"
import * as Chakra from "@chakra-ui/react"
// import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <Chakra.Box py="151px" backgroundColor="#000000">
    <Chakra.Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="60px"
      maxWidth="1394px"
      mx="auto"
    >
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize="50px"
        lineHeight="50px"
        letterSpacing="0.25px"
        color="#FFFFFF"
        marginRight="96px"
      >
        Home
      </Chakra.Text>
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize="50px"
        lineHeight="50px"
        letterSpacing="0.25px"
        color="#FFFFFF"
        marginRight="96px"
      >
        Collections
      </Chakra.Text>
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize="50px"
        lineHeight="50px"
        letterSpacing="0.25px"
        color="#FFFFFF"
        marginRight="96px"
      >
        Promo
      </Chakra.Text>
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize="50px"
        lineHeight="50px"
        letterSpacing="0.25px"
        color="#FFFFFF"
      >
        Support
      </Chakra.Text>
    </Chakra.Box>
  </Chakra.Box>
)

export default Footer
