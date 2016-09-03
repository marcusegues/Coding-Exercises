import React from 'react';

// App holds all top-level concerns
// A top-level concern is a feature that functions on its own and as such is not nested under
// any other features
// Can be a functional component because does not depend on any React lifecycle hooks
// Doesn't rely on any of its props so doesn't have to receive any arguments
export const App = () => <h1>IT WORKS!</h1>;
