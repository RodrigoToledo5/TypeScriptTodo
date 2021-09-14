import React, { useState } from 'react';
import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}


function App(): JSX.Element {
  const [task, setTask] = useState<string>('');
  const [tasklist, setTaskList] = useState<ITask[]>([])
  function handleSumit(event: FormElement) {
    event.preventDefault();
    addTask(task);
    setTask('')
  }
  const addTask = (name: string,done:boolean) => {
    const newTasks: ITask[] = [...tasklist, { name, done: false }]
    setTaskList(newTasks)
  }
  return (
    <div className="container p-4">
      <div className="row">
        <div className="card">
          <div className="col-md-6 offset-md-3">
            <div className="card-body">
              <form onSubmit={(event) => handleSumit(event)}>
                <input autoFocus className="form-control" type="text" onChange={event => setTask(event.target.value)} value={task} />
                <button className="btn btn-success btn-block mt-2">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        {
          tasklist.map((task: ITask, i: number) => {
            return (
              <div className="card card-body mt-2" key={i}>
                <h2>{task.name}</h2>
                <h2>{task.done}</h2>
              </div>
              )

          })
        }
      </div>
    </div>
  );
}

export default App;
