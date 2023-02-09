import { mergeStyleSets, IProcessedStyleSet, IStyle } from "@fluentui/react";

interface IListStyle {
  taskItem: IStyle;
  iconStyle: IStyle;
  disabled: IStyle;
  iconStyleDelete: IStyle;
  iconStyleDesc: IStyle;
  titleChecked: IStyle;
}

const ListStyle: IProcessedStyleSet<IListStyle> = mergeStyleSets({
  taskItem: {
    maxHeight: 50,
    minHeight: 50,
    padding: 10,
    width: "100%",
    backgroundColor: "lavender",
    fontSize: 17,
    fontWeight: 500,
    selectors: {
      "&:hover": { background: "rgb(243, 242, 241)" },
    },
    margin: 5,
    display: "flex",
    alignItems: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  },

  titleChecked: {
    color: "grey",
    textDecoration: "line-through",
    selectors: {
      "&.taskItem.checked": {
        textDecoration: "line-through",
      }
    },
  },

  iconStyle: {
    fontSize: 24,
    margin: '0 6px',
    selectors: {
      "&:hover": { cursor: "pointer" },
    },
  },
  iconStyleDelete: {
    fontSize: 24,
    margin: '0 6px',
    color: "red",
    selectors: {
      "&:hover": { cursor: "pointer" },
    },
  },
  iconStyleDesc: {
    color: "grey",
    selectors: {
      "&:hover": { cursor: "pointer", color: "blue" }
    },
  },
  disabled: {
    color: "gray",
    selectors: {
      "&:hover": { cursor: "default" },
    }
  }
});

export default ListStyle;