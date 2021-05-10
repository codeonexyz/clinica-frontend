import React from "react";
import {
	Row,
	Col,
	Table,
	Button,
	TabPane,
} from "reactstrap";
import "./style.css";
import VisitDisplayCard from "../visit-display-card";

const VisitsTabPane = (props) => {
	const {
		tabId
	} = props;

	return (
		<TabPane tabId={tabId}>
			<VisitDisplayCard />
			<VisitDisplayCard />
			<VisitDisplayCard />
		</TabPane>
	);
};

export default VisitsTabPane;