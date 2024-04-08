import axios from "axios";
async function xcv() {
  const api_key = "048c541445b0fed3cfbfec3564d0a21e";
  const name = "Devapur";
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`
  );
  console.log(response.data);
}
xcv();
