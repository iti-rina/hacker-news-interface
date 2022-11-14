import { formatDistanceToNow } from "date-fns";

export default function TimeAgo({ timestamp }) {
  const time = new Date(timestamp * 1000);
  let timeAgo = "";
  if (time) {
    const timePeriod = formatDistanceToNow(time, {addSuffix: true});
    timeAgo = `${timePeriod}`;
  }
  
  return (
    <span title={time}>&nbsp; <i>{timeAgo}</i></span>
  );
}