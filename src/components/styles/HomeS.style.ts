import { mergeStyleSets, IProcessedStyleSet, IStyle } from "@fluentui/react";

interface IHomeStyle {
  homeContainer: IStyle;
  headerStyle: IStyle;
  pivotRoot: IStyle;
  pivotContainer: IStyle;
}

const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
  homeContainer: {
    width: "50%",
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  headerStyle: {
    height: 50,
    borderRadius: "4px",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  pivotRoot: {
    display: "flex",
    justifyContent: "center",
  },
  pivotContainer: {
    margin: "20",
  },
});

export default HomeStyle;