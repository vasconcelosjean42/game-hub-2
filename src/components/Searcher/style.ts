import { cva } from "../../../styled-system/css";
import { HStack, styled } from "../../../styled-system/jsx"

const searchReceipt= cva({
  base: {

  },
  variants: {
    visual: {
      light: {
        bgColor: "slate.300",
        color: "slate.900"
      },
      dark: {
        bgColor: "slate.800",
        color: "slate.300"
      }
    },
  }
})

export const StyledSearch = styled(HStack, searchReceipt)