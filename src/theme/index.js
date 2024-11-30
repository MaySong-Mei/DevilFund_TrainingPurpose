// 引入 Chakra UI 的 extendTheme 方法
import { extendTheme } from "@chakra-ui/react";

// 引入基础样式配置
import colors from "./foundations/colors";
import textStyles from "./foundations/textStyles";

// 引入组件样式
import Button from "./components/button";
import Heading from "./components/heading";
import Link from "./components/link";

// 整合主题
const theme = extendTheme({
  // 基础样式
  colors,
  textStyles,
  // 全局组件样式
  components: {
    Button,
    Heading,
    Link,
  },
});

export default theme;
