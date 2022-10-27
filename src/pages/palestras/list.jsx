import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/sidebar";
import StickyHeadTable from "../../components/sidebar/table/table";

const Content = () => {
  return <StickyHeadTable route="http://127.0.0.1:3000/admin/ping" />;
};

const Palestras = () => {
  return <Sidebar content={<Content />} />;
};

export default Palestras;
