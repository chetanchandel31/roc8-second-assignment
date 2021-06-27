import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	root: {
		display: "flex",
		borderBottom: "solid 1px rgba(128, 129, 128, 0.5)",
	},
	counter: {
		width: "30%",
	},
	itemDetails: {
		flexGrow: 1,
		paddingLeft: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	imageContainer: {
		height: "200px",
		width: "100%",
		overflow: "hidden",
		margin: "5px",
	},
	image: {
		width: "100%",
	},
	price: {
		"& small": {
			color: "#388e3c",
		},
	},
}));
