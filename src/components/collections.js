import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import Arrow from "../images/collections-arrow.svg"
// import CollectionArrow from "../images/collections-arrow.svg"
import CollectionImageOne from "../images/collection-image-one.png"
import CollectionImageTwo from "../images/collection-image-two.png"
import CollectionImageThree from "../images/collection-image-three.png"
// import { Link } from "gatsby"

const ArrowIcon = props => (
  <Chakra.Icon
    width="35"
    height="18"
    viewBox="0 0 66 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M44.6666 1.55554L64.1111 21M64.1111 21H1.88887M64.1111 21L44.6666 40.4444"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Chakra.Icon>
)

const SmallArrowIcon = props => (
  <Chakra.Icon
    width="35"
    height="18"
    viewBox="0 0 66 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M44.6666 1.55554L64.1111 21M64.1111 21H1.88887M64.1111 21L44.6666 40.4444"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Chakra.Icon>
)

const Collections = () => (
  <Chakra.Box width="100%" height="auto">
    <Chakra.Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: "30px", lg: "60px" }}
      pt={{ base: "20px", lg: "31px" }}
      pb={{ base: "42px", lg: "96px" }}
      marginBottom="0px"
      maxWidth="1394px"
      mx="auto"
      position="relative"
    >
      <Chakra.Box
        display="flex"
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="300"
        fontSize={{ base: "10px", sm: "14px", md: "25px", xl: "45px" }}
        lineHeight={{ base: "10px", sm: "14px", md: "25px", xl: "45px" }}
        letterSpacing="0.25px"
        color="#1C1C1C"
      >
        End of year promo has already started.{" "}
        <Chakra.Link
          fontWeight="300"
          pl="4px"
          pr={{ base: "15px", xl: "29px" }}
          textDecoration="underline"
          href="#"
        >
          {" "}
          Join now{" "}
        </Chakra.Link>{" "}
        <Chakra.Box display={{ base: "none", xl: "flex" }}>
          <Arrow width="66" height="42" />
        </Chakra.Box>
        <Chakra.Box display={{ base: "none", md: "flex", xl: "none" }}>
          <Arrow width="44" height="22" />
        </Chakra.Box>
        <Chakra.Box display={{ base: "flex", md: "none" }}>
          <Arrow width="44" height="9" />
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        paddingTop={{ base: "40px", lg: "94px" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Chakra.Box
          maxWidth={{ base: "auto", md: "calc(33% - 14px)" }}
          width={{ base: "auto", md: "100%" }}
          position="relative"
          color="#1C1C1C"
          marginRight={{ base: "0px", md: "20px" }}
          _hover={{
            ".image": {
              filter: "brightness(50%)",
            },
            ".textAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
            },
            ".boxAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
              display: "flex",
            },
          }}
        >
          <Chakra.Image
            className="image"
            src={CollectionImageOne}
          ></Chakra.Image>
          <Chakra.Box
            className="boxAspect"
            display="none"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="90%"
            top="0"
            bottom="40px"
            position="absolute"
          >
            <Chakra.Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              py="10px"
              px={{ base: "15px", sm: "30px" }}
              margin="auto"
              borderRadius="8px"
              border="2px solid #FFFFFF"
            >
              <Chakra.Text
                marginBottom="0px"
                fontFamily="Clash Display"
                color="#FFFFFF"
                fontWeight="300"
                fontSize={{ base: "14px", sm: "16px", xl: "30px" }}
                lineHeight={{ base: "14px", sm: "16px", xl: "50px" }}
                letterSpacing="0.25"
              >
                25% off
              </Chakra.Text>
            </Chakra.Box>
          </Chakra.Box>
          <Chakra.Box
            className="textAspect"
            display="flex"
            alignItems="center"
            left={{ base: "10px", sm: "24px" }}
            bottom="40px"
            position="absolute"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="300"
              fontSize={{ base: "13px", sm: "16px", xl: "24px" }}
              lineHeight={{ base: "13px", sm: "16px", xl: "50px" }}
              marginRight={{ base: "5px", sm: "27px" }}
            >
              Shop the collection
            </Chakra.Text>
            <Chakra.Box display={{ base: "none", md: "flex" }}>
              <ArrowIcon />
            </Chakra.Box>
            <Chakra.Box display={{ base: "flex", md: "none" }}>
              <SmallArrowIcon />
            </Chakra.Box>
          </Chakra.Box>
        </Chakra.Box>
        <Chakra.Box
          maxWidth={{ base: "auto", md: "calc(33% - 14px)" }}
          width={{ base: "auto", md: "100%" }}
          position="relative"
          color="#1C1C1C"
          marginRight={{ base: "0px", md: "20px" }}
          _hover={{
            ".image": {
              filter: "brightness(50%)",
            },
            ".textAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
            },
            ".boxAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
              display: "flex",
            },
          }}
        >
          <Chakra.Image
            className="image"
            src={CollectionImageTwo}
          ></Chakra.Image>
          <Chakra.Box
            className="boxAspect"
            display="none"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="90%"
            top="0"
            bottom="40px"
            position="absolute"
          >
            <Chakra.Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              py="10px"
              px={{ base: "15px", sm: "30px" }}
              margin="auto"
              borderRadius="8px"
              border="2px solid #FFFFFF"
            >
              <Chakra.Text
                marginBottom="0px"
                fontFamily="Clash Display"
                color="#FFFFFF"
                fontWeight="300"
                fontSize={{ base: "14px", sm: "16px", xl: "30px" }}
                lineHeight={{ base: "14px", sm: "16px", xl: "50px" }}
                letterSpacing="0.25"
              >
                25% off
              </Chakra.Text>
            </Chakra.Box>
          </Chakra.Box>
          <Chakra.Box
            className="textAspect"
            display="flex"
            alignItems="center"
            left={{ base: "10px", sm: "24px" }}
            bottom="40px"
            position="absolute"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="300"
              fontSize={{ base: "13px", sm: "16px", xl: "24px" }}
              lineHeight={{ base: "13px", sm: "16px", xl: "50px" }}
              marginRight={{ base: "5px", sm: "27px" }}
            >
              Shop the collection
            </Chakra.Text>
            <Chakra.Box display={{ base: "none", md: "flex" }}>
              <ArrowIcon />
            </Chakra.Box>
            <Chakra.Box display={{ base: "flex", md: "none" }}>
              <SmallArrowIcon />
            </Chakra.Box>
          </Chakra.Box>
        </Chakra.Box>
        <Chakra.Box
          maxWidth={{ base: "auto", md: "calc(33% - 14px)" }}
          width={{ base: "auto", md: "100%" }}
          position="relative"
          color="#1C1C1C"
          marginRight={{ base: "0px", md: "20px" }}
          _hover={{
            ".image": {
              filter: "brightness(50%)",
            },
            ".textAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
            },
            ".boxAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
              display: "flex",
            },
          }}
        >
          <Chakra.Image
            className="image"
            src={CollectionImageThree}
          ></Chakra.Image>
          <Chakra.Box
            className="boxAspect"
            display="none"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="90%"
            top="0"
            bottom="40px"
            position="absolute"
          >
            <Chakra.Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              py="10px"
              px={{ base: "15px", sm: "30px" }}
              margin="auto"
              borderRadius="8px"
              border="2px solid #FFFFFF"
            >
              <Chakra.Text
                marginBottom="0px"
                fontFamily="Clash Display"
                color="#FFFFFF"
                fontWeight="300"
                fontSize={{ base: "14px", sm: "16px", xl: "30px" }}
                lineHeight={{ base: "14px", sm: "16px", xl: "50px" }}
                letterSpacing="0.25"
              >
                25% off
              </Chakra.Text>
            </Chakra.Box>
          </Chakra.Box>
          <Chakra.Box
            className="textAspect"
            display="flex"
            alignItems="center"
            left={{ base: "10px", sm: "24px" }}
            bottom="40px"
            position="absolute"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="300"
              fontSize={{ base: "13px", sm: "16px", xl: "24px" }}
              lineHeight={{ base: "13px", sm: "16px", xl: "50px" }}
              marginRight={{ base: "5px", sm: "27px" }}
            >
              Shop the collection
            </Chakra.Text>
            <Chakra.Box display={{ base: "none", md: "flex" }}>
              <ArrowIcon />
            </Chakra.Box>
            <Chakra.Box display={{ base: "flex", md: "none" }}>
              <SmallArrowIcon />
            </Chakra.Box>
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default Collections
