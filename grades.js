// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function getGrade(mark) {
        if (mark >= 90) {
          return 'A';
        } else if (mark >= 80) {
          return 'B';
        } else if (mark >= 70) {
          return 'C';
        } else if (mark >= 60) {
          return 'D';
        } else if (mark >= 50) {
          return 'E';
        } else {
          return 'F';
        }
      }