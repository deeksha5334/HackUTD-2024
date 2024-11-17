import React, { useState } from 'react';
import './goals.css';

function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, description: 'Learn React', completionDate: '2024-12-31', completed: false },
    { id: 2, description: 'Build a project', completionDate: '2024-06-30', completed: false }
  ]);
  
  const [editingGoal, setEditingGoal] = useState(null);
  const [newGoal, setNewGoal] = useState({ description: '', completionDate: '' });

  const handleAddGoal = () => {
    if (newGoal.description && newGoal.completionDate) {
      const goalToAdd = {
        id: goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1,
        ...newGoal,
        completed: false
      };
      setGoals([...goals, goalToAdd].sort((a, b) => new Date(a.completionDate) - new Date(b.completionDate)));
      setNewGoal({ description: '', completionDate: '' });
    }
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
  };

  const handleUpdateGoal = () => {
    setGoals(goals.map(g => 
      g.id === editingGoal.id ? editingGoal : g
    ).sort((a, b) => new Date(a.completionDate) - new Date(b.completionDate)));
    setEditingGoal(null);
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const handleMarkCompleted = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: true } : goal
    ));
  };

  return (
    <div className="goals">
      <h1 className="goalsTitle">Company Goals</h1>
      
      <div className="add-goal-form">
        <input
          type="text"
          placeholder="Goal"
          value={newGoal.description}
          onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
        />
        <input
          type="date"
          value={newGoal.completionDate}
          onChange={(e) => setNewGoal({...newGoal, completionDate: e.target.value})}
        />
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>

      <table className="goals-table">
        <thead>
          <tr>
            <th>Goal</th>
            <th>Expected Completion Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal) => (
            <tr 
              key={goal.id}
              style={{ backgroundColor: goal.completed ? '#90EE90' : '#ffff00' }}
            >
              <td>
                {editingGoal && editingGoal.id === goal.id ? (
                  <input
                    type="text"
                    value={editingGoal.description}
                    onChange={(e) => setEditingGoal({...editingGoal, description: e.target.value})}
                  />
                ) : (
                  goal.description
                )}
              </td>
              <td>
                {editingGoal && editingGoal.id === goal.id ? (
                  <input
                    type="date"
                    value={editingGoal.completionDate}
                    onChange={(e) => setEditingGoal({...editingGoal, completionDate: e.target.value})}
                  />
                ) : (
                  goal.completionDate
                )}
              </td>
              <td>
                {editingGoal && editingGoal.id === goal.id ? (
                  <>
                    <button onClick={handleUpdateGoal}>Save</button>
                    <button onClick={() => setEditingGoal(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditGoal(goal)}>Edit</button>
                    <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                    {!goal.completed && (
                      <button onClick={() => handleMarkCompleted(goal.id)}>Mark Completed</button>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Goals;