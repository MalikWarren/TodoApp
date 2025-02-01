import React from "react";
import { AuthorContainer } from "./styles";

function Author() {
  return (
    <AuthorContainer>
      Created by{" "}
      <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
        Malik Warren
      </a>
    </AuthorContainer>
  );
}

export default Author;
