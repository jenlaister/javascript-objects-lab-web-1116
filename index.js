var recipes = {nom: 'cookie'};

function updateObjectWithKeyAndValue(object, key, value) {
  var newReceipes = Object.assign({}, object, { [key]: value })
  return newReceipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var revisedReceipe = Object.assign({}, object)
  delete revisedReceipe.key
  return revisedReceipe
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
