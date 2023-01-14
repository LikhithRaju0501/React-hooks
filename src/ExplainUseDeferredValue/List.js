import React, { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;

  //   useDeferredValue works when dom has nothing left to execute
  //   difference between useTransition and useDeferredValue is the
  //   first one sets a priority and second one happens in the end

  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++)
      l.push(<div key={i}>{deferredInput}</div>);
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input Value: ${input}, Deferred input val: ${deferredInput}`);
  }, [input, deferredInput]);

  return list;
};

export default List;
