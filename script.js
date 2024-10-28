$(document).ready(function () {
  $("#submitBtn").click(function () {
    const letterDay = $("#dayInput").val().toUpperCase();
    if (["A", "B", "C", "D", "E", "F", "G"].includes(letterDay)) {
      fetchSchedule(letterDay);
    } else {
      alert("Please enter a valid letter day (A-G).");
    }
  });
});
function fetchSchedule(day) {
  $.ajax({
    url: "YOUR_JSON_URL", // replace with your hosted JSON URL
    method: "GET",
    success: function (data) {
      displaySchedule(data, day);
    },
    error: function () {
      alert("Error loading schedule data.");
    },
  });
}
function displaySchedule(data, day) {
  const $tbody = $("#scheduleTable tbody");
  $tbody.empty(); // Clear previous results

  data.forEach((item) => {
    if (item.days.includes(day)) {
      $tbody.append(`
                <tr>
                    <td>${item.period}</td>
                    <td>${item.time || "N/A"}</td>
                    <td>${item.class}</td>
                    <td>${item.teacher}</td>
                    <td>${item.room}</td>
                </tr>
            `);
    }
  });
}

