import React from "react";

export default () => {
  const [state, setstate] = useState(initialState);

  return (
    <form>
      <fieldset style={{ marginBottom: 30 }}>
        <legend>Your details</legend>
        <Label>
          <span>Name</span>
          <input type="text"></input>
        </Label>
        <Label>
          <span>I would like a babycard</span>
          <input type="radio"></input>
        </Label>
        <Label>
          <span>Message for the baby</span>
          <input type="text"></input>
        </Label>
      </fieldset>
    </form>
  );
};
