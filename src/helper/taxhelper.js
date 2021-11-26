import { KeyboardArrowRight } from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

export const firstTwoButtons = [
  {
    id: 1,
    title: {
      title: "File it yourself",
      style: { fontWeight: "bold" },
    },
    style: {
      paddingRight: 30,
      minHeight: 250,
      backgroundColor: "#d7f5e6",
    },
    description:
      "Trust us, you can file your tax return on your own. It’s Easy, quick and free when you file with LesTax on your own.",
    xs: 12,
    sm: 6,
    icon: <DescriptionIcon fontSize="large" />,
    button: {
      title: "File ITR NOW",
      style: { backgroundColor: "#56ba4b" },
      endIcon: <KeyboardArrowRight />,
      variant: "contained",
    },
  },
  {
    id: 2,
    title: {
      title: "Get a personal eCA",
      style: { fontWeight: "bold" },
    },
    style: {
      paddingRight: 30,
      minHeight: 250,
      backgroundColor: "#fff",
    },
    description:
      " Get your personal eCA to do tax filing for you. And it is personal, convenient & fast with maximum refund calculated for you.",
    xs: 12,
    sm: 6,
    icon: <AccessibilityIcon fontSize="large" />,
    button: {
      title: "File ITR NOW",
      endIcon: <KeyboardArrowRight />,
      variant: "contained",
    },
  },
];

export const secondSixButtonOne = [
  {
    id: 1,
    title: {
      title: "Get A personal eCA",
      style: { fontWeight: "bold", fontSize: 14 },
    },
    style: {
      paddingLeft: 30,
      minHeight: 150,
      backgroundColor: "#e8eff3",
    },
    description:
      "Get your personal eCA to do tax filing for you. And it is personal, convenient & fast with maximum refund calculated for you.",
    descriptionStyle: { fontSize: 12, paddingRight: 30 },
    xs: 12,
    sm: 6,
    icon: <DescriptionIcon fontSize="large" />,
    button: {
      title: "Book NOW",
      endIcon: <KeyboardArrowRight />,
      style: { color: "black", fontSize: 10, border: "solid 1px #d8dde3" },
      variant: "outlined",
    },
  },
  {
    id: 2,
    title: {
      title: "File it yourself",
      style: { fontWeight: "bold", fontSize: 14 },
    },
    style: {
      paddingLeft: 30,
      minHeight: 150,
      backgroundColor: "#d7f5e6",
    },
    description:
      "You can file your ITR on your own. It's Easy, quick & free when you file with Tax2win on your own.",
    descriptionStyle: { fontSize: 12, paddingRight: 30 },
    xs: 12,
    sm: 4,
    icon: <AccessibilityIcon fontSize="large" />,
    button: {
      title: "File NOW",
      endIcon: <KeyboardArrowRight />,
      style: { color: "black", fontSize: 10, border: "solid 1px #d8dde3" },
      variant: "outlined",
    },
  },
  {
    id: 3,
    title: {
      title: "Upload Now",
      style: { fontWeight: "bold", fontSize: 14 },
    },
    style: {
      paddingLeft: 30,
      minHeight: 150,
      backgroundColor: "#fff",
    },
    description: "Upload File Now",
    descriptionStyle: { fontSize: 12, paddingRight: 30 },
    xs: 12,
    sm: 2,
    button: {
      title: "Upload Now",
      endIcon: <KeyboardArrowRight />,
      style: { color: "black", fontSize: 10, border: "solid 1px #d8dde3" },
      variant: "outlined",
    },
  },
  {
    id: 4,
    title: {
      title: "File Revised Return",
      style: { fontWeight: "bold", fontSize: 14 },
    },
    style: {
      paddingLeft: 30,
      minHeight: 150,
      backgroundColor: "#d1e9dd",
    },
    description:
      "File Revised Return Made mistake while filing ITR? We can help you correct it.",
    descriptionStyle: { fontSize: 12, paddingRight: 30 },
    xs: 12,
    sm: 4,
    button: {
      title: "Revise ITR Now",
      style: { color: "black", fontSize: 10, border: "solid 1px #d8dde3" },
      variant: "outlined",
      endIcon: <KeyboardArrowRight />,
    },
  },
  {
    id: 5,
    title: {
      title: "Plan Tax And File ITR",
      style: { fontWeight: "bold", fontSize: 14 },
    },
    style: {
      paddingLeft: 30,
      minHeight: 150,
      backgroundColor: "#c8e5c4",
    },
    description:
      "Y A little planning can go a long way in saving your hard earned money. Don't just file your tax return, plan them & get maximum refunds.",
    descriptionStyle: { fontSize: 12, paddingRight: 30 },
    xs: 12,
    sm: 4,
    icon: <AccessibilityIcon fontSize="large" />,
    button: {
      title: "Start Now",
      style: { color: "black", fontSize: 10, border: "solid 1px #d8dde3" },
      variant: "outlined",
      endIcon: <KeyboardArrowRight />,
    },
  },
  {
    id: 6,
    title: {
      title: "NRI Tax and ITR Filing",
      style: { fontWeight: "bold", fontSize: 14 },
    },
    style: {
      paddingLeft: 30,
      minHeight: 150,
      backgroundColor: "#e3eee4",
    },
    description:
      "Status of NRI seems to be cool but it brings with itself a lot of taxation..",
    descriptionStyle: { fontSize: 12, paddingRight: 30 },
    xs: 12,
    sm: 4,
    icon: <AccessibilityIcon fontSize="large" />,
    button: {
      title: "Start Now",
      style: { color: "black", fontSize: 10, border: "solid 1px #d8dde3" },
      variant: "outlined",
      endIcon: <KeyboardArrowRight />,
    },
  },
];
