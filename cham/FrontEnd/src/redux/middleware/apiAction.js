import axios from "axios";
const callAirData = () => {
  return async (dispatch, getState) => {
    var url =
      "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList";
    var queryParams =
      "?=" +
      encodeURIComponent("serviceKey") +
      "unCVhcmHHK3Q8faJOGGNbZF7RtczH35eu6DRapp6zvPvgXeuZhZnWuTWlW2DGlUxKGyk7whRmpa29q9YFtRsxw=="; /* Service Key*/
    queryParams +=
      "&" +
      encodeURIComponent("schDate") +
      "=" +
      encodeURIComponent("20151005"); /* */
    queryParams +=
      "&" +
      encodeURIComponent("schDeptCityCode") +
      "=" +
      encodeURIComponent("GMP"); /* */
    queryParams +=
      "&" +
      encodeURIComponent("schArrvCityCode") +
      "=" +
      encodeURIComponent("HND"); /* */
    queryParams +=
      "&" +
      encodeURIComponent("schAirLine") +
      "=" +
      encodeURIComponent("NH"); /* */
    queryParams +=
      "&" +
      encodeURIComponent("schFlightNum") +
      "=" +
      encodeURIComponent("NH862"); /* */
    const allUser = await axios({
      method: "GET",
      url: url + queryParams,
    });

    console.log(allUser);
  };
};

export const apiAction = { callAirData };
