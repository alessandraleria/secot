import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/sidebar";
import StickyHeadTable from "../../components/sidebar/table/table";

const Content = () => {
  return <StickyHeadTable />;
};

const Usuarios = () => {
  return <Sidebar content={<Content />} />;
};

export default Usuarios;
