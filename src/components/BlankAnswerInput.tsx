import React from "react";
import keyword_extractor from "keyword-extractor"; // Import library for extracting keywords

type Props = {
  answer: string; // The original answer string
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>; // Function to update the answer with blanks
};

const blank = "_____"; // Placeholder text for blanks

const BlankAnswerInput = ({ answer, setBlankAnswer }: Props) => {
  // Extracts keywords from the answer and selects two random ones to replace with blanks
  const keywords = React.useMemo(() => {
    const words = keyword_extractor.extract(answer, {
      language: "english",
      remove_digits: true,
      return_changed_case: false,
      remove_duplicates: false,
    });
    // Shuffle the extracted words and pick the first two
    const shuffled = words.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [answer]); // Recomputes whenever the answer changes

  // Replace the selected keywords in the answer with blanks
  const answerWithBlanks = React.useMemo(() => {
    const answerWithBlanks = keywords.reduce((acc, curr) => {
      return acc.replaceAll(curr, blank); // Replace all occurrences of the keyword with the blank
    }, answer);
    setBlankAnswer(answerWithBlanks); // Update state with the modified answer
    return answerWithBlanks;
  }, [answer, keywords, setBlankAnswer]); // Recomputes when answer or keywords change

  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {/* Split the answerWithBlanks into parts and insert input fields in place of blanks */}
        {answerWithBlanks.split(blank).map((part, index) => {
          return (
            <React.Fragment key={index}>
              {part}
              {index === answerWithBlanks.split(blank).length - 1 ? (
                "" // Avoid inserting an input at the end
              ) : (
                <input
                  id="user-blank-input"
                  className="text-center border-b-2 border-black dark:border-white w-28 focus:border-2 focus:border-b-4 focus:outline-none"
                  type="text"
                />
              )}
            </React.Fragment>
          );
        })}
      </h1>
    </div>
  );
};

export default BlankAnswerInput;
