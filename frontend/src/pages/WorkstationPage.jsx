import React from "react";
import WorkstationView from "../workstation/WorkstationView.jsx";
import s from "./Page.module.css";

export default function WorkstationPage() {
  return (
    <main id="main" className={s.page} style={{ minHeight: "100vh" }}>
      <WorkstationView />
    </main>
  );
}
