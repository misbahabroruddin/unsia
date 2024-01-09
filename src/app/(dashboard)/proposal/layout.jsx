import React from "react";

export function generateMetadata() {
  return { title: "Proposal" };
}

export default function ProposalLayout({ children }) {
  return <div>{children}</div>;
}
