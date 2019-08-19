import React, { useReducer } from 'react';
import SurveyContext from './SurveyContext';
import surveyReducer, { initialState, createFunction } from './surveyReducer';

export default function SurveyProvider({ children }) {
  const [surveyState, dispatch] = useReducer(surveyReducer, initialState);
  return (
    <SurveyContext.Provider
      value={{ ...surveyState, ...createFunction, dispatch }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
