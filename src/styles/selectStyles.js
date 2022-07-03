export const bookingSelect = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "1px solid rgb(52, 33, 19)",
    fontWeight: "400",
    borderRadius: "0px",
    fontFamily: "var(--main-font)",
    fontSize: "12px",
    "@media screen and (min-width: 768px)": { width: "330px" },
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--text-color)",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    all: "unset",
  }),

  container: (styles) => ({
    ...styles,
    width: "100%",
    height: "100%",
    backgroundColor: "var(--add-light-color)",
    paddingRight: "0",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "grey" : "var(--add-light-color)",
      color: "var(--text-color)",
      fontFamily: "var(--main-font)",
      fontSize: "12px",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

export const giftcardSelect = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "1px solid var(--text-color)",
    borderRadius: "0px",
    "@media screen and (min-width: 768px)": { width: "297px" },
    fontFamily: "var(--main-font)",
    fontSize: "12px",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--text-color)",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    all: "unset",
  }),

  container: (styles) => ({
    ...styles,
    width: "100%",
    backgroundColor: "var(--add-light-color)",
    paddingRight: "0",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "grey" : "var(--add-light-color)",
      color: "var(--text-color)",
      fontFamily: "var(--main-font)",
      fontSize: "12px",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};
