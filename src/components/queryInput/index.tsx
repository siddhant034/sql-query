import React, { LegacyRef } from "react";
import "./styles.css";

type QueryInputProps = {
  textAreaRef: LegacyRef<HTMLTextAreaElement> | null;
};

const QueryInput: React.FC<QueryInputProps> = ({
  textAreaRef,
}: QueryInputProps) => {
  return (
    <div className="center flex full-wh" role="textbox" aria-label="SQL Query Textbox">
      <textarea
        ref={textAreaRef}
        className="full-wh text-area"
        placeholder="type your sql query"
        aria-multiline="true"
        aria-placeholder="Type your SQL query"
        aria-label="SQL query textbox"
      />
    </div>
  );
};

export { QueryInput };
