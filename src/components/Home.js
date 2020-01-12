import React from "react";

export default () => {
  const babyEmojies = ['👶🏼', '👶🏼', '👶🏻','👶🏽','👶🏾']
  return (
    <div>
      <h1>Baby Bet</h1>
      <span style={{ fontSize: 128 }} role="img" aria-label="baby-emoji">
        {babyEmojies[Math.floor(Math.random() * babyEmojies.length)]}
      </span>
    </div>
  );
};
