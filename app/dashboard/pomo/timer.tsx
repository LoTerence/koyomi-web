'use client';

import { useState } from 'react';
import usePomo, { sessions, formatTime, Session } from './usePomo';
import { Button } from '@/components/ui/button';

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
      <div className="my-4 flex flex-col">
        <div className="mx-auto text-xl">
          {sessions[activeSessionId].minutes} mins
        </div>
        <div className="mx-auto text-[6rem] font-bold">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Timer Controls */}
      <div className="mx-auto flex w-full max-w-lg flex-wrap justify-center gap-x-4 sm:flex-nowrap">
        <Button
          size="lg"
          className="w-full bg-green-600 text-xl text-white hover:bg-green-600/90 sm:flex-1"
          onClick={() => startTimer()}
        >
          START
        </Button>
        <Button
          size="lg"
          variant="destructive"
          className="w-full text-xl sm:flex-1"
          onClick={() => stopTimer()}
        >
          STOP
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="w-full text-xl sm:flex-1"
          onClick={() => resetTimer()}
        >
          RESET
        </Button>
      </div>
    </section>
  );
}
