import React from "react";

export const Button = (props) => {
    return (
        <button onClick={() => {
            props.onClickFunction();
        }}>
          {props.children}
        </button>
    )
}

export function handleProfilerRender(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  const obj = {
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  };
  const formatted = Object.entries(obj).reduce((acc, [key, val]) => {
    return {
      ...acc,
      [key]: typeof val === "number" ? humanReadableTime(val) : val
    };
  }, {});
  console.log(formatted);
}

function humanReadableTime(time) {
  return `${Math.round(time)}ms`;
}