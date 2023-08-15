import { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [activity, setActivity] = useState('');
  const [activityCount, setActivityCount] = useState(1)

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((data) => setActivity(data.activity));
  }, [activityCount]);
  return (
    <>
      <button onClick={() => setActivityCount(activityCount +1)}>Activity</button>
      <p>{activityCount} {activity}</p>
    </>
  );
};
export default TestUseEffect
