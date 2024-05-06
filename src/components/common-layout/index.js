"use client";

import UserState from "@/context";

export default function CommonLayout({ children }) {
  return <UserState>{children}</UserState>;
}
