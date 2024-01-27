'use client';

import { useState } from 'react';
import usePomo, { sessions, formatTime, Session } from './usePomo';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

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
      <div className="mx-auto flex w-full max-w-xl shadow-[0_4px_9px_-4px_#3b71ca]">
        {sessions.map((session) => {
          const isActive = activeSessionId === session.id;
          return (
            <Button
              key={session.id}
              type="button"
              className={clsx(
                'h-12 flex-1 rounded-none border border-input px-4 uppercase text-white',
                isActive
                  ? 'bg-sky-900 hover:bg-sky-900'
                  : 'bg-sky-600 hover:bg-sky-600/90 active:bg-sky-700',
              )}
              onClick={() => handleSessionButtonClick(session)}
            >
              {session.name}
            </Button>
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
      <div className="mx-auto flex w-full max-w-xl flex-wrap justify-center gap-x-4 sm:flex-nowrap">
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
