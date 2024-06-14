import { useState } from "react";

// const commonPasswords = ["password", "12345678"];

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState("");

  const calculateStrength = (password) => {
    let score = 0;
    let feedbackMessages = [];

    // if (password.length > 8) score += 2;
    // if (/[A-Z]/.test(password)) score += 1;
    // if (/[a-z]/.test(password)) score += 1;
    // if (/[0-9]/.test(password)) score += 1;
    // if (/[\W_]/.test(password)) score += 1; // This checks for special characters

    // checking for common password
    // if (commonPasswords.includes(password.toLowerCase())) score += 1;

    if (password.length > 8) {
      score += 2;
    } else {
      feedbackMessages.push("Password should be longer than 8 characters");
    }

    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push(
        "Password should include at least one uppercase character"
      );
    }

    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push(
        "Password should include at least one lowercase character"
      );
    }

    if (/[0-9]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push("Password should include at least on number");
    }

    if (/[\W_]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push(
        "Password should include at least one special character"
      );
    }

    setStrength(score);
    setFeedback(feedbackMessages.join(" "));
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    calculateStrength(e.target.value);
  };

  const getStrengthLabel = () => {
    if (strength < 3) return "Weak";
    if (strength < 6) return "Moderate";
    return "Strong";
  };

  const getProgressBarColor = () => {
    if (strength < 3) return "red";
    if (strength < 6) return "yellow";
    return "green";
  };

  return (
    <div>
      <div>
        <h2>Password Strength Checker</h2>
        <input
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <progress
          value={strength}
          max={6}
          style={{
            backgroundColor: getProgressBarColor(),
          }}
        />
        <span
          style={{
            color: getProgressBarColor(),
          }}
        >
          {getStrengthLabel()}
        </span>
      </div>
      <p>{feedback}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
