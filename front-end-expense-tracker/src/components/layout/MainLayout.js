import React from "react";
import { Container } from "react-bootstrap";
import { TopNav } from "./TopNav";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <TopNav />
      {/* Dynamic Content */}
      <main className="main">
        <Container>{children}</Container>
      </main>

      {/* FOoter */}
      <footer className="footer bg-dark text-light p-5 text-center">
        ©️©️©️ all rights reserved. Build 🎶🎶🎶 by Nico Wiranata
      </footer>
    </div>
  );
};
