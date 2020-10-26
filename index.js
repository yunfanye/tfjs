let net;

async function app() {
  console.log('Loading model..');

  // Load the model.
  net = await tf.loadLayersModel('model.json');
  console.log('Successfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);

  document.getElementById('console').innerText = `
    prediction: ${result[0].className}\n
    probability: ${result[0].probability}
  `;
}

app();