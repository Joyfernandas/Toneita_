import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <>
      <div className="filterdropdown">
        <select class="ui-dropdown">
          <option value="">size</option>
          <option value="1">..</option>
          <option value="0">..</option>
        </select>

        <div>
          <select class="ui dropdown">
            <option value="">Material</option>
            <option value="1">mattress</option>
            <option value="0">..</option>
          </select>
        </div>
        <div>
          <select class="ui dropdown">
            <option value="">sort by Recommented</option>
            <option value="1">Pillows</option>
            <option value="0">...</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
