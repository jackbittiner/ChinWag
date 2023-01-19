import moment from "moment/moment";

export const formatDate = (dateTime: string) => {
  return moment(dateTime).format("MMMM Do YYYY, hh:mm:ss");
};
