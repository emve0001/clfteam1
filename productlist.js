// https://vkrlgbqzulxudbzqgvwo.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcmxnYnF6dWx4dWRienFndndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0OTQyNTEsImV4cCI6MjAyNjA3MDI1MX0.aBPigjNXVhN2yEcHZGHALDYU4PCJheP4Jm_xLk0XpQ4

fetch("https://vkrlgbqzulxudbzqgvwo.supabase.co/rest/v1/clf_data_team01")
  .then((response) => response.json())
  .then(showData);

function showData(data) {
  // looper og kalder på showData
  data.forEach(showData);
}

function showData(product) {
  console.log(productVisible);
}
