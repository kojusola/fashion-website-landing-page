import * as React from "react"
import * as Chakra from "@chakra-ui/react"
// import { Link } from "gatsby"

const Footer = () => (
  <Chakra.Box
    py={{ base: "20px", sm: "50px", xl: "151px" }}
    backgroundColor="#000000"
  >
    <Chakra.Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: "30px", lg: "60px" }}
      maxWidth="1394px"
      mx="auto"
    >
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize={{ base: "10px", sm: "20px", xl: "50px" }}
        lineHeight={{ base: "10px", sm: "20px", xl: "50px" }}
        letterSpacing="0.25px"
        color="#FFFFFF"
        marginRight={{ base: "10px", sm: "20px", xl: "96px" }}
      >
        Home
      </Chakra.Text>
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize={{ base: "10px", sm: "20px", xl: "50px" }}
        lineHeight={{ base: "10px", sm: "20px", xl: "50px" }}
        letterSpacing="0.25px"
        color="#FFFFFF"
        marginRight={{ base: "10px", sm: "20px", xl: "96px" }}
      >
        Collections
      </Chakra.Text>
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize={{ base: "10px", sm: "20px", xl: "50px" }}
        lineHeight={{ base: "10px", sm: "20px", xl: "50px" }}
        letterSpacing="0.25px"
        color="#FFFFFF"
        marginRight={{ base: "10px", sm: "20px", xl: "96px" }}
      >
        Promo
      </Chakra.Text>
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="400"
        fontSize={{ base: "10px", sm: "20px", xl: "50px" }}
        lineHeight={{ base: "10px", sm: "20px", xl: "50px" }}
        letterSpacing="0.25px"
        color="#FFFFFF"
      >
        Support
      </Chakra.Text>
    </Chakra.Box>
  </Chakra.Box>
)

export default Footer
