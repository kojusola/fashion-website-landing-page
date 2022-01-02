import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import CtaImage from "../images/cta-image.png"
import ArrowIcon from "../images/collections-arrow.svg"
import CtaSvg from "../images/cta-svg.svg"
// import { Link } from "gatsby"

const Cta = () => {
  return (
    <Chakra.Box position="relative" mb="-28px" width="100%">
      <Chakra.Image width="100%" src={CtaImage}></Chakra.Image>
      <Chakra.Box width="100%" position="absolute" top="0px" bottom="0px">
        <Chakra.Box
          display="flex"
          alignItems="center"
          px={{ base: "30px", lg: "60px" }}
          maxWidth="1394px"
          mx="auto"
        >
          <Chakra.Box
            paddingTop={{ base: "10px", sm: "20px", md: "30px", lg: "56px" }}
            alignItems="center"
            display="flex"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="600"
              fontSize={{
                base: "50px",
                lg: "180px",
                xl: "200px",
              }}
              lineHeight={{
                base: "50px",
                lg: "180px",
                xl: "200px",
              }}
              letterSpacing="0.25px"
              color="#FFFFFF"
              marginRight={{ base: "10px", sm: "20px", md: "32px" }}
            >
              Drip
            </Chakra.Text>
            <Chakra.Box maxWidth="507px">
              <Chakra.Text
                marginBottom="0px"
                fontFamily="Clash Display"
                fontWeight="500"
                fontSize={{ base: "10px", md: "24px" }}
                lineHeight={{ base: "10px", md: "30px" }}
                letterSpacing="0.20px"
                color="#FFFFFF"
              >
                Get your drip apparel at a discount this festive season. We’ve
                been selling all year and if you haven’t bought yet, you might
                as well take this opportunity to buy.
              </Chakra.Text>
            </Chakra.Box>
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        display="flex"
        alignItems="center"
        width="100%"
        bottom={{ base: "15px", lg: "56px" }}
        position="absolute"
      >
        <Chakra.Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px={{ base: "30px", lg: "60px" }}
          maxWidth="1394px"
          width="100%"
          mx="auto"
        >
          <Chakra.Text
            marginBottom="0px"
            fontFamily="Clash Display"
            fontWeight="300"
            fontSize={{ base: "10px", md: "24px" }}
            lineHeight={{ base: "10px", md: "50px" }}
            marginRight={{ md: "27px" }}
            marginLeft={{ md: "26px" }}
            color="#1C1C1C"
          >
            Shop the collection
          </Chakra.Text>
          <Chakra.Box display={{ base: "none", md: "flex" }}>
            <ArrowIcon height="28px" width="44px" />
          </Chakra.Box>
          <Chakra.Box display={{ base: "flex", md: "none" }}>
            <ArrowIcon height="10px" width="44px" />
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        display={{ base: "none", md: "flex" }}
        position="absolute"
        bottom="0px"
        right="0px"
      >
        <CtaSvg />
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Cta
