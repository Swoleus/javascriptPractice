function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }




function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age >  18) || confirm('Did parents allow you?');
}


function min(a,b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
}

function min(a,b) {
  return a > b ? b : a;
}


// show function below with function expressions.

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// below is with => as function expression

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask (
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);