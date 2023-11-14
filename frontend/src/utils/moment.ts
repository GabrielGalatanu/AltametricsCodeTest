import moment from "moment";

const formatDateTime = (dateTimeStr: string): string => {
  return moment(dateTimeStr).format("MMMM Do YYYY, h:mm:ss a");
};

export { formatDateTime };
