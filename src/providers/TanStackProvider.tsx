"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useMemo } from "react";

interface TanStackProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const TanStackProvider: React.FC<TanStackProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackProvider;
