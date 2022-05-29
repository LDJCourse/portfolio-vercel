import React from "react";

const DarkmodeBtn = () => {
  return (
    <div>
      <form>
        <input
          id="dark-mode"
          class="toggle"
          type="checkbox"
          name="Dark mode"
          role="switch"
          value="on"
        />
        <label for="dark-mode" class="sr">
          Dark Mode
        </label>
      </form>
    </div>
  );
};

export default DarkmodeBtn;
