import { useSelector } from 'react-redux';

import Schema from './Schema';
import SchemaInput from './SchemaInput';

import './App.css';

function App() {
  const schema = useSelector((state) => state.schema.schema);

  let schemaDisplay;
  if (schema) {
    schemaDisplay = <Schema schema={schema} />;
  } else {
    schemaDisplay = <SchemaInput />;
  }

  return (
    <div className="App">
      {schemaDisplay}
    </div>
  );
}

export default App;
