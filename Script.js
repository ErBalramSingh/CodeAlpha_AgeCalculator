document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");

  if (!dobInput) {
    resultDiv.innerText = "Please enter your date of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultDiv.innerText = "Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.innerText = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
});

// Reset Age button functionality
document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("dob").value = "";
  document.getElementById("result").innerText = "";
});
