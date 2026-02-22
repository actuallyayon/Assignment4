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
function filterJobs() {
  const jobs = document.querySelectorAll(".job");
  let visible = 0;

  jobs.forEach(job => {
    const s = job.dataset.status;
    if (currentTab === "All" || s === currentTab)
        {
      job.style.display = "block";
      visible++;
    }
    else {
      job.style.display = "none";
    }
  });

  if (visible === 0) emptyState.classList.remove("hidden");
  else emptyState.classList.add("hidden");

  updateCounts();
}
function filterJobs() {
  const jobs = document.querySelectorAll(".job");
  let visible = 0;

  jobs.forEach(job => {
    const s = job.dataset.status;
    if (currentTab === "All" || s === currentTab)
        {
      job.style.display = "block";
      visible++;
    }
    else {
      job.style.display = "none";
    }
  });

  if (visible === 0) emptyState.classList.remove("hidden");
  else emptyState.classList.add("hidden");

  updateCounts();
}

function updateCard(job) {
  const badge = job.querySelector(".badge");
  const s = job.dataset.status;

  badge.className = "badge text-xs px-2 py-1 rounded";

  if (s === "Interview")
    {
    badge.textContent = "INTERVIEW";
    badge.classList.add("bg-green-100", "text-green-700");
  }
  else if (s === "Rejected")
    {
    badge.textContent = "REJECTED";
    badge.classList.add("bg-red-100", "text-red-700");
  }
  else {
    badge.textContent = "NOT APPLIED";
    badge.classList.add("bg-slate-200");
  }
  filterJobs();
}

document.querySelectorAll(".job").forEach(job => {
  job.querySelector(".interview").onclick = () => {
    job.dataset.status = job.dataset.status === "Interview" ? "All" : "Interview";
    updateCard(job);
  };

  job.querySelector(".rejected").onclick = () => {
    job.dataset.status = job.dataset.status === "Rejected" ? "All" : "Rejected";
    updateCard(job);
  };

  job.querySelector(".delete").onclick = () => {
    if (currentTab === "All")
        {
      job.remove();
    }
    else {
      job.dataset.status = "All";
    }
    filterJobs();
  };
});

document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b => {
      b.classList.remove("bg-blue-600", "text-white");
      b.classList.add("bg-slate-200");
    });
    btn.classList.add("bg-blue-600", "text-white");
    btn.classList.remove("bg-slate-200");
    currentTab = btn.dataset.tab;
    filterJobs();
  };
});
filterJobs();