import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/sidebar";
import TalksTable from "./table";

const Content = () => {
  return <TalksTable />;
};

const Palestras = () => {
  return <Sidebar content={<Content />} />;
};

export default Palestras;
