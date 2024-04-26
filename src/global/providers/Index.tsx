"use client";

 
import NextThemeProvider from "./NextThemeProvider";
import StoreProvider from "./StoreProvider";

type IndexProps = { children: React.ReactNode };

function Index({ children }: IndexProps) {
  return (
    <>
      <StoreProvider>
        <NextThemeProvider>{children}</NextThemeProvider>
      </StoreProvider>
    </>
  );
}

export default Index;
