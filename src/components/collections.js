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
    height="22"
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
      px="60px"
      pt="31px"
      pb="96px"
      marginBottom="0px"
      maxWidth="1394px"
      mx="auto"
      position="relative"
    >
      <Chakra.Text
        display="flex"
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="300"
        fontSize={{ base: "16px", xl: "45px" }}
        lineHeight={{ base: "16px", xl: "45px" }}
        letterSpacing="0.25px"
        color="#1C1C1C"
      >
        End of year promo has already started.{" "}
        <Chakra.Link
          fontWeight="300"
          pl="4px"
          pr="29px"
          textDecoration="underline"
          href="#"
        >
          {" "}
          Join now{" "}
        </Chakra.Link>{" "}
        <Arrow />
      </Chakra.Text>
      <Chakra.Box
        pt="94px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Chakra.Box
          maxWidth="calc(33% - 20px)"
          width="100%"
          position="relative"
          color="#1C1C1C"
          _hover={{
            ".image": {
              filter: "brightness(50%)",
            },
            ".textAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
            },
          }}
        >
          <Chakra.Image
            className="image"
            src={CollectionImageOne}
          ></Chakra.Image>
          <Chakra.Box
            className="textAspect"
            display="flex"
            alignItems="center"
            left="24px"
            bottom="40px"
            position="absolute"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="300"
              fontSize={{ base: "16px", xl: "24px" }}
              lineHeight={{ base: "16px", xl: "50px" }}
              marginRight="27px"
            >
              Shop the collection
            </Chakra.Text>
            <ArrowIcon />
          </Chakra.Box>
        </Chakra.Box>
        <Chakra.Box
          maxWidth="calc(33% - 20px)"
          width="100%"
          position="relative"
          color="#1C1C1C"
          _hover={{
            ".image": {
              filter: "brightness(50%)",
            },
            ".textAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
            },
          }}
        >
          <Chakra.Image
            className="image"
            src={CollectionImageTwo}
          ></Chakra.Image>
          <Chakra.Box
            className="textAspect"
            display="flex"
            alignItems="center"
            left="24px"
            bottom="40px"
            position="absolute"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="300"
              fontSize={{ base: "16px", xl: "24px" }}
              lineHeight={{ base: "16px", xl: "50px" }}
              marginRight="27px"
            >
              Shop the collection
            </Chakra.Text>
            <ArrowIcon />
          </Chakra.Box>
        </Chakra.Box>
        <Chakra.Box
          maxWidth="calc(33% - 20px)"
          width="100%"
          position="relative"
          color="#1C1C1C"
          _hover={{
            ".image": {
              filter: "brightness(50%)",
            },
            ".textAspect": {
              filter: "brightness(100%)",
              color: "#FFFFFF",
            },
          }}
        >
          <Chakra.Image
            className="image"
            src={CollectionImageThree}
          ></Chakra.Image>
          <Chakra.Box
            className="textAspect"
            display="flex"
            alignItems="center"
            left="24px"
            bottom="40px"
            position="absolute"
          >
            <Chakra.Text
              marginBottom="0px"
              fontFamily="Clash Display"
              fontWeight="300"
              fontSize={{ base: "16px", xl: "24px" }}
              lineHeight={{ base: "16px", xl: "50px" }}
              marginRight="27px"
            >
              Shop the collection
            </Chakra.Text>
            <ArrowIcon />
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default Collections
