'use client';

import { useState } from 'react';
import usePomo, { sessions, formatTime, Session } from './usePomo';

export default function Timer() {
  const [activeSessionId, setActiveSessionId] = useState(0);
  const { timeLeft, onSessionChange, startTimer, stopTimer, resetTimer } =
    usePomo();

  const handleSessionButtonClick = (session: Session) => {
    if (activeSessionId === session.id) return;
    setActiveSessionId(session.id);
    onSessionChange(session);
  };

  return (
    <section>
      {/* Session Button Group */}
      <div className="mx-auto flex w-full max-w-lg shadow-[0_4px_9px_-4px_#3b71ca]">
        {sessions.map((session) => {
          const isActive = activeSessionId === session.id;
          return (
            <button
              key={session.id}
              type="button"
              className={
                (isActive
                  ? 'bg-primary-800 dark:bg-primary-700 '
                  : 'hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 bg-primary focus:outline-none focus:ring-0 ') +
                'border-primary-800 inline-block flex-1 border  px-4 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out'
              }
              onClick={() => handleSessionButtonClick(session)}
            >
              {session.name}
            </button>
          );
        })}
      </div>

      {/* Timer Face */}
      <div className="my-4">
        <div className="flex flex-col">
          <div className="mx-auto text-xl">
            {sessions[activeSessionId].minutes} mins
          </div>
          <div className="mx-auto text-[6rem] font-bold">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Timer Controls */}
      <div className="mx-auto flex w-full max-w-lg flex-wrap justify-center gap-x-4 sm:flex-nowrap">
        <button
          type="button"
          className="text-md bg-success hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block w-full rounded px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] sm:flex-1"
          onClick={() => startTimer()}
        >
          Start
        </button>
        <button
          type="button"
          className="text-md bg-danger hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-700 inline-block w-full rounded px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] sm:flex-1"
          onClick={() => stopTimer()}
        >
          Stop
        </button>
        <button
          type="button"
          className="text-md hover:bg-secondary-600 focus:bg-secondary-600 active:bg-secondary-700 inline-block w-full rounded bg-secondary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] sm:flex-1"
          onClick={() => resetTimer()}
        >
          Reset
        </button>
      </div>
    </section>
  );
}
