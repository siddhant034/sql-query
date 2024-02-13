import React, { LegacyRef } from 'react';
import './styles.css'
import {QueryInput} from '../queryInput';
import {QueryOutput} from '../queryOutput';
import { QUERY } from '../../mocks';

const Editor = () => {
  const textAreaRef : (LegacyRef<HTMLTextAreaElement> | null) = React.useRef(null);
  const [query, updateQuery] = React.useState<QUERY | null>(null);

  const onQueryRun = () => {
    const queryText = textAreaRef.current?.value?.trim();
    switch(queryText?.toLowerCase()){
      case 'select * from customers;' : 
        updateQuery(QUERY.CUSTOMERS);
        break;  
      case 'select * from orders;' : 
        updateQuery(QUERY.ORDER);
        break;
      case 'select * from products;' : 
        updateQuery(QUERY.PRODUCTS);
        break;
      case 'select * from suppliers;' : 
        updateQuery(QUERY.SUPPLIERS);
        break;
      default:
        updateQuery(QUERY.INVALID);
    }
  };

  return (
    <div className='editor-container' role="region" aria-label="Sql editor">
      <div className='input-container'>
        <div className='text-area-container full-wh'><QueryInput textAreaRef={textAreaRef} aria-label="Query Input"/></div>
        <button className="btn-query" onClick={onQueryRun} aria-label="Run Query">Run Query</button>
      </div>
      <div className="output-container" aria-label="Query Output">
        <QueryOutput query={query}/>
      </div>
    </div>
  )
}

export default Editor;