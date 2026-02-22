let currentTab = "All";
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const tabCount = document.getElementById("tabCount");
const emptyState = document.getElementById("emptyState");
function updateCounts() {
  const jobs = document.querySelectorAll(".job");
  let interview = 0, rejected = 0, visible = 0;
  const total = jobs.length;

  jobs.forEach(job => {
    const s = job.dataset.status;
    if (s === "Interview") interview++;
    if (s === "Rejected") rejected++;
    if (currentTab === "All" || s === currentTab) visible++;
  });

  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;
  totalCount.textContent = total;
  tabCount.textContent = `${visible} of ${total} jobs`;
}