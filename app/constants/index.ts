export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Senior Frontend Developer",
    imagePath: "/images/resume-1.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 88,
      ATS: {
        score: 92,
        tips: [
          { type: "good", tip: "Excellent keyword usage aligned with job description." },
          { type: "good", tip: "Clean parsing structure with standard headings." },
          { type: "improve", tip: "Include the job title in the file name (e.g., Name_Frontend_Resume.pdf)." }
        ],
      },
      toneAndStyle: {
        score: 90,
        tips: [
          { type: "good", tip: "Professional and active voice.", explanation: "Uses strong action verbs like 'Architected', 'Deployed', 'Optimized'." },
          { type: "good", tip: "Concise summaries.", explanation: "Bullet points are kept brief and impactful." }
        ],
      },
      content: {
        score: 85,
        tips: [
          { type: "good", tip: "Quantifiable achievements.", explanation: "Excellent use of metrics (e.g., 'improved load time by 40%')." },
          { type: "improve", tip: "Expand soft skills.", explanation: "Mention mentorship or cross-functional collaboration explicitly." }
        ],
      },
      structure: {
        score: 95,
        tips: [
          { type: "good", tip: "Perfect chronological order.", explanation: "Easy to follow career progression." },
          { type: "good", tip: "Consistent formatting.", explanation: "Fonts and spacing are uniform throughout." }
        ],
      },
      skills: {
        score: 88,
        tips: [
          { type: "good", tip: "Core stack highlighted.", explanation: "React, TypeScript, and Node.js are clearly visible." },
          { type: "improve", tip: "Add cloud skills.", explanation: "Specify AWS/GCP experience if applicable for a senior role." }
        ],
      },
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume-2.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 40,
        tips: [
          { type: "improve", tip: "Complex layout detected.", explanation: "Use a single-column layout for better ATS parsing." },
          { type: "improve", tip: "Use standard fonts.", explanation: "The font used might not be recognized by older systems." },
          { type: "good", tip: "File type is PDF.", explanation: "PDF is generally good, but ensure it is text-selectable." }
        ],
      },
      toneAndStyle: {
        score: 60,
        tips: [
          { type: "improve", tip: "Passive voice overuse.", explanation: "Change 'Responsibilities included' to 'Managed' or 'Deployed'." },
          { type: "good", tip: "Professional summary included.", explanation: "Good intro, but could be more specific." }
        ],
      },
      content: {
        score: 50,
        tips: [
          { type: "improve", tip: "Lack of metrics.", explanation: "Add numbers to show impact (e.g., 'Reduced costs by 15%')." },
          { type: "improve", tip: "Vague job descriptions.", explanation: "Focus on achievements rather than duties." }
        ],
      },
      structure: {
        score: 70,
        tips: [
          { type: "good", tip: "Clear contact info.", explanation: "Email and LinkedIn are easy to find." },
          { type: "improve", tip: "Inconsistent dates.", explanation: "Ensure all dates follow the same format (e.g., MM/YYYY)." }
        ],
      },
      skills: {
        score: 55,
        tips: [
          { type: "improve", tip: "Outdated technologies.", explanation: "Remove mention of legacy tools unless relevant to the specific role." },
          { type: "good", tip: "Certifications listed.", explanation: "Azure certifications are a strong plus." }
        ],
      },
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume-3.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 80,
        tips: [
          { type: "good", tip: "Standard section headers.", explanation: "Computers can easily read 'Experience' and 'Education'." },
          { type: "improve", tip: "Remove graphics/icons.", explanation: "Icons can confuse some parsers." }
        ],
      },
      toneAndStyle: {
        score: 70,
        tips: [
          { type: "good", tip: "Technical depth.", explanation: "Demonstrates strong understanding of Swift and Obj-C." },
          { type: "improve", tip: "Be more confident.", explanation: "Remove qualifiers like 'helped with' or 'assisted'." }
        ],
      },
      content: {
        score: 80,
        tips: [
          { type: "good", tip: "Project links included.", explanation: "Links to App Store apps provide proof of work." },
          { type: "improve", tip: "Explain 'Why'.", explanation: "Don't just list features, explain the problem they solved." }
        ],
      },
      structure: {
        score: 65,
        tips: [
          { type: "improve", tip: "Reduce white space.", explanation: "The resume feels empty; adjust margins or add more content." },
          { type: "good", tip: "Logical flow.", explanation: "Education follows experience correctly for a professional." }
        ],
      },
      skills: {
        score: 80,
        tips: [
          { type: "good", tip: "Relevant mobile stack.", explanation: "SwiftUI, UIKit, and CoreData are key." },
          { type: "improve", tip: "Add CI/CD tools.", explanation: "Mention experience with Fastlane or Xcode Cloud." }
        ],
      },
    },
  },
  {
    id: "4",
    companyName: "Amazon",
    jobTitle: "Backend Engineer",
    imagePath: "/images/resume-1.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 82,
      ATS: {
        score: 85,
        tips: [
          { type: "good", tip: "Keyword rich.", explanation: "Strong alignment with backend terminology." },
          { type: "improve", tip: "Avoid tables.", explanation: "Tables detected in Skills section; layout using columns instead." }
        ],
      },
      toneAndStyle: {
        score: 80,
        tips: [
          { type: "good", tip: "Results-oriented.", explanation: "Clear focus on delivering scalable systems." },
          { type: "improve", tip: "Reduce jargon.", explanation: "Ensure non-technical recruiters can understand the impact." }
        ],
      },
      content: {
        score: 85,
        tips: [
          { type: "good", tip: "Scale mentioned.", explanation: "Mentions handling millions of requests/day." },
          { type: "good", tip: "System Design.", explanation: "Highlights experience with distributed systems." }
        ],
      },
      structure: {
        score: 80,
        tips: [
          { type: "good", tip: "Clear hierarchy.", explanation: "Roles are clearly distinguished." },
          { type: "improve", tip: "Length check.", explanation: "Keep it strictly to one page if less than 10 years exp." }
        ],
      },
      skills: {
        score: 85,
        tips: [
          { type: "good", tip: "Java/AWS focus.", explanation: "Perfect for Amazon stack." },
          { type: "good", tip: "Database knowledge.", explanation: "Strong DynamoDB and RDS skills listed." }
        ],
      },
    },
  },
  {
    id: "5",
    companyName: "Netflix",
    jobTitle: "Product Designer",
    imagePath: "/images/resume-2.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 92,
      ATS: {
        score: 88,
        tips: [
          { type: "good", tip: "Text-based content.", explanation: "Even for design, text is accessible." },
          { type: "improve", tip: "Link Portfolio.", explanation: "Make sure the portfolio link is clickable and evident." }
        ],
      },
      toneAndStyle: {
        score: 95,
        tips: [
          { type: "good", tip: "User-centric.", explanation: "Language focuses on user/customer outcomes." },
          { type: "good", tip: "Storytelling.", explanation: "Each role tells a story of problem-solving." }
        ],
      },
      content: {
        score: 90,
        tips: [
          { type: "good", tip: "Impact metrics.", explanation: "Showed increase in retention/engagement." },
          { type: "good", tip: "Tools expertise.", explanation: "Figma/Sketch proficiency clear." }
        ],
      },
      structure: {
        score: 90,
        tips: [
          { type: "good", tip: "Visual hierarchy.", explanation: "Excellent use of typography." },
          { type: "good", tip: "Clean layout.", explanation: "Reflects design capability." }
        ],
      },
      skills: {
        score: 95,
        tips: [
          { type: "good", tip: "Prototyping.", explanation: "Strong prototyping skills mentioned." },
          { type: "good", tip: "User Research.", explanation: "Experience with A/B testing is valuable." }
        ],
      },
    },
  },
  {
    id: "6",
    companyName: "Tesla",
    jobTitle: "Embedded Engineer",
    imagePath: "/images/resume-3.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 78,
      ATS: {
        score: 75,
        tips: [
          { type: "improve", tip: "Multi-column issues.", explanation: "Left column might be read last by some parsers." },
          { type: "good", tip: "Keyword matching.", explanation: "Includes 'C++', 'RTOS', 'Firmware'." }
        ],
      },
      toneAndStyle: {
        score: 80,
        tips: [
          { type: "good", tip: "Precise language.", explanation: "Avoids fluff, gets straight to technical details." },
          { type: "improve", tip: "Show passion.", explanation: "Sound a bit more excited about the innovation." }
        ],
      },
      content: {
        score: 80,
        tips: [
          { type: "good", tip: "Hardware/Software.", explanation: "Good balance of explaining HW/SW integration." },
          { type: "improve", tip: "Teamwork.", explanation: "Show more collaboration with mechanical teams." }
        ],
      },
      structure: {
        score: 75,
        tips: [
          { type: "improve", tip: "Dense text.", explanation: "Break up long paragraphs into bullets." },
          { type: "good", tip: "Section dividers.", explanation: "Clearly defined sections." }
        ],
      },
      skills: {
        score: 85,
        tips: [
          { type: "good", tip: "Low-level coding.", explanation: "Strong C/Assembly skills." },
          { type: "good", tip: "Safety standards.", explanation: "Knowledge of ISO 26262 is a huge plus." }
        ],
      },
    },
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;