// types.ts
interface Subject {
    id: number;
    name: string;
    progress: number;
    nextAssignment: string;
    dueDate: string;
  }
  
  interface Task {
    id: number;
    title: string;
    time: string;
    date: string;
  }
  
  // LearningDashboard.tsx
  import React, { useState } from 'react';
  import { Calendar, Clock, BookOpen, Users, Award, BarChart } from 'lucide-react';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  
  const LearningDashboard: React.FC = () => {
    const [subjects] = useState<Subject[]>([
      { id: 1, name: 'Mathematics', progress: 75, nextAssignment: 'Calculus Quiz', dueDate: '2025-02-22' },
      { id: 2, name: 'Physics', progress: 60, nextAssignment: 'Lab Report', dueDate: '2025-02-21' },
      { id: 3, name: 'Computer Science', progress: 85, nextAssignment: 'Programming Project', dueDate: '2025-02-25' }
    ]);
  
    const [upcomingTasks] = useState<Task[]>([
      { id: 1, title: 'Study Group - Physics', time: '3:00 PM', date: '2025-02-20' },
      { id: 2, title: 'Math Assignment Due', time: '11:59 PM', date: '2025-02-22' },
      { id: 3, title: 'CS Project Meeting', time: '4:30 PM', date: '2025-02-21' }
    ]);
  
    const handleStartStudySession = (): void => {
      // Implement study session logic
      console.log('Starting study session');
    };
  
    const handleCreateStudyGroup = (): void => {
      // Implement study group creation logic
      console.log('Creating study group');
    };
  
    const handleAddAssignment = (): void => {
      // Implement assignment creation logic
      console.log('Adding new assignment');
    };
  
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Learning Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Study Time Today</CardTitle>
              <Clock className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5 hours</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Weekly Goals</CardTitle>
              <Award className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">80% Complete</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Study Groups</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Groups</div>
            </CardContent>
          </Card>
        </div>
  
        {/* Subject Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Subject Progress</CardTitle>
                <BookOpen className="h-4 w-4 text-gray-500" />
              </div>
            </CardHeader>
            <CardContent>
              {subjects.map((subject: Subject) => (
                <div key={subject.id} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{subject.name}</span>
                    <span className="text-sm text-gray-500">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
  
          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Tasks</CardTitle>
                <Calendar className="h-4 w-4 text-gray-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task: Task) => (
                  <div key={task.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-500">{task.date} at {task.time}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={handleStartStudySession}
            className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Start Study Session
          </button>
          <button 
            onClick={handleCreateStudyGroup}
            className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Create Study Group
          </button>
          <button 
            onClick={handleAddAssignment}
            className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Add New Assignment
          </button>
        </div>
      </div>
    );
  };
  
  export default LearningDashboard;