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
