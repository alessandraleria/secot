import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

import Sidebar from "../../components/sidebar/sidebar";

import Paper from "@mui/material/Paper";



const Content = () => {

  const readQrCode = (qrCode) => {
    console.log(qrCode)
  }

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            readQrCode(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
    </>
  );
};

const QRCode = () => {
  return <Sidebar content={<Content />} />;
};

export default QRCode;
