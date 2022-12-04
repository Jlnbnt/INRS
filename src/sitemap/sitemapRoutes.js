import React from "react";

import { Route } from "react-router";

export default (
  <Route>
    <Route path="/">
      <Route path="/" />

      <Route path="/blogs" />
      <Route path="/blog/:id" />

      <Route path="/actualites" />
      <Route path="/actualite/:id" />

      <Route path="/evenements" />
      <Route path="/evenement/:id" />

      <Route path="/jobs" />

      <Route path="/about" />

      <Route path="/search" />

      <Route path="/pdc" />
      <Route path="/cgu" />
    </Route>

    <Route path="*" />
  </Route>
);
