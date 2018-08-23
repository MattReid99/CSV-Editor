function getNumberOfColumns(data) {
  var lines = data.split('\n');

  var first = lines[0];
    var count = (first.match(/,/g) || []).length;

  return count;
}

function addColumnWithWord(data, name, word) {
  var lines = data.split('\n');
  var endResult = lines[0]+', '+name+'\n';

  for (var i=1; i<lines.length; i++) {
    endResult += lines[i]+', '+word+'\n';
  }
  return endResult;
}

function addColumn(data, name) {
  var lines = data.split('\n');
  var endResult = lines[0]+', '+name+'\n';

  for (var i=1; i<lines.length; i++) {
    endResult += lines[i]+', \n';
  }
  return endResult;
}

function getPosition(str, char, index) {
  return str.split(char, index).join(char).length;
}

function deleteColumnAtIndex(index, data) {
  var firstLine = data.substring(0, data.indexOf('\n'));
  if (index >= firstLine.lastIndexOf(',') || index < 0) {
    alert('Index is out of range');
  }
  var lines = data.split('\n');
  var endResult = "";

  for (var i=0; i<lines.length; i++) {
    endResult += lines[i].substring(0, getPosition(lines[i], ',', index)) + lines[i].substring(getPosition(lines[i], ',', index+1)) + '\n';
  }
  return endResult;
}

function deleteRow(data, value) {
  var lines = data.split('\n');
  if (value < 0 || value >= lines.length) {
    alert('Index is out of range');
    return null;
  }
  lines.splice(value, 1);
  return lines.join('\n');
}

function deleteWhere(word, data) {
  var lines = data.split('\n');
  var linesRemoved = 0;
  var indices = [];

  for (var i=0; i<lines.length; i++) {
    if (lines[i].indexOf(word) != -1) {
      linesRemoved++;
      indices.push(i);
    }
  }
  for (var j=0; j<indices.length; j++) {
    lines.splice(indices[j], 1);
  }
  alert(linesRemoved+' rows deleted');
  return lines.join('\n');
}

function addRow(values) {
  var row = "\n";
  for (var i=0; i<values.length; i++) {
    row += values[i]+", ";
  }
  return row;
}
