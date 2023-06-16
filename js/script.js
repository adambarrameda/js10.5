// SkillCrush Javascript 10.5
// Celebrate with Methods

// Starter Code
const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

const learning = {
  topic: "JS",
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs"
  ],
  category: "Front End Development",
  topicImportance: "High",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  // Create New Properties
  achievedStudyGoal: false,
  addStudyTime: function(hours){
    // Add Values & Create a Conditional Statement
    this.hoursThisWeek += hours;
    if (this.hoursThisWeek >= this.weeklyHourGoal){
      this.achievedStudyGoal = true;
      // Call Methods
      this.celebrate();
    }
  },
  // Add a Method to Celebrate
  celebrate: function(){
    body.classList.add("celebrate");
    success.classList.remove("hide");
    dance.classList.remove("hide");
  }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");

// Call Methods
learning.addStudyTime(8);