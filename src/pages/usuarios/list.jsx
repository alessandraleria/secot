import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/sidebar";
import UserTable from "./table";

const Content = () => {
  return <UserTable />;
};

const Usuarios = () => {
  return <Sidebar content={<Content />} />;
};

export default Usuarios;
