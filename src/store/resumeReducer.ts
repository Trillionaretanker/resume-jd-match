import type { ResumeAnalysisState, ResumeFile } from "../types/resume";

export type ResumeAction =
  | {
      type: "SET_RESUME";
      payload: ResumeFile;
    }
  | {
      type: "REMOVE_RESUME";
    }
  | {
      type: "SET_JOB_DESCRIPTION";
      payload: string;
    }
  | {
      type: "SET_STATUS";
      payload: ResumeAnalysisState["status"];
    }
  | {
      type: "SET_ERROR";
      payload: string | null;
    }
  | {
      type: "RESET";
    };

export const initialResumeState: ResumeAnalysisState = {
  resume: null,

  resumeText: "",

  jobDescription: "",

  status: "idle",

  analysis: {
    matchScore: null,
  },

  error: null,
};

export function resumeReducer(
  state: ResumeAnalysisState,
  action: ResumeAction
): ResumeAnalysisState {
  switch (action.type) {
    case "SET_RESUME":
      return {
        ...state,
        resume: action.payload,
      };

    case "REMOVE_RESUME":
      return {
        ...state,
        resume: null,
      };

    case "SET_JOB_DESCRIPTION":
      return {
        ...state,
        jobDescription: action.payload,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "RESET":
      return initialResumeState;

    default:
      return state;
  }
}