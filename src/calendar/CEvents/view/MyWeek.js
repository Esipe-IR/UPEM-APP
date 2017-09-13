import React from "react";
import Week from "react-big-calendar/lib/Week";
import TimeGrid from "react-big-calendar/lib/TimeGrid";
import dates from "react-big-calendar/lib/utils/dates";
import localizer from "react-big-calendar/lib/localizer";
import { getRange } from "../../../services/date";

class MyWeek extends Week {
  render() {
    const { date } = this.props;
    const { start, end } = MyWeek.range(date, this.props);
    const range = getRange(start, end);

    return (
      <TimeGrid
        {...this.props}
        range={range}
        start={start}
        end={end}
        eventOffset={15}
      />
    );
  }
}

MyWeek.range = (date, { culture }) => {
  let firstOfWeek = localizer.startOfWeek(culture);
  let start = dates.startOf(date, "week", firstOfWeek);
  let end = dates.endOf(date, "week", firstOfWeek);

  if (firstOfWeek === 1) {
    end = dates.subtract(end, 2, "day");
  } else {
    start = dates.add(start, 1, "day");
    end = dates.subtract(end, 1, "day");
  }

  return { start, end };
};

export default MyWeek;
